import { useNavigate } from "@tanstack/react-router";
import {
  Building2,
  CheckCircle2,
  GraduationCap,
  Lock,
  Mail,
  Search,
  Shield,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Photo } from "@/components/photo";
import { PropertyCard } from "@/components/property-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IMAGES, PROPERTIES, UNIVERSITIES } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { Role } from "@/lib/store";

const ROLES: { id: Role; title: string; copy: string; icon: typeof GraduationCap }[] = [
  {
    id: "student",
    title: "Soy estudiante",
    copy: "Busco habitación, apartaestudio o casa cerca de mi campus.",
    icon: GraduationCap,
  },
  {
    id: "owner",
    title: "Tengo inmueble",
    copy: "Publico y gestiono alojamientos, visitas y reservas.",
    icon: Building2,
  },
  {
    id: "admin",
    title: "Soy administrador",
    copy: "Modero usuarios, publicaciones, reportes y reseñas.",
    icon: Shield,
  },
];

export function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState<Role>("student");
  const [showPass, setShowPass] = useState(false);
  const featured = PROPERTIES.filter((p) => p.status === "available").slice(0, 3);

  function enter() {
    if (role === "owner") navigate({ to: "/owner" });
    else if (role === "admin") navigate({ to: "/admin" });
    else navigate({ to: "/student" });
  }

  return (
    <AppShell
      subtitle="Vivienda universitaria"
      nav={
        <>
          <a href="#login-card" className="rounded-md px-3 py-2 text-sm font-medium text-foreground">
            Entrar
          </a>
          <a href="#como-funciona" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            Cómo funciona
          </a>
          <a href="#alojamientos" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            Alojamientos
          </a>
        </>
      }
      actions={
        <Button size="sm" onClick={enter}>
          Iniciar sesión
        </Button>
      }
    >
      <section className="relative isolate min-h-[34rem] overflow-hidden">
        <Photo src={IMAGES.hero} alt="Calles coloniales de Pamplona al atardecer" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-linear-to-r from-ink/80 via-navy/55 to-navy/25" />
        <div className="relative mx-auto flex min-h-[34rem] max-w-7xl flex-col justify-end gap-6 px-6 py-16 text-navy-foreground">
          <Badge variant="navy" className="w-fit bg-card/15 text-navy-foreground">
            Pamplona, Norte de Santander
          </Badge>
          <h1 className="max-w-2xl font-display text-4xl leading-tight sm:text-6xl">
            Tu casa de estudiante, a minutos del campus.
          </h1>
          <p className="max-w-xl text-base text-navy-foreground/85 sm:text-lg">
            Habita U verifica arrendadores y publicaciones para que encuentres habitación,
            apartaestudio o casa con fotos reales, servicios claros y trato directo.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="cta" size="lg" onClick={enter}>
              <Search className="size-4" />
              Buscar alojamiento
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-navy-foreground/30 bg-card/10 text-navy-foreground hover:bg-card/20"
              onClick={() => {
                setRole("owner");
                document.getElementById("login-card")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Publicar inmueble
            </Button>
          </div>
        </div>
      </section>

      <section id="login-card" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">Cómo usarás Habita U hoy</p>
            <h2 className="mt-2 font-display text-3xl">Elige tu perfil y entra al panel.</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Es una demostración completa: estudiante, propietario y administrador. No se envían datos a un servidor.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {ROLES.map((item) => {
                const Icon = item.icon;
                const selected = role === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRole(item.id)}
                    className={cn(
                      "rounded-xl border p-4 text-left transition-[border-color,background-color,box-shadow] duration-150",
                      selected
                        ? "border-primary bg-secondary shadow-sm"
                        : "border-border bg-card hover:border-primary/40",
                    )}
                  >
                    <Icon className="mb-3 size-5 text-primary" />
                    <div className="font-medium text-foreground">{item.title}</div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.copy}</p>
                  </button>
                );
              })}
            </div>
            <div className="mt-6 flex gap-4 rounded-xl border border-border bg-success-soft/60 p-4">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" />
              <div>
                <div className="font-medium text-foreground">Identidad verificada para Colombia</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Comprobamos arrendadores y convenios universitarios en Pamplona. Las fotos de esta demo son interiores y calles de un pueblo andino colonial.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
            <div className="mb-5 flex rounded-full bg-muted p-1">
              {ROLES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setRole(item.id)}
                  className={cn(
                    "flex-1 rounded-full px-2 py-2 text-xs font-medium sm:text-sm",
                    role === item.id ? "bg-card text-primary shadow-sm" : "text-muted-foreground",
                  )}
                >
                  {item.title.replace("Soy ", "").replace("Tengo ", "")}
                </button>
              ))}
            </div>
            <div className="grid gap-4">
              <label className="grid gap-1.5 text-sm font-medium">
                Correo institucional o personal
                <div className="relative">
                  <Mail className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    className="pl-10"
                    defaultValue={
                      role === "admin"
                        ? "admin@habitau.co"
                        : role === "owner"
                          ? "carlos@habitau.co"
                          : "mateo.castro@unipamplona.edu.co"
                    }
                    key={role}
                  />
                </div>
              </label>
              <label className="grid gap-1.5 text-sm font-medium">
                Contraseña
                <div className="relative">
                  <Lock className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    className="pr-20 pl-10"
                    type={showPass ? "text" : "password"}
                    defaultValue="HabitaSeguro2026"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-xs font-medium text-primary"
                    onClick={() => setShowPass((v) => !v)}
                  >
                    {showPass ? "Ocultar" : "Ver"}
                  </button>
                </div>
              </label>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="size-4 accent-primary" defaultChecked />
                  Recordar en este dispositivo
                </label>
                <span className="flex items-center gap-1 text-success">
                  <Lock className="size-3.5" /> SSL
                </span>
              </div>
              <Button size="lg" className="w-full" onClick={enter}>
                Entrar al panel
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Demo local. Cualquier contraseña funciona; el perfil lo define el rol elegido.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="border-y border-border bg-card py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          {[
            {
              icon: Search,
              title: "Filtra con precisión",
              copy: "Barrio, presupuesto, servicios, distancia a pie y sede de la Universidad de Pamplona.",
            },
            {
              icon: Sparkles,
              title: "Mira el inmueble de verdad",
              copy: "Galerías de interiores, patio, cocina y fachada. Sin recuadros grises ni fotos de stock genéricas.",
            },
            {
              icon: Shield,
              title: "Habla y reserva",
              copy: "Mensajes, visita y reserva pendientes de aprobación. El administrador modera reportes y reseñas.",
            },
          ].map((step) => (
            <div key={step.title} className="grid gap-3">
              <div className="grid size-11 place-items-center rounded-lg bg-secondary text-primary">
                <step.icon className="size-5" />
              </div>
              <h3 className="font-display text-2xl">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="alojamientos" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">Destacados en Pamplona</p>
            <h2 className="mt-1 font-display text-3xl">Alojamientos con fotos reales</h2>
          </div>
          <Button variant="outline" onClick={enter}>
            Ver todos
          </Button>
        </div>
        <div className="grid gap-5 md:grid-cols-3">{featured.map((p) => <PropertyCard key={p.id} property={p} />)}</div>
        <div className="mt-10">
          <p className="mb-3 text-center text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            Comunidades estudiantiles
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {UNIVERSITIES.map((u) => (
              <Badge key={u} variant="default">
                {u}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
