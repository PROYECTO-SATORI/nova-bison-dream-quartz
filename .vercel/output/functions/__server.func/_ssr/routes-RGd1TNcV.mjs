import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Button, b as cn, d as Input, g as Photo, h as PROPERTIES, i as Badge, l as IMAGES, t as AppShell, y as UNIVERSITIES } from "./store-vi-XQxVD.mjs";
import { a as Sparkles, c as Search, f as Mail, g as GraduationCap, o as Shield, p as Lock, x as Building2, y as CircleCheck } from "../_libs/lucide-react.mjs";
import { t as PropertyCard } from "./property-card-g0rQ8JQs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-RGd1TNcV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ROLES = [
	{
		id: "student",
		title: "Soy estudiante",
		copy: "Busco habitación, apartaestudio o casa cerca de mi campus.",
		icon: GraduationCap
	},
	{
		id: "owner",
		title: "Tengo inmueble",
		copy: "Publico y gestiono alojamientos, visitas y reservas.",
		icon: Building2
	},
	{
		id: "admin",
		title: "Soy administrador",
		copy: "Modero usuarios, publicaciones, reportes y reseñas.",
		icon: Shield
	}
];
function LoginPage() {
	const navigate = useNavigate();
	const [role, setRole] = (0, import_react.useState)("student");
	const [showPass, setShowPass] = (0, import_react.useState)(false);
	const featured = PROPERTIES.filter((p) => p.status === "available").slice(0, 3);
	function enter() {
		if (role === "owner") navigate({ to: "/owner" });
		else if (role === "admin") navigate({ to: "/admin" });
		else navigate({ to: "/student" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		subtitle: "Vivienda universitaria",
		nav: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#login-card",
				className: "rounded-md px-3 py-2 text-sm font-medium text-foreground",
				children: "Entrar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#como-funciona",
				className: "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground",
				children: "Cómo funciona"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#alojamientos",
				className: "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground",
				children: "Alojamientos"
			})
		] }),
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			size: "sm",
			onClick: enter,
			children: "Iniciar sesión"
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative isolate min-h-[34rem] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: IMAGES.hero,
						alt: "Calles coloniales de Pamplona al atardecer",
						className: "absolute inset-0 h-full w-full"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-r from-ink/80 via-navy/55 to-navy/25" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex min-h-[34rem] max-w-7xl flex-col justify-end gap-6 px-6 py-16 text-navy-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "navy",
								className: "w-fit bg-card/15 text-navy-foreground",
								children: "Pamplona, Norte de Santander"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "max-w-2xl font-display text-4xl leading-tight sm:text-6xl",
								children: "Tu casa de estudiante, a minutos del campus."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-xl text-base text-navy-foreground/85 sm:text-lg",
								children: "Habita U verifica arrendadores y publicaciones para que encuentres habitación, apartaestudio o casa con fotos reales, servicios claros y trato directo."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "cta",
									size: "lg",
									onClick: enter,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }), "Buscar alojamiento"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "lg",
									className: "border-navy-foreground/30 bg-card/10 text-navy-foreground hover:bg-card/20",
									onClick: () => {
										setRole("owner");
										document.getElementById("login-card")?.scrollIntoView({ behavior: "smooth" });
									},
									children: "Publicar inmueble"
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "login-card",
				className: "mx-auto max-w-7xl px-4 py-12 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold tracking-wide text-primary uppercase",
							children: "Cómo usarás Habita U hoy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl",
							children: "Elige tu perfil y entra al panel."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-muted-foreground",
							children: "Es una demostración completa: estudiante, propietario y administrador. No se envían datos a un servidor."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-3 sm:grid-cols-3",
							children: ROLES.map((item) => {
								const Icon = item.icon;
								const selected = role === item.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setRole(item.id),
									className: cn("rounded-xl border p-4 text-left transition-[border-color,background-color,box-shadow] duration-150", selected ? "border-primary bg-secondary shadow-sm" : "border-border bg-card hover:border-primary/40"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mb-3 size-5 text-primary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-medium text-foreground",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs leading-relaxed text-muted-foreground",
											children: item.copy
										})
									]
								}, item.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex gap-4 rounded-xl border border-border bg-success-soft/60 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-5 shrink-0 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium text-foreground",
								children: "Identidad verificada para Colombia"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Comprobamos arrendadores y convenios universitarios en Pamplona. Las fotos de esta demo son interiores y calles de un pueblo andino colonial."
							})] })]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-5 flex rounded-full bg-muted p-1",
							children: ROLES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setRole(item.id),
								className: cn("flex-1 rounded-full px-2 py-2 text-xs font-medium sm:text-sm", role === item.id ? "bg-card text-primary shadow-sm" : "text-muted-foreground"),
								children: item.title.replace("Soy ", "").replace("Tengo ", "")
							}, item.id))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "grid gap-1.5 text-sm font-medium",
									children: ["Correo institucional o personal", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											className: "pl-10",
											defaultValue: role === "admin" ? "admin@habitau.co" : role === "owner" ? "carlos@habitau.co" : "mateo.castro@unipamplona.edu.co"
										}, role)]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "grid gap-1.5 text-sm font-medium",
									children: ["Contraseña", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												className: "pr-20 pl-10",
												type: showPass ? "text" : "password",
												defaultValue: "HabitaSeguro2026"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "absolute top-1/2 right-3 -translate-y-1/2 text-xs font-medium text-primary",
												onClick: () => setShowPass((v) => !v),
												children: showPass ? "Ocultar" : "Ver"
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											className: "size-4 accent-primary",
											defaultChecked: true
										}), "Recordar en este dispositivo"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1 text-success",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3.5" }), " SSL"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									className: "w-full",
									onClick: enter,
									children: "Entrar al panel"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-center text-xs text-muted-foreground",
									children: "Demo local. Cualquier contraseña funciona; el perfil lo define el rol elegido."
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "como-funciona",
				className: "border-y border-border bg-card py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3",
					children: [
						{
							icon: Search,
							title: "Filtra con precisión",
							copy: "Barrio, presupuesto, servicios, distancia a pie y sede de la Universidad de Pamplona."
						},
						{
							icon: Sparkles,
							title: "Mira el inmueble de verdad",
							copy: "Galerías de interiores, patio, cocina y fachada. Sin recuadros grises ni fotos de stock genéricas."
						},
						{
							icon: Shield,
							title: "Habla y reserva",
							copy: "Mensajes, visita y reserva pendientes de aprobación. El administrador modera reportes y reseñas."
						}
					].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-11 place-items-center rounded-lg bg-secondary text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-muted-foreground",
								children: step.copy
							})
						]
					}, step.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "alojamientos",
				className: "mx-auto max-w-7xl px-4 py-14 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold tracking-wide text-primary uppercase",
							children: "Destacados en Pamplona"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-3xl",
							children: "Alojamientos con fotos reales"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: enter,
							children: "Ver todos"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-5 md:grid-cols-3",
						children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyCard, { property: p }, p.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-center text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase",
							children: "Comunidades estudiantiles"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap justify-center gap-2",
							children: UNIVERSITIES.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "default",
								children: u
							}, u))
						})]
					})
				]
			})
		]
	});
}
var SplitComponent = LoginPage;
//#endregion
export { SplitComponent as component };
