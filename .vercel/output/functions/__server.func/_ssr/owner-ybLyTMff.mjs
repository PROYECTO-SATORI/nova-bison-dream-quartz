import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as useHabita, S as formatCop, _ as SERVICES, a as Button, b as cn, c as HOUSING_TYPES, d as Input, f as Logo, g as Photo, i as Badge, l as IMAGES, n as AvatarBubble, o as CAMPUSES, p as NativeSelect, r as BARRIOS, s as Field, u as INCOME_SERIES, v as Textarea, x as formatCompact } from "./store-vi-XQxVD.mjs";
import { C as BadgeCheck, b as CalendarDays, l as Plus, m as LayoutDashboard, n as User, s as ShieldCheck, u as MessageCircle, x as Building2 } from "../_libs/lucide-react.mjs";
import { n as DialogContent, t as Dialog } from "./dialog-B571QuZ5.mjs";
import { a as ResponsiveContainer, i as Bar, n as YAxis, o as Tooltip, r as XAxis, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/owner-ybLyTMff.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		id: "overview",
		label: "Panel",
		icon: LayoutDashboard
	},
	{
		id: "properties",
		label: "Inmuebles",
		icon: Building2
	},
	{
		id: "publish",
		label: "Publicar",
		icon: Plus
	},
	{
		id: "requests",
		label: "Solicitudes",
		icon: CalendarDays
	},
	{
		id: "messages",
		label: "Mensajes",
		icon: MessageCircle
	},
	{
		id: "profile",
		label: "Perfil",
		icon: User
	},
	{
		id: "identity",
		label: "Verificación",
		icon: ShieldCheck
	}
];
function OwnerApp() {
	const tab = useHabita((s) => s.ownerTab);
	const setTab = useHabita((s) => s.setOwnerTab);
	const mine = useHabita((s) => s.properties).filter((p) => p.ownerId === "carlos");
	const requests = useHabita((s) => s.requests);
	const handled = useHabita((s) => s.handledRequests);
	const pending = requests.filter((r) => !handled[r.id]).length;
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-svh bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-30 border-b border-border bg-card/90 backdrop-blur-md md:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-16 items-center justify-between px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "size-9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg",
						children: "HabitaU"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => navigate({ to: "/" }),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarBubble, { initials: "CM" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 overflow-auto px-3 pb-3",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: tab === item.id ? "default" : "outline",
					onClick: () => setTab(item.id),
					children: item.label
				}, item.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[90rem] gap-6 px-4 py-6 lg:grid-cols-[15rem_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "sticky top-6 hidden h-[calc(100svh-3rem)] flex-col rounded-xl bg-navy p-4 text-navy-foreground md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex items-center gap-2 px-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "size-9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold",
							children: "HabitaU"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-navy-foreground/70",
							children: "Panel de propietario"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center gap-2 px-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarBubble, {
							initials: "CM",
							className: "size-9 bg-secondary text-secondary-foreground"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-medium",
							children: "Carlos Martínez"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-success",
							children: "Arrendador verificado"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "grid gap-1",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setTab(item.id),
							className: cn("flex items-center gap-2 rounded-md px-3 py-2.5 text-left text-sm font-medium", tab === item.id ? "bg-primary text-primary-foreground" : "text-navy-foreground/80 hover:bg-primary/40"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-1",
									children: item.label
								}),
								item.id === "properties" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "navy",
									children: mine.length
								}) : null,
								item.id === "requests" && pending > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "navy",
									children: pending
								}) : null
							]
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-auto rounded-lg bg-card/10 p-3 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium",
								children: "¿Necesitas ayuda?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-navy-foreground/70",
								children: "Soporte de Habita U para propietarios."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "secondary",
								className: "mt-3 w-full",
								onClick: () => navigate({ to: "/" }),
								children: "Salir al inicio"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					tab === "overview" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, {
						mineCount: mine.length,
						pending
					}) : null,
					tab === "properties" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertiesPanel, {}) : null,
					tab === "publish" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublishPanel, {}) : null,
					tab === "requests" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequestsPanel, {}) : null,
					tab === "messages" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OwnerMessages, {}) : null,
					tab === "profile" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OwnerProfile, {}) : null,
					tab === "identity" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OwnerIdentity, {}) : null
				]
			})]
		})]
	});
}
function Overview({ mineCount, pending }) {
	const setTab = useHabita((s) => s.setOwnerTab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden rounded-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src: IMAGES.hero,
					alt: "",
					className: "absolute inset-0 h-full w-full"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex min-h-64 flex-col justify-end gap-4 p-6 text-navy-foreground sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest uppercase",
							children: "Panel del arrendador · Pamplona"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl",
							children: "Hola, Carlos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-xl text-sm text-navy-foreground/85",
							children: "Administra inmuebles, atiende solicitudes y conversa con estudiantes desde un solo lugar."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "cta",
								onClick: () => setTab("publish"),
								children: "Publicar inmueble"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								className: "border-navy-foreground/30 bg-card/10 text-navy-foreground",
								onClick: () => setTab("requests"),
								children: [
									"Ver solicitudes (",
									pending,
									")"
								]
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				{
					label: "Ingresos del mes",
					value: "$2.450.000",
					hint: "+12% vs. mes anterior"
				},
				{
					label: "Inmuebles publicados",
					value: String(mineCount),
					hint: "Disponibles, reservados y arrendados"
				},
				{
					label: "Vistas este mes",
					value: "1.326",
					hint: "+18% esta semana"
				},
				{
					label: "Consultas recibidas",
					value: "27",
					hint: "8 pendientes de respuesta"
				}
			].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: s.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 font-display text-2xl tabular-nums",
						children: s.value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-xs text-success",
						children: s.hint
					})
				]
			}, s.label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-5 lg:grid-cols-[1.4fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "Ingresos de los últimos 6 meses"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-xs text-muted-foreground",
						children: "Millones de COP"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-56",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: INCOME_SERIES,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "month",
										tick: { fontSize: 12 },
										axisLine: false,
										tickLine: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { hide: true }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { formatter: (value) => [`$${value}M`, "Ingresos"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "value",
										fill: "var(--color-primary)",
										radius: [
											8,
											8,
											0,
											0
										]
									})
								]
							})
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-card p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "Para hacer hoy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid gap-3",
					children: [
						{
							title: `${pending} solicitudes`,
							copy: "Revisa visitas y reservas.",
							go: "requests"
						},
						{
							title: "Mensajes pendientes",
							copy: "Hay estudiantes esperando respuesta.",
							go: "messages"
						},
						{
							title: "Perfil al 90%",
							copy: "Completa los datos restantes.",
							go: "profile"
						}
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 border-b border-border py-3 last:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-medium",
							children: t.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: t.copy
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => setTab(t.go),
							children: "Ir"
						})]
					}, t.title))
				})]
			})]
		})
	] });
}
function PropertiesPanel() {
	const properties = useHabita((s) => s.properties.filter((p) => p.ownerId === "carlos"));
	const setEditing = useHabita((s) => s.setEditingProperty);
	const remove = useHabita((s) => s.removeOwnerProperty);
	const [availId, setAvailId] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-5 flex items-end justify-between",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Mis inmuebles"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Edita publicaciones y cambia su disponibilidad."
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 lg:grid-cols-2",
			children: properties.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "overflow-hidden rounded-xl border border-border bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: p.images[0],
						alt: p.title,
						className: "h-44 w-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						className: "absolute top-3 left-3",
						variant: p.status === "available" ? "success" : p.status === "reserved" ? "warning" : "outline",
						children: statusLabel(p.status)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg",
								children: p.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [p.barrio, " · Pamplona"]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-right font-medium text-primary tabular-nums",
								children: formatCop(p.price)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex gap-4 border-y border-border py-3 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [formatCompact(p.views), " vistas"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [p.saved, " guardados"] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => setEditing(p.id),
									children: "Editar"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "secondary",
									onClick: () => setAvailId(p.id),
									children: "Disponibilidad"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "danger",
									onClick: () => remove(p.id),
									children: "Eliminar"
								})
							]
						})
					]
				})]
			}, p.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvailabilityDialog, {
			id: availId,
			onClose: () => setAvailId(null)
		})
	] });
}
function AvailabilityDialog({ id, onClose }) {
	const property = useHabita((s) => s.properties.find((p) => p.id === id));
	const update = useHabita((s) => s.updatePropertyStatus);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: Boolean(id),
		onOpenChange: (open) => !open && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			title: "Cambiar disponibilidad",
			description: "El estado que verán los estudiantes.",
			children: property ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4",
				onSubmit: (e) => {
					e.preventDefault();
					const value = String(new FormData(e.currentTarget).get("status"));
					update(property.id, value);
					onClose();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 rounded-lg bg-muted p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
							src: property.images[0],
							alt: "",
							className: "h-16 w-20 rounded-md"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-medium",
							children: property.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: property.barrio
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Nuevo estado",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
							name: "status",
							defaultValue: property.status,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "available",
									children: "Disponible"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "reserved",
									children: "Reservado"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "rented",
									children: "Arrendado"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "closed",
									children: "No disponible"
								})
							]
						}, property.id)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "cta",
						type: "submit",
						children: "Guardar cambios"
					})
				]
			}) : null
		})
	});
}
function PublishPanel() {
	const editingId = useHabita((s) => s.editingPropertyId);
	const properties = useHabita((s) => s.properties);
	const add = useHabita((s) => s.addProperty);
	const update = useHabita((s) => s.updateProperty);
	const setTab = useHabita((s) => s.setOwnerTab);
	const setEditing = useHabita((s) => s.setEditingProperty);
	const current = properties.find((p) => p.id === editingId);
	const [status, setStatus] = (0, import_react.useState)("");
	const [previews, setPreviews] = (0, import_react.useState)(current?.images ?? []);
	function onSubmit(e) {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const patch = {
			type: String(form.get("type")),
			price: Number(form.get("price")),
			deposit: String(form.get("deposit")),
			barrio: String(form.get("barrio")),
			title: current?.title ?? `${form.get("type")} en ${form.get("barrio")}`,
			description: String(form.get("description"))
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
				images: previews.length ? previews : [
					IMAGES.facade,
					IMAGES.suite,
					IMAGES.kitchen
				],
				descDistance: `${form.get("distance") || 8} min a pie`,
				campusText: String(form.get("campus")),
				rooms: 1,
				baths: 1,
				views: 0,
				saved: 0,
				ownerId: "carlos",
				status: "available",
				reviews: []
			});
			setStatus("Inmueble publicado.");
		}
		window.setTimeout(() => {
			setEditing(null);
			setTab("properties");
		}, 700);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "max-w-3xl rounded-xl border border-border bg-card p-6",
		onSubmit,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: current ? "Editar inmueble" : "Publicar inmueble"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Información visible para estudiantes."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-3 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Tipo de oferta",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
							name: "type",
							defaultValue: current?.type,
							children: HOUSING_TYPES.filter((t) => t !== "Todos").map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t }, t))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Canon mensual (COP)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "price",
							type: "number",
							required: true,
							defaultValue: current?.price,
							placeholder: "500000"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Depósito",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "deposit",
							defaultValue: current?.deposit,
							placeholder: "Sin depósito"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Barrio",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
							name: "barrio",
							defaultValue: current?.barrio,
							children: BARRIOS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: b }, b))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Sede cercana",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
							name: "campus",
							defaultValue: current?.campus,
							children: CAMPUSES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Minutos a pie",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "distance",
							type: "number",
							defaultValue: current?.distance ?? 8
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2 text-sm font-medium",
					children: "Servicios incluidos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
					children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							name: s,
							defaultChecked: current?.services.includes(s),
							className: "accent-primary"
						}), s]
					}, s))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Descripción",
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					name: "description",
					rows: 4,
					defaultValue: current?.description
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Fotos",
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "file",
					accept: "image/*",
					multiple: true,
					onChange: (e) => {
						const files = [...e.target.files ?? []].slice(0, 10);
						Promise.all(files.map((f) => new Promise((resolve) => {
							const reader = new FileReader();
							reader.onload = () => resolve(String(reader.result));
							reader.readAsDataURL(f);
						}))).then(setPreviews);
					}
				})
			}),
			previews.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: previews.map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src,
					alt: "",
					className: "h-16 w-20 rounded-md"
				}, src.slice(0, 48)))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex justify-end gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					onClick: () => setTab("properties"),
					children: "Cancelar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "cta",
					type: "submit",
					children: current ? "Guardar cambios" : "Publicar inmueble"
				})]
			}),
			status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-success",
				children: status
			}) : null
		]
	});
}
function RequestsPanel() {
	const requests = useHabita((s) => s.requests);
	const handled = useHabita((s) => s.handledRequests);
	const handle = useHabita((s) => s.handleRequest);
	const setTab = useHabita((s) => s.setOwnerTab);
	const setChat = useHabita((s) => s.setActiveOwnerChat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "mb-4 font-display text-3xl",
		children: "Solicitudes"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3",
		children: requests.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarBubble, { initials: r.initials }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-medium",
									children: r.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "success",
									children: "Verificado"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: r.type === "visit" ? "default" : "warning",
									children: r.type === "visit" ? "Visita" : "Reserva"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: r.program
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: r.property
								}),
								" · ",
								r.detail
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: r.when
						})
					]
				}),
				handled[r.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium text-success",
					children: handled[r.id]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "success",
							onClick: () => handle(r.id, r.type === "visit" ? "Visita aprobada" : "Reserva aprobada"),
							children: "Aprobar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "danger",
							onClick: () => handle(r.id, "Solicitud rechazada"),
							children: "Rechazar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => {
								setChat(r.name);
								setTab("messages");
							},
							children: "Chat"
						})
					]
				})
			]
		}, r.id))
	})] });
}
function OwnerMessages() {
	const chats = useHabita((s) => s.ownerChats);
	const active = useHabita((s) => s.activeOwnerChat);
	const setActive = useHabita((s) => s.setActiveOwnerChat);
	const send = useHabita((s) => s.sendOwnerMessage);
	const [draft, setDraft] = (0, import_react.useState)("");
	const current = chats.find((c) => c.id === active) ?? chats[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "mb-4 font-display text-3xl",
		children: "Mensajes"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-[28rem] overflow-hidden rounded-xl border border-border bg-card md:grid-cols-[16rem_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-border md:border-r md:border-b-0",
			children: chats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setActive(c.id),
				className: cn("block w-full p-4 text-left", c.id === current.id ? "bg-secondary" : "hover:bg-muted"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-medium",
					children: c.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground",
					children: c.property
				})]
			}, c.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: current.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: current.property
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 space-y-2 bg-background p-4",
					children: current.messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("max-w-[75%] rounded-lg px-3 py-2 text-sm", m.from === "me" ? "ml-auto bg-primary text-primary-foreground" : "border border-border bg-card"),
						children: m.text
					}, `${m.text}-${i}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex gap-2 border-t border-border p-3",
					onSubmit: (e) => {
						e.preventDefault();
						if (!draft.trim()) return;
						send(draft.trim());
						setDraft("");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft,
						onChange: (e) => setDraft(e.target.value),
						placeholder: "Escribe una respuesta..."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "Enviar"
					})]
				})
			]
		})]
	})] });
}
function OwnerProfile() {
	const [ok, setOk] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Mi perfil de arrendador"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center gap-4 rounded-xl border border-border bg-card p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarBubble, {
					initials: "C",
					className: "size-16 bg-primary text-xl text-primary-foreground"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 font-display text-2xl",
					children: ["Carlos Martínez ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "size-5 text-success" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Arrendador en Pamplona · Miembro desde 2024"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-3 rounded-xl border border-border bg-card p-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Nombre",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: "Carlos Martínez" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Correo",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: "carlos@habitau.co" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Teléfono",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: "+57 300 555 0198" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Ciudad",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: "Pamplona, Norte de Santander" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Descripción",
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, { defaultValue: "Arrendador local con experiencia ofreciendo alojamiento a estudiantes." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "w-fit sm:col-span-2",
						variant: "cta",
						onClick: () => setOk("Perfil actualizado."),
						children: "Guardar cambios"
					}),
					ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-success",
						children: ok
					}) : null
				]
			})
		]
	});
}
function OwnerIdentity() {
	const [msg, setMsg] = (0, import_react.useState)("Documento actual verificado.");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-3xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Verificación de identidad"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 rounded-xl border border-border bg-card p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-8 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-2xl",
						children: "Identidad verificada"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Documento, correo y teléfono confirmados."
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-3 sm:grid-cols-3",
					children: [
						"Correo y teléfono",
						"Documento de identidad",
						"Perfil básico"
					].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-success-soft p-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-success",
							children: ["Paso ", i + 1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium",
							children: step
						})]
					}, step))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-5 block rounded-lg border border-dashed border-border p-4 text-sm",
					children: [
						"Actualizar documento",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							className: "mt-2",
							type: "file",
							accept: "image/*,.pdf",
							onChange: (e) => {
								const file = e.target.files?.[0];
								if (file) setMsg(`Documento seleccionado: ${file.name}`);
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-success",
							children: msg
						})
					]
				})
			]
		})]
	});
}
function statusLabel(status) {
	if (status === "available") return "Disponible";
	if (status === "reserved") return "Reservado";
	if (status === "rented") return "Arrendado";
	return "No disponible";
}
var SplitComponent = OwnerApp;
//#endregion
export { SplitComponent as component };
