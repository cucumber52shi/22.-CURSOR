type LogoProps = {
  className?: string;
  showText?: boolean;
  textClassName?: string;
};

export function Logo({ className = "", showText = true, textClassName = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M16 4C11 4 8 8 8 12c0 3 1.5 5 3 6.5L16 28l5-9.5c1.5-1.5 3-3.5 3-6.5 0-4-3-8-8-8z"
          fill="currentColor"
          className="text-accent"
        />
        <path
          d="M16 10c-2.5 0-4 2-4 4.5 0 1.2.5 2.2 1.2 3L16 22l2.8-4.5c.7-.8 1.2-1.8 1.2-3C20 12 18.5 10 16 10z"
          fill="white"
          opacity="0.9"
        />
      </svg>
      {showText && (
        <span className={`text-xl font-extrabold tracking-tight text-accent ${textClassName}`}>
          Kyuri
        </span>
      )}
    </div>
  );
}
