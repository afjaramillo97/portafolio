import type { Content } from './types';
import { weeks } from './roadmap';

const es: Content = {
  locale: 'es',
  htmlLang: 'es-CO',
  ogLocale: 'es_CO',
  ids: { project: 'proyecto', value: 'aporte', experience: 'experiencia', skills: 'habilidades', contact: 'contacto' },
  meta: {
    title: 'Andrés Jaramillo · AI Engineer',
    description:
      'AI Engineer y Backend Engineer en Medellín. Construyo agentes LLM con herramientas, RAG y evaluaciones automáticas sobre backends multi-tenant en AWS.',
    ogImage: '/og-es.png',
    ogAlt: 'Andrés Jaramillo, AI Engineer · Backend con Node.js y Python',
  },
  nav: {
    skip: 'Saltar al contenido',
    home: 'Inicio',
    links: [
      { href: '#proyecto', label: 'Proyecto' },
      { href: '#aporte', label: 'Cómo aporto' },
      { href: '#experiencia', label: 'Experiencia' },
      { href: '#habilidades', label: 'Habilidades' },
      { href: '#contacto', label: 'Contacto' },
    ],
    otherLang: { href: '/en/', label: 'EN', ariaLabel: 'Read in English', hreflang: 'en' },
    themeToLight: 'Cambiar a tema claro',
    themeToDark: 'Cambiar a tema oscuro',
  },
  hero: {
    hello: 'Hola, soy',
    name: 'Andrés Jaramillo',
    role: 'AI Engineer · Backend con Node.js y Python',
    lead: 'Construyo agentes LLM que se pueden medir: con herramientas, RAG y evaluaciones automáticas, sobre backends multi-tenant en AWS.',
    location: 'Medellín, Colombia · Abierto a remoto',
    ctaProject: 'Ver proyecto',
    ctaCv: 'Descargar CV',
    cvHref: '/cv/CV_Andres_Jaramillo_ES.pdf',
    photoAlt: 'Retrato de Andrés Jaramillo',
  },
  stats: [
    { value: '6 años', label: 'de experiencia profesional' },
    { value: '3,5 años', label: 'con Node.js y Express' },
    { value: 'Agentes LLM', label: 'en producción con Bedrock AgentCore' },
    { value: 'M.Sc.', label: 'en Industria 4.0' },
  ],
  project: {
    kicker: 'Proyecto destacado',
    title: 'Buscador de vivienda nueva con asesor IA',
    statusTemplate: 'En construcción · semana {n} de 8',
    statusDone: 'Publicado',
    text: 'Reúne los proyectos de vivienda nueva del Valle de Aburrá, guarda el histórico de precios y responde con un asesor IA que busca, compara y simula crédito.',
    archTitle: 'Arquitectura',
    arch: [
      { name: 'Scrapers', detail: 'Playwright · AWS Lambda' },
      { name: 'Extracción con LLM', detail: 'Claude · Pydantic' },
      { name: 'Base de datos', detail: 'Supabase · PostGIS · pgvector' },
      { name: 'API', detail: 'FastAPI' },
      { name: 'Asesor IA', detail: 'LangGraph · tools · RAG' },
      { name: 'Frontend', detail: 'React' },
    ],
    roadmapTitle: 'Roadmap · 8 semanas',
    weekLabel: 'Semana',
    currentLabel: 'semana actual',
    weeks: weeks.map((w) => ({ start: w.start, dates: w.dates.es, title: w.title.es })),
    endDate: '2026-12-14',
    chips: ['Python', 'FastAPI', 'LangGraph', 'Claude', 'PostgreSQL', 'Playwright', 'AWS Lambda', 'Terraform', 'React'],
    repoLabel: 'Repositorio',
    repoHref: null,
    repoSoon: 'Repositorio · próximamente',
    demoSoon: 'Demo · próximamente',
  },
  value: {
    kicker: 'Qué aporto',
    title: 'Cómo puedo aportar a tu equipo',
    lead: 'Cada punto viene con una prueba concreta de dónde ya lo hice.',
    proofLabel: 'Prueba',
    cards: [
      {
        title: 'Agentes LLM con evaluación',
        text: 'Agentes con tools, contexto y RAG, medidos con evaluaciones automáticas y con el costo por request bajo control.',
        proof: 'Pasantía en MB Technology: suites tipo DeepEval, datasets de regresión, LLM-as-judge y prompt caching.',
        chips: ['Strands Agents', 'Bedrock AgentCore', 'Claude', 'RAG', 'DeepEval'],
      },
      {
        title: 'Backend para SaaS multi-tenant',
        text: 'APIs REST versionadas y módulos multi-tenant de extremo a extremo, del análisis a la migración en producción.',
        proof: 'CINC Systems: plataforma SaaS que atiende a miles de administradoras de propiedades, sobre MongoDB y SQL Server.',
        chips: ['Node.js', 'Express', 'NestJS', 'MongoDB', 'SQL Server'],
      },
      {
        title: 'Datos y migraciones en AWS',
        text: 'Migraciones en producción reproducibles y auditables, con los costos de almacenamiento bajo control.',
        proof: 'CLI de migración FSX → S3 con modo DRY_RUN, reanudación segura y reportes de MB/s y tasa de error.',
        chips: ['AWS S3', 'IAM', 'SSO', 'Bash'],
      },
      {
        title: 'Integración de sistemas críticos',
        text: 'Pensamiento sistémico que viene de la electrónica y la automatización industrial.',
        proof: 'HMV Ingenieros: redes IEC 61850, arquitecturas LAN redundantes y HMI para subestaciones digitales.',
        chips: ['IEC 61850', 'PRP · HSR', 'Ciberseguridad'],
      },
    ],
  },
  experience: {
    kicker: 'Trayectoria',
    title: 'Experiencia',
    olderToggle: 'Ver experiencia anterior',
    jobs: [
      {
        role: 'Pasantía · AI Engineer',
        company: 'MB Technology Solution LLC',
        dates: 'Ene. 2026 – actual',
        summary: 'Agentes LLM en producción para una aplicación del sector salud, sobre un backend NestJS multi-tenant.',
        bullets: [
          'Diseño de tools, gestión de contexto y control de alucinaciones con Strands Agents SDK sobre AWS Bedrock AgentCore.',
          'Suites de evaluación tipo DeepEval, datasets de regresión y LLM-as-judge, con métricas de guardrails.',
          'Features diseñadas por costo por request: prompt caching y gestión de tokens.',
        ],
      },
      {
        role: 'Backend Developer',
        company: 'CINC Systems Colombia',
        dates: 'Mar. 2023 – jul. 2026',
        summary: 'Microservicios Node.js / Express para una plataforma SaaS de administración de propiedades.',
        bullets: [
          'CLI de migración FSX → S3 que operaciones ejecuta sin depender de backend: DRY_RUN, reanudación segura y reportes de transferencia.',
          'Gestión documental en S3 de extremo a extremo: URLs firmadas, reglas de lifecycle y acceso del equipo con AWS SSO en un comando.',
          'Reportería en Excel con filtros guardados, multi-tenant sobre MongoDB y SQL Server.',
        ],
      },
      {
        role: 'Ingeniero de soluciones de 4.ª generación',
        company: 'HMV Ingenieros',
        dates: 'Jul. 2021 – mar. 2023',
        summary: 'Automatización y redes de comunicación para subestaciones eléctricas digitales.',
        bullets: [
          'Configuración y pruebas FAT de redes IEC 61850 y arquitecturas LAN redundantes (PRP, HSR, RSTP).',
          'Lineamientos de ciberseguridad conforme a la regulación del CNO; diseño y pruebas de HMI.',
        ],
      },
      {
        role: 'Analista de ciberseguridad',
        company: 'IT Security Services',
        dates: 'Feb. – jul. 2021',
        summary: 'Alertas de vulnerabilidades con Python y machine learning; dashboards con indicadores PCI-DSS.',
        bullets: [],
        older: true,
      },
      {
        role: 'Metrólogo en formación',
        company: 'Solumed Ingeniería',
        dates: 'Feb. – dic. 2020',
        summary: 'Calibración y aseguramiento metrológico; apoyo a la ampliación del alcance del laboratorio, aprobada por MinCiencias y el INM.',
        bullets: [],
        older: true,
      },
    ],
  },
  skills: {
    kicker: 'Herramientas',
    title: 'Habilidades',
    groups: [
      {
        name: 'IA',
        items: [
          { label: 'Claude API', icon: 'anthropic' },
          { label: 'AWS Bedrock · AgentCore', icon: 'cloud' },
          { label: 'Strands Agents SDK', icon: 'agent' },
          { label: 'RAG y embeddings', icon: 'layers' },
          { label: 'DeepEval · LLM-as-judge', icon: 'check' },
          { label: 'MCP', icon: 'mcp' },
        ],
      },
      {
        name: 'Backend',
        items: [
          { label: 'Node.js', icon: 'nodejs' },
          { label: 'Express', icon: 'express' },
          { label: 'NestJS', icon: 'nestjs' },
          { label: 'Python', icon: 'python' },
          { label: 'Go', icon: 'go' },
          { label: 'JWT', icon: 'jwt' },
        ],
      },
      {
        name: 'Datos y nube',
        items: [
          { label: 'MongoDB', icon: 'mongodb' },
          { label: 'SQL Server', icon: 'database' },
          { label: 'AWS · S3 · IAM · SSO', icon: 'cloud' },
          { label: 'Docker', icon: 'docker' },
          { label: 'Terraform', icon: 'terraform' },
        ],
      },
      {
        name: 'Desarrollo con IA',
        items: [
          { label: 'Claude Code', icon: 'claude' },
          { label: 'Cursor', icon: 'cursor' },
          { label: 'Git', icon: 'git' },
        ],
      },
    ],
  },
  learning: {
    kicker: 'En curso',
    title: 'Qué estoy aprendiendo',
    lead: 'Cada tema lo estudio la semana en que el proyecto lo necesita.',
    items: [
      { topic: 'LangGraph y evaluación de agentes', why: 'para el asesor del buscador' },
      { topic: 'FastAPI, PostgreSQL y PostGIS', why: 'para la API y el mapa de precios' },
      { topic: 'Scraping con Playwright', why: 'para el histórico diario de precios' },
    ],
  },
  education: {
    kicker: 'Formación',
    title: 'Formación y logros',
    degrees: [
      { title: 'M.Sc. en Industria 4.0', school: 'Universidad Internacional de La Rioja (UNIR), España', years: '2022 – 2023' },
      { title: 'Ingeniería Electrónica', school: 'Universidad Industrial de Santander (UIS)', years: '2014 – 2020' },
    ],
    highlights: [
      {
        text: 'Autor del artículo «Arquitectura computacional para la inferencia de una red neuronal convolucional cuantizada para la detección de fibrilación auricular», revista Ingeniería y Ciencia (EAFIT), 2020.',
        href: 'https://doi.org/10.17230/ingciencia.16.32.6',
        linkLabel: 'Leer artículo',
      },
      { text: 'Representé a Colombia en MILSET Expo-Sciences International, Bruselas, 2015.' },
      { text: 'En curso: Claude Code in Action (Anthropic).' },
    ],
    languagesTitle: 'Idiomas',
    languages: 'Español nativo · Inglés intermedio, en formación activa · Portugués intermedio',
  },
  about: {
    kicker: 'Sobre mí',
    title: 'De la electrónica a los agentes LLM',
    paragraphs: [
      'Empecé en la electrónica: procesamiento de señales, redes neuronales en hardware y automatización de subestaciones. De ahí pasé al backend y hoy construyo agentes LLM.',
      'Me gusta entender el sistema completo antes de tocar una línea de código.',
    ],
    soft: [
      'Comunicación técnica con stakeholders',
      'Liderazgo de funcionalidades de extremo a extremo',
      'Revisión de código y mentoría',
      'Pensamiento sistémico',
    ],
  },
  contact: {
    kicker: 'Contacto',
    title: 'Hablemos',
    text: 'Busco un rol como AI Engineer o Backend Engineer. Escríbeme.',
    email: 'af_jaramillo@outlook.com',
    copy: 'Copiar correo',
    copied: 'Correo copiado',
    cvLabel: 'Descargar CV',
  },
  links: {
    github: 'https://github.com/afjaramillo97',
    linkedin: 'https://www.linkedin.com/in/AFJR',
  },
  footer: {
    built: 'Hecho con Astro · Publicado en Vercel',
    updated: 'Actualizado en octubre de 2026',
  },
};

export default es;
