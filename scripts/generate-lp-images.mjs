/**
 * Generate LP portfolio and hero images via Gemini, upload to MinIO S3
 * Run: node scripts/generate-lp-images.mjs
 */

import https from "https";
import http from "http";
import crypto from "crypto";
import { writeFileSync, readFileSync } from "fs";
import { tmpdir } from "os";
import path from "path";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "AIzaSyBq6gT9S-cIryyPEq29MXoc-Jkp3w_YB34";
const S3_ENDPOINT = "s3.zenova.id";
const S3_ACCESS_KEY = "minioadmin";
const S3_SECRET_KEY = "zcminio2026";
const S3_BUCKET = "ads";

const IMAGES = [
  {
    name: "mandala.jpg",
    path: "monty-ink/lp-portfolio/mandala.jpg",
    prompt: "Close-up photograph of an intricate mandala tattoo on forearm skin, dark moody photography with deep shadows, single blue LED accent light from the left, wet ink sheen, ultra-detailed sacred geometry pattern, bokeh background, no face, professional tattoo portfolio shot, cinematic 4K quality"
  },
  {
    name: "fineline.jpg",
    path: "monty-ink/lp-portfolio/fineline.jpg",
    prompt: "Close-up photograph of a delicate fine line tattoo with botanical flowers and thin geometric lines on shoulder skin, dark studio photography, subtle blue backlight, ultra-thin ink lines, minimalist elegant design, no face, professional tattoo portfolio photography, cinematic quality"
  },
  {
    name: "realism.jpg",
    path: "monty-ink/lp-portfolio/realism.jpg",
    prompt: "Close-up photograph of a hyper-realistic portrait tattoo in black and grey on upper arm, dark moody studio lighting, blue LED rim light, photo-perfect shading and detail, professional tattoo photography, no face visible, cinematic quality, ultra HD"
  },
  {
    name: "japanese.jpg",
    path: "monty-ink/lp-portfolio/japanese.jpg",
    prompt: "Close-up photograph of a traditional Japanese irezumi tattoo showing koi fish and cherry blossoms on forearm, dark moody photography, blue accent lighting, bold black outlines with detailed shading, traditional Tebori inspired design, no face, professional tattoo studio shot"
  },
  {
    name: "geometric.jpg",
    path: "monty-ink/lp-portfolio/geometric.jpg",
    prompt: "Close-up photograph of a precise geometric tattoo with sacred geometry hexagons and dotwork on forearm skin, dark photography, blue LED accent, ultra-precise linework and dot patterns, mathematical precision, no face, professional tattoo portfolio photography, cinematic"
  },
  {
    name: "blackwork.jpg",
    path: "monty-ink/lp-portfolio/blackwork.jpg",
    prompt: "Close-up photograph of a bold blackwork tattoo with heavy black ink tribal patterns and negative space on upper arm, dark dramatic studio photography, blue rim lighting, powerful contrast, ultra-detailed blackwork style, no face, professional tattoo photography"
  },
  {
    name: "hero.jpg",
    path: "monty-ink/lp-hero/hero-studio.jpg",
    prompt: "Atmospheric tattoo studio photograph: close-up of gloved tattoo artist hands applying fresh ink to client's forearm, dark moody studio with blue LED accent lights in background, tattoo machine visible, artistic bokeh background showing studio equipment, no faces visible, cinematic documentary photography, premium tattoo studio atmosphere, Bali aesthetic"
  }
];

function httpsRequest(options, body = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: Buffer.concat(chunks)
        });
      });
    });
    req.on("error", reject);
    if (body) req.write(body);
    req.end();
  });
}

async function generateImage(prompt) {
  console.log("  Generating image via Imagen 4...");
  const body = JSON.stringify({
    instances: [{ prompt }],
    parameters: { sampleCount: 1, aspectRatio: "3:4" }
  });

  const res = await httpsRequest({
    hostname: "generativelanguage.googleapis.com",
    path: `/v1beta/models/imagen-4.0-fast-generate-001:predict?key=${GEMINI_API_KEY}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body)
    }
  }, body);

  if (res.statusCode !== 200) {
    throw new Error(`Imagen API error ${res.statusCode}: ${res.body.toString().slice(0, 500)}`);
  }

  const data = JSON.parse(res.body.toString());
  const prediction = data.predictions?.[0];
  if (!prediction?.bytesBase64Encoded) {
    // Try gemini-2.5-flash-image as fallback
    console.log("  Falling back to gemini-2.5-flash-image...");
    return await generateImageGemini(prompt);
  }
  return Buffer.from(prediction.bytesBase64Encoded, "base64");
}

async function generateImageGemini(prompt) {
  const body = JSON.stringify({
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: { responseModalities: ["IMAGE", "TEXT"] }
  });

  const res = await httpsRequest({
    hostname: "generativelanguage.googleapis.com",
    path: `/v1beta/models/gemini-2.5-flash-image:generateContent?key=${GEMINI_API_KEY}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body)
    }
  }, body);

  if (res.statusCode !== 200) {
    throw new Error(`Gemini image error ${res.statusCode}: ${res.body.toString().slice(0, 500)}`);
  }

  const data = JSON.parse(res.body.toString());
  const parts = data.candidates?.[0]?.content?.parts || [];
  const imagePart = parts.find(p => p.inlineData);
  if (!imagePart) {
    throw new Error("No image in Gemini response: " + JSON.stringify(data).slice(0, 300));
  }
  return Buffer.from(imagePart.inlineData.data, "base64");
}

function hmacSha256(key, data) {
  return crypto.createHmac("sha256", key).update(data).digest();
}

function sha256(data) {
  return crypto.createHash("sha256").update(data).digest("hex");
}

async function uploadToS3(key, imageBuffer) {
  const now = new Date();
  const dateStamp = now.toISOString().slice(0, 10).replace(/-/g, "");
  const amzDate = now.toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";
  const region = "us-east-1"; // MinIO default
  const service = "s3";

  const contentType = "image/jpeg";
  const payloadHash = sha256(imageBuffer);

  const canonicalHeaders = [
    `content-type:${contentType}`,
    `host:${S3_ENDPOINT}`,
    `x-amz-content-sha256:${payloadHash}`,
    `x-amz-date:${amzDate}`
  ].join("\n") + "\n";
  const signedHeaders = "content-type;host;x-amz-content-sha256;x-amz-date";

  const canonicalRequest = [
    "PUT",
    `/${S3_BUCKET}/${key}`,
    "",
    canonicalHeaders,
    signedHeaders,
    payloadHash
  ].join("\n");

  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  const stringToSign = [
    "AWS4-HMAC-SHA256",
    amzDate,
    credentialScope,
    sha256(canonicalRequest)
  ].join("\n");

  const kDate = hmacSha256("AWS4" + S3_SECRET_KEY, dateStamp);
  const kRegion = hmacSha256(kDate, region);
  const kService = hmacSha256(kRegion, service);
  const kSigning = hmacSha256(kService, "aws4_request");
  const signature = crypto.createHmac("sha256", kSigning).update(stringToSign).digest("hex");

  const authorization = `AWS4-HMAC-SHA256 Credential=${S3_ACCESS_KEY}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

  const res = await httpsRequest({
    hostname: S3_ENDPOINT,
    path: `/${S3_BUCKET}/${key}`,
    method: "PUT",
    headers: {
      "Content-Type": contentType,
      "Content-Length": imageBuffer.length,
      "x-amz-content-sha256": payloadHash,
      "x-amz-date": amzDate,
      "Authorization": authorization
    }
  }, imageBuffer);

  if (res.statusCode !== 200) {
    throw new Error(`S3 upload error ${res.statusCode}: ${res.body.toString().slice(0, 300)}`);
  }
  return `https://${S3_ENDPOINT}/${S3_BUCKET}/${key}`;
}

async function main() {
  console.log("Starting image generation and upload...\n");

  for (const img of IMAGES) {
    console.log(`Processing: ${img.name}`);
    try {
      const buffer = await generateImage(img.prompt);
      console.log(`  Generated: ${buffer.length} bytes`);

      const url = await uploadToS3(img.path, buffer);
      console.log(`  Uploaded: ${url}`);
      console.log();
    } catch (err) {
      console.error(`  ERROR: ${err.message}`);
      console.log();
    }
    // Small delay between requests
    await new Promise(r => setTimeout(r, 1500));
  }

  console.log("Done!");
}

main().catch(console.error);
