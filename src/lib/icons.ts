import {
  siAnthropic,
  siClaude,
  siCursor,
  siDocker,
  siExpress,
  siFastapi,
  siGnubash,
  siGit,
  siGithub,
  siGo,
  siJsonwebtokens,
  siLanggraph,
  siModelcontextprotocol,
  siMongodb,
  siNestjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siTerraform,
} from 'simple-icons';

/** Brand logos from Simple Icons (filled, 24×24). */
const brand = {
  anthropic: siAnthropic.path,
  claude: siClaude.path,
  cursor: siCursor.path,
  docker: siDocker.path,
  express: siExpress.path,
  fastapi: siFastapi.path,
  bash: siGnubash.path,
  git: siGit.path,
  github: siGithub.path,
  go: siGo.path,
  jwt: siJsonwebtokens.path,
  langgraph: siLanggraph.path,
  mcp: siModelcontextprotocol.path,
  mongodb: siMongodb.path,
  nestjs: siNestjs.path,
  nodejs: siNodedotjs.path,
  postgresql: siPostgresql.path,
  python: siPython.path,
  react: siReact.path,
  terraform: siTerraform.path,
} as const;

/** Generic stroke icons for tools without a logo in Simple Icons (24×24). */
const generic = {
  cloud: '<path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.3 4.4 4.4 0 0 0 7 18Z"/>',
  database:
    '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6"/><path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3"/>',
  layers: '<path d="m12 3-9 5 9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12.2 2.3 2.3 4.7-4.8"/>',
  agent:
    '<circle cx="6" cy="6" r="2.4"/><circle cx="18" cy="8" r="2.4"/><circle cx="10" cy="18" r="2.4"/><path d="m8.4 6.3 7.2 1.4M6.8 8.3l2.3 7.4m7.6-5.6-5 6.2"/>',
  shield: '<path d="M12 3 5 6v5c0 4.4 3 8.3 7 9.5 4-1.2 7-5.1 7-9.5V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
  network:
    '<rect x="9" y="3" width="6" height="5" rx="1.2"/><rect x="3" y="16" width="6" height="5" rx="1.2"/><rect x="15" y="16" width="6" height="5" rx="1.2"/><path d="M12 8v4M6 16v-2h12v2"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 8-8m-3 3 2 2m-4 0 1.5 1.5"/>',
  browser: '<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>',
  bolt: '<path d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z"/>',
  chip: '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
} as const;

export type IconKey = keyof typeof brand | keyof typeof generic;

export function iconSvg(key: IconKey, size = 18): string {
  if (key in brand) {
    const d = brand[key as keyof typeof brand];
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="currentColor" aria-hidden="true"><path d="${d}"/></svg>`;
  }
  const body = generic[key as keyof typeof generic];
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}

/** Icon for a stack chip, by its label. Labels without an icon render as plain text. */
const chipIcons: Record<string, IconKey> = {
  'Strands Agents': 'agent',
  'Bedrock AgentCore': 'cloud',
  Claude: 'claude',
  RAG: 'layers',
  DeepEval: 'check',
  'Node.js': 'nodejs',
  Express: 'express',
  NestJS: 'nestjs',
  MongoDB: 'mongodb',
  'SQL Server': 'database',
  'AWS S3': 'cloud',
  IAM: 'key',
  SSO: 'key',
  Bash: 'bash',
  'IEC 61850': 'chip',
  'PRP · HSR': 'network',
  Ciberseguridad: 'shield',
  Cybersecurity: 'shield',
  Python: 'python',
  FastAPI: 'fastapi',
  LangGraph: 'langgraph',
  PostgreSQL: 'postgresql',
  Playwright: 'browser',
  'AWS Lambda': 'bolt',
  Terraform: 'terraform',
  React: 'react',
};

export function chipIcon(label: string, size = 14): string | null {
  const key = chipIcons[label];
  return key ? iconSvg(key, size) : null;
}
