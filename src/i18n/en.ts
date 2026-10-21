import type { Content } from './types';
import { weeks } from './roadmap';

const en: Content = {
  locale: 'en',
  htmlLang: 'en',
  ogLocale: 'en_US',
  ids: { project: 'project', value: 'value', experience: 'experience', skills: 'skills', contact: 'contact' },
  meta: {
    title: 'Andrés Jaramillo · AI Engineer',
    description:
      'AI Engineer and Backend Engineer based in Medellín. I build LLM agents with tools, RAG and automated evals on multi-tenant backends on AWS.',
    ogImage: '/og-en.png',
    ogAlt: 'Andrés Jaramillo, AI Engineer · Backend with Node.js and Python',
  },
  nav: {
    skip: 'Skip to content',
    home: 'Home',
    links: [
      { href: '#project', label: 'Project' },
      { href: '#value', label: 'How I help' },
      { href: '#experience', label: 'Experience' },
      { href: '#skills', label: 'Skills' },
      { href: '#contact', label: 'Contact' },
    ],
    otherLang: { href: '/', label: 'ES', ariaLabel: 'Leer en español', hreflang: 'es' },
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
  },
  hero: {
    hello: 'Hi, I’m',
    name: 'Andrés Jaramillo',
    role: 'AI Engineer · Backend with Node.js and Python',
    lead: 'I build LLM agents you can measure: with tools, RAG and automated evals, on multi-tenant backends on AWS.',
    location: 'Medellín, Colombia · Open to remote',
    ctaProject: 'See the project',
    ctaCv: 'Download CV',
    cvHref: '/cv/CV_Andres_Jaramillo_EN.pdf',
    photoAlt: 'Portrait of Andrés Jaramillo',
  },
  stats: [
    { value: '6 years', label: 'of professional experience' },
    { value: '3.5 years', label: 'with Node.js and Express' },
    { value: 'LLM agents', label: 'in production on Bedrock AgentCore' },
    { value: 'M.Sc.', label: 'in Industry 4.0' },
  ],
  project: {
    kicker: 'Featured project',
    title: 'New-home search with an AI advisor',
    statusTemplate: 'In progress · week {n} of 8',
    statusDone: 'Live',
    text: 'Brings together new-home projects across the Medellín metro area, keeps their price history, and answers through an AI advisor that searches, compares and simulates mortgages.',
    archTitle: 'Architecture',
    arch: [
      { name: 'Scrapers', detail: 'Playwright · AWS Lambda' },
      { name: 'LLM extraction', detail: 'Claude · Pydantic' },
      { name: 'Database', detail: 'Supabase · PostGIS · pgvector' },
      { name: 'API', detail: 'FastAPI' },
      { name: 'AI advisor', detail: 'LangGraph · tools · RAG' },
      { name: 'Frontend', detail: 'React' },
    ],
    roadmapTitle: 'Roadmap · 8 weeks',
    weekLabel: 'Week',
    currentLabel: 'current week',
    weeks: weeks.map((w) => ({ start: w.start, dates: w.dates.en, title: w.title.en })),
    endDate: '2026-12-14',
    chips: ['Python', 'FastAPI', 'LangGraph', 'Claude', 'PostgreSQL', 'Playwright', 'AWS Lambda', 'Terraform', 'React'],
    repoLabel: 'Repository',
    repoHref: null,
    repoSoon: 'Repository · coming soon',
    demoSoon: 'Demo · coming soon',
  },
  value: {
    kicker: 'What I bring',
    title: 'How I can help your team',
    lead: 'Each point comes with concrete proof of where I have already done it.',
    proofLabel: 'Proof',
    cards: [
      {
        title: 'LLM agents with evals',
        text: 'Agents with tools, context and RAG, measured with automated evals and with cost per request under control.',
        proof: 'Internship at MB Technology: DeepEval-style suites, regression datasets, LLM-as-judge and prompt caching.',
        chips: ['Strands Agents', 'Bedrock AgentCore', 'Claude', 'RAG', 'DeepEval'],
      },
      {
        title: 'Backend for multi-tenant SaaS',
        text: 'Versioned REST APIs and multi-tenant modules end to end, from analysis to production data migration.',
        proof: 'CINC Systems: a SaaS platform serving thousands of property management companies, on MongoDB and SQL Server.',
        chips: ['Node.js', 'Express', 'NestJS', 'MongoDB', 'SQL Server'],
      },
      {
        title: 'Data and migrations on AWS',
        text: 'Reproducible, auditable production migrations, with storage costs under control.',
        proof: 'FSX → S3 migration CLI with DRY_RUN mode, safe resume, and MB/s and error-rate reports.',
        chips: ['AWS S3', 'IAM', 'SSO', 'Bash'],
      },
      {
        title: 'Critical systems integration',
        text: 'Systems thinking that comes from electronics and industrial automation.',
        proof: 'HMV Ingenieros: IEC 61850 networks, redundant LAN architectures and HMIs for digital substations.',
        chips: ['IEC 61850', 'PRP · HSR', 'Cybersecurity'],
      },
    ],
  },
  experience: {
    kicker: 'Career',
    title: 'Experience',
    olderToggle: 'Show earlier experience',
    jobs: [
      {
        role: 'AI Engineer Intern',
        company: 'MB Technology Solution LLC',
        dates: 'Jan 2026 – Present',
        summary: 'Production LLM agents for a healthcare application, on a multi-tenant NestJS backend.',
        bullets: [
          'Designed tools, context management and hallucination control with the Strands Agents SDK on AWS Bedrock AgentCore.',
          'DeepEval-style evaluation suites, regression datasets and LLM-as-judge, with guardrail metrics.',
          'Features designed around cost per request: prompt caching and token management.',
        ],
      },
      {
        role: 'Backend Developer',
        company: 'CINC Systems Colombia',
        dates: 'Mar 2023 – Jul 2026',
        summary: 'Node.js / Express microservices for a SaaS property management platform.',
        bullets: [
          'FSX → S3 migration CLI that operations runs without the backend team: DRY_RUN, safe resume and transfer reports.',
          'End-to-end S3 document management: presigned URLs, lifecycle rules, and one-command team access through AWS SSO.',
          'Excel reporting with saved filters, multi-tenant across MongoDB and SQL Server.',
        ],
      },
      {
        role: '4th-Generation Solutions Engineer',
        company: 'HMV Ingenieros',
        dates: 'Jul 2021 – Mar 2023',
        summary: 'Automation and communication networks for digital electrical substations.',
        bullets: [
          'Configured and ran FAT tests on IEC 61850 networks and redundant LAN architectures (PRP, HSR, RSTP).',
          'Cybersecurity guidelines under Colombian CNO regulation; HMI design and testing.',
        ],
      },
      {
        role: 'Cybersecurity Analyst',
        company: 'IT Security Services',
        dates: 'Feb – Jul 2021',
        summary: 'Vulnerability alerts with Python and machine learning; dashboards with PCI-DSS indicators.',
        bullets: [],
        older: true,
      },
      {
        role: 'Metrologist in Training',
        company: 'Solumed Ingeniería',
        dates: 'Feb – Dec 2020',
        summary: 'Calibration and measurement assurance; supported the lab’s scope expansion, approved by MinCiencias and Colombia’s national metrology institute.',
        bullets: [],
        older: true,
      },
    ],
  },
  skills: {
    kicker: 'Toolbox',
    title: 'Skills',
    groups: [
      {
        name: 'AI',
        items: [
          { label: 'Claude API', icon: 'anthropic' },
          { label: 'AWS Bedrock · AgentCore', icon: 'cloud' },
          { label: 'Strands Agents SDK', icon: 'agent' },
          { label: 'RAG and embeddings', icon: 'layers' },
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
        name: 'Data and cloud',
        items: [
          { label: 'MongoDB', icon: 'mongodb' },
          { label: 'SQL Server', icon: 'database' },
          { label: 'AWS · S3 · IAM · SSO', icon: 'cloud' },
          { label: 'Docker', icon: 'docker' },
          { label: 'Terraform', icon: 'terraform' },
        ],
      },
      {
        name: 'AI-assisted development',
        items: [
          { label: 'Claude Code', icon: 'claude' },
          { label: 'Cursor', icon: 'cursor' },
          { label: 'Git', icon: 'git' },
        ],
      },
    ],
  },
  learning: {
    kicker: 'In progress',
    title: 'What I’m learning',
    lead: 'I study each topic in the week the project needs it.',
    items: [
      { topic: 'LangGraph and agent evaluation', why: 'for the search advisor' },
      { topic: 'FastAPI, PostgreSQL and PostGIS', why: 'for the API and the price map' },
      { topic: 'Web scraping with Playwright', why: 'for the daily price history' },
    ],
  },
  education: {
    kicker: 'Education',
    title: 'Education and achievements',
    degrees: [
      { title: 'M.Sc. in Industry 4.0', school: 'Universidad Internacional de La Rioja (UNIR), Spain', years: '2022 – 2023' },
      { title: 'B.Sc. in Electronics Engineering', school: 'Universidad Industrial de Santander (UIS), Colombia', years: '2014 – 2020' },
    ],
    highlights: [
      {
        text: 'Author of “Computational architecture for the inference of a quantized convolutional neural network for atrial fibrillation detection”, Ingeniería y Ciencia journal (EAFIT), 2020. Paper in Spanish.',
        href: 'https://doi.org/10.17230/ingciencia.16.32.6',
        linkLabel: 'Read the paper',
      },
      { text: 'Represented Colombia at MILSET Expo-Sciences International, Brussels, 2015.' },
      { text: 'In progress: Claude Code in Action (Anthropic).' },
    ],
    languagesTitle: 'Languages',
    languages: 'Spanish (native) · English (intermediate, in active training) · Portuguese (intermediate)',
  },
  about: {
    kicker: 'About me',
    title: 'From electronics to LLM agents',
    paragraphs: [
      'I started in electronics: signal processing, neural networks on hardware and substation automation. From there I moved into backend development, and today I build LLM agents.',
      'I like to understand the whole system before I touch a line of code.',
    ],
    soft: [
      'Technical communication with stakeholders',
      'End-to-end feature ownership',
      'Code review and mentoring',
      'Systems thinking',
    ],
  },
  contact: {
    kicker: 'Contact',
    title: 'Let’s talk',
    text: 'I’m looking for an AI Engineer or Backend Engineer role. Drop me a line.',
    email: 'af_jaramillo@outlook.com',
    copy: 'Copy email',
    copied: 'Email copied',
    cvLabel: 'Download CV',
  },
  links: {
    github: 'https://github.com/afjaramillo97',
    linkedin: 'https://www.linkedin.com/in/AFJR',
  },
  footer: {
    built: 'Built with Astro · Hosted on Vercel',
    updated: 'Updated October 2026',
  },
};

export default en;
