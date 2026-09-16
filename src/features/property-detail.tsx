import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Flag, Heart, MapPin, MessageCircle, Star } from "lucide-react";
import { useState } from "react";
import { AppShell, AvatarBubble } from "@/components/app-shell";
import { Photo } from "@/components/photo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Field, Input, NativeSelect, Textarea } from "@/components/ui/input";
import { IMAGES } from "@/lib/data";
import { useHabita } from "@/lib/store";
import { cn, formatCop } from "@/lib/utils";

export function PropertyDetail({ id }: { id: string }) {
  const property = useHabita((s) => s.properties.find((p) => p.id === id));
  const favorites = useHabita((s) => s.favorites);
  const toggleFavorite = useHabita((s) => s.toggleFavorite);
  const setStudentTab = useHabita((s) => s.setStudentTab);
  const addReview = useHabita((s) => s.addReview);
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(0);
  const [visitOpen, setVisitOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [stars, setStars] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [flash, setFlash] = useState("");

  if (!property) {
    return (
      <AppShell subtitle="Alojamiento">
        <main className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h1 className="font-display text-3xl">No encontramos este inmueble</h1>
          <Button asChild className="mt-6">
            <Link to="/student">Volver a la búsqueda</Link>
          </Button>
        </main>
      </AppShell>
    );
  }

  const loved = favorites.includes(property.id);

  return (
    <AppShell
      subtitle="Alojamiento · Pamplona"
      nav={
        <Button variant="ghost" asChild>
          <Link to="/student">
            <ArrowLeft className="size-4" /> Volver a buscar
          </Link>
        </Button>
      }
      actions={<AvatarBubble initials="MC" />}
    >
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <button
          type="button"
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary"
          onClick={() => navigate({ to: "/student" })}
        >
          <ArrowLeft className="size-4" /> Volver a resultados
        </button>
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="overflow-hidden rounded-xl border border-border bg-card p-2">
              <Photo
                src={property.images[photo] ?? property.images[0]}
                alt={property.title}
                className="h-[22rem] rounded-lg sm:h-[28rem]"
              />
              <div className="mt-2 flex gap-2 overflow-auto">
                {property.images.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    onClick={() => setPhoto(i)}
                    className={cn(
                      "h-16 w-24 shrink-0 overflow-hidden rounded-md border-2",
                      i === photo ? "border-primary" : "border-transparent",
                    )}
                  >
                    <Photo src={src} alt="" className="h-full w-full" />
                  </button>
                ))}
              </div>
            </div>
            <section className="mt-5 rounded-xl border border-border bg-card p-5">
              <h2 className="font-display text-xl">Descripción</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{property.description}</p>
            </section>
            <section className="mt-5 rounded-xl border border-border bg-card p-5">
              <h2 className="font-display text-xl">Servicios incluidos</h2>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {property.services.map((s) => (
                  <div key={s} className="rounded-md bg-muted px-3 py-2 text-sm">
                    <div className="font-medium">{s}</div>
                    <div className="text-xs text-muted-foreground">Incluido en el canon</div>
                  </div>
                ))}
              </div>
            </section>
            <section className="mt-5 rounded-xl border border-border bg-card p-5">
              <h2 className="font-display text-xl">Reglas de la vivienda</h2>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {property.rules.map((r) => (
                  <div key={r} className="rounded-md bg-muted px-3 py-2 text-sm">
                    {r}
                  </div>
                ))}
              </div>
            </section>
            <section className="mt-5 overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative h-52">
                <Photo src={IMAGES.hero} alt="Entorno de Pamplona" className="h-full w-full" />
                <div className="absolute inset-0 bg-navy/25" />
                <div className="absolute bottom-4 left-4 rounded-full bg-card px-3 py-2 text-sm font-medium shadow-sm">
                  <MapPin className="mr-1 inline size-3.5 text-primary" />
                  {property.barrio}, Pamplona
                </div>
              </div>
              <p className="p-4 text-sm text-muted-foreground">
                {property.descDistance} · {property.campusText}
              </p>
            </section>
            <section className="mt-5 rounded-xl border border-border bg-card p-5">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="font-display text-xl">Reseñas</h2>
                <span className="text-sm font-medium text-warning">
                  <Star className="mr-1 inline size-3.5 fill-warning" />
                  {property.rating.toFixed(2)}
                </span>
              </div>
              <div className="divide-y divide-border">
                {property.reviews.map((r) => (
                  <div key={r.author + r.text} className="py-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{r.author}</span>
                      <span className="text-warning">{"★".repeat(r.stars)}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
                  </div>
                ))}
              </div>
              <Button variant="secondary" className="mt-3" onClick={() => setReviewOpen(true)}>
                Dejar una reseña
              </Button>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex flex-wrap gap-2">
                <Badge>{property.type}</Badge>
                <Badge variant={property.availability === "inmediata" ? "success" : "warning"}>
                  {property.availability === "inmediata" ? "Disponibilidad inmediata" : "Inicio de semestre"}
                </Badge>
              </div>
              <h1 className="mt-3 font-display text-3xl leading-tight">{property.title}</h1>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-3.5" /> {property.location}
              </p>
              <p className="mt-2 text-sm font-medium text-warning">
                <Star className="mr-1 inline size-3.5 fill-warning" />
                {property.rating.toFixed(2)} ({property.reviewsCount} reseñas)
              </p>
              <div className="mt-5 flex items-end justify-between rounded-lg bg-muted p-4">
                <div>
                  <div className="text-xs text-muted-foreground">Canon mensual</div>
                  <div className="font-display text-3xl text-primary tabular-nums">{formatCop(property.price)}</div>
                  <div className="text-xs text-muted-foreground">{property.deposit}</div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {property.highlights.map((h) => (
                  <Badge key={h} variant="outline">
                    {h}
                  </Badge>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3 rounded-lg border border-border p-3">
                <AvatarBubble initials={property.owner.slice(0, 1)} />
                <div className="min-w-0">
                  <div className="truncate font-medium">{property.owner}</div>
                  <div className="text-xs text-success">Arrendador verificado</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{property.ownerInfo}</p>
              <div className="mt-5 grid gap-2">
                <Button
                  variant="cta"
                  onClick={() => {
                    setStudentTab("messages");
                    navigate({ to: "/student" });
                  }}
                >
                  <MessageCircle className="size-4" /> Contactar
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="secondary" onClick={() => setVisitOpen(true)}>
                    Solicitar visita
                  </Button>
                  <Button onClick={() => setReserveOpen(true)}>Reservar</Button>
                </div>
                <Button variant={loved ? "cta" : "outline"} onClick={() => toggleFavorite(property.id)}>
                  <Heart className={cn("size-4", loved && "fill-cta-foreground")} />
                  {loved ? "Guardado" : "Guardar"}
                </Button>
                <Button variant="danger" onClick={() => setReportOpen(true)}>
                  <Flag className="size-4" /> Reportar publicación
                </Button>
              </div>
              {flash ? <p className="mt-3 text-sm text-success">{flash}</p> : null}
            </div>
          </aside>
        </div>
      </main>

      <Dialog open={visitOpen} onOpenChange={setVisitOpen}>
        <DialogContent title="Solicitar visita" description="Elige fecha y horario para conocer el inmueble.">
          <div className="grid gap-3">
            <Field label="Fecha">
              <Input type="date" defaultValue={isoPlus(1)} />
            </Field>
            <Field label="Horario">
              <NativeSelect defaultValue="4:00 p. m.">
                <option>8:00 a. m.</option>
                <option>10:00 a. m.</option>
                <option>2:00 p. m.</option>
                <option>4:00 p. m.</option>
              </NativeSelect>
            </Field>
            <Field label="Mensaje">
              <Textarea defaultValue="Hola, me gustaría conocer el inmueble y confirmar las condiciones de arriendo." />
            </Field>
            <Button
              onClick={() => {
                setVisitOpen(false);
                setFlash("Solicitud de visita enviada al arrendador.");
              }}
            >
              Enviar solicitud
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={reserveOpen} onOpenChange={setReserveOpen}>
        <DialogContent title="Solicitar reserva" description="Queda pendiente de aprobación del arrendador.">
          <div className="grid gap-3">
            <Field label="Fecha de inicio">
              <Input type="date" defaultValue={isoPlus(7)} />
            </Field>
            <Field label="Duración">
              <NativeSelect>
                <option>1 semestre</option>
                <option>6 meses</option>
                <option>12 meses</option>
              </NativeSelect>
            </Field>
            <Field label="Mensaje">
              <Textarea defaultValue="Hola, deseo solicitar la reserva de este alojamiento para el próximo semestre." />
            </Field>
            <Button
              variant="cta"
              onClick={() => {
                setReserveOpen(false);
                setFlash("Reserva enviada. Estado: pendiente de aprobación.");
              }}
            >
              Enviar reserva
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={reviewOpen} onOpenChange={setReviewOpen}>
        <DialogContent title="Califica tu experiencia" description="Comparte cómo fue habitar este inmueble.">
          <div className="grid gap-3">
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setStars(n)}
                  className={cn("text-2xl", n <= stars ? "text-warning" : "text-border")}
                  aria-label={`${n} estrellas`}
                >
                  ★
                </button>
              ))}
            </div>
            <Textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Estado de la vivienda, servicios y trato del arrendador..."
            />
            <Button
              onClick={() => {
                if (!stars || !reviewText.trim()) return;
                addReview(property.id, { author: "Mateo C.", stars, text: reviewText.trim() });
                setReviewOpen(false);
                setFlash("Reseña registrada para moderación.");
                setReviewText("");
                setStars(0);
              }}
            >
              Publicar reseña
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={reportOpen} onOpenChange={setReportOpen}>
        <DialogContent title="Reportar publicación" description="Ayúdanos a detectar precios falsos o fotos engañosas.">
          <div className="grid gap-3">
            <Field label="Motivo">
              <NativeSelect>
                <option>Información o precio falso</option>
                <option>Fotos engañosas</option>
                <option>El inmueble no existe</option>
                <option>Comportamiento sospechoso</option>
                <option>Otro</option>
              </NativeSelect>
            </Field>
            <Field label="Descripción">
              <Textarea placeholder="Describe lo ocurrido..." />
            </Field>
            <Button
              variant="cta"
              onClick={() => {
                setReportOpen(false);
                setFlash("Reporte enviado al equipo de moderación.");
              }}
            >
              Enviar reporte
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </AppShell>
  );
}

function isoPlus(days: number) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}
