// ─────────────────────────────────────────────────────────────
//  EDITA SOLO ESTE ARCHIVO PARA PERSONALIZAR TODO EL SITIO.
//  Los valores actuales son PLACEHOLDERS de ejemplo.
// ─────────────────────────────────────────────────────────────

export const profile = {
	name: "Tu Nombre",
	initials: "TN",
	role: "Desarrollador Full Stack",
	location: "Ciudad, País",
	available: true, // muestra el badge "Disponible para proyectos"
	tagline:
		"Construyo productos web rápidos, accesibles y mantenibles. Me especializo en interfaces cuidadas y backends que no se rompen.",
	// Bio larga de la sección "Sobre mí" — un elemento por párrafo.
	bio: [
		"Llevo varios años diseñando y construyendo software para la web. Empecé resolviendo problemas pequeños con scripts y hoy lidero el desarrollo de productos completos, desde la arquitectura hasta el último detalle de la interfaz.",
		"Me interesa el rendimiento real —el que siente el usuario—, la accesibilidad y el código que otra persona puede leer seis meses después sin maldecirme.",
		"Fuera del editor leo sobre diseño de sistemas, escribo en este blog y colaboro en proyectos de código abierto.",
	],
	email: "tu@correo.com",
	// Ruta a tu foto en /public. Déjalo en null para mostrar tus iniciales.
	avatar: null as string | null,
	// Ruta o URL a tu CV. null oculta el botón.
	resume: null as string | null,
};

export const socials = [
	{ name: "GitHub", url: "https://github.com/tu-usuario", icon: "github" },
	{ name: "LinkedIn", url: "https://linkedin.com/in/tu-usuario", icon: "linkedin" },
	{ name: "X", url: "https://x.com/tu-usuario", icon: "x" },
	{ name: "Email", url: "mailto:tu@correo.com", icon: "mail" },
] as const;

export const stats = [
	{ value: "5+", label: "Años de experiencia" },
	{ value: "30+", label: "Proyectos entregados" },
	{ value: "12", label: "Clientes activos" },
];

export const projects = [
	{
		title: "Plataforma de Analítica",
		description:
			"Dashboard en tiempo real para métricas de producto. Ingesta de eventos, agregaciones por ventana y visualizaciones interactivas para equipos de datos.",
		tags: ["TypeScript", "React", "PostgreSQL", "WebSockets"],
		url: "https://ejemplo.com",
		repo: "https://github.com/tu-usuario/proyecto",
		year: "2025",
		featured: true,
	},
	{
		title: "API de Pagos",
		description:
			"Servicio de cobros con reintentos idempotentes, conciliación automática y webhooks firmados. Procesa miles de transacciones diarias.",
		tags: ["Node.js", "Stripe", "Redis", "Docker"],
		url: "https://ejemplo.com",
		repo: null,
		year: "2024",
		featured: true,
	},
	{
		title: "Sistema de Diseño",
		description:
			"Librería de componentes accesibles con tokens de diseño, documentación viva y publicación automatizada en npm.",
		tags: ["Astro", "CSS", "a11y", "Storybook"],
		url: null,
		repo: "https://github.com/tu-usuario/proyecto",
		year: "2024",
		featured: false,
	},
	{
		title: "Motor de Búsqueda Interno",
		description:
			"Buscador full-text sobre documentación corporativa con ranking semántico y respuestas citadas.",
		tags: ["Python", "FastAPI", "Embeddings"],
		url: null,
		repo: "https://github.com/tu-usuario/proyecto",
		year: "2023",
		featured: false,
	},
];

export const experience = [
	{
		role: "Desarrollador Senior",
		company: "Empresa Actual",
		period: "2023 — Presente",
		description:
			"Lidero el desarrollo frontend del producto principal. Reduje el tiempo de carga un 60% y definí el sistema de diseño que usan cuatro equipos.",
	},
	{
		role: "Desarrollador Full Stack",
		company: "Empresa Anterior",
		period: "2021 — 2023",
		description:
			"Construí servicios de facturación e integraciones con terceros. Migré el monolito a servicios desplegados en contenedores.",
	},
	{
		role: "Desarrollador Web",
		company: "Agencia Digital",
		period: "2019 — 2021",
		description:
			"Entregué sitios y tiendas para clientes de distintos sectores, con foco en rendimiento y SEO técnico.",
	},
];

export const skills = [
	{ group: "Lenguajes", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
	{ group: "Frontend", items: ["Astro", "React", "CSS moderno", "Accesibilidad"] },
	{ group: "Backend", items: ["Node.js", "PostgreSQL", "Redis", "REST / GraphQL"] },
	{ group: "Infraestructura", items: ["Docker", "Cloudflare", "CI/CD", "Observabilidad"] },
];
