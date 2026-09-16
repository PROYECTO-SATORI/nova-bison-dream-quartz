import "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { l as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as create } from "../_libs/zustand.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatCop(value) {
	return new Intl.NumberFormat("es-CO", {
		style: "currency",
		currency: "COP",
		maximumFractionDigits: 0
	}).format(value);
}
function formatCompact(value) {
	return new Intl.NumberFormat("es-CO").format(value);
}
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 50 50",
		className: cn("size-11", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "50",
				height: "50",
				rx: "14",
				className: "fill-primary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M9 24.5 25 11l16 13.5v14.2c0 1.8-1.5 3.3-3.3 3.3H12.3C10.5 42 9 40.5 9 38.7Z",
				className: "fill-primary-foreground"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M7.5 25.5 25 10.5l17.5 15-2.8 3.2L25 15.1 10.3 28.7Z",
				className: "fill-primary-foreground"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "21",
				y: "29",
				width: "7",
				height: "13",
				rx: "1.5",
				className: "fill-cta"
			})
		]
	});
}
function BrandMark({ subtitle, inverted = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: inverted ? "size-10" : "size-11" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("font-display text-xl font-semibold tracking-tight", inverted ? "text-navy-foreground" : "text-foreground"),
				children: ["Habita", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: inverted ? "text-secondary" : "text-primary",
					children: "U"
				})]
			}), subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("text-xs font-semibold tracking-widest uppercase", inverted ? "text-navy-foreground/70" : "text-muted-foreground"),
				children: subtitle
			}) : null]
		})]
	});
}
function AppShell({ subtitle, nav, actions, children, footer, darkFooter = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-svh bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 border-b border-border/80 bg-card/90 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { subtitle })
						}),
						nav ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-1 md:flex",
							children: nav
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2",
							children: actions
						})
					]
				}), nav ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex gap-1 overflow-auto px-4 pb-3 md:hidden",
					children: nav
				}) : null]
			}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: cn("mt-10", darkFooter ? "bg-navy text-navy-foreground" : "border-t border-border bg-card text-muted-foreground"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between",
					children: footer ?? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Habita U · Vivienda universitaria en Pamplona" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Busca · Compara · Contacta · Reserva" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Soporte · Privacidad" })
					] })
				})
			})
		]
	});
}
function NavButton({ active, children, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150", active ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"),
		children
	});
}
function AvatarBubble({ initials, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("grid size-10 place-items-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground", className),
		children: initials
	});
}
function Photo({ src, alt, className, imgClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("overflow-hidden bg-muted", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: cn("h-full w-full object-cover", imgClassName)
		})
	});
}
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium", {
	variants: { variant: {
		default: "bg-secondary text-secondary-foreground",
		success: "bg-success-soft text-success",
		warning: "bg-warning-soft text-warning",
		danger: "bg-danger-soft text-danger",
		navy: "bg-navy text-navy-foreground",
		outline: "border border-border bg-card text-muted-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,transform,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-navy",
			cta: "bg-cta text-cta-foreground hover:opacity-90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-muted",
			outline: "border border-border bg-card text-foreground hover:bg-muted",
			ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
			danger: "bg-danger-soft text-danger hover:opacity-90",
			navy: "bg-navy text-navy-foreground hover:bg-ink",
			success: "bg-success-soft text-success hover:opacity-90"
		},
		size: {
			sm: "h-9 px-3",
			md: "h-11 px-4",
			lg: "h-12 px-5 text-base",
			icon: "size-11",
			pill: "h-10 px-4 rounded-full"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-lg border border-border bg-card px-3 text-sm text-foreground outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-24 w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20", className),
		...props
	});
}
function NativeSelect({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: cn("h-11 w-full rounded-lg border border-border bg-card px-3 text-sm text-foreground outline-none transition-[border-color,box-shadow] duration-150 focus:border-ring focus:ring-2 focus:ring-ring/20", className),
		...props
	});
}
function Field({ label, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: cn("grid gap-1.5 text-xs font-medium text-muted-foreground", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-foreground",
			children: label
		}), children]
	});
}
var IMAGES = {
	hero: "/images/hero-pamplona.jpg",
	suite: "/images/room-suite.jpg",
	studio: "/images/studio.jpg",
	kitchen: "/images/kitchen.jpg",
	shared: "/images/shared-room.jpg",
	living: "/images/living.jpg",
	patio: "/images/patio.jpg",
	bath: "/images/bath.jpg",
	facade: "/images/facade.jpg",
	study: "/images/study.jpg"
};
var HOUSING_TYPES = [
	"Todos",
	"Habitación individual",
	"Habitación compartida",
	"Apartaestudio",
	"Apartamento completo",
	"Casa"
];
var BARRIOS = [
	"Centro",
	"El Carmen",
	"Universidad",
	"Santa Marta",
	"La Ísola"
];
var CAMPUSES = [
	"Sede Central",
	"Campus Rosario",
	"Villa del Rosario",
	"Parque Águeda Gallardo"
];
var SERVICES = [
	"Agua",
	"Luz",
	"Gas",
	"Wi-Fi",
	"Lavadora",
	"Cocina"
];
var PROPERTIES = [
	{
		id: "p1",
		type: "Habitación individual",
		price: 48e4,
		barrio: "El Carmen",
		availability: "inmediata",
		distance: 5,
		campus: "Sede Central",
		title: "Habitación suite amoblada cerca a la Universidad",
		location: "Barrio El Carmen · Pamplona, Norte de Santander",
		rating: 4.92,
		reviewsCount: 18,
		owner: "Elena Ramírez",
		ownerInfo: "Arrendando a estudiantes por 4 años. Responde normalmente en menos de 15 min.",
		deposit: "Sin depósito",
		description: "Habitación individual amoblada, con escritorio, baño privado y ambiente tranquilo de estudio. Queda a pocas cuadras del Parque Águeda Gallardo y de la Sede Central de la Universidad de Pamplona.",
		services: [
			"Agua",
			"Luz",
			"Gas",
			"Wi-Fi",
			"Lavadora",
			"Cocina"
		],
		highlights: [
			"Amoblado",
			"Baño privado",
			"Wi-Fi 300 Mbps",
			"Cocina equipada"
		],
		rules: [
			"Mascotas: no",
			"Visitas: sí, hasta 9:00 p. m.",
			"Fumar: no",
			"Entrada: 6:00 a. m. – 10:00 p. m."
		],
		images: [
			IMAGES.suite,
			IMAGES.study,
			IMAGES.bath,
			IMAGES.facade
		],
		descDistance: "5 min a pie de la Sede Central y 3 min del Parque Águeda Gallardo",
		campusText: "Universidad de Pamplona · Sede Central",
		rooms: 1,
		baths: 1,
		views: 342,
		saved: 28,
		ownerId: "carlos",
		status: "available",
		reviews: [{
			author: "Laura M.",
			stars: 5,
			text: "El alojamiento coincide con las fotos. El escritorio y la luz natural hacen fácil estudiar."
		}, {
			author: "Andrés P.",
			stars: 5,
			text: "Buena ubicación y atención rápida de la arrendadora."
		}]
	},
	{
		id: "p2",
		type: "Habitación compartida",
		price: 35e4,
		barrio: "Santa Marta",
		availability: "semestre",
		distance: 8,
		campus: "Sede Central",
		title: "Habitación compartida para dos estudiantes",
		location: "Barrio Santa Marta · Pamplona, Norte de Santander",
		rating: 4.65,
		reviewsCount: 11,
		owner: "Carlos Andrés Rojas",
		ownerInfo: "Propietario verificado. Responde en menos de una hora.",
		deposit: "Depósito $150.000",
		description: "Habitación pensada para dos estudiantes, con escritorios independientes, armario y zonas comunes organizadas. Ideal si buscas un canon más bajo sin alejarte del campus.",
		services: [
			"Agua",
			"Luz",
			"Gas",
			"Wi-Fi",
			"Lavadora"
		],
		highlights: [
			"Dos escritorios",
			"Wi-Fi",
			"Zona de estudio",
			"Servicios incluidos"
		],
		rules: [
			"Mascotas: no",
			"Visitas: sí",
			"Fumar: no",
			"Entrada: 6:00 a. m. – 10:00 p. m."
		],
		images: [
			IMAGES.shared,
			IMAGES.study,
			IMAGES.kitchen,
			IMAGES.facade
		],
		descDistance: "8 min a pie de la Sede Central",
		campusText: "Universidad de Pamplona · Sede Central",
		rooms: 1,
		baths: 1,
		views: 518,
		saved: 45,
		ownerId: "carlos",
		status: "rented",
		reviews: [{
			author: "Valentina G.",
			stars: 4,
			text: "Espacio limpio y tranquilo. El Wi-Fi podría ser más estable en las noches."
		}]
	},
	{
		id: "p3",
		type: "Apartaestudio",
		price: 62e4,
		barrio: "Centro",
		availability: "inmediata",
		distance: 7,
		campus: "Sede Central",
		title: "Apartaestudio independiente en el Centro",
		location: "Centro · Pamplona, Norte de Santander",
		rating: 4.78,
		reviewsCount: 25,
		owner: "María Fernanda Peña",
		ownerInfo: "Arrendadora verificada. Atención de lunes a sábado.",
		deposit: "Depósito $300.000",
		description: "Apartaestudio con cocina, baño privado y espacio de trabajo. Entrada independiente, pensado para quien busca privacidad a minutos de la plaza y la universidad.",
		services: [
			"Agua",
			"Luz",
			"Gas",
			"Wi-Fi",
			"Cocina"
		],
		highlights: [
			"Entrada independiente",
			"Baño privado",
			"Cocina",
			"Escritorio"
		],
		rules: [
			"Mascotas: consultar",
			"Visitas: sí",
			"Fumar: no",
			"Entrada libre con llave"
		],
		images: [
			IMAGES.studio,
			IMAGES.kitchen,
			IMAGES.bath,
			IMAGES.living
		],
		descDistance: "7 min a pie de la Sede Central y 4 min del Parque",
		campusText: "Universidad de Pamplona · Sede Central",
		rooms: 1,
		baths: 1,
		views: 190,
		saved: 14,
		ownerId: "carlos",
		status: "available",
		reviews: [{
			author: "Mateo R.",
			stars: 5,
			text: "Privacidad real y cocina útil. Muy cerca del centro."
		}, {
			author: "Camila S.",
			stars: 4,
			text: "Bonito y luminoso. El depósito se devolvió sin problemas."
		}]
	},
	{
		id: "p4",
		type: "Apartamento completo",
		price: 85e4,
		barrio: "Universidad",
		availability: "inmediata",
		distance: 10,
		campus: "Sede Central",
		title: "Apartamento completo para uno o dos estudiantes",
		location: "Barrio Universidad · Pamplona, Norte de Santander",
		rating: 4.7,
		reviewsCount: 9,
		owner: "Julián Torres",
		ownerInfo: "Propietario verificado. Visitas con cita previa.",
		deposit: "Depósito $400.000",
		description: "Apartamento de dos habitaciones, cocina equipada y zona de ropas. Pensado para compartir entre compañeros de carrera sin perder espacio de estudio.",
		services: [
			"Agua",
			"Luz",
			"Gas",
			"Wi-Fi",
			"Lavadora",
			"Cocina"
		],
		highlights: [
			"2 habitaciones",
			"Cocina equipada",
			"Zona de ropas",
			"Internet"
		],
		rules: [
			"Mascotas: no",
			"Visitas: sí",
			"Fumar: no",
			"Entrada: 5:00 a. m. – 11:00 p. m."
		],
		images: [
			IMAGES.living,
			IMAGES.kitchen,
			IMAGES.study,
			IMAGES.bath
		],
		descDistance: "10 min a pie de la Sede Central",
		campusText: "Universidad de Pamplona · Sede Central",
		rooms: 2,
		baths: 1,
		views: 210,
		saved: 19,
		ownerId: "julian",
		status: "available",
		reviews: [{
			author: "Daniela T.",
			stars: 5,
			text: "Compartimos entre dos y el espacio alcanza bien. La cocina es el plus."
		}]
	},
	{
		id: "p5",
		type: "Casa",
		price: 78e4,
		barrio: "La Ísola",
		availability: "semestre",
		distance: 12,
		campus: "Campus Rosario",
		title: "Casa universitaria con patio y zona de estudio",
		location: "La Ísola · Pamplona, Norte de Santander",
		rating: 4.84,
		reviewsCount: 14,
		owner: "Ana Lucía Gómez",
		ownerInfo: "Arrendadora verificada. Experiencia con grupos de estudiantes.",
		deposit: "Depósito $300.000",
		description: "Casa con habitaciones, patio interior y un espacio común de estudio. Buena opción para un grupo que quiere vivir cerca, con luz y un patio para despejarse.",
		services: [
			"Agua",
			"Luz",
			"Gas",
			"Wi-Fi",
			"Lavadora",
			"Cocina"
		],
		highlights: [
			"Patio",
			"Zona de estudio",
			"Cocina amplia",
			"Lavadora"
		],
		rules: [
			"Mascotas: consultar",
			"Visitas: sí",
			"Fumar: no",
			"Horario nocturno tranquilo"
		],
		images: [
			IMAGES.patio,
			IMAGES.living,
			IMAGES.kitchen,
			IMAGES.facade
		],
		descDistance: "12 min a pie de la Sede Central",
		campusText: "Universidad de Pamplona · referencia Campus Rosario",
		rooms: 3,
		baths: 2,
		views: 276,
		saved: 31,
		ownerId: "ana",
		status: "reserved",
		reviews: [{
			author: "Laura M.",
			stars: 5,
			text: "El patio hace la diferencia. Casa amplia y bien mantenida."
		}]
	},
	{
		id: "p6",
		type: "Habitación individual",
		price: 42e4,
		barrio: "La Ísola",
		availability: "inmediata",
		distance: 14,
		campus: "Sede Central",
		title: "Habitación individual con escritorio",
		location: "La Ísola · Pamplona, Norte de Santander",
		rating: 4.55,
		reviewsCount: 7,
		owner: "Luis Eduardo Pardo",
		ownerInfo: "Propietario verificado. Respuesta el mismo día.",
		deposit: "Sin depósito",
		description: "Habitación económica con escritorio, armario y servicios básicos incluidos. Tranquila, para quien prioriza estudiar y un canon contenido.",
		services: [
			"Agua",
			"Luz",
			"Gas",
			"Wi-Fi",
			"Cocina"
		],
		highlights: [
			"Escritorio",
			"Wi-Fi",
			"Servicios incluidos"
		],
		rules: [
			"Mascotas: no",
			"Visitas: hasta 8:00 p. m.",
			"Fumar: no",
			"Entrada: 6:00 a. m. – 10:00 p. m."
		],
		images: [
			IMAGES.study,
			IMAGES.suite,
			IMAGES.bath,
			IMAGES.facade
		],
		descDistance: "14 min a pie de la Sede Central",
		campusText: "Universidad de Pamplona · Sede Central",
		rooms: 1,
		baths: 1,
		views: 124,
		saved: 9,
		ownerId: "luis",
		status: "available",
		reviews: [{
			author: "Sebastián L.",
			stars: 4,
			text: "Cumple. El escritorio junto a la ventana es perfecto para clases virtuales."
		}]
	},
	{
		id: "p7",
		type: "Habitación individual",
		price: 52e4,
		barrio: "Santa Marta",
		availability: "inmediata",
		distance: 9,
		campus: "Sede Central",
		title: "Habitación premium con luz de tarde",
		location: "Barrio Santa Marta · Pamplona, Norte de Santander",
		rating: 4.88,
		reviewsCount: 16,
		owner: "Carlos Martínez",
		ownerInfo: "Arrendador local con experiencia ofreciendo alojamiento a estudiantes.",
		deposit: "Depósito $250.000",
		description: "Habitación amplia, cama doble, escritorio y baño cercano. La luz de la tarde entra por la ventana colonial. Ambiente silencioso, pensado para semestres largos.",
		services: [
			"Agua",
			"Luz",
			"Gas",
			"Wi-Fi",
			"Lavadora",
			"Cocina"
		],
		highlights: [
			"Cama doble",
			"Luz natural",
			"Amoblado",
			"Cocina compartida"
		],
		rules: [
			"Mascotas: no",
			"Visitas: con horario",
			"Fumar: no",
			"Entrada: 6:00 a. m. – 10:00 p. m."
		],
		images: [
			IMAGES.suite,
			IMAGES.bath,
			IMAGES.kitchen,
			IMAGES.study
		],
		descDistance: "9 min a pie de la Sede Central",
		campusText: "Universidad de Pamplona · Sede Central",
		rooms: 1,
		baths: 1,
		views: 276,
		saved: 31,
		ownerId: "carlos",
		status: "reserved",
		reviews: [{
			author: "Natalia V.",
			stars: 5,
			text: "La habitación es exactamente como en las fotos. Muy luminosa."
		}]
	},
	{
		id: "p8",
		type: "Apartamento completo",
		price: 95e4,
		barrio: "El Carmen",
		availability: "inmediata",
		distance: 6,
		campus: "Parque Águeda Gallardo",
		title: "Apartamento de dos habitaciones en El Carmen",
		location: "El Carmen · Pamplona, Norte de Santander",
		rating: 4.81,
		reviewsCount: 12,
		owner: "Elena Ramírez",
		ownerInfo: "Arrendadora verificada. Cuatro años alquilando a universitarios.",
		deposit: "Depósito $450.000",
		description: "Apartamento completo con sala, cocina y dos habitaciones. Ideal para compañeros que quieren vivir juntos a pocos minutos del parque principal.",
		services: [
			"Agua",
			"Luz",
			"Gas",
			"Wi-Fi",
			"Lavadora",
			"Cocina"
		],
		highlights: [
			"Sala amplia",
			"Dos habitaciones",
			"Cocina",
			"Lavadora"
		],
		rules: [
			"Mascotas: no",
			"Visitas: sí",
			"Fumar: no",
			"Entrada libre con llave"
		],
		images: [
			IMAGES.living,
			IMAGES.studio,
			IMAGES.kitchen,
			IMAGES.patio
		],
		descDistance: "6 min a pie del Parque Águeda Gallardo",
		campusText: "Universidad de Pamplona · Parque Águeda Gallardo",
		rooms: 2,
		baths: 1,
		views: 164,
		saved: 22,
		ownerId: "elena",
		status: "available",
		reviews: [{
			author: "Juan C.",
			stars: 5,
			text: "Perfecto para compartir. La sala queda muy bien para estudiar en grupo."
		}]
	},
	{
		id: "p9",
		type: "Casa",
		price: 115e4,
		barrio: "Centro",
		availability: "semestre",
		distance: 4,
		campus: "Sede Central",
		title: "Casa colonial a una cuadra del centro",
		location: "Centro · Pamplona, Norte de Santander",
		rating: 4.9,
		reviewsCount: 21,
		owner: "Diego Ramírez",
		ownerInfo: "Propietario local. Casa familiar adaptada para estudiantes.",
		deposit: "Depósito $500.000",
		description: "Casa de fachada colonial, patio interior y tres habitaciones. A una cuadra de la plaza. Conserva el carácter del centro histórico con cocina y zonas comunes renovadas.",
		services: [
			"Agua",
			"Luz",
			"Gas",
			"Wi-Fi",
			"Lavadora",
			"Cocina"
		],
		highlights: [
			"Patio interior",
			"3 habitaciones",
			"Centro histórico",
			"Cocina amplia"
		],
		rules: [
			"Mascotas: consultar",
			"Visitas: sí",
			"Fumar: no",
			"Ambiente residencial"
		],
		images: [
			IMAGES.facade,
			IMAGES.patio,
			IMAGES.living,
			IMAGES.kitchen
		],
		descDistance: "4 min a pie de la Sede Central",
		campusText: "Universidad de Pamplona · Sede Central",
		rooms: 3,
		baths: 2,
		views: 402,
		saved: 54,
		ownerId: "diego",
		status: "available",
		reviews: [{
			author: "Mariana O.",
			stars: 5,
			text: "Vivir en el centro con patio es un lujo. La casa se siente cuidada."
		}]
	}
];
var STUDENT_CHATS = [{
	id: "c1",
	name: "Elena Ramírez",
	property: "Habitación suite · El Carmen",
	messages: [
		{
			from: "them",
			text: "Hola Mateo, sí está disponible para el próximo semestre.",
			time: "09:12"
		},
		{
			from: "me",
			text: "Perfecto. ¿Los servicios están incluidos en el canon?",
			time: "09:15"
		},
		{
			from: "them",
			text: "Sí: agua, luz, gas e internet. Podemos coordinar una visita.",
			time: "09:17"
		}
	]
}, {
	id: "c2",
	name: "María Fernanda Peña",
	property: "Apartaestudio · Centro",
	messages: [{
		from: "them",
		text: "Hola, gracias por tu interés. ¿Desde qué fecha buscas?",
		time: "Ayer"
	}, {
		from: "me",
		text: "Desde el inicio del próximo semestre. También quisiera conocerlo.",
		time: "Ayer"
	}]
}];
var OWNER_CHATS = [
	{
		id: "Valentina Gómez",
		name: "Valentina Gómez",
		property: "Habitación suite · El Carmen",
		messages: [{
			from: "them",
			text: "Hola, ¿la habitación sigue disponible para el semestre?",
			time: "09:12"
		}, {
			from: "me",
			text: "Sí, está disponible. Podemos coordinar una visita.",
			time: "09:16"
		}]
	},
	{
		id: "Mateo Ríos",
		name: "Mateo Ríos",
		property: "Apartaestudio · Centro",
		messages: [{
			from: "them",
			text: "¿Incluye servicios y wifi?",
			time: "10:02"
		}, {
			from: "me",
			text: "Sí, están incluidos en la publicación.",
			time: "10:05"
		}]
	},
	{
		id: "Laura Méndez",
		name: "Laura Méndez",
		property: "Habitación premium · Santa Marta",
		messages: [{
			from: "them",
			text: "¿Puedo visitarla el jueves?",
			time: "Ayer"
		}]
	}
];
var OWNER_REQUESTS = [
	{
		id: "r1",
		name: "Valentina Gómez",
		initials: "VG",
		program: "Medicina · Universidad de Pamplona",
		type: "visit",
		property: "Habitación suite · El Carmen",
		detail: "24 de septiembre, 4:00 p. m.",
		when: "Hace 15 min"
	},
	{
		id: "r2",
		name: "Mateo Ríos",
		initials: "MR",
		program: "Ingeniería · Universidad de Pamplona",
		type: "reserve",
		property: "Apartaestudio · Centro",
		detail: "Ingreso desde el 1 de octubre",
		when: "Hace 1 hora"
	},
	{
		id: "r3",
		name: "Laura Méndez",
		initials: "LM",
		program: "Derecho · Universidad de Pamplona",
		type: "visit",
		property: "Habitación premium · Santa Marta",
		detail: "25 de septiembre, 10:00 a. m.",
		when: "Hace 3 horas"
	}
];
var INCOME_SERIES = [
	{
		month: "Ene",
		value: 1.6
	},
	{
		month: "Feb",
		value: 1.9
	},
	{
		month: "Mar",
		value: 2.1
	},
	{
		month: "Abr",
		value: 2.2
	},
	{
		month: "May",
		value: 2.3
	},
	{
		month: "Jun",
		value: 2.45
	}
];
var UNIVERSITIES = [
	"Universidad de Pamplona",
	"UniAndes",
	"U. Nacional",
	"Javeriana",
	"U. de Antioquia",
	"EAFIT",
	"UniValle"
];
var useHabita = create((set, get) => ({
	properties: PROPERTIES,
	favorites: [
		"p1",
		"p3",
		"p5"
	],
	studentChats: STUDENT_CHATS,
	ownerChats: OWNER_CHATS,
	requests: OWNER_REQUESTS,
	handledRequests: {},
	studentTab: "search",
	ownerTab: "overview",
	adminTab: "overview",
	activeStudentChat: "c1",
	activeOwnerChat: "Valentina Gómez",
	editingPropertyId: null,
	toggleFavorite: (id) => set((s) => ({ favorites: s.favorites.includes(id) ? s.favorites.filter((x) => x !== id) : [...s.favorites, id] })),
	setStudentTab: (tab) => set({ studentTab: tab }),
	setOwnerTab: (tab) => set({
		ownerTab: tab,
		editingPropertyId: tab === "publish" ? get().editingPropertyId : null
	}),
	setAdminTab: (tab) => set({ adminTab: tab }),
	setActiveStudentChat: (id) => set({ activeStudentChat: id }),
	setActiveOwnerChat: (id) => set({ activeOwnerChat: id }),
	sendStudentMessage: (text) => set((s) => ({ studentChats: s.studentChats.map((c) => c.id === s.activeStudentChat ? {
		...c,
		messages: [...c.messages, {
			from: "me",
			text,
			time: "Ahora"
		}]
	} : c) })),
	sendOwnerMessage: (text) => set((s) => ({ ownerChats: s.ownerChats.map((c) => c.id === s.activeOwnerChat ? {
		...c,
		messages: [...c.messages, {
			from: "me",
			text,
			time: "Ahora"
		}]
	} : c) })),
	handleRequest: (id, message) => set((s) => ({ handledRequests: {
		...s.handledRequests,
		[id]: message
	} })),
	updatePropertyStatus: (id, status) => set((s) => ({ properties: s.properties.map((p) => p.id === id ? {
		...p,
		status
	} : p) })),
	removeOwnerProperty: (id) => set((s) => ({ properties: s.properties.filter((p) => p.id !== id) })),
	addProperty: (property) => set((s) => ({ properties: [property, ...s.properties] })),
	updateProperty: (id, patch) => set((s) => ({ properties: s.properties.map((p) => p.id === id ? {
		...p,
		...patch
	} : p) })),
	addReview: (id, review) => set((s) => ({ properties: s.properties.map((p) => p.id === id ? {
		...p,
		reviews: [review, ...p.reviews],
		reviewsCount: p.reviewsCount + 1
	} : p) })),
	setEditingProperty: (id) => set({
		editingPropertyId: id,
		ownerTab: id ? "publish" : get().ownerTab
	})
}));
//#endregion
export { useHabita as C, formatCop as S, SERVICES as _, Button as a, cn as b, HOUSING_TYPES as c, Input as d, Logo as f, Photo as g, PROPERTIES as h, Badge as i, IMAGES as l, NavButton as m, AvatarBubble as n, CAMPUSES as o, NativeSelect as p, BARRIOS as r, Field as s, AppShell as t, INCOME_SERIES as u, Textarea as v, formatCompact as x, UNIVERSITIES as y };
