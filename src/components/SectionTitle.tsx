type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "inverse";
};

export function SectionTitle({
  children,
  className = "",
  id,
  variant = "default",
}: SectionTitleProps) {
  const isInverse = variant === "inverse";
  return (
    <h2
      id={id}
      className={`font-serif text-xl font-semibold tracking-tight ${isInverse ? "text-white" : "text-primary"} ${className}`}
    >
      {children}
      <span
        className={`mt-3 block h-px w-12 ${isInverse ? "bg-white/90" : "bg-accent"}`}
        aria-hidden
      />
    </h2>
  );
}
