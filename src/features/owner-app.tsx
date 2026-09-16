import { useNavigate } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  BadgeCheck,
  Building2,
  CalendarDays,
  Home,
  LayoutDashboard,
  MessageCircle,
  Plus,
  ShieldCheck,
  User,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { AvatarBubble } from "@/components/app-shell";
import { Logo } from "@/components/logo";
import { Photo } from "@/components/photo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Field, Input, NativeSelect, Textarea } from "@/components/ui/input";
import { BARRIOS, CAMPUSES, HOUSING_TYPES, IMAGES, INCOME_SERIES, SERVICES } from "@/lib/data";
import { useHabita, type OwnerTab } from "@/lib/store";
import { cn, formatCompact, formatCop } from "@/lib/utils";
import type { Property } from "@/lib/data";

const NAV: { id: OwnerTab; label: string; icon: typeof Home }[] = [
  { id: "overview", label: "Panel", icon: LayoutDashboard },
  { id: "properties", label: "Inmuebles", icon: Building2 },
  { id: "publish", label: "Publicar", icon: Plus },
  { id: "requests", label: "Solicitudes", icon: CalendarDays },
  { id: "messages", label: "Mensajes", icon: MessageCircle },
  { id: "profile", label: "Perfil", icon: User },
  { id: "identity", label: "Verificación", icon: ShieldCheck },
];

export function OwnerApp() {
  const tab = useHabita((s) => s.ownerTab);
  const setTab = useHabita((s) => s.setOwnerTab);
  const properties = useHabita((s) => s.properties);
  const mine = properties.filter((p) => p.ownerId === "carlos");
  const requests = useHabita((s) => s.requests);
  const handled = useHabita((s) => s.handledRequests);
  const pending = requests.filter((r) => !handled[r.id]).length;
  const navigate = useNavigate();

  return (
    <div className="min-h-svh bg-background">
      <header className="sticky top-0 z-30 border-b border-border bg-card/90 backdrop-blur-md md:hidden">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Logo className="size-9" />
            <span className="font-display text-lg">HabitaU</span>
          </div>
          <button type="button" onClick={() => navigate({ to: "/" })}>
            <AvatarBubble initials="CM" />
          </button>
        </div>
        <div className="flex gap-1 overflow-auto px-3 pb-3">
          {NAV.map((item) => (
            <Button
              key={item.id}
              size="sm"
              variant={tab === item.id ? "default" : "outline"}
              onClick={() => setTab(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </header>

      <div className="mx-auto grid max-w-[90rem] gap-6 px-4 py-6 lg:grid-cols-[15rem_minmax(0,1fr)]">
        <aside className="sticky top-6 hidden h-[calc(100svh-3rem)] flex-col rounded-xl bg-navy p-4 text-navy-foreground md:flex">
          <div className="mb-6 flex items-center gap-2 px-1">
            <Logo className="size-9" />
            <div>
              <div className="text-sm font-semibold">HabitaU</div>
              <div className="text-xs text-navy-foreground/70">Panel de propietario</div>
            </div>
          </div>
          <div className="mb-4 flex items-center gap-2 px-1">
            <AvatarBubble initials="CM" className="size-9 bg-secondary text-secondary-foreground" />
            <div>
              <div className="text-xs font-medium">Carlos Martínez</div>
              <div className="text-xs text-success">Arrendador verificado</div>
            </div>
          </div>
          <nav className="grid gap-1">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-2.5 text-left text-sm font-medium",
                  tab === item.id ? "bg-primary text-primary-foreground" : "text-navy-foreground/80 hover:bg-primary/40",
                )}
              >
                <item.icon className="size-4" />
                <span className="flex-1">{item.label}</span>
                {item.id === "properties" ? <Badge variant="navy">{mine.length}</Badge> : null}
                {item.id === "requests" && pending > 0 ? <Badge variant="navy">{pending}</Badge> : null}
              </button>
            ))}
          </nav>
          <div className="mt-auto rounded-lg bg-card/10 p-3 text-xs">
            <div className="font-medium">¿Necesitas ayuda?</div>
            <p className="mt-1 text-navy-foreground/70">Soporte de Habita U para propietarios.</p>
            <Button size="sm" variant="secondary" className="mt-3 w-full" onClick={() => navigate({ to: "/" })}>
              Salir al inicio
            </Button>
          </div>
        </aside>

        <div className="min-w-0">
          {tab === "overview" ? <Overview mineCount={mine.length} pending={pending} /> : null}
          {tab === "properties" ? <PropertiesPanel /> : null}
          {tab === "publish" ? <PublishPanel /> : null}
          {tab === "requests" ? <RequestsPanel /> : null}
          {tab === "messages" ? <OwnerMessages /> : null}
          {tab === "profile" ? <OwnerProfile /> : null}
          {tab === "identity" ? <OwnerIdentity /> : null}
        </div>
      </div>
    </div>
  );
}

function Overview({ mineCount, pending }: { mineCount: number; pending: number }) {
  const setTab = useHabita((s) => s.setOwnerTab);
  return (
    <div>
      <section className="relative isolate overflow-hidden rounded-xl">
        <Photo src={IMAGES.hero} alt="" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative flex min-h-64 flex-col justify-end gap-4 p-6 text-navy-foreground sm:p-8">
          <p className="text-xs font-semibold tracking-widest uppercase">Panel del arrendador · Pamplona</p>
          <h1 className="font-display text-4xl">Hola, Carlos</h1>
          <p className="max-w-xl text-sm text-navy-foreground/85">
            Administra inmuebles, atiende solicitudes y conversa con estudiantes desde un solo lugar.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button variant="cta" onClick={() => setTab("publish")}>
              Publicar inmueble
            </Button>
            <Button
              variant="outline"
              className="border-navy-foreground/30 bg-card/10 text-navy-foreground"
              onClick={() => setTab("requests")}
            >
              Ver solicitudes ({pending})
            </Button>
          </div>
        </div>
      </section>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Ingresos del mes", value: "$2.450.000", hint: "+12% vs. mes anterior" },
          { label: "Inmuebles publicados", value: String(mineCount), hint: "Disponibles, reservados y arrendados" },
          { label: "Vistas este mes", value: "1.326", hint: "+18% esta semana" },
          { label: "Consultas recibidas", value: "27", hint: "8 pendientes de respuesta" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-4">
            <div className="text-xs text-muted-foreground">{s.label}</div>
            <div className="mt-1 font-display text-2xl tabular-nums">{s.value}</div>
            <div className="mt-1 text-xs text-success">{s.hint}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="font-display text-xl">Ingresos de los últimos 6 meses</h2>
          <p className="mb-4 text-xs text-muted-foreground">Millones de COP</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={INCOME_SERIES}>
                <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip formatter={(value) => [`$${value}M`, "Ingresos"]} />
                <Bar dataKey="value" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="font-display text-xl">Para hacer hoy</h2>
          <div className="mt-3 grid gap-3">
            {(
              [
                { title: `${pending} solicitudes`, copy: "Revisa visitas y reservas.", go: "requests" },
                { title: "Mensajes pendientes", copy: "Hay estudiantes esperando respuesta.", go: "messages" },
                { title: "Perfil al 90%", copy: "Completa los datos restantes.", go: "profile" },
              ] as const
            ).map((t) => (
              <div key={t.title} className="flex items-center justify-between gap-3 border-b border-border py-3 last:border-0">
                <div>
                  <div className="text-sm font-medium">{t.title}</div>
                  <div className="text-xs text-muted-foreground">{t.copy}</div>
                </div>
                <Button size="sm" variant="secondary" onClick={() => setTab(t.go)}>
                  Ir
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PropertiesPanel() {
  const properties = useHabita((s) => s.properties.filter((p) => p.ownerId === "carlos"));
  const setEditing = useHabita((s) => s.setEditingProperty);
  const remove = useHabita((s) => s.removeOwnerProperty);
  const [availId, setAvailId] = useState<string | null>(null);

  return (
    <div>
      <div className="mb-5 flex items-end justify-between">
        <div>
          <h1 className="font-display text-3xl">Mis inmuebles</h1>
          <p className="text-sm text-muted-foreground">Edita publicaciones y cambia su disponibilidad.</p>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {properties.map((p) => (
          <article key={p.id} className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="relative">
              <Photo src={p.images[0]} alt={p.title} className="h-44 w-full" />
              <Badge
                className="absolute top-3 left-3"
                variant={p.status === "available" ? "success" : p.status === "reserved" ? "warning" : "outline"}
              >
                {statusLabel(p.status)}
              </Badge>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.barrio} · Pamplona</p>
                </div>
                <div className="text-right font-medium text-primary tabular-nums">{formatCop(p.price)}</div>
              </div>
              <div className="mt-3 flex gap-4 border-y border-border py-3 text-xs text-muted-foreground">
                <span>{formatCompact(p.views)} vistas</span>
                <span>{p.saved} guardados</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button size="sm" variant="outline" onClick={() => setEditing(p.id)}>
                  Editar
                </Button>
                <Button size="sm" variant="secondary" onClick={() => setAvailId(p.id)}>
                  Disponibilidad
                </Button>
                <Button size="sm" variant="danger" onClick={() => remove(p.id)}>
                  Eliminar
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <AvailabilityDialog id={availId} onClose={() => setAvailId(null)} />
    </div>
  );
}

function AvailabilityDialog({ id, onClose }: { id: string | null; onClose: () => void }) {
  const property = useHabita((s) => s.properties.find((p) => p.id === id));
  const update = useHabita((s) => s.updatePropertyStatus);

  return (
    <Dialog open={Boolean(id)} onOpenChange={(open) => !open && onClose()}>
      <DialogContent title="Cambiar disponibilidad" description="El estado que verán los estudiantes.">
        {property ? (
          <form
            className="grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const value = String(new FormData(e.currentTarget).get("status")) as Property["status"];
              update(property.id, value);
              onClose();
            }}
          >
            <div className="flex gap-3 rounded-lg bg-muted p-3">
              <Photo src={property.images[0]} alt="" className="h-16 w-20 rounded-md" />
              <div>
                <div className="text-sm font-medium">{property.title}</div>
                <div className="text-xs text-muted-foreground">{property.barrio}</div>
              </div>
            </div>
            <Field label="Nuevo estado">
              <NativeSelect name="status" defaultValue={property.status} key={property.id}>
                <option value="available">Disponible</option>
                <option value="reserved">Reservado</option>
                <option value="rented">Arrendado</option>
                <option value="closed">No disponible</option>
              </NativeSelect>
            </Field>
            <Button variant="cta" type="submit">
              Guardar cambios
            </Button>
          </form>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

function PublishPanel() {
  const editingId = useHabita((s) => s.editingPropertyId);
  const properties = useHabita((s) => s.properties);
  const add = useHabita((s) => s.addProperty);
  const update = useHabita((s) => s.updateProperty);
  const setTab = useHabita((s) => s.setOwnerTab);
  const setEditing = useHabita((s) => s.setEditingProperty);
  const current = properties.find((p) => p.id === editingId);
  const [status, setStatus] = useState("");
  const [previews, setPreviews] = useState<string[]>(current?.images ?? []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const patch = {
      type: String(form.get("type")) as Property["type"],
      price: Number(form.get("price")),
      deposit: String(form.get("deposit")),
      barrio: String(form.get("barrio")),
      title: current?.title ?? `${form.get("type")} en ${form.get("barrio")}`,
      description: String(form.get("description")),
    };
    if (current) {
      update(current.id, patch);
      setStatus("Inmueble actualizado.");
    } else {
      add({
        id: `p${Date.now()}`,
        type: patch.type,
        price: patch.price,
        barrio: patch.barrio,
        availability: "inmediata",
        distance: Number(form.get("distance")) || 8,
        campus: String(form.get("campus")),
        title: patch.title,
        location: `${patch.barrio} · Pamplona, Norte de Santander`,
        rating: 5,
        reviewsCount: 0,
        owner: "Carlos Martínez",
        ownerInfo: "Arrendador verificado en Pamplona.",
        deposit: patch.deposit,
        description: patch.description || "Nueva publicación de alojamiento universitario.",
        services: SERVICES.filter((s) => form.get(s)),
        highlights: ["Recién publicado"],
        rules: ["Visitas: sí", "Fumar: no"],
        images: previews.length ? previews : [IMAGES.facade, IMAGES.suite, IMAGES.kitchen],
        descDistance: `${form.get("distance") || 8} min a pie`,
        campusText: String(form.get("campus")),
        rooms: 1,
        baths: 1,
        views: 0,
        saved: 0,
        ownerId: "carlos",
        status: "available",
        reviews: [],
      });
      setStatus("Inmueble publicado.");
    }
    window.setTimeout(() => {
      setEditing(null);
      setTab("properties");
    }, 700);
  }

  return (
    <form className="max-w-3xl rounded-xl border border-border bg-card p-6" onSubmit={onSubmit}>
      <h1 className="font-display text-3xl">{current ? "Editar inmueble" : "Publicar inmueble"}</h1>
      <p className="mt-1 text-sm text-muted-foreground">Información visible para estudiantes.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Field label="Tipo de oferta">
          <NativeSelect name="type" defaultValue={current?.type}>
            {HOUSING_TYPES.filter((t) => t !== "Todos").map((t) => (
              <option key={t}>{t}</option>
            ))}
          </NativeSelect>
        </Field>
        <Field label="Canon mensual (COP)">
          <Input name="price" type="number" required defaultValue={current?.price} placeholder="500000" />
        </Field>
        <Field label="Depósito">
          <Input name="deposit" defaultValue={current?.deposit} placeholder="Sin depósito" />
        </Field>
        <Field label="Barrio">
          <NativeSelect name="barrio" defaultValue={current?.barrio}>
            {BARRIOS.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </NativeSelect>
        </Field>
        <Field label="Sede cercana">
          <NativeSelect name="campus" defaultValue={current?.campus}>
            {CAMPUSES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </NativeSelect>
        </Field>
        <Field label="Minutos a pie">
          <Input name="distance" type="number" defaultValue={current?.distance ?? 8} />
        </Field>
      </div>
      <div className="mt-4">
        <div className="mb-2 text-sm font-medium">Servicios incluidos</div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {SERVICES.map((s) => (
            <label key={s} className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm">
              <input type="checkbox" name={s} defaultChecked={current?.services.includes(s)} className="accent-primary" />
              {s}
            </label>
          ))}
        </div>
      </div>
      <Field label="Descripción" className="mt-4">
        <Textarea name="description" rows={4} defaultValue={current?.description} />
      </Field>
      <Field label="Fotos" className="mt-4">
        <Input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => {
            const files = [...(e.target.files ?? [])].slice(0, 10);
            void Promise.all(
              files.map(
                (f) =>
                  new Promise<string>((resolve) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(String(reader.result));
                    reader.readAsDataURL(f);
                  }),
              ),
            ).then(setPreviews);
          }}
        />
      </Field>
      {previews.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {previews.map((src) => (
            <Photo key={src.slice(0, 48)} src={src} alt="" className="h-16 w-20 rounded-md" />
          ))}
        </div>
      ) : null}
      <div className="mt-5 flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={() => setTab("properties")}>
          Cancelar
        </Button>
        <Button variant="cta" type="submit">
          {current ? "Guardar cambios" : "Publicar inmueble"}
        </Button>
      </div>
      {status ? <p className="mt-3 text-sm text-success">{status}</p> : null}
    </form>
  );
}

function RequestsPanel() {
  const requests = useHabita((s) => s.requests);
  const handled = useHabita((s) => s.handledRequests);
  const handle = useHabita((s) => s.handleRequest);
  const setTab = useHabita((s) => s.setOwnerTab);
  const setChat = useHabita((s) => s.setActiveOwnerChat);

  return (
    <div>
      <h1 className="mb-4 font-display text-3xl">Solicitudes</h1>
      <div className="grid gap-3">
        {requests.map((r) => (
          <article key={r.id} className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center">
            <AvatarBubble initials={r.initials} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-medium">{r.name}</h3>
                <Badge variant="success">Verificado</Badge>
                <Badge variant={r.type === "visit" ? "default" : "warning"}>
                  {r.type === "visit" ? "Visita" : "Reserva"}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{r.program}</p>
              <p className="mt-1 text-sm">
                <span className="font-medium">{r.property}</span> · {r.detail}
              </p>
              <p className="text-xs text-muted-foreground">{r.when}</p>
            </div>
            {handled[r.id] ? (
              <span className="text-sm font-medium text-success">{handled[r.id]}</span>
            ) : (
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant="success"
                  onClick={() => handle(r.id, r.type === "visit" ? "Visita aprobada" : "Reserva aprobada")}
                >
                  Aprobar
                </Button>
                <Button size="sm" variant="danger" onClick={() => handle(r.id, "Solicitud rechazada")}>
                  Rechazar
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => {
                    setChat(r.name);
                    setTab("messages");
                  }}
                >
                  Chat
                </Button>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

function OwnerMessages() {
  const chats = useHabita((s) => s.ownerChats);
  const active = useHabita((s) => s.activeOwnerChat);
  const setActive = useHabita((s) => s.setActiveOwnerChat);
  const send = useHabita((s) => s.sendOwnerMessage);
  const [draft, setDraft] = useState("");
  const current = chats.find((c) => c.id === active) ?? chats[0];

  return (
    <div>
      <h1 className="mb-4 font-display text-3xl">Mensajes</h1>
      <div className="grid min-h-[28rem] overflow-hidden rounded-xl border border-border bg-card md:grid-cols-[16rem_1fr]">
        <div className="border-b border-border md:border-r md:border-b-0">
          {chats.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              className={cn("block w-full p-4 text-left", c.id === current.id ? "bg-secondary" : "hover:bg-muted")}
            >
              <div className="text-sm font-medium">{c.name}</div>
              <div className="text-xs text-muted-foreground">{c.property}</div>
            </button>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="border-b border-border px-4 py-3">
            <div className="font-medium">{current.name}</div>
            <div className="text-xs text-muted-foreground">{current.property}</div>
          </div>
          <div className="flex-1 space-y-2 bg-background p-4">
            {current.messages.map((m, i) => (
              <div
                key={`${m.text}-${i}`}
                className={cn(
                  "max-w-[75%] rounded-lg px-3 py-2 text-sm",
                  m.from === "me" ? "ml-auto bg-primary text-primary-foreground" : "border border-border bg-card",
                )}
              >
                {m.text}
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
            <Input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Escribe una respuesta..." />
            <Button type="submit">Enviar</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

function OwnerProfile() {
  const [ok, setOk] = useState("");
  return (
    <div className="max-w-3xl">
      <h1 className="font-display text-3xl">Mi perfil de arrendador</h1>
      <div className="mt-4 flex items-center gap-4 rounded-xl border border-border bg-card p-5">
        <AvatarBubble initials="C" className="size-16 bg-primary text-xl text-primary-foreground" />
        <div>
          <div className="flex items-center gap-2 font-display text-2xl">
            Carlos Martínez <BadgeCheck className="size-5 text-success" />
          </div>
          <p className="text-sm text-muted-foreground">Arrendador en Pamplona · Miembro desde 2024</p>
        </div>
      </div>
      <div className="mt-4 grid gap-3 rounded-xl border border-border bg-card p-5 sm:grid-cols-2">
        <Field label="Nombre">
          <Input defaultValue="Carlos Martínez" />
        </Field>
        <Field label="Correo">
          <Input defaultValue="carlos@habitau.co" />
        </Field>
        <Field label="Teléfono">
          <Input defaultValue="+57 300 555 0198" />
        </Field>
        <Field label="Ciudad">
          <Input defaultValue="Pamplona, Norte de Santander" />
        </Field>
        <Field label="Descripción" className="sm:col-span-2">
          <Textarea defaultValue="Arrendador local con experiencia ofreciendo alojamiento a estudiantes." />
        </Field>
        <Button className="w-fit sm:col-span-2" variant="cta" onClick={() => setOk("Perfil actualizado.")}>
          Guardar cambios
        </Button>
        {ok ? <p className="text-sm text-success">{ok}</p> : null}
      </div>
    </div>
  );
}

function OwnerIdentity() {
  const [msg, setMsg] = useState("Documento actual verificado.");
  return (
    <div className="max-w-3xl">
      <h1 className="font-display text-3xl">Verificación de identidad</h1>
      <div className="mt-4 rounded-xl border border-border bg-card p-5">
        <div className="flex items-center gap-3">
          <ShieldCheck className="size-8 text-success" />
          <div>
            <div className="font-display text-2xl">Identidad verificada</div>
            <p className="text-sm text-muted-foreground">Documento, correo y teléfono confirmados.</p>
          </div>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {["Correo y teléfono", "Documento de identidad", "Perfil básico"].map((step, i) => (
            <div key={step} className="rounded-lg bg-success-soft p-3 text-sm">
              <div className="text-xs text-success">Paso {i + 1}</div>
              <div className="font-medium">{step}</div>
            </div>
          ))}
        </div>
        <label className="mt-5 block rounded-lg border border-dashed border-border p-4 text-sm">
          Actualizar documento
          <Input
            className="mt-2"
            type="file"
            accept="image/*,.pdf"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setMsg(`Documento seleccionado: ${file.name}`);
            }}
          />
          <p className="mt-2 text-success">{msg}</p>
        </label>
      </div>
    </div>
  );
}

function statusLabel(status: string) {
  if (status === "available") return "Disponible";
  if (status === "reserved") return "Reservado";
  if (status === "rented") return "Arrendado";
  return "No disponible";
}
