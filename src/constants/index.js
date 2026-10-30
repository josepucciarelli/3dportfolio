const navLinks = [
    { name: { en: "Work", es: "Trabajos" }, link: "#work" },
    { name: { en: "Experience", es: "Experiencia" }, link: "#experience" },
    { name: { en: "Skills", es: "Habilidades" }, link: "#skills" },
    /*{ name: "Testimonials", link: "#testimonials" },*/
];

const heroWords = [
    { text: { en: "Ideas", es: "Ideas" }, imgPath: "/images/ideas.svg" },
    { text: { en: "Designs", es: "Diseños" }, imgPath: "/images/designs.svg" },
    { text: { en: "Code", es: "Código" }, imgPath: "/images/code.svg" },
    { text: { en: "Campaigns", es: "Campañas" }, imgPath: "/images/concepts.svg" },
];

// Se repite la lista para que la animación del hero sea continua
const words = [...heroWords, ...heroWords];

const counterItems = [
    { value: 3, suffix: "+", label: { en: "Years of Experience", es: "Años de experiencia" } },
    { value: 4, suffix: "+", label: { en: "Satisfied Clients", es: "Clientes satisfechos" } },
    { value: 7, suffix: "+", label: { en: "Completed Projects", es: "Proyectos completados" } },
    { value: 100, suffix: "%", label: { en: "Client Retention Rate", es: "Retención de clientes" } },
];

const logoIconsList = [
    { imgPath: "/images/logos/company-logo-9.png", name: "Vercel" },
    { imgPath: "/images/logos/limen_logo.png", name: "Limen" },
    { imgPath: "/images/logos/macstore_logo.png", name: "macstore" },
    { imgPath: "/images/logos/zuba_logo.png", name: "ZUBA" },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: { en: "Quality Focus", es: "Foco en la calidad" },
        desc: {
            en: "Delivering high-quality results while maintaining attention to every detail.",
            es: "Resultados de alta calidad, cuidando cada detalle.",
        },
    },
    {
        imgPath: "/images/chat.png",
        title: { en: "Reliable Communication", es: "Comunicación clara" },
        desc: {
            en: "Keeping you updated at every step to ensure transparency and clarity.",
            es: "Te mantengo al tanto en cada etapa, con transparencia y claridad.",
        },
    },
    {
        imgPath: "/images/time.png",
        title: { en: "On-Time Delivery", es: "Entregas a tiempo" },
        desc: {
            en: "Making sure projects are completed on schedule, with quality & attention to detail.",
            es: "Proyectos terminados en fecha, sin resignar calidad ni detalle.",
        },
    },
];

const techStackImgs = [
    {
        name: { en: "React Developer", es: "Desarrollador React" },
        imgPath: "/images/logos/react.png",
    },
    {
        name: { en: "Next.js Developer", es: "Desarrollador Next.js" },
        imgPath: "/images/logos/nextjs.svg",
    },
    {
        name: { en: "JavaScript Developer", es: "Desarrollador JavaScript" },
        imgPath: "/images/logos/node.png",
    },
    {
        name: { en: "Interactive Developer", es: "Desarrollo interactivo 3D" },
        imgPath: "/images/logos/three.png",
    },
    {
        name: { en: "Project Manager", es: "Gestión de proyectos" },
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        title: { en: "Media Planner & Web Developer", es: "Media Planner y Desarrollador Web" },
        company: "NORD · Banco Familiar",
        initials: "N",
        logoPath: "/images/logos/nord_logo.png",
        date: { en: "July 2026 - Present", es: "Julio 2026 - Actualidad" },
        summary: {
            en: "Running paid media and the website for Banco Familiar: multi-platform campaigns, conversion tracking and the bank's Webflow site.",
            es: "Gestiono la pauta digital y el sitio web de Banco Familiar: campañas en varias plataformas, medición de conversiones y el sitio del banco en Webflow.",
        },
        responsibilities: [
            {
                en: "Manage campaigns across Meta Ads, Google Ads, TikTok and LinkedIn.",
                es: "Gestión de campañas en Meta Ads, Google Ads, TikTok y LinkedIn.",
            },
            {
                en: "Implement and maintain conversion tracking with Google Tag Manager and GA4.",
                es: "Implementación y control de conversiones con Google Tag Manager y GA4.",
            },
            {
                en: "Develop and maintain the bank's Webflow site: pages, CMS content and custom HTML/JavaScript tools.",
                es: "Desarrollo y mantenimiento del sitio del banco en Webflow: páginas, contenidos del CMS y herramientas en HTML/JavaScript.",
            },
            {
                en: "Connected Webflow to AI through MCP and wrote a tutorial so the team can edit the CMS on their own.",
                es: "Integración de Webflow con IA vía MCP y tutorial para que el equipo edite el CMS de forma autónoma.",
            },
            {
                en: "Analyze metrics, report results and coordinate with internal and agency teams.",
                es: "Análisis de métricas, reportes de resultados y coordinación con equipos internos y de agencia.",
            },
        ],
    },
    {
        title: { en: "Web Developer & Campaign Manager", es: "Desarrollador Web y Campaign Manager" },
        company: "LIMEN",
        initials: "L",
        logoPath: "/images/logos/limen_logo_yellow.png",
        date: { en: "January 2022 - Present", es: "Enero 2022 - Actualidad" },
        summary: {
            en: "Building websites and apps for clients and running the campaigns that bring them traffic, leads and sales.",
            es: "Desarrollo sitios web y aplicaciones para clientes, y gestiono las campañas que les traen tráfico, leads y ventas.",
        },
        responsibilities: [
            {
                en: "Built and maintained 15+ responsive websites and apps with WordPress, React, TypeScript and Tailwind CSS.",
                es: "Desarrollo y mantenimiento de más de 15 sitios web y aplicaciones responsivas con WordPress, React, TypeScript y Tailwind CSS.",
            },
            {
                en: "Gathered client requirements and turned them into scalable technical solutions.",
                es: "Relevamiento de requerimientos del cliente y traducción a soluciones técnicas escalables.",
            },
            {
                en: "Integrated REST APIs and third-party tools to streamline workflows and centralize data.",
                es: "Integración de APIs REST y herramientas de terceros para optimizar flujos de trabajo y centralizar información.",
            },
            {
                en: "Set up and optimized Meta Ads and Google Ads campaigns for traffic, leads and conversions, adjusting strategy based on CTR, CPC and conversion data.",
                es: "Configuración y optimización de campañas en Meta Ads y Google Ads orientadas a tráfico, leads y conversiones, ajustando la estrategia según CTR, CPC y conversiones.",
            },
            {
                en: "Implemented Meta Pixel and custom events to track and optimize conversions.",
                es: "Implementación de Meta Pixel y eventos para seguimiento y optimización de conversiones.",
            },
        ],
    },
    /*{
        title: { en: "Technical Support Specialist", es: "Técnico de Soporte" },
        company: "Westgate Resorts",
        initials: "W",
        date: { en: "November 2023 - March 2025", es: "Noviembre 2023 - Marzo 2025" },
        summary: {
            en: "Kept operations running in a high-demand environment by resolving incidents quickly and improving support processes.",
            es: "Mantuve la continuidad operativa en un entorno de alta demanda, resolviendo incidencias y mejorando los procesos de soporte.",
        },
        responsibilities: [
            { en: "Resolved technical incidents in high-demand environments, ensuring operational continuity.", es: "Resolución de incidencias técnicas en entornos de alta demanda, asegurando la continuidad operativa." },
            { en: "Prioritized and managed tickets with a focus on response times and service quality.", es: "Priorización y gestión de tickets con foco en tiempos de respuesta y calidad de servicio." },
            { en: "Documented incidents to improve traceability and internal processes.", es: "Registro y documentación de incidencias para mejorar la trazabilidad y los procesos internos." },
            { en: "Supported users and coordinated with different teams to solve problems efficiently.", es: "Soporte a usuarios y coordinación con distintos equipos para resolver problemas de forma eficiente." },
        ],
    },*/
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Jose. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Jose was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Jose was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Jose was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Jose’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "",
    }
];

const socialImgs = [
    {
        name: "insta",
        imgPath: "/images/insta.png",
        url: "https://www.instagram.com/josepucciarelli?igsh=MWJxcnRuNTV5bGd3aw%3D%3D&utm_source=qr"
    },
    {
        name: "wp",
        imgPath: "/images/wp.svg",
        url: "https://wa.link/q3wnur"
    },
    {
        name: "x",
        imgPath: "/images/github.svg",
        url: "https://github.com/josepucciarelli"
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
        url: "http://www.linkedin.com/in/jose-pucciarelli-851383220"
    },
];

const projects = [
    {
        title: "Familiar Proyecta",
        url: "https://banco-familiar.webflow.io/proyecta",
        imgPath: "/images/familiar-proyecta.webp",
        imgClass: "object-left-top",
        alt: "Familiar Proyecta - Banco Familiar",
        desc: {
            en: "Personal finance tool for Banco Familiar: a Webflow landing page plus a browser-based app to plan income, debts and savings goals, with PDF/Excel reports. User data never leaves the device.",
            es: "Herramienta de finanzas personales para Banco Familiar: landing en Webflow y una app web para ordenar ingresos, deudas y metas de ahorro, con reportes en PDF/Excel. Los datos nunca salen del dispositivo.",
        },
    },
    {
        title: "Apple Pay & Google Pay · Banco Familiar",
        url: "https://banco-familiar.webflow.io/apple-pay",
        imgPath: "/images/familiar-apple-pay.webp",
        imgClass: "object-left-top",
        alt: "Apple Pay - Banco Familiar",
        desc: {
            en: "Launch landing pages in Webflow for Apple Pay and Google Pay with Familiar cards, plus a redesign proposal for the credit cards page.",
            es: "Landings de lanzamiento en Webflow para Apple Pay y Google Pay con las tarjetas Familiar, y una propuesta de rediseño de la página de tarjetas de crédito.",
        },
    },
    {
        title: "Rialto x Banco Familiar",
        url: "https://banco-familiar.webflow.io/rialto",
        imgPath: "/images/familiar-rialto.webp",
        alt: "Rialto x Banco Familiar",
        desc: {
            en: "Co-branded landing page for a home loan offer in the Rialto residential community: loan terms, requirements, amenities gallery and lead contact via WhatsApp and email.",
            es: "Landing co-branded para un préstamo de vivienda en el barrio Rialto: condiciones del crédito, requisitos, galería del barrio y contacto por WhatsApp y email.",
        },
    },
    {
        title: "Limen Agency Landing Page",
        url: "https://limenagencia.com/",
        imgPath: "/images/limen.png",
        alt: "Limen",
        desc: {
            en: "Landing Page developed using React Native, TypeScript & TailwindCSS — delivering a sleek interface and smooth user interactions.",
            es: "Landing page desarrollada con React Native, TypeScript y TailwindCSS, con una interfaz cuidada e interacciones fluidas.",
        },
    },
    {
        title: "Fabio Araujo Landing Page",
        url: "https://www.fabioaraujopy.com/",
        imgPath: "/images/project1.webp",
        imgClass: "object-left-top",
        alt: "Fabio Araujo",
        desc: {
            en: "Landing Page built with React, TypeScript, & TailwindCSS for a fast, user-friendly experience.",
            es: "Landing page desarrollada con React, TypeScript y TailwindCSS para una experiencia rápida y fácil de usar.",
        },
    },
    {
        title: "Google Drive Clone",
        url: "https://google-drive-clone-beta-ivory.vercel.app/sign-in",
        imgPath: "/images/project2.webp",
        bg: "bg-[#e5eef5]",
        alt: "File Management Platform",
        desc: {
            en: "Web application that allows users to upload, download, share and store files. It provides a user-friendly interface for managing files and folders, similar to Google Drive.",
            es: "Aplicación web para subir, descargar, compartir y guardar archivos, con una interfaz simple para gestionar archivos y carpetas, al estilo de Google Drive.",
        },
    },
    {
        title: "Stonks",
        url: "https://stonksapp-red.vercel.app/",
        imgPath: "/images/stonks.png",
        bg: "bg-[#6B728E]",
        alt: "Stonks",
        desc: {
            en: "Real-Time Stocks, Currencies, and Crypto.",
            es: "Acciones, monedas y criptomonedas en tiempo real.",
        },
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
    projects,
};
