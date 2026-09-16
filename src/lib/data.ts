export const IMAGES = {
  hero: "/images/hero-pamplona.jpg",
  suite: "/images/room-suite.jpg",
  studio: "/images/studio.jpg",
  kitchen: "/images/kitchen.jpg",
  shared: "/images/shared-room.jpg",
  living: "/images/living.jpg",
  patio: "/images/patio.jpg",
  bath: "/images/bath.jpg",
  facade: "/images/facade.jpg",
  study: "/images/study.jpg",
} as const;

export const HOUSING_TYPES = [
  "Todos",
  "Habitación individual",
  "Habitación compartida",
  "Apartaestudio",
  "Apartamento completo",
  "Casa",
] as const;

export const BARRIOS = [
  "Centro",
  "El Carmen",
  "Universidad",
  "Santa Marta",
  "La Ísola",
] as const;

export const CAMPUSES = [
  "Sede Central",
  "Campus Rosario",
  "Villa del Rosario",
  "Parque Águeda Gallardo",
] as const;

export const SERVICES = ["Agua", "Luz", "Gas", "Wi-Fi", "Lavadora", "Cocina"] as const;

export type HousingType = Exclude<(typeof HOUSING_TYPES)[number], "Todos">;
export type Availability = "inmediata" | "semestre";

export type Review = {
  author: string;
  stars: number;
  text: string;
};

export type Property = {
  id: string;
  type: HousingType;
  price: number;
  barrio: string;
  availability: Availability;
  distance: number;
  campus: string;
  title: string;
  location: string;
  rating: number;
  reviewsCount: number;
  owner: string;
  ownerInfo: string;
  deposit: string;
  description: string;
  services: string[];
  highlights: string[];
  rules: string[];
  images: string[];
  descDistance: string;
  campusText: string;
  rooms: number;
  baths: number;
  views: number;
  saved: number;
  ownerId: string;
  status: "available" | "reserved" | "rented" | "closed";
  reviews: Review[];
};

export const PROPERTIES: Property[] = [
  {
    id: "p1",
    type: "Habitación individual",
    price: 480000,
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
    description:
      "Habitación individual amoblada, con escritorio, baño privado y ambiente tranquilo de estudio. Queda a pocas cuadras del Parque Águeda Gallardo y de la Sede Central de la Universidad de Pamplona.",
    services: ["Agua", "Luz", "Gas", "Wi-Fi", "Lavadora", "Cocina"],
    highlights: ["Amoblado", "Baño privado", "Wi-Fi 300 Mbps", "Cocina equipada"],
    rules: [
      "Mascotas: no",
      "Visitas: sí, hasta 9:00 p. m.",
      "Fumar: no",
      "Entrada: 6:00 a. m. – 10:00 p. m.",
    ],
    images: [IMAGES.suite, IMAGES.study, IMAGES.bath, IMAGES.facade],
    descDistance: "5 min a pie de la Sede Central y 3 min del Parque Águeda Gallardo",
    campusText: "Universidad de Pamplona · Sede Central",
    rooms: 1,
    baths: 1,
    views: 342,
    saved: 28,
    ownerId: "carlos",
    status: "available",
    reviews: [
      {
        author: "Laura M.",
        stars: 5,
        text: "El alojamiento coincide con las fotos. El escritorio y la luz natural hacen fácil estudiar.",
      },
      {
        author: "Andrés P.",
        stars: 5,
        text: "Buena ubicación y atención rápida de la arrendadora.",
      },
    ],
  },
  {
    id: "p2",
    type: "Habitación compartida",
    price: 350000,
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
    description:
      "Habitación pensada para dos estudiantes, con escritorios independientes, armario y zonas comunes organizadas. Ideal si buscas un canon más bajo sin alejarte del campus.",
    services: ["Agua", "Luz", "Gas", "Wi-Fi", "Lavadora"],
    highlights: ["Dos escritorios", "Wi-Fi", "Zona de estudio", "Servicios incluidos"],
    rules: ["Mascotas: no", "Visitas: sí", "Fumar: no", "Entrada: 6:00 a. m. – 10:00 p. m."],
    images: [IMAGES.shared, IMAGES.study, IMAGES.kitchen, IMAGES.facade],
    descDistance: "8 min a pie de la Sede Central",
    campusText: "Universidad de Pamplona · Sede Central",
    rooms: 1,
    baths: 1,
    views: 518,
    saved: 45,
    ownerId: "carlos",
    status: "rented",
    reviews: [
      {
        author: "Valentina G.",
        stars: 4,
        text: "Espacio limpio y tranquilo. El Wi-Fi podría ser más estable en las noches.",
      },
    ],
  },
  {
    id: "p3",
    type: "Apartaestudio",
    price: 620000,
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
    description:
      "Apartaestudio con cocina, baño privado y espacio de trabajo. Entrada independiente, pensado para quien busca privacidad a minutos de la plaza y la universidad.",
    services: ["Agua", "Luz", "Gas", "Wi-Fi", "Cocina"],
    highlights: ["Entrada independiente", "Baño privado", "Cocina", "Escritorio"],
    rules: ["Mascotas: consultar", "Visitas: sí", "Fumar: no", "Entrada libre con llave"],
    images: [IMAGES.studio, IMAGES.kitchen, IMAGES.bath, IMAGES.living],
    descDistance: "7 min a pie de la Sede Central y 4 min del Parque",
    campusText: "Universidad de Pamplona · Sede Central",
    rooms: 1,
    baths: 1,
    views: 190,
    saved: 14,
    ownerId: "carlos",
    status: "available",
    reviews: [
      {
        author: "Mateo R.",
        stars: 5,
        text: "Privacidad real y cocina útil. Muy cerca del centro.",
      },
      {
        author: "Camila S.",
        stars: 4,
        text: "Bonito y luminoso. El depósito se devolvió sin problemas.",
      },
    ],
  },
  {
    id: "p4",
    type: "Apartamento completo",
    price: 850000,
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
    description:
      "Apartamento de dos habitaciones, cocina equipada y zona de ropas. Pensado para compartir entre compañeros de carrera sin perder espacio de estudio.",
    services: ["Agua", "Luz", "Gas", "Wi-Fi", "Lavadora", "Cocina"],
    highlights: ["2 habitaciones", "Cocina equipada", "Zona de ropas", "Internet"],
    rules: ["Mascotas: no", "Visitas: sí", "Fumar: no", "Entrada: 5:00 a. m. – 11:00 p. m."],
    images: [IMAGES.living, IMAGES.kitchen, IMAGES.study, IMAGES.bath],
    descDistance: "10 min a pie de la Sede Central",
    campusText: "Universidad de Pamplona · Sede Central",
    rooms: 2,
    baths: 1,
    views: 210,
    saved: 19,
    ownerId: "julian",
    status: "available",
    reviews: [
      {
        author: "Daniela T.",
        stars: 5,
        text: "Compartimos entre dos y el espacio alcanza bien. La cocina es el plus.",
      },
    ],
  },
  {
    id: "p5",
    type: "Casa",
    price: 780000,
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
    description:
      "Casa con habitaciones, patio interior y un espacio común de estudio. Buena opción para un grupo que quiere vivir cerca, con luz y un patio para despejarse.",
    services: ["Agua", "Luz", "Gas", "Wi-Fi", "Lavadora", "Cocina"],
    highlights: ["Patio", "Zona de estudio", "Cocina amplia", "Lavadora"],
    rules: ["Mascotas: consultar", "Visitas: sí", "Fumar: no", "Horario nocturno tranquilo"],
    images: [IMAGES.patio, IMAGES.living, IMAGES.kitchen, IMAGES.facade],
    descDistance: "12 min a pie de la Sede Central",
    campusText: "Universidad de Pamplona · referencia Campus Rosario",
    rooms: 3,
    baths: 2,
    views: 276,
    saved: 31,
    ownerId: "ana",
    status: "reserved",
    reviews: [
      {
        author: "Laura M.",
        stars: 5,
        text: "El patio hace la diferencia. Casa amplia y bien mantenida.",
      },
    ],
  },
  {
    id: "p6",
    type: "Habitación individual",
    price: 420000,
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
    description:
      "Habitación económica con escritorio, armario y servicios básicos incluidos. Tranquila, para quien prioriza estudiar y un canon contenido.",
    services: ["Agua", "Luz", "Gas", "Wi-Fi", "Cocina"],
    highlights: ["Escritorio", "Wi-Fi", "Servicios incluidos"],
    rules: ["Mascotas: no", "Visitas: hasta 8:00 p. m.", "Fumar: no", "Entrada: 6:00 a. m. – 10:00 p. m."],
    images: [IMAGES.study, IMAGES.suite, IMAGES.bath, IMAGES.facade],
    descDistance: "14 min a pie de la Sede Central",
    campusText: "Universidad de Pamplona · Sede Central",
    rooms: 1,
    baths: 1,
    views: 124,
    saved: 9,
    ownerId: "luis",
    status: "available",
    reviews: [
      {
        author: "Sebastián L.",
        stars: 4,
        text: "Cumple. El escritorio junto a la ventana es perfecto para clases virtuales.",
      },
    ],
  },
  {
    id: "p7",
    type: "Habitación individual",
    price: 520000,
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
    description:
      "Habitación amplia, cama doble, escritorio y baño cercano. La luz de la tarde entra por la ventana colonial. Ambiente silencioso, pensado para semestres largos.",
    services: ["Agua", "Luz", "Gas", "Wi-Fi", "Lavadora", "Cocina"],
    highlights: ["Cama doble", "Luz natural", "Amoblado", "Cocina compartida"],
    rules: ["Mascotas: no", "Visitas: con horario", "Fumar: no", "Entrada: 6:00 a. m. – 10:00 p. m."],
    images: [IMAGES.suite, IMAGES.bath, IMAGES.kitchen, IMAGES.study],
    descDistance: "9 min a pie de la Sede Central",
    campusText: "Universidad de Pamplona · Sede Central",
    rooms: 1,
    baths: 1,
    views: 276,
    saved: 31,
    ownerId: "carlos",
    status: "reserved",
    reviews: [
      {
        author: "Natalia V.",
        stars: 5,
        text: "La habitación es exactamente como en las fotos. Muy luminosa.",
      },
    ],
  },
  {
    id: "p8",
    type: "Apartamento completo",
    price: 950000,
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
    description:
      "Apartamento completo con sala, cocina y dos habitaciones. Ideal para compañeros que quieren vivir juntos a pocos minutos del parque principal.",
    services: ["Agua", "Luz", "Gas", "Wi-Fi", "Lavadora", "Cocina"],
    highlights: ["Sala amplia", "Dos habitaciones", "Cocina", "Lavadora"],
    rules: ["Mascotas: no", "Visitas: sí", "Fumar: no", "Entrada libre con llave"],
    images: [IMAGES.living, IMAGES.studio, IMAGES.kitchen, IMAGES.patio],
    descDistance: "6 min a pie del Parque Águeda Gallardo",
    campusText: "Universidad de Pamplona · Parque Águeda Gallardo",
    rooms: 2,
    baths: 1,
    views: 164,
    saved: 22,
    ownerId: "elena",
    status: "available",
    reviews: [
      {
        author: "Juan C.",
        stars: 5,
        text: "Perfecto para compartir. La sala queda muy bien para estudiar en grupo.",
      },
    ],
  },
  {
    id: "p9",
    type: "Casa",
    price: 1150000,
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
    description:
      "Casa de fachada colonial, patio interior y tres habitaciones. A una cuadra de la plaza. Conserva el carácter del centro histórico con cocina y zonas comunes renovadas.",
    services: ["Agua", "Luz", "Gas", "Wi-Fi", "Lavadora", "Cocina"],
    highlights: ["Patio interior", "3 habitaciones", "Centro histórico", "Cocina amplia"],
    rules: ["Mascotas: consultar", "Visitas: sí", "Fumar: no", "Ambiente residencial"],
    images: [IMAGES.facade, IMAGES.patio, IMAGES.living, IMAGES.kitchen],
    descDistance: "4 min a pie de la Sede Central",
    campusText: "Universidad de Pamplona · Sede Central",
    rooms: 3,
    baths: 2,
    views: 402,
    saved: 54,
    ownerId: "diego",
    status: "available",
    reviews: [
      {
        author: "Mariana O.",
        stars: 5,
        text: "Vivir en el centro con patio es un lujo. La casa se siente cuidada.",
      },
    ],
  },
];

export type ChatMessage = {
  from: "me" | "them";
  text: string;
  time: string;
};

export type Conversation = {
  id: string;
  name: string;
  property: string;
  messages: ChatMessage[];
};

export const STUDENT_CHATS: Conversation[] = [
  {
    id: "c1",
    name: "Elena Ramírez",
    property: "Habitación suite · El Carmen",
    messages: [
      { from: "them", text: "Hola Mateo, sí está disponible para el próximo semestre.", time: "09:12" },
      { from: "me", text: "Perfecto. ¿Los servicios están incluidos en el canon?", time: "09:15" },
      {
        from: "them",
        text: "Sí: agua, luz, gas e internet. Podemos coordinar una visita.",
        time: "09:17",
      },
    ],
  },
  {
    id: "c2",
    name: "María Fernanda Peña",
    property: "Apartaestudio · Centro",
    messages: [
      { from: "them", text: "Hola, gracias por tu interés. ¿Desde qué fecha buscas?", time: "Ayer" },
      { from: "me", text: "Desde el inicio del próximo semestre. También quisiera conocerlo.", time: "Ayer" },
    ],
  },
];

export const OWNER_CHATS: Conversation[] = [
  {
    id: "Valentina Gómez",
    name: "Valentina Gómez",
    property: "Habitación suite · El Carmen",
    messages: [
      { from: "them", text: "Hola, ¿la habitación sigue disponible para el semestre?", time: "09:12" },
      { from: "me", text: "Sí, está disponible. Podemos coordinar una visita.", time: "09:16" },
    ],
  },
  {
    id: "Mateo Ríos",
    name: "Mateo Ríos",
    property: "Apartaestudio · Centro",
    messages: [
      { from: "them", text: "¿Incluye servicios y wifi?", time: "10:02" },
      { from: "me", text: "Sí, están incluidos en la publicación.", time: "10:05" },
    ],
  },
  {
    id: "Laura Méndez",
    name: "Laura Méndez",
    property: "Habitación premium · Santa Marta",
    messages: [{ from: "them", text: "¿Puedo visitarla el jueves?", time: "Ayer" }],
  },
];

export type OwnerRequest = {
  id: string;
  name: string;
  initials: string;
  program: string;
  type: "visit" | "reserve";
  property: string;
  detail: string;
  when: string;
};

export const OWNER_REQUESTS: OwnerRequest[] = [
  {
    id: "r1",
    name: "Valentina Gómez",
    initials: "VG",
    program: "Medicina · Universidad de Pamplona",
    type: "visit",
    property: "Habitación suite · El Carmen",
    detail: "24 de septiembre, 4:00 p. m.",
    when: "Hace 15 min",
  },
  {
    id: "r2",
    name: "Mateo Ríos",
    initials: "MR",
    program: "Ingeniería · Universidad de Pamplona",
    type: "reserve",
    property: "Apartaestudio · Centro",
    detail: "Ingreso desde el 1 de octubre",
    when: "Hace 1 hora",
  },
  {
    id: "r3",
    name: "Laura Méndez",
    initials: "LM",
    program: "Derecho · Universidad de Pamplona",
    type: "visit",
    property: "Habitación premium · Santa Marta",
    detail: "25 de septiembre, 10:00 a. m.",
    when: "Hace 3 horas",
  },
];

export const INCOME_SERIES = [
  { month: "Ene", value: 1.6 },
  { month: "Feb", value: 1.9 },
  { month: "Mar", value: 2.1 },
  { month: "Abr", value: 2.2 },
  { month: "May", value: 2.3 },
  { month: "Jun", value: 2.45 },
];

export const UNIVERSITIES = [
  "Universidad de Pamplona",
  "UniAndes",
  "U. Nacional",
  "Javeriana",
  "U. de Antioquia",
  "EAFIT",
  "UniValle",
];
