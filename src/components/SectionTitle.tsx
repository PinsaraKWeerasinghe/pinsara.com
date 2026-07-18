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
    <div className={`group relative ${className}`}>
      <h2
        id={id}
        className={`font-heading text-2xl font-bold tracking-tight md:text-3xl ${
          isInverse ? "text-white" : "text-primary"
        }`}
      >
        {children}
      </h2>
      <span
        className={`mt-3.5 block h-[3px] w-16 rounded-full transition-all duration-300 group-hover:w-28 ${
          isInverse
            ? "bg-gradient-to-r from-white via-white/50 to-transparent"
            : "bg-gradient-to-r from-primary via-accent to-transparent"
        }`}
        aria-hidden
      />
    </div>
  );
}
