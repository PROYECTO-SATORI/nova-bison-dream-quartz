import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as useHabita, _ as SERVICES, a as Button, b as cn, c as HOUSING_TYPES, d as Input, i as Badge, m as NavButton, n as AvatarBubble, o as CAMPUSES, p as NativeSelect, r as BARRIOS, s as Field, t as AppShell } from "./store-vi-XQxVD.mjs";
import { S as Bell, c as Search, h as Heart, n as User, s as ShieldCheck, u as MessageCircle } from "../_libs/lucide-react.mjs";
import { t as PropertyCard } from "./property-card-g0rQ8JQs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/student.index-m0zAkI0O.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StudentApp() {
	const tab = useHabita((s) => s.studentTab);
	const setTab = useHabita((s) => s.setStudentTab);
	const favorites = useHabita((s) => s.favorites);
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		subtitle: "Pamplona · Estudiante",
		nav: [
			{
				id: "search",
				label: "Buscar",
				icon: Search
			},
			{
				id: "favorites",
				label: "Favoritos",
				icon: Heart
			},
			{
				id: "messages",
				label: "Mensajes",
				icon: MessageCircle
			},
			{
				id: "profile",
				label: "Mi perfil",
				icon: User
			}
		].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
			active: tab === item.id,
			onClick: () => setTab(item.id),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4" }),
					item.label,
					item.id === "favorites" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "navy",
						className: "px-1.5 py-0",
						children: favorites.length
					}) : null
				]
			})
		}, item.id)),
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon",
			"aria-label": "Mensajes",
			onClick: () => setTab("messages"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => navigate({ to: "/" }),
			"aria-label": "Cuenta",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarBubble, { initials: "MC" })
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-7xl px-4 py-8 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 grid gap-4 lg:grid-cols-[1.4fr_0.6fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 rounded-xl border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarBubble, {
							initials: "MC",
							className: "size-16 text-xl"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-2xl",
								children: "Hola, Mateo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Ingeniería de Sistemas · Universidad de Pamplona"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "success",
								className: "mt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mr-1 size-3" }), "Identidad verificada"]
							})
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-secondary p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium",
								children: "Perfil listo para buscar"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Correo y teléfono verificados. Ajusta preferencias para resultados más precisos."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 font-display text-3xl text-primary",
								children: "100%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 h-1.5 overflow-hidden rounded-full bg-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full rounded-full bg-success" })
							})
						]
					})]
				}),
				tab === "search" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchPanel, {}) : null,
				tab === "favorites" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FavoritesPanel, {}) : null,
				tab === "messages" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessagesPanel, {}) : null,
				tab === "profile" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfilePanel, {}) : null
			]
		})
	});
}
function SearchPanel() {
	const properties = useHabita((s) => s.properties);
	const [query, setQuery] = (0, import_react.useState)("");
	const [type, setType] = (0, import_react.useState)("Todos");
	const [barrio, setBarrio] = (0, import_react.useState)("");
	const [avail, setAvail] = (0, import_react.useState)("");
	const [min, setMin] = (0, import_react.useState)(0);
	const [max, setMax] = (0, import_react.useState)(12e5);
	const [campus, setCampus] = (0, import_react.useState)("");
	const [sort, setSort] = (0, import_react.useState)("recommended");
	const [distance, setDistance] = (0, import_react.useState)(20);
	const [services, setServices] = (0, import_react.useState)([]);
	const list = (0, import_react.useMemo)(() => {
		const q = query.toLowerCase().trim();
		let next = properties.filter((p) => {
			const hay = `${p.title} ${p.location} ${p.barrio} ${p.campusText}`.toLowerCase();
			return (!q || hay.includes(q)) && (type === "Todos" || p.type === type) && (!barrio || p.barrio === barrio) && (!avail || p.availability === avail) && p.price >= min && p.price <= max && (distance >= 20 || p.distance <= distance) && (!campus || p.campus === campus) && services.every((s) => p.services.includes(s));
		});
		if (sort === "priceAsc") next = [...next].sort((a, b) => a.price - b.price);
		if (sort === "priceDesc") next = [...next].sort((a, b) => b.price - a.price);
		if (sort === "distance") next = [...next].sort((a, b) => a.distance - b.distance);
		if (sort === "rating") next = [...next].sort((a, b) => b.rating - a.rating);
		return next;
	}, [
		properties,
		query,
		type,
		barrio,
		avail,
		min,
		max,
		campus,
		sort,
		distance,
		services
	]);
	function toggleService(value) {
		setServices((prev) => prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-wide text-primary uppercase",
				children: "Búsqueda en Pamplona"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Encuentra tu próximo hogar"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 rounded-xl border border-border bg-card p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 md:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "¿Dónde quieres vivir?",
							className: "lg:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: query,
								onChange: (e) => setQuery(e.target.value),
								placeholder: "Barrio, dirección o nombre del alojamiento"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Tipo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
								value: type,
								onChange: (e) => setType(e.target.value),
								children: HOUSING_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t }, t))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Barrio",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
								value: barrio,
								onChange: (e) => setBarrio(e.target.value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Todos"
								}), BARRIOS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: b }, b))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Disponibilidad",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
								value: avail,
								onChange: (e) => setAvail(e.target.value),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Cualquiera"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "inmediata",
										children: "Inmediata"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "semestre",
										children: "Inicio de semestre"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Desde (COP)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								value: min,
								onChange: (e) => setMin(Number(e.target.value) || 0)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Hasta (COP)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								value: max,
								onChange: (e) => setMax(Number(e.target.value) || 0)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Sede",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
								value: campus,
								onChange: (e) => setCampus(e.target.value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Cualquiera"
								}), CAMPUSES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Ordenar",
							className: "lg:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
								value: sort,
								onChange: (e) => setSort(e.target.value),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "recommended",
										children: "Recomendados"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "priceAsc",
										children: "Precio menor"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "priceDesc",
										children: "Precio mayor"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "distance",
										children: "Más cerca"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "rating",
										children: "Mejor calificación"
									})
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 text-xs font-medium text-foreground",
						children: "Servicios obligatorios"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => toggleService(s),
							className: cn("rounded-full border px-3 py-1.5 text-xs font-medium", services.includes(s) ? "border-primary bg-secondary text-secondary-foreground" : "border-border bg-card text-muted-foreground"),
							children: s
						}, s))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 text-xs font-medium text-foreground",
						children: "Cercanía a pie"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							{
								n: 20,
								label: "Cualquiera"
							},
							{
								n: 5,
								label: "≤ 5 min"
							},
							{
								n: 10,
								label: "≤ 10 min"
							},
							{
								n: 15,
								label: "≤ 15 min"
							}
						].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setDistance(d.n),
							className: cn("rounded-full border px-3 py-1.5 text-xs font-medium", distance === d.n ? "border-primary bg-secondary text-secondary-foreground" : "border-border bg-card text-muted-foreground"),
							children: d.label
						}, d.label))
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-end justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl",
				children: "Alojamientos disponibles"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-sm text-muted-foreground",
				children: [
					list.length,
					" resultado",
					list.length === 1 ? "" : "s"
				]
			})]
		}),
		list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-dashed border-border bg-card p-10 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl",
				children: "No hay alojamientos con esos filtros"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Amplía el presupuesto, la distancia o quita un servicio."
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 xl:grid-cols-3",
			children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyCard, { property: p }, p.id))
		})
	] });
}
function FavoritesPanel() {
	const properties = useHabita((s) => s.properties);
	const favorites = useHabita((s) => s.favorites);
	const toggle = useHabita((s) => s.toggleFavorite);
	const list = properties.filter((p) => favorites.includes(p.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "mb-4 font-display text-3xl",
		children: "Favoritos"
	}), list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground",
		children: "Aún no tienes favoritos. Guarda un alojamiento desde la búsqueda."
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-5 sm:grid-cols-2 xl:grid-cols-3",
		children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyCard, { property: p }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "danger",
				className: "mt-2",
				onClick: () => toggle(p.id),
				children: "Quitar de favoritos"
			})]
		}, p.id))
	})] });
}
function MessagesPanel() {
	const chats = useHabita((s) => s.studentChats);
	const active = useHabita((s) => s.activeStudentChat);
	const setActive = useHabita((s) => s.setActiveStudentChat);
	const send = useHabita((s) => s.sendStudentMessage);
	const [draft, setDraft] = (0, import_react.useState)("");
	const current = chats.find((c) => c.id === active) ?? chats[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "mb-4 font-display text-3xl",
		children: "Mensajes"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid overflow-hidden rounded-xl border border-border bg-card md:grid-cols-[18rem_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-border md:border-r md:border-b-0",
			children: chats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setActive(c.id),
				className: cn("flex w-full items-start gap-3 border-b border-border p-4 text-left last:border-0", c.id === current.id ? "bg-secondary" : "hover:bg-muted"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarBubble, {
					initials: c.name.slice(0, 1),
					className: "size-10"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate text-sm font-medium",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate text-xs text-primary",
							children: c.property
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate text-xs text-muted-foreground",
							children: c.messages[c.messages.length - 1]?.text
						})
					]
				})]
			}, c.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-[28rem] flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: current.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-primary",
						children: current.property
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "success",
						children: "Verificado"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 space-y-3 overflow-auto bg-background p-4",
					children: current.messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("max-w-[75%] rounded-lg px-3 py-2 text-sm leading-relaxed", m.from === "me" ? "ml-auto bg-primary text-primary-foreground" : "border border-border bg-card"),
						children: [m.text, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs opacity-70",
							children: m.time
						})]
					}, `${m.time}-${i}`))
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
						placeholder: "Escribe un mensaje..."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "cta",
						children: "Enviar"
					})]
				})
			]
		})]
	})] });
}
function ProfilePanel() {
	const [status, setStatus] = (0, import_react.useState)("");
	const [identity, setIdentity] = (0, import_react.useState)("Identidad verificada · documento registrado");
	const [quiet, setQuiet] = (0, import_react.useState)(true);
	const [smoke, setSmoke] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "mb-4 font-display text-3xl",
		children: "Perfil del estudiante"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-border bg-card p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl",
						children: "Información personal"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "success",
						children: "Verificado"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Nombre completo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: "Mateo Castro" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Teléfono",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: "+57 300 555 0188" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Correo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								defaultValue: "mateo.castro@unipamplona.edu.co",
								disabled: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Universidad",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
								defaultValue: "Universidad de Pamplona",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Universidad de Pamplona" })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Carrera",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: "Ingeniería de Sistemas" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Semestre",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
								defaultValue: "6° semestre",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "6° semestre" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "7° semestre" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "8° semestre" })
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-4",
					onClick: () => setStatus("Cambios guardados en tu perfil."),
					children: "Guardar cambios"
				}),
				status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-success",
					children: status
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-border bg-card p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-4 font-display text-xl",
					children: "Preferencias de convivencia"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [{
						on: quiet,
						set: setQuiet,
						title: "Ambiente tranquilo",
						copy: "Priorizar espacios de estudio"
					}, {
						on: smoke,
						set: setSmoke,
						title: "No fumadores",
						copy: "Preferencia de vivienda"
					}].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => c.set(!c.on),
						className: cn("rounded-lg border p-3 text-left", c.on ? "border-primary bg-secondary" : "border-border"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-medium",
							children: c.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: c.copy
						})]
					}, c.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-lg border border-dashed border-border p-5 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium",
							children: "Documento de identidad"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Cédula · JPG, PNG o PDF. La carga es simulada."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-3 inline-flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								className: "hidden",
								accept: "image/*,.pdf",
								onChange: (e) => {
									const file = e.target.files?.[0];
									if (file) setIdentity(`Documento seleccionado: ${file.name}`);
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-11 items-center rounded-md bg-secondary px-4 text-sm font-medium text-secondary-foreground",
								children: "Seleccionar documento"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs font-medium text-success",
							children: identity
						})
					]
				})
			]
		})]
	})] });
}
var SplitComponent = StudentApp;
//#endregion
export { SplitComponent as component };
