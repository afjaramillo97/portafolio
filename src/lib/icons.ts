import {
  siAnthropic,
  siClaude,
  siCursor,
  siDocker,
  siExpress,
  siGit,
  siGithub,
  siGo,
  siJsonwebtokens,
  siModelcontextprotocol,
  siMongodb,
  siNestjs,
  siNodedotjs,
  siPython,
  siTerraform,
} from 'simple-icons';

/** Brand logos from Simple Icons (filled, 24×24). */
const brand = {
  anthropic: siAnthropic.path,
  claude: siClaude.path,
  cursor: siCursor.path,
  docker: siDocker.path,
  express: siExpress.path,
  git: siGit.path,
  github: siGithub.path,
  go: siGo.path,
  jwt: siJsonwebtokens.path,
  mcp: siModelcontextprotocol.path,
  mongodb: siMongodb.path,
  nestjs: siNestjs.path,
  nodejs: siNodedotjs.path,
  python: siPython.path,
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
