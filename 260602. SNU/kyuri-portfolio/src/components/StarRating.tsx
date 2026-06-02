export function StarRating({ level, max = 5 }: { level: number; max?: number }) {
  return (
    <span className="inline-flex gap-0.5 text-sm" aria-label={`${level}점 만점에 ${max}점`}>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < level ? "text-accent" : "text-zinc-300"}>
          ★
        </span>
      ))}
    </span>
  );
}
