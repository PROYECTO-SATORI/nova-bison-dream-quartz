import { useNavigate } from "@tanstack/react-router";
import {
  Bell,
  Heart,
  MessageCircle,
  Search,
  ShieldCheck,
  User,
} from "lucide-react";
import { useMemo, useState } from "react";
import { AppShell, AvatarBubble, NavButton } from "@/components/app-shell";
import { PropertyCard } from "@/components/property-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Field, Input, NativeSelect } from "@/components/ui/input";
import { BARRIOS, CAMPUSES, HOUSING_TYPES, SERVICES } from "@/lib/data";
import { useHabita, type StudentTab } from "@/lib/store";
import { cn } from "@/lib/utils";

export function StudentApp() {
  const tab = useHabita((s) => s.studentTab);
  const setTab = useHabita((s) => s.setStudentTab);
  const favorites = useHabita((s) => s.favorites);
  const navigate = useNavigate();

  const nav: { id: StudentTab; label: string; icon: typeof Search }[] = [
    { id: "search", label: "Buscar", icon: Search },
    { id: "favorites", label: "Favoritos", icon: Heart },
    { id: "messages", label: "Mensajes", icon: MessageCircle },
    { id: "profile", label: "Mi perfil", icon: User },
  ];

  return (
    <AppShell
      subtitle="Pamplona · Estudiante"
      nav={nav.map((item) => (
        <NavButton key={item.id} active={tab === item.id} onClick={() => setTab(item.id)}>
          <span className="inline-flex items-center gap-2">
            <item.icon className="size-4" />
            {item.label}
            {item.id === "favorites" ? (
              <Badge variant="navy" className="px-1.5 py-0">
                {favorites.length}
              </Badge>
            ) : null}
          </span>
        </NavButton>
      ))}
      actions={
        <>
          <Button variant="ghost" size="icon" aria-label="Mensajes" onClick={() => setTab("messages")}>
            <Bell className="size-4" />
          </Button>
          <button type="button" onClick={() => navigate({ to: "/" })} aria-label="Cuenta">
            <AvatarBubble initials="MC" />
          </button>
        </>
      }
    >
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="mb-6 grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
            <AvatarBubble initials="MC" className="size-16 text-xl" />
            <div>
              <h1 className="font-display text-2xl">Hola, Mateo</h1>
              <p className="text-sm text-muted-foreground">Ingeniería de Sistemas · Universidad de Pamplona</p>
              <Badge variant="success" className="mt-2">
                <ShieldCheck className="mr-1 size-3" />
                Identidad verificada
              </Badge>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-secondary p-5">
            <div className="text-sm font-medium">Perfil listo para buscar</div>
            <p className="mt-1 text-xs text-muted-foreground">
              Correo y teléfono verificados. Ajusta preferencias para resultados más precisos.
            </p>
            <div className="mt-3 font-display text-3xl text-primary">100%</div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-card">
              <div className="h-full w-full rounded-full bg-success" />
            </div>
          </div>
        </div>
        {tab === "search" ? <SearchPanel /> : null}
        {tab === "favorites" ? <FavoritesPanel /> : null}
        {tab === "messages" ? <MessagesPanel /> : null}
        {tab === "profile" ? <ProfilePanel /> : null}
      </main>
    </AppShell>
  );
}

function SearchPanel() {
  const properties = useHabita((s) => s.properties);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("Todos");
  const [barrio, setBarrio] = useState("");
  const [avail, setAvail] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1200000);
  const [campus, setCampus] = useState("");
  const [sort, setSort] = useState("recommended");
  const [distance, setDistance] = useState(20);
  const [services, setServices] = useState<string[]>([]);

  const list = useMemo(() => {
    const q = query.toLowerCase().trim();
    let next = properties.filter((p) => {
      const hay = `${p.title} ${p.location} ${p.barrio} ${p.campusText}`.toLowerCase();
      return (
        (!q || hay.includes(q)) &&
        (type === "Todos" || p.type === type) &&
        (!barrio || p.barrio === barrio) &&
        (!avail || p.availability === avail) &&
        p.price >= min &&
        p.price <= max &&
        (distance >= 20 || p.distance <= distance) &&
        (!campus || p.campus === campus) &&
        services.every((s) => p.services.includes(s))
      );
    });
    if (sort === "priceAsc") next = [...next].sort((a, b) => a.price - b.price);
    if (sort === "priceDesc") next = [...next].sort((a, b) => b.price - a.price);
    if (sort === "distance") next = [...next].sort((a, b) => a.distance - b.distance);
    if (sort === "rating") next = [...next].sort((a, b) => b.rating - a.rating);
    return next;
  }, [properties, query, type, barrio, avail, min, max, campus, sort, distance, services]);

  function toggleService(value: string) {
    setServices((prev) => (prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]));
  }

  return (
    <div>
      <div className="mb-5">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">Búsqueda en Pamplona</p>
        <h2 className="font-display text-3xl">Encuentra tu próximo hogar</h2>
      </div>
      <div className="mb-6 rounded-xl border border-border bg-card p-5">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <Field label="¿Dónde quieres vivir?" className="lg:col-span-2">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Barrio, dirección o nombre del alojamiento"
            />
          </Field>
          <Field label="Tipo">
            <NativeSelect value={type} onChange={(e) => setType(e.target.value)}>
              {HOUSING_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </NativeSelect>
          </Field>
          <Field label="Barrio">
            <NativeSelect value={barrio} onChange={(e) => setBarrio(e.target.value)}>
              <option value="">Todos</option>
              {BARRIOS.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </NativeSelect>
          </Field>
          <Field label="Disponibilidad">
            <NativeSelect value={avail} onChange={(e) => setAvail(e.target.value)}>
              <option value="">Cualquiera</option>
              <option value="inmediata">Inmediata</option>
              <option value="semestre">Inicio de semestre</option>
            </NativeSelect>
          </Field>
          <Field label="Desde (COP)">
            <Input type="number" value={min} onChange={(e) => setMin(Number(e.target.value) || 0)} />
          </Field>
          <Field label="Hasta (COP)">
            <Input type="number" value={max} onChange={(e) => setMax(Number(e.target.value) || 0)} />
          </Field>
          <Field label="Sede">
            <NativeSelect value={campus} onChange={(e) => setCampus(e.target.value)}>
              <option value="">Cualquiera</option>
              {CAMPUSES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </NativeSelect>
          </Field>
          <Field label="Ordenar" className="lg:col-span-2">
            <NativeSelect value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="recommended">Recomendados</option>
              <option value="priceAsc">Precio menor</option>
              <option value="priceDesc">Precio mayor</option>
              <option value="distance">Más cerca</option>
              <option value="rating">Mejor calificación</option>
            </NativeSelect>
          </Field>
        </div>
        <div className="mt-4">
          <div className="mb-2 text-xs font-medium text-foreground">Servicios obligatorios</div>
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => toggleService(s)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium",
                  services.includes(s)
                    ? "border-primary bg-secondary text-secondary-foreground"
                    : "border-border bg-card text-muted-foreground",
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <div className="mb-2 text-xs font-medium text-foreground">Cercanía a pie</div>
          <div className="flex flex-wrap gap-2">
            {[
              { n: 20, label: "Cualquiera" },
              { n: 5, label: "≤ 5 min" },
              { n: 10, label: "≤ 10 min" },
              { n: 15, label: "≤ 15 min" },
            ].map((d) => (
              <button
                key={d.label}
                type="button"
                onClick={() => setDistance(d.n)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium",
                  distance === d.n
                    ? "border-primary bg-secondary text-secondary-foreground"
                    : "border-border bg-card text-muted-foreground",
                )}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-4 flex items-end justify-between">
        <h3 className="font-display text-2xl">Alojamientos disponibles</h3>
        <span className="text-sm text-muted-foreground">
          {list.length} resultado{list.length === 1 ? "" : "s"}
        </span>
      </div>
      {list.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border bg-card p-10 text-center">
          <h3 className="font-display text-xl">No hay alojamientos con esos filtros</h3>
          <p className="mt-2 text-sm text-muted-foreground">Amplía el presupuesto, la distancia o quita un servicio.</p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {list.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      )}
    </div>
  );
}

function FavoritesPanel() {
  const properties = useHabita((s) => s.properties);
  const favorites = useHabita((s) => s.favorites);
  const toggle = useHabita((s) => s.toggleFavorite);
  const list = properties.filter((p) => favorites.includes(p.id));

  return (
    <div>
      <h2 className="mb-4 font-display text-3xl">Favoritos</h2>
      {list.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground">
          Aún no tienes favoritos. Guarda un alojamiento desde la búsqueda.
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {list.map((p) => (
            <div key={p.id} className="grid">
              <PropertyCard property={p} />
              <Button variant="danger" className="mt-2" onClick={() => toggle(p.id)}>
                Quitar de favoritos
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MessagesPanel() {
  const chats = useHabita((s) => s.studentChats);
  const active = useHabita((s) => s.activeStudentChat);
  const setActive = useHabita((s) => s.setActiveStudentChat);
  const send = useHabita((s) => s.sendStudentMessage);
  const [draft, setDraft] = useState("");
  const current = chats.find((c) => c.id === active) ?? chats[0];

  return (
    <div>
      <h2 className="mb-4 font-display text-3xl">Mensajes</h2>
      <div className="grid overflow-hidden rounded-xl border border-border bg-card md:grid-cols-[18rem_1fr]">
        <div className="border-b border-border md:border-r md:border-b-0">
          {chats.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              className={cn(
                "flex w-full items-start gap-3 border-b border-border p-4 text-left last:border-0",
                c.id === current.id ? "bg-secondary" : "hover:bg-muted",
              )}
            >
              <AvatarBubble initials={c.name.slice(0, 1)} className="size-10" />
              <div className="min-w-0">
                <div className="truncate text-sm font-medium">{c.name}</div>
                <div className="truncate text-xs text-primary">{c.property}</div>
                <div className="truncate text-xs text-muted-foreground">
                  {c.messages[c.messages.length - 1]?.text}
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="flex min-h-[28rem] flex-col">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <div className="font-medium">{current.name}</div>
              <div className="text-xs text-primary">{current.property}</div>
            </div>
            <Badge variant="success">Verificado</Badge>
          </div>
          <div className="flex-1 space-y-3 overflow-auto bg-background p-4">
            {current.messages.map((m, i) => (
              <div
                key={`${m.time}-${i}`}
                className={cn(
                  "max-w-[75%] rounded-lg px-3 py-2 text-sm leading-relaxed",
                  m.from === "me"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "border border-border bg-card",
                )}
              >
                {m.text}
                <div className="mt-1 text-xs opacity-70">{m.time}</div>
              </div>
            ))}
          </div>
          <form
            className="flex gap-2 border-t border-border p-3"
            onSubmit={(e) => {
              e.preventDefault();
              if (!draft.trim()) return;
              send(draft.trim());
              setDraft("");
            }}
          >
            <Input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Escribe un mensaje..." />
            <Button type="submit" variant="cta">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ProfilePanel() {
  const [status, setStatus] = useState("");
  const [identity, setIdentity] = useState("Identidad verificada · documento registrado");
  const [quiet, setQuiet] = useState(true);
  const [smoke, setSmoke] = useState(true);

  return (
    <div>
      <h2 className="mb-4 font-display text-3xl">Perfil del estudiante</h2>
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-display text-xl">Información personal</h3>
            <Badge variant="success">Verificado</Badge>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Nombre completo">
              <Input defaultValue="Mateo Castro" />
            </Field>
            <Field label="Teléfono">
              <Input defaultValue="+57 300 555 0188" />
            </Field>
            <Field label="Correo">
              <Input defaultValue="mateo.castro@unipamplona.edu.co" disabled />
            </Field>
            <Field label="Universidad">
              <NativeSelect defaultValue="Universidad de Pamplona">
                <option>Universidad de Pamplona</option>
              </NativeSelect>
            </Field>
            <Field label="Carrera">
              <Input defaultValue="Ingeniería de Sistemas" />
            </Field>
            <Field label="Semestre">
              <NativeSelect defaultValue="6° semestre">
                <option>6° semestre</option>
                <option>7° semestre</option>
                <option>8° semestre</option>
              </NativeSelect>
            </Field>
          </div>
          <Button className="mt-4" onClick={() => setStatus("Cambios guardados en tu perfil.")}>
            Guardar cambios
          </Button>
          {status ? <p className="mt-2 text-sm text-success">{status}</p> : null}
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="mb-4 font-display text-xl">Preferencias de convivencia</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { on: quiet, set: setQuiet, title: "Ambiente tranquilo", copy: "Priorizar espacios de estudio" },
              { on: smoke, set: setSmoke, title: "No fumadores", copy: "Preferencia de vivienda" },
            ].map((c) => (
              <button
                key={c.title}
                type="button"
                onClick={() => c.set(!c.on)}
                className={cn(
                  "rounded-lg border p-3 text-left",
                  c.on ? "border-primary bg-secondary" : "border-border",
                )}
              >
                <div className="text-sm font-medium">{c.title}</div>
                <div className="text-xs text-muted-foreground">{c.copy}</div>
              </button>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-dashed border-border p-5 text-center">
            <div className="font-medium">Documento de identidad</div>
            <p className="mt-1 text-xs text-muted-foreground">Cédula · JPG, PNG o PDF. La carga es simulada.</p>
            <label className="mt-3 inline-flex">
              <input
                type="file"
                className="hidden"
                accept="image/*,.pdf"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) setIdentity(`Documento seleccionado: ${file.name}`);
                }}
              />
              <span className="inline-flex h-11 items-center rounded-md bg-secondary px-4 text-sm font-medium text-secondary-foreground">
                Seleccionar documento
              </span>
            </label>
            <p className="mt-2 text-xs font-medium text-success">{identity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
