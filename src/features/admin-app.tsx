import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell, AvatarBubble, NavButton } from "@/components/app-shell";
import { Photo } from "@/components/photo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IMAGES } from "@/lib/data";
import { useHabita, type AdminTab } from "@/lib/store";
import { cn } from "@/lib/utils";

const TABS: { id: AdminTab; label: string }[] = [
  { id: "overview", label: "Estadísticas" },
  { id: "users", label: "Usuarios" },
  { id: "owners", label: "Verificaciones" },
  { id: "listings", label: "Publicaciones" },
  { id: "reports", label: "Reportes" },
  { id: "reviews", label: "Reseñas" },
];

type ListingMod = {
  id: string;
  title: string;
  meta: string;
  photo: string;
  owner: string;
  status: "pending" | "publicada" | "rechazada";
};

type OwnerMod = { id: string; name: string; initials: string; detail: string; doc: string; status: "pending" | "aprobado" | "rechazado" };
type ReportMod = { id: string; title: string; by: string; reason: string; detail: string; priority: "high" | "medium"; status: "open" | "closed" };
type ReviewMod = { id: string; name: string; place: string; stars: number; text: string; flag: string; status: "pending" | "publicada" | "ocultada" };

export function AdminApp() {
  const tab = useHabita((s) => s.adminTab);
  const setTab = useHabita((s) => s.setAdminTab);
  const navigate = useNavigate();
  const [owners, setOwners] = useState<OwnerMod[]>([
    { id: "o1", name: "Julián Torres", initials: "JT", detail: "Propietario · Pamplona · registrado hoy", doc: "CC_1098765432.jpg", status: "pending" },
    { id: "o2", name: "Ana Pérez", initials: "AP", detail: "Propietaria · El Carmen · ayer", doc: "cedula_ana_perez.pdf", status: "pending" },
    { id: "o3", name: "Diego Ramírez", initials: "DR", detail: "Propietario · Centro · hace 2 días", doc: "documento_diego.jpg", status: "pending" },
  ]);
  const [listings, setListings] = useState<ListingMod[]>([
    { id: "l1", title: "Habitación suite amoblada", meta: "El Carmen · $480.000/mes", photo: IMAGES.suite, owner: "Carlos Martínez", status: "pending" },
    { id: "l2", title: "Apartaestudio independiente", meta: "Centro · $620.000/mes", photo: IMAGES.studio, owner: "Ana Pérez", status: "pending" },
    { id: "l3", title: "Casa familiar cerca al centro", meta: "Santa Marta · $1.150.000/mes", photo: IMAGES.facade, owner: "Diego Ramírez", status: "pending" },
  ]);
  const [reports, setReports] = useState<ReportMod[]>([
    { id: "rp1", title: "Apartaestudio Centro · $620.000", by: "Mateo Ríos", reason: "Fotos engañosas", detail: "Las fotografías parecen de otro inmueble.", priority: "high", status: "open" },
    { id: "rp2", title: "Habitación El Carmen · $350.000", by: "Valentina Gómez", reason: "Precio falso", detail: "El canon del anuncio no coincide con el valor pedido.", priority: "medium", status: "open" },
    { id: "rp3", title: "Casa Santa Marta · $900.000", by: "Andrés Pérez", reason: "El inmueble no existe", detail: "No se pudo verificar la dirección.", priority: "high", status: "open" },
  ]);
  const [reviews, setReviews] = useState<ReviewMod[]>([
    { id: "rv1", name: "Laura Méndez", place: "Habitación premium · Santa Marta", stars: 5, text: "El alojamiento coincide con las fotos y el arrendador respondió rápido.", flag: "Sin palabras ofensivas", status: "pending" },
    { id: "rv2", name: "Andrés Pérez", place: "Apartaestudio Centro", stars: 2, text: "El servicio fue distinto a lo anunciado. Solicito revisión de la publicación.", flag: "Reportado por el propietario", status: "pending" },
    { id: "rv3", name: "Valentina Gómez", place: "Habitación El Carmen", stars: 4, text: "Buena ubicación. El espacio estaba limpio, aunque el Wi-Fi podría mejorar.", flag: "Comentario de estancia", status: "pending" },
  ]);
  const [userQuery, setUserQuery] = useState("");
  const [userFlash, setUserFlash] = useState<Record<string, string>>({});

  const users = [
    { id: "u1", name: "Valentina Gómez", mail: "valentina@unipamplona.edu.co", role: "Estudiante", state: "Activo", date: "18 sep 2026" },
    { id: "u2", name: "Carlos Martínez", mail: "carlos@habitau.co", role: "Propietario", state: "Verificado", date: "03 mar 2024" },
    { id: "u3", name: "Julián Torres", mail: "julian@example.com", role: "Propietario", state: "Pendiente", date: "18 sep 2026" },
    { id: "u4", name: "Mateo Ríos", mail: "mateo@unipamplona.edu.co", role: "Estudiante", state: "Activo", date: "11 sep 2026" },
  ].filter((u) => `${u.name} ${u.mail} ${u.role}`.toLowerCase().includes(userQuery.toLowerCase()));

  return (
    <AppShell
      subtitle="Panel · Administrador"
      nav={TABS.map((t) => (
        <NavButton key={t.id} active={tab === t.id} onClick={() => setTab(t.id)}>
          {t.label}
        </NavButton>
      ))}
      actions={
        <button type="button" onClick={() => navigate({ to: "/" })}>
          <AvatarBubble initials="AD" />
        </button>
      }
    >
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">Centro de administración</p>
            <h1 className="font-display text-3xl">Panel de control</h1>
            <p className="text-sm text-muted-foreground">Supervisa Habita U en Pamplona y mantén la plataforma segura.</p>
          </div>
          <Badge variant="success">Sistema operativo</Badge>
        </div>
        <div className="mb-6 flex gap-2 overflow-auto rounded-xl border border-border bg-card p-2">
          {TABS.map((t) => (
            <Button key={t.id} size="sm" variant={tab === t.id ? "default" : "ghost"} onClick={() => setTab(t.id)}>
              {t.label}
            </Button>
          ))}
        </div>

        {tab === "overview" ? (
          <div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "Usuarios registrados", value: "1.284", hint: "+14,8% este mes" },
                { label: "Inmuebles activos", value: "386", hint: "42 nuevos este mes" },
                { label: "Propietarios verificados", value: "247", hint: "96,4% del total" },
                { label: "Reportes abiertos", value: String(reports.filter((r) => r.status === "open").length), hint: "Requieren revisión" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card p-4">
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                  <div className="mt-1 font-display text-3xl tabular-nums">{s.value}</div>
                  <div className="mt-1 text-xs text-success">{s.hint}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5">
                <h2 className="font-display text-xl">Actividad reciente</h2>
                {[
                  ["09:12", "Nuevo propietario registrado", "Julián Torres · pendiente de identidad"],
                  ["08:47", "Publicación enviada a moderación", "Apartamento Centro · $850.000"],
                  ["08:21", "Reporte recibido", "Fotos engañosas · Apartaestudio El Carmen"],
                  ["07:55", "Reseña marcada para revisión", "Habitación Santa Marta"],
                ].map(([t, title, copy]) => (
                  <div key={t} className="grid grid-cols-[3.5rem_1fr] gap-3 border-b border-border py-3 last:border-0">
                    <span className="text-xs font-medium text-primary">{t}</span>
                    <div>
                      <div className="text-sm font-medium">{title}</div>
                      <div className="text-xs text-muted-foreground">{copy}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h2 className="font-display text-xl">Estado de moderación</h2>
                {[
                  ["Publicaciones aprobadas", 92],
                  ["Propietarios verificados", 96],
                  ["Reportes resueltos", 88],
                  ["Reseñas moderadas", 94],
                ].map(([label, n]) => (
                  <div key={String(label)} className="mt-4">
                    <div className="flex justify-between text-sm">
                      <span>{label}</span>
                      <span className="font-medium tabular-nums">{n}%</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${n}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {tab === "users" ? (
          <div>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-display text-2xl">Usuarios</h2>
              <Input
                className="max-w-sm"
                placeholder="Buscar por nombre, correo o rol"
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
              />
            </div>
            <div className="overflow-auto rounded-xl border border-border bg-card">
              <table className="w-full min-w-[48rem] text-left text-sm">
                <thead className="bg-muted text-xs tracking-wide text-muted-foreground uppercase">
                  <tr>
                    {["Usuario", "Rol", "Correo", "Estado", "Registro", "Acciones"].map((h) => (
                      <th key={h} className="px-4 py-3 font-medium">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id} className="border-t border-border">
                      <td className="px-4 py-3 font-medium">{u.name}</td>
                      <td className="px-4 py-3">
                        <Badge variant={u.role === "Estudiante" ? "default" : "warning"}>{u.role}</Badge>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{u.mail}</td>
                      <td className="px-4 py-3">
                        <Badge variant={u.state === "Pendiente" ? "warning" : "success"}>{u.state}</Badge>
                      </td>
                      <td className="px-4 py-3">{u.date}</td>
                      <td className="px-4 py-3">
                        {userFlash[u.id] ? (
                          <span className="text-success">{userFlash[u.id]}</span>
                        ) : (
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => setUserFlash((s) => ({ ...s, [u.id]: "Revisado" }))}>
                              Ver
                            </Button>
                            <Button size="sm" variant="danger" onClick={() => setUserFlash((s) => ({ ...s, [u.id]: "Suspendido" }))}>
                              Suspender
                            </Button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}

        {tab === "owners" ? (
          <div className="grid gap-3">
            <h2 className="font-display text-2xl">Verificación de propietarios</h2>
            {owners.map((o) => (
              <article key={o.id} className="grid gap-4 rounded-xl border border-border bg-card p-4 md:grid-cols-[auto_1fr_auto] md:items-center">
                <AvatarBubble initials={o.initials} />
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-medium">{o.name}</h3>
                    <Badge variant={o.status === "aprobado" ? "success" : o.status === "rechazado" ? "danger" : "warning"}>
                      {o.status === "pending" ? "Pendiente" : o.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{o.detail}</p>
                  <div className="mt-2 rounded-md bg-muted px-3 py-2 text-xs">Documento: {o.doc}</div>
                </div>
                {o.status === "pending" ? (
                  <div className="flex gap-2">
                    <Button size="sm" variant="success" onClick={() => setOwners((s) => s.map((x) => (x.id === o.id ? { ...x, status: "aprobado" } : x)))}>
                      Aprobar
                    </Button>
                    <Button size="sm" variant="danger" onClick={() => setOwners((s) => s.map((x) => (x.id === o.id ? { ...x, status: "rechazado" } : x)))}>
                      Rechazar
                    </Button>
                  </div>
                ) : (
                  <span className={cn("text-sm font-medium", o.status === "aprobado" ? "text-success" : "text-danger")}>
                    {o.name} {o.status}
                  </span>
                )}
              </article>
            ))}
          </div>
        ) : null}

        {tab === "listings" ? (
          <div>
            <h2 className="mb-4 font-display text-2xl">Publicaciones pendientes</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {listings.map((l) => (
                <article key={l.id} className="overflow-hidden rounded-xl border border-border bg-card">
                  <div className="relative">
                    <Photo src={l.photo} alt={l.title} className="h-40 w-full" />
                    <Badge className="absolute top-3 right-3" variant={l.status === "publicada" ? "success" : l.status === "rechazada" ? "danger" : "warning"}>
                      {l.status === "pending" ? "Pendiente" : l.status}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-lg">{l.title}</h3>
                    <p className="text-sm text-muted-foreground">{l.meta}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{l.owner}</p>
                    {l.status === "pending" ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Button size="sm" variant="success" onClick={() => setListings((s) => s.map((x) => (x.id === l.id ? { ...x, status: "publicada" } : x)))}>
                          Aprobar
                        </Button>
                        <Button size="sm" variant="danger" onClick={() => setListings((s) => s.map((x) => (x.id === l.id ? { ...x, status: "rechazada" } : x)))}>
                          Rechazar
                        </Button>
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        {tab === "reports" ? (
          <div className="grid gap-3">
            <h2 className="font-display text-2xl">Reportes de usuarios</h2>
            {reports.map((r) => (
              <article key={r.id} className="rounded-xl border border-border bg-card p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-medium">{r.title}</h3>
                      <Badge variant={r.priority === "high" ? "danger" : "warning"}>
                        {r.priority === "high" ? "Alta prioridad" : "Prioridad media"}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm">
                      Reportado por {r.by} · {r.reason}
                    </p>
                    <p className="mt-2 rounded-md bg-muted p-3 text-sm text-muted-foreground">{r.detail}</p>
                  </div>
                  {r.status === "open" ? (
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="success" onClick={() => setReports((s) => s.map((x) => (x.id === r.id ? { ...x, status: "closed" } : x)))}>
                        Resolver
                      </Button>
                      <Button size="sm" variant="danger" onClick={() => setReports((s) => s.map((x) => (x.id === r.id ? { ...x, status: "closed" } : x)))}>
                        Suspender
                      </Button>
                    </div>
                  ) : (
                    <span className="text-sm font-medium text-success">Cerrado</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : null}

        {tab === "reviews" ? (
          <div className="grid gap-3">
            <h2 className="font-display text-2xl">Moderación de reseñas</h2>
            {reviews.map((r) => (
              <article key={r.id} className="rounded-xl border border-border bg-card p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="font-medium">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.place}</div>
                    <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{r.text}</p>
                    <Badge className="mt-2" variant="outline">
                      {r.flag}
                    </Badge>
                  </div>
                  {r.status === "pending" ? (
                    <div className="flex gap-2">
                      <Button size="sm" variant="success" onClick={() => setReviews((s) => s.map((x) => (x.id === r.id ? { ...x, status: "publicada" } : x)))}>
                        Aprobar
                      </Button>
                      <Button size="sm" variant="danger" onClick={() => setReviews((s) => s.map((x) => (x.id === r.id ? { ...x, status: "ocultada" } : x)))}>
                        Ocultar
                      </Button>
                    </div>
                  ) : (
                    <span className={cn("text-sm font-medium", r.status === "publicada" ? "text-success" : "text-danger")}>
                      {r.status}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </main>
    </AppShell>
  );
}
