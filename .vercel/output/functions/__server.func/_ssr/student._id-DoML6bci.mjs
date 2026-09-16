import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as useHabita, S as formatCop, a as Button, b as cn, d as Input, g as Photo, i as Badge, l as IMAGES, n as AvatarBubble, p as NativeSelect, s as Field, t as AppShell, v as Textarea } from "./store-vi-XQxVD.mjs";
import { d as MapPin, h as Heart, i as Star, u as MessageCircle, v as Flag, w as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as DialogContent, t as Dialog } from "./dialog-B571QuZ5.mjs";
import { n as Route } from "./router-DZpW3C3E.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/student._id-DoML6bci.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PropertyDetail({ id }) {
	const property = useHabita((s) => s.properties.find((p) => p.id === id));
	const favorites = useHabita((s) => s.favorites);
	const toggleFavorite = useHabita((s) => s.toggleFavorite);
	const setStudentTab = useHabita((s) => s.setStudentTab);
	const addReview = useHabita((s) => s.addReview);
	const navigate = useNavigate();
	const [photo, setPhoto] = (0, import_react.useState)(0);
	const [visitOpen, setVisitOpen] = (0, import_react.useState)(false);
	const [reserveOpen, setReserveOpen] = (0, import_react.useState)(false);
	const [reviewOpen, setReviewOpen] = (0, import_react.useState)(false);
	const [reportOpen, setReportOpen] = (0, import_react.useState)(false);
	const [stars, setStars] = (0, import_react.useState)(0);
	const [reviewText, setReviewText] = (0, import_react.useState)("");
	const [flash, setFlash] = (0, import_react.useState)("");
	if (!property) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		subtitle: "Alojamiento",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-3xl px-6 py-20 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "No encontramos este inmueble"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/student",
					children: "Volver a la búsqueda"
				})
			})]
		})
	});
	const loved = favorites.includes(property.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		subtitle: "Alojamiento · Pamplona",
		nav: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/student",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Volver a buscar"]
			})
		}),
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarBubble, { initials: "MC" }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-7xl px-4 py-8 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary",
					onClick: () => navigate({ to: "/student" }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Volver a resultados"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[1.15fr_0.85fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-xl border border-border bg-card p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
								src: property.images[photo] ?? property.images[0],
								alt: property.title,
								className: "h-[22rem] rounded-lg sm:h-[28rem]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex gap-2 overflow-auto",
								children: property.images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setPhoto(i),
									className: cn("h-16 w-24 shrink-0 overflow-hidden rounded-md border-2", i === photo ? "border-primary" : "border-transparent"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
										src,
										alt: "",
										className: "h-full w-full"
									})
								}, src + i))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mt-5 rounded-xl border border-border bg-card p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl",
								children: "Descripción"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: property.description
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mt-5 rounded-xl border border-border bg-card p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl",
								children: "Servicios incluidos"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 grid gap-2 sm:grid-cols-2",
								children: property.services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-md bg-muted px-3 py-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium",
										children: s
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: "Incluido en el canon"
									})]
								}, s))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mt-5 rounded-xl border border-border bg-card p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl",
								children: "Reglas de la vivienda"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 grid gap-2 sm:grid-cols-2",
								children: property.rules.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-md bg-muted px-3 py-2 text-sm",
									children: r
								}, r))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mt-5 overflow-hidden rounded-xl border border-border bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-52",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
										src: IMAGES.hero,
										alt: "Entorno de Pamplona",
										className: "h-full w-full"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy/25" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-4 left-4 rounded-full bg-card px-3 py-2 text-sm font-medium shadow-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mr-1 inline size-3.5 text-primary" }),
											property.barrio,
											", Pamplona"
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "p-4 text-sm text-muted-foreground",
								children: [
									property.descDistance,
									" · ",
									property.campusText
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mt-5 rounded-xl border border-border bg-card p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-3 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-xl",
										children: "Reseñas"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm font-medium text-warning",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "mr-1 inline size-3.5 fill-warning" }), property.rating.toFixed(2)]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "divide-y divide-border",
									children: property.reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium",
												children: r.author
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-warning",
												children: "★".repeat(r.stars)
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted-foreground",
											children: r.text
										})]
									}, r.author + r.text))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "secondary",
									className: "mt-3",
									onClick: () => setReviewOpen(true),
									children: "Dejar una reseña"
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "lg:sticky lg:top-24 lg:self-start",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-5 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: property.type }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: property.availability === "inmediata" ? "success" : "warning",
										children: property.availability === "inmediata" ? "Disponibilidad inmediata" : "Inicio de semestre"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-3 font-display text-3xl leading-tight",
									children: property.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 flex items-center gap-1.5 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }),
										" ",
										property.location
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm font-medium text-warning",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "mr-1 inline size-3.5 fill-warning" }),
										property.rating.toFixed(2),
										" (",
										property.reviewsCount,
										" reseñas)"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 flex items-end justify-between rounded-lg bg-muted p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: "Canon mensual"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-3xl text-primary tabular-nums",
											children: formatCop(property.price)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: property.deposit
										})
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex flex-wrap gap-2",
									children: property.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										children: h
									}, h))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex items-center gap-3 rounded-lg border border-border p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarBubble, { initials: property.owner.slice(0, 1) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "truncate font-medium",
											children: property.owner
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-success",
											children: "Arrendador verificado"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: property.ownerInfo
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 grid gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "cta",
											onClick: () => {
												setStudentTab("messages");
												navigate({ to: "/student" });
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), " Contactar"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "secondary",
												onClick: () => setVisitOpen(true),
												children: "Solicitar visita"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												onClick: () => setReserveOpen(true),
												children: "Reservar"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: loved ? "cta" : "outline",
											onClick: () => toggleFavorite(property.id),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4", loved && "fill-cta-foreground") }), loved ? "Guardado" : "Guardar"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "danger",
											onClick: () => setReportOpen(true),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, { className: "size-4" }), " Reportar publicación"]
										})
									]
								}),
								flash ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-success",
									children: flash
								}) : null
							]
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: visitOpen,
				onOpenChange: setVisitOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					title: "Solicitar visita",
					description: "Elige fecha y horario para conocer el inmueble.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Fecha",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "date",
									defaultValue: isoPlus(1)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Horario",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
									defaultValue: "4:00 p. m.",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "8:00 a. m." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "10:00 a. m." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "2:00 p. m." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "4:00 p. m." })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Mensaje",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, { defaultValue: "Hola, me gustaría conocer el inmueble y confirmar las condiciones de arriendo." })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => {
									setVisitOpen(false);
									setFlash("Solicitud de visita enviada al arrendador.");
								},
								children: "Enviar solicitud"
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: reserveOpen,
				onOpenChange: setReserveOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					title: "Solicitar reserva",
					description: "Queda pendiente de aprobación del arrendador.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Fecha de inicio",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "date",
									defaultValue: isoPlus(7)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Duración",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "1 semestre" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "6 meses" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "12 meses" })
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Mensaje",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, { defaultValue: "Hola, deseo solicitar la reserva de este alojamiento para el próximo semestre." })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "cta",
								onClick: () => {
									setReserveOpen(false);
									setFlash("Reserva enviada. Estado: pendiente de aprobación.");
								},
								children: "Enviar reserva"
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: reviewOpen,
				onOpenChange: setReviewOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					title: "Califica tu experiencia",
					description: "Comparte cómo fue habitar este inmueble.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center gap-1",
								children: [
									1,
									2,
									3,
									4,
									5
								].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setStars(n),
									className: cn("text-2xl", n <= stars ? "text-warning" : "text-border"),
									"aria-label": `${n} estrellas`,
									children: "★"
								}, n))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: reviewText,
								onChange: (e) => setReviewText(e.target.value),
								placeholder: "Estado de la vivienda, servicios y trato del arrendador..."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => {
									if (!stars || !reviewText.trim()) return;
									addReview(property.id, {
										author: "Mateo C.",
										stars,
										text: reviewText.trim()
									});
									setReviewOpen(false);
									setFlash("Reseña registrada para moderación.");
									setReviewText("");
									setStars(0);
								},
								children: "Publicar reseña"
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: reportOpen,
				onOpenChange: setReportOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					title: "Reportar publicación",
					description: "Ayúdanos a detectar precios falsos o fotos engañosas.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Motivo",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Información o precio falso" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Fotos engañosas" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "El inmueble no existe" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Comportamiento sospechoso" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Otro" })
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Descripción",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, { placeholder: "Describe lo ocurrido..." })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "cta",
								onClick: () => {
									setReportOpen(false);
									setFlash("Reporte enviado al equipo de moderación.");
								},
								children: "Enviar reporte"
							})
						]
					})
				})
			})
		]
	});
}
function isoPlus(days) {
	const d = /* @__PURE__ */ new Date();
	d.setDate(d.getDate() + days);
	return d.toISOString().slice(0, 10);
}
function DetailRoute() {
	const { id } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyDetail, { id });
}
//#endregion
export { DetailRoute as component };
