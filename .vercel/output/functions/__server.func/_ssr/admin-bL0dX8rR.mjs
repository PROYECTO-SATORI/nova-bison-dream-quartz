import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as useHabita, a as Button, b as cn, d as Input, g as Photo, i as Badge, l as IMAGES, m as NavButton, n as AvatarBubble, t as AppShell } from "./store-vi-XQxVD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-bL0dX8rR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TABS = [
	{
		id: "overview",
		label: "Estadísticas"
	},
	{
		id: "users",
		label: "Usuarios"
	},
	{
		id: "owners",
		label: "Verificaciones"
	},
	{
		id: "listings",
		label: "Publicaciones"
	},
	{
		id: "reports",
		label: "Reportes"
	},
	{
		id: "reviews",
		label: "Reseñas"
	}
];
function AdminApp() {
	const tab = useHabita((s) => s.adminTab);
	const setTab = useHabita((s) => s.setAdminTab);
	const navigate = useNavigate();
	const [owners, setOwners] = (0, import_react.useState)([
		{
			id: "o1",
			name: "Julián Torres",
			initials: "JT",
			detail: "Propietario · Pamplona · registrado hoy",
			doc: "CC_1098765432.jpg",
			status: "pending"
		},
		{
			id: "o2",
			name: "Ana Pérez",
			initials: "AP",
			detail: "Propietaria · El Carmen · ayer",
			doc: "cedula_ana_perez.pdf",
			status: "pending"
		},
		{
			id: "o3",
			name: "Diego Ramírez",
			initials: "DR",
			detail: "Propietario · Centro · hace 2 días",
			doc: "documento_diego.jpg",
			status: "pending"
		}
	]);
	const [listings, setListings] = (0, import_react.useState)([
		{
			id: "l1",
			title: "Habitación suite amoblada",
			meta: "El Carmen · $480.000/mes",
			photo: IMAGES.suite,
			owner: "Carlos Martínez",
			status: "pending"
		},
		{
			id: "l2",
			title: "Apartaestudio independiente",
			meta: "Centro · $620.000/mes",
			photo: IMAGES.studio,
			owner: "Ana Pérez",
			status: "pending"
		},
		{
			id: "l3",
			title: "Casa familiar cerca al centro",
			meta: "Santa Marta · $1.150.000/mes",
			photo: IMAGES.facade,
			owner: "Diego Ramírez",
			status: "pending"
		}
	]);
	const [reports, setReports] = (0, import_react.useState)([
		{
			id: "rp1",
			title: "Apartaestudio Centro · $620.000",
			by: "Mateo Ríos",
			reason: "Fotos engañosas",
			detail: "Las fotografías parecen de otro inmueble.",
			priority: "high",
			status: "open"
		},
		{
			id: "rp2",
			title: "Habitación El Carmen · $350.000",
			by: "Valentina Gómez",
			reason: "Precio falso",
			detail: "El canon del anuncio no coincide con el valor pedido.",
			priority: "medium",
			status: "open"
		},
		{
			id: "rp3",
			title: "Casa Santa Marta · $900.000",
			by: "Andrés Pérez",
			reason: "El inmueble no existe",
			detail: "No se pudo verificar la dirección.",
			priority: "high",
			status: "open"
		}
	]);
	const [reviews, setReviews] = (0, import_react.useState)([
		{
			id: "rv1",
			name: "Laura Méndez",
			place: "Habitación premium · Santa Marta",
			stars: 5,
			text: "El alojamiento coincide con las fotos y el arrendador respondió rápido.",
			flag: "Sin palabras ofensivas",
			status: "pending"
		},
		{
			id: "rv2",
			name: "Andrés Pérez",
			place: "Apartaestudio Centro",
			stars: 2,
			text: "El servicio fue distinto a lo anunciado. Solicito revisión de la publicación.",
			flag: "Reportado por el propietario",
			status: "pending"
		},
		{
			id: "rv3",
			name: "Valentina Gómez",
			place: "Habitación El Carmen",
			stars: 4,
			text: "Buena ubicación. El espacio estaba limpio, aunque el Wi-Fi podría mejorar.",
			flag: "Comentario de estancia",
			status: "pending"
		}
	]);
	const [userQuery, setUserQuery] = (0, import_react.useState)("");
	const [userFlash, setUserFlash] = (0, import_react.useState)({});
	const users = [
		{
			id: "u1",
			name: "Valentina Gómez",
			mail: "valentina@unipamplona.edu.co",
			role: "Estudiante",
			state: "Activo",
			date: "18 sep 2026"
		},
		{
			id: "u2",
			name: "Carlos Martínez",
			mail: "carlos@habitau.co",
			role: "Propietario",
			state: "Verificado",
			date: "03 mar 2024"
		},
		{
			id: "u3",
			name: "Julián Torres",
			mail: "julian@example.com",
			role: "Propietario",
			state: "Pendiente",
			date: "18 sep 2026"
		},
		{
			id: "u4",
			name: "Mateo Ríos",
			mail: "mateo@unipamplona.edu.co",
			role: "Estudiante",
			state: "Activo",
			date: "11 sep 2026"
		}
	].filter((u) => `${u.name} ${u.mail} ${u.role}`.toLowerCase().includes(userQuery.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		subtitle: "Panel · Administrador",
		nav: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
			active: tab === t.id,
			onClick: () => setTab(t.id),
			children: t.label
		}, t.id)),
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => navigate({ to: "/" }),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarBubble, { initials: "AD" })
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-7xl px-4 py-8 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5 flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold tracking-wide text-primary uppercase",
							children: "Centro de administración"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl",
							children: "Panel de control"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Supervisa Habita U en Pamplona y mantén la plataforma segura."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "success",
						children: "Sistema operativo"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 flex gap-2 overflow-auto rounded-xl border border-border bg-card p-2",
					children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: tab === t.id ? "default" : "ghost",
						onClick: () => setTab(t.id),
						children: t.label
					}, t.id))
				}),
				tab === "overview" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
					children: [
						{
							label: "Usuarios registrados",
							value: "1.284",
							hint: "+14,8% este mes"
						},
						{
							label: "Inmuebles activos",
							value: "386",
							hint: "42 nuevos este mes"
						},
						{
							label: "Propietarios verificados",
							value: "247",
							hint: "96,4% del total"
						},
						{
							label: "Reportes abiertos",
							value: String(reports.filter((r) => r.status === "open").length),
							hint: "Requieren revisión"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: s.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-display text-3xl tabular-nums",
								children: s.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs text-success",
								children: s.hint
							})
						]
					}, s.label))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-5 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl",
							children: "Actividad reciente"
						}), [
							[
								"09:12",
								"Nuevo propietario registrado",
								"Julián Torres · pendiente de identidad"
							],
							[
								"08:47",
								"Publicación enviada a moderación",
								"Apartamento Centro · $850.000"
							],
							[
								"08:21",
								"Reporte recibido",
								"Fotos engañosas · Apartaestudio El Carmen"
							],
							[
								"07:55",
								"Reseña marcada para revisión",
								"Habitación Santa Marta"
							]
						].map(([t, title, copy]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[3.5rem_1fr] gap-3 border-b border-border py-3 last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium text-primary",
								children: t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium",
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: copy
							})] })]
						}, t))]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl",
							children: "Estado de moderación"
						}), [
							["Publicaciones aprobadas", 92],
							["Propietarios verificados", 96],
							["Reportes resueltos", 88],
							["Reseñas moderadas", 94]
						].map(([label, n]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-medium tabular-nums",
									children: [n, "%"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 h-1.5 overflow-hidden rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-primary",
									style: { width: `${n}%` }
								})
							})]
						}, String(label)))]
					})]
				})] }) : null,
				tab === "users" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Usuarios"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "max-w-sm",
						placeholder: "Buscar por nombre, correo o rol",
						value: userQuery,
						onChange: (e) => setUserQuery(e.target.value)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-auto rounded-xl border border-border bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[48rem] text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-muted text-xs tracking-wide text-muted-foreground uppercase",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
								"Usuario",
								"Rol",
								"Correo",
								"Estado",
								"Registro",
								"Acciones"
							].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: h
							}, h)) })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: users.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-medium",
									children: u.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: u.role === "Estudiante" ? "default" : "warning",
										children: u.role
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 text-muted-foreground",
									children: u.mail
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: u.state === "Pendiente" ? "warning" : "success",
										children: u.state
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: u.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: userFlash[u.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-success",
										children: userFlash[u.id]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "outline",
											onClick: () => setUserFlash((s) => ({
												...s,
												[u.id]: "Revisado"
											})),
											children: "Ver"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "danger",
											onClick: () => setUserFlash((s) => ({
												...s,
												[u.id]: "Suspendido"
											})),
											children: "Suspender"
										})]
									})
								})
							]
						}, u.id)) })]
					})
				})] }) : null,
				tab === "owners" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Verificación de propietarios"
					}), owners.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid gap-4 rounded-xl border border-border bg-card p-4 md:grid-cols-[auto_1fr_auto] md:items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarBubble, { initials: o.initials }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-medium",
										children: o.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: o.status === "aprobado" ? "success" : o.status === "rechazado" ? "danger" : "warning",
										children: o.status === "pending" ? "Pendiente" : o.status
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: o.detail
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 rounded-md bg-muted px-3 py-2 text-xs",
									children: ["Documento: ", o.doc]
								})
							] }),
							o.status === "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "success",
									onClick: () => setOwners((s) => s.map((x) => x.id === o.id ? {
										...x,
										status: "aprobado"
									} : x)),
									children: "Aprobar"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "danger",
									onClick: () => setOwners((s) => s.map((x) => x.id === o.id ? {
										...x,
										status: "rechazado"
									} : x)),
									children: "Rechazar"
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: cn("text-sm font-medium", o.status === "aprobado" ? "text-success" : "text-danger"),
								children: [
									o.name,
									" ",
									o.status
								]
							})
						]
					}, o.id))]
				}) : null,
				tab === "listings" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-4 font-display text-2xl",
					children: "Publicaciones pendientes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-3",
					children: listings.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "overflow-hidden rounded-xl border border-border bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
								src: l.photo,
								alt: l.title,
								className: "h-40 w-full"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								className: "absolute top-3 right-3",
								variant: l.status === "publicada" ? "success" : l.status === "rechazada" ? "danger" : "warning",
								children: l.status === "pending" ? "Pendiente" : l.status
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg",
									children: l.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: l.meta
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: l.owner
								}),
								l.status === "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "success",
										onClick: () => setListings((s) => s.map((x) => x.id === l.id ? {
											...x,
											status: "publicada"
										} : x)),
										children: "Aprobar"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "danger",
										onClick: () => setListings((s) => s.map((x) => x.id === l.id ? {
											...x,
											status: "rechazada"
										} : x)),
										children: "Rechazar"
									})]
								}) : null
							]
						})]
					}, l.id))
				})] }) : null,
				tab === "reports" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Reportes de usuarios"
					}), reports.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						className: "rounded-xl border border-border bg-card p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-medium",
										children: r.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: r.priority === "high" ? "danger" : "warning",
										children: r.priority === "high" ? "Alta prioridad" : "Prioridad media"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm",
									children: [
										"Reportado por ",
										r.by,
										" · ",
										r.reason
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 rounded-md bg-muted p-3 text-sm text-muted-foreground",
									children: r.detail
								})
							] }), r.status === "open" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "success",
									onClick: () => setReports((s) => s.map((x) => x.id === r.id ? {
										...x,
										status: "closed"
									} : x)),
									children: "Resolver"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "danger",
									onClick: () => setReports((s) => s.map((x) => x.id === r.id ? {
										...x,
										status: "closed"
									} : x)),
									children: "Suspender"
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium text-success",
								children: "Cerrado"
							})]
						})
					}, r.id))]
				}) : null,
				tab === "reviews" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Moderación de reseñas"
					}), reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						className: "rounded-xl border border-border bg-card p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-medium",
									children: r.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: r.place
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-2xl text-sm text-muted-foreground",
									children: r.text
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									className: "mt-2",
									variant: "outline",
									children: r.flag
								})
							] }), r.status === "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "success",
									onClick: () => setReviews((s) => s.map((x) => x.id === r.id ? {
										...x,
										status: "publicada"
									} : x)),
									children: "Aprobar"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "danger",
									onClick: () => setReviews((s) => s.map((x) => x.id === r.id ? {
										...x,
										status: "ocultada"
									} : x)),
									children: "Ocultar"
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-sm font-medium", r.status === "publicada" ? "text-success" : "text-danger"),
								children: r.status
							})]
						})
					}, r.id))]
				}) : null
			]
		})
	});
}
var SplitComponent = AdminApp;
//#endregion
export { SplitComponent as component };
