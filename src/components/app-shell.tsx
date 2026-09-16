import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { BrandMark } from "@/components/logo";
import { cn } from "@/lib/utils";

export function AppShell({
  subtitle,
  nav,
  actions,
  children,
  footer,
  darkFooter = true,
}: {
  subtitle: string;
  nav?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  darkFooter?: boolean;
}) {
  return (
    <div className="min-h-svh bg-background">
      <header className="sticky top-0 z-30 border-b border-border/80 bg-card/90 backdrop-blur-md">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="shrink-0">
            <BrandMark subtitle={subtitle} />
          </Link>
          {nav ? <nav className="hidden items-center gap-1 md:flex">{nav}</nav> : null}
          <div className="flex items-center gap-2">{actions}</div>
        </div>
        {nav ? <nav className="flex gap-1 overflow-auto px-4 pb-3 md:hidden">{nav}</nav> : null}
      </header>
      {children}
      <footer
        className={cn(
          "mt-10",
          darkFooter ? "bg-navy text-navy-foreground" : "border-t border-border bg-card text-muted-foreground",
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          {footer ?? (
            <>
              <span>Habita U · Vivienda universitaria en Pamplona</span>
              <span>Busca · Compara · Contacta · Reserva</span>
              <span>Soporte · Privacidad</span>
            </>
          )}
        </div>
      </footer>
    </div>
  );
}

export function NavButton({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150",
        active ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

export function AvatarBubble({
  initials,
  className,
}: {
  initials: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid size-10 place-items-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground",
        className,
      )}
    >
      {initials}
    </div>
  );
}
