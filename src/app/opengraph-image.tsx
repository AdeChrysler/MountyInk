import { ImageResponse } from "next/og";

export const alt = "Mounty Ink — Premium Tattoo Studio · Bali";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #000 0%, #0A0F1A 50%, #1A3A6B 100%)",
          color: "#F5F5F7",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 600, letterSpacing: -2 }}>
          Mounty Ink
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#2E7BFF",
            marginTop: 16,
            letterSpacing: 8,
            textTransform: "uppercase" as const,
          }}
        >
          Premium Tattoo Studio · Bali
        </div>
      </div>
    ),
    { ...size }
  );
}
