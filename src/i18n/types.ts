import type { IconKey } from '../lib/icons';

export type Locale = 'es' | 'en';

export interface Content {
  locale: Locale;
  htmlLang: string;
  ogLocale: string;
  /** Section anchors, also used by nav links. */
  ids: { project: string; value: string; experience: string; skills: string; contact: string };
  meta: { title: string; description: string; ogImage: string; ogAlt: string };
  nav: {
    skip: string;
    home: string;
    links: { href: string; label: string }[];
    otherLang: { href: string; label: string; ariaLabel: string; hreflang: string };
    themeToLight: string;
    themeToDark: string;
  };
  hero: {
    hello: string;
    name: string;
    role: string;
    lead: string;
    location: string;
    ctaProject: string;
    ctaCv: string;
    cvHref: string;
    photoAlt: string;
  };
  stats: { value: string; label: string }[];
  project: {
    kicker: string;
    title: string;
    subtitle: string;
    /** Derived from src/i18n/sobreplano.ts (specs done of total). */
    status: string;
    text: string;
    facts: { value: string; label: string }[];
    archTitle: string;
    /** `live` = running in production; otherwise it is the next step. */
    arch: { name: string; detail: string; live: boolean }[];
    archLegend: { live: string; next: string };
    roadmapTitle: string;
    specStatus: { done: string; next: string; planned: string };
    specs: { n: string; status: 'done' | 'next' | 'planned'; title: string }[];
    roadmapNote: string;
    chips: string[];
    repoLabel: string;
    /** null = the repository is not public yet. */
    repoHref: string | null;
    repoSoon: string;
    specsLabel: string;
    specsHref: string;
    demoSoon: string;
  };
  value: {
    kicker: string;
    title: string;
    lead: string;
    proofLabel: string;
    cards: { title: string; text: string; proof: string[]; chips: string[] }[];
  };
  experience: {
    kicker: string;
    title: string;
    olderToggle: string;
    jobs: { role: string; company: string; dates: string; summary: string; bullets: string[]; older?: boolean }[];
  };
  skills: {
    kicker: string;
    title: string;
    groups: { name: string; items: { label: string; icon: IconKey }[] }[];
  };
  learning: { kicker: string; title: string; lead: string; items: { topic: string; why: string }[] };
  education: {
    kicker: string;
    title: string;
    degrees: { title: string; school: string; years: string }[];
    highlights: { text: string; href?: string; linkLabel?: string }[];
    languagesTitle: string;
    languages: string;
  };
  about: { kicker: string; title: string; paragraphs: string[]; soft: string[] };
  contact: {
    kicker: string;
    title: string;
    text: string;
    email: string;
    copy: string;
    copied: string;
    cvLabel: string;
  };
  links: { github: string; linkedin: string };
  footer: { built: string; updated: string };
  /** Hint offered to visitors whose browser language differs from this page. Written in the OTHER language. */
  langHint: { lang: string; text: string; cta: string; close: string };
}
