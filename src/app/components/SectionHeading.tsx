import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <ScrollReveal
      className={`max-w-2xl mb-16 md:mb-20 ${isCenter ? "text-center mx-auto" : "text-left"}`}
    >
      <p className="text-blue-electric text-xs tracking-[0.3em] uppercase font-medium mb-4">
        {subtitle}
      </p>
      <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-text-primary font-semibold leading-[1.05] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-text-secondary text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
      <div className={`mt-6 ${isCenter ? "flex justify-center" : ""}`}>
        <span className="line-slash" />
      </div>
    </ScrollReveal>
  );
}
