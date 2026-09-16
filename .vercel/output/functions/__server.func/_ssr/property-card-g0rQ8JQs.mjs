import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as useHabita, S as formatCop, a as Button, b as cn, g as Photo, i as Badge } from "./store-vi-XQxVD.mjs";
import { _ as Footprints, d as MapPin, h as Heart, i as Star } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/property-card-g0rQ8JQs.js
var import_jsx_runtime = require_jsx_runtime();
function PropertyCard({ property }) {
	const favorites = useHabita((s) => s.favorites);
	const toggleFavorite = useHabita((s) => s.toggleFavorite);
	const loved = favorites.includes(property.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-lg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src: property.images[0],
					alt: property.title,
					className: "h-52 w-full",
					imgClassName: "transition-transform duration-500 group-hover:scale-105"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": loved ? "Quitar de favoritos" : "Guardar en favoritos",
					onClick: () => toggleFavorite(property.id),
					className: cn("absolute top-3 right-3 grid size-10 place-items-center rounded-full bg-card/95 shadow-sm transition-colors duration-150", loved ? "text-cta" : "text-muted-foreground hover:text-cta"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4", loved && "fill-cta") })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-3 left-3 flex gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: property.availability === "inmediata" ? "success" : "warning",
						children: property.availability === "inmediata" ? "Disponible ahora" : "Inicio de semestre"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-start justify-between gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg leading-snug text-foreground",
						children: property.title
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-1.5 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 shrink-0" }), property.location]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-display text-xl text-primary tabular-nums",
						children: [formatCop(property.price), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1 font-sans text-xs font-medium text-muted-foreground",
							children: "/ mes"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 text-sm font-medium text-warning",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-warning" }),
							property.rating.toFixed(2),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-normal text-muted-foreground",
								children: [
									"(",
									property.reviewsCount,
									")"
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-1.5 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footprints, { className: "size-3.5" }),
						property.distance,
						" min a pie · ",
						property.campus
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-1.5",
					children: [property.services.slice(0, 3).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						children: s
					}, s)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "success",
						children: "Verificado"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-1 w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/student/$id",
						params: { id: property.id },
						children: "Ver alojamiento"
					})
				})
			]
		})]
	});
}
//#endregion
export { PropertyCard as t };
