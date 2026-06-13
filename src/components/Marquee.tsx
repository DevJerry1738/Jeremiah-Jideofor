export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-hairline py-8">
      <div className="flex whitespace-nowrap marquee">
        {doubled.map((item, i) => (
          <span key={i} className="display-md text-muted-foreground/70 mx-10 inline-flex items-center gap-10">
            {item}
            <span className="text-primary text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
