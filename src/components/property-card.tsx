import { Link } from "@tanstack/react-router";
import { Heart, MapPin, Star, Footprints } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/photo";
import type { Property } from "@/lib/data";
import { useHabita } from "@/lib/store";
import { cn, formatCop } from "@/lib/utils";

export function PropertyCard({ property }: { property: Property }) {
  const favorites = useHabita((s) => s.favorites);
  const toggleFavorite = useHabita((s) => s.toggleFavorite);
  const loved = favorites.includes(property.id);

  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative">
        <Photo
          src={property.images[0]}
          alt={property.title}
          className="h-52 w-full"
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
        <button
          type="button"
          aria-label={loved ? "Quitar de favoritos" : "Guardar en favoritos"}
          onClick={() => toggleFavorite(property.id)}
          className={cn(
            "absolute top-3 right-3 grid size-10 place-items-center rounded-full bg-card/95 shadow-sm transition-colors duration-150",
            loved ? "text-cta" : "text-muted-foreground hover:text-cta",
          )}
        >
          <Heart className={cn("size-4", loved && "fill-cta")} />
        </button>
        <div className="absolute bottom-3 left-3 flex gap-2">
          <Badge variant={property.availability === "inmediata" ? "success" : "warning"}>
            {property.availability === "inmediata" ? "Disponible ahora" : "Inicio de semestre"}
          </Badge>
        </div>
      </div>
      <div className="grid gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg leading-snug text-foreground">{property.title}</h3>
        </div>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-3.5 shrink-0" />
          {property.location}
        </p>
        <div className="flex items-center justify-between gap-3">
          <div className="font-display text-xl text-primary tabular-nums">
            {formatCop(property.price)}
            <span className="ml-1 font-sans text-xs font-medium text-muted-foreground">/ mes</span>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-warning">
            <Star className="size-3.5 fill-warning" />
            {property.rating.toFixed(2)}
            <span className="font-normal text-muted-foreground">({property.reviewsCount})</span>
          </div>
        </div>
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Footprints className="size-3.5" />
          {property.distance} min a pie · {property.campus}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {property.services.slice(0, 3).map((s) => (
            <Badge key={s} variant="outline">
              {s}
            </Badge>
          ))}
          <Badge variant="success">Verificado</Badge>
        </div>
        <Button asChild className="mt-1 w-full">
          <Link to="/student/$id" params={{ id: property.id }}>
            Ver alojamiento
          </Link>
        </Button>
      </div>
    </article>
  );
}
