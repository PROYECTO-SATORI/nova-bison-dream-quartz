import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" className={cn("size-11", className)} aria-hidden="true">
      <rect width="50" height="50" rx="14" className="fill-primary" />
      <path
        d="M9 24.5 25 11l16 13.5v14.2c0 1.8-1.5 3.3-3.3 3.3H12.3C10.5 42 9 40.5 9 38.7Z"
        className="fill-primary-foreground"
      />
      <path
        d="M7.5 25.5 25 10.5l17.5 15-2.8 3.2L25 15.1 10.3 28.7Z"
        className="fill-primary-foreground"
      />
      <rect x="21" y="29" width="7" height="13" rx="1.5" className="fill-cta" />
    </svg>
  );
}

export function BrandMark({
  subtitle,
  inverted = false,
}: {
  subtitle?: string;
  inverted?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <Logo className={inverted ? "size-10" : "size-11"} />
      <div className="leading-tight">
        <div
          className={cn(
            "font-display text-xl font-semibold tracking-tight",
            inverted ? "text-navy-foreground" : "text-foreground",
          )}
        >
          Habita<span className={inverted ? "text-secondary" : "text-primary"}>U</span>
        </div>
        {subtitle ? (
          <div
            className={cn(
              "text-xs font-semibold tracking-widest uppercase",
              inverted ? "text-navy-foreground/70" : "text-muted-foreground",
            )}
          >
            {subtitle}
          </div>
        ) : null}
      </div>
    </div>
  );
}
