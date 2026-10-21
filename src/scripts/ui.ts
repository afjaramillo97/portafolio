/** Small page behaviours: theme toggle, reveal on scroll, copy email, roadmap week. */

const root = document.documentElement;

// ---------- Theme ----------
const THEME_COLORS = { dark: '#0F1924', light: '#F7F9FB' } as const;

function applyThemeUi() {
  const theme = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
    const label = theme === 'dark' ? btn.dataset.labelLight : btn.dataset.labelDark;
    if (label) btn.setAttribute('aria-label', label);
  });
}

document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage unavailable: the choice lasts for this visit only */
    }
    applyThemeUi();
  });
});
applyThemeUi();

// ---------- Reveal on scroll ----------
const revealables = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
  );
  revealables.forEach((el) => io.observe(el));
} else {
  revealables.forEach((el) => el.classList.add('is-in'));
}

// ---------- Copy email ----------
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
  const status = btn.parentElement?.querySelector<HTMLElement>('[data-copy-status]');
  const label = btn.querySelector<HTMLElement>('[data-copy-label]');
  const original = label?.textContent ?? '';
  btn.addEventListener('click', async () => {
    const text = btn.dataset.copy ?? '';
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      const area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      ok = document.execCommand('copy');
      area.remove();
    }
    if (!ok) return;
    const done = btn.dataset.copied ?? '';
    if (label) label.textContent = done;
    if (status) status.textContent = done;
    btn.classList.add('is-copied');
    window.setTimeout(() => {
      if (label) label.textContent = original;
      if (status) status.textContent = '';
      btn.classList.remove('is-copied');
    }, 2200);
  });
});

// ---------- Language hint: offer the other version, never redirect ----------
const hint = document.querySelector<HTMLElement>('[data-lang-hint]');
if (hint) {
  const pageIsSpanish = root.lang.toLowerCase().startsWith('es');
  const browserLangs = (navigator.languages?.length ? navigator.languages : [navigator.language]).map((l) => l.toLowerCase());
  const prefersSpanish = browserLangs[0]?.startsWith('es') ?? true;
  let dismissed = false;
  try {
    dismissed = localStorage.getItem('langHint') === 'dismissed';
  } catch {
    /* no storage: show the hint, it just won't be remembered */
  }
  const remember = () => {
    try {
      localStorage.setItem('langHint', 'dismissed');
    } catch {
      /* ignore */
    }
  };
  document.querySelectorAll('a[hreflang]').forEach((a) => a.addEventListener('click', remember));
  const show = () => {
    hint.hidden = false;
    requestAnimationFrame(() => hint.classList.add('is-in'));
  };
  if (!dismissed && pageIsSpanish !== prefersSpanish) {
    if (window.innerWidth >= 640) {
      window.setTimeout(show, 1200);
    } else {
      // On phones, wait until the visitor scrolls past the hero so it never covers the main button.
      const onScroll = () => {
        if (window.scrollY > window.innerHeight * 0.6) {
          window.removeEventListener('scroll', onScroll);
          show();
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  }
  hint.querySelector('[data-lang-hint-close]')?.addEventListener('click', () => {
    remember();
    hint.hidden = true;
  });
}

// ---------- Roadmap: mark the current week with the visitor's date ----------
const roadmap = document.querySelector<HTMLElement>('[data-roadmap]');
if (roadmap) {
  const today = new Date();
  const iso = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const items = Array.from(roadmap.querySelectorAll<HTMLElement>('[data-week-start]'));
  const end = roadmap.dataset.end ?? '9999-12-31';
  let current = -1;
  items.forEach((item, i) => {
    if ((item.dataset.weekStart ?? '') <= iso) current = i;
  });
  const finished = iso >= end;
  items.forEach((item, i) => {
    const isCurrent = !finished && i === Math.max(current, 0);
    const isDone = finished || i < Math.max(current, 0);
    item.classList.toggle('is-current', isCurrent);
    item.classList.toggle('is-done', isDone);
    const sr = item.querySelector<HTMLElement>('[data-current-label]');
    if (sr) sr.hidden = !isCurrent;
    if (isCurrent) item.setAttribute('aria-current', 'step');
    else item.removeAttribute('aria-current');
  });
  const status = document.querySelector<HTMLElement>('[data-project-status]');
  if (status) {
    status.textContent = finished
      ? (status.dataset.done ?? '')
      : (status.dataset.template ?? '').replace('{n}', String(Math.max(current, 0) + 1));
  }
}
