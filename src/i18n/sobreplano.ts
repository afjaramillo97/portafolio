/** Specs of Sobreplano up to the demo (source: /specs in the repository). Advance the roadmap here. */
export type SpecStatus = 'done' | 'next' | 'planned';

export const specs: { n: string; status: SpecStatus; title: { es: string; en: string } }[] = [
  { n: '01', status: 'done', title: { es: 'Fundaciones de Python', en: 'Python foundations' } },
  { n: '02', status: 'done', title: { es: 'Esquema v1', en: 'Schema v1' } },
  { n: '03', status: 'done', title: { es: 'API de proyectos', en: 'Projects API' } },
  { n: '04', status: 'done', title: { es: 'Primer scraper', en: 'First scraper' } },
  { n: '05', status: 'done', title: { es: 'Scraper en AWS', en: 'Scraper on AWS' } },
  { n: '06', status: 'done', title: { es: 'Datos confiables y segunda constructora', en: 'Reliable data and a second developer' } },
  { n: '07', status: 'next', title: { es: 'API de lectura', en: 'Read API' } },
  { n: '08', status: 'planned', title: { es: 'Asesor con LangGraph y tools', en: 'LangGraph advisor with tools' } },
  { n: '09', status: 'planned', title: { es: 'Evals', en: 'Evals' } },
  { n: '10', status: 'planned', title: { es: 'Guardrails contra prompt injection', en: 'Prompt-injection guardrails' } },
  { n: '11', status: 'planned', title: { es: 'Frontend', en: 'Frontend' } },
  { n: '12', status: 'planned', title: { es: 'Despliegue y demo', en: 'Deploy and demo' } },
];

export const specsDone = specs.filter((s) => s.status === 'done').length;
export const specsTotal = specs.length;
