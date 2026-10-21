/**
 * Hero background: a slowly drifting network of nodes. Every few seconds an
 * amber signal travels 3–4 edges and lights the nodes it touches, like a tool
 * call moving through an agent. No dependencies, ~4 KB.
 *
 * - Paused when the hero is off screen or the tab is hidden.
 * - prefers-reduced-motion: draws a single still frame.
 * - Re-reads colors when the theme changes.
 */

type GraphNode = { x: number; y: number; vx: number; vy: number; r: number; back: boolean; glow: number };
type Pulse = { path: number[]; seg: number; t: number };
type RGB = [number, number, number];

const LINK_DIST = 140;
const BACK_LINK_DIST = 100;
const HOVER_DIST = 120;
const SEG_MS = 380;

export function mountNodeGraph(canvas: HTMLCanvasElement): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const host = canvas.parentElement ?? canvas;
  const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  let w = 0;
  let h = 0;
  let nodes: GraphNode[] = [];
  let accent: RGB = [95, 180, 194];
  let signal: RGB = [242, 198, 109];
  let light = false;
  let accentSprite = document.createElement('canvas');
  let signalSprite = document.createElement('canvas');
  let pulse: Pulse | null = null;
  let untilPulse = 900;
  let raf = 0;
  let last = 0;
  let onScreen = true;
  const pointer = { x: -1e4, y: -1e4 };

  const rgba = (c: RGB, a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a.toFixed(3)})`;

  function parseColor(value: string, fallback: RGB): RGB {
    const hex = value.trim().replace('#', '');
    if (/^[0-9a-f]{6}$/i.test(hex)) {
      return [parseInt(hex.slice(0, 2), 16), parseInt(hex.slice(2, 4), 16), parseInt(hex.slice(4, 6), 16)];
    }
    return fallback;
  }

  function sprite(color: RGB): HTMLCanvasElement {
    const size = 64;
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const g = c.getContext('2d')!;
    const grd = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grd.addColorStop(0, rgba(color, 1));
    grd.addColorStop(0.22, rgba(color, 0.5));
    grd.addColorStop(1, rgba(color, 0));
    g.fillStyle = grd;
    g.fillRect(0, 0, size, size);
    return c;
  }

  function readTheme() {
    const cs = getComputedStyle(document.documentElement);
    accent = parseColor(cs.getPropertyValue('--accent'), accent);
    signal = parseColor(cs.getPropertyValue('--signal'), signal);
    light = document.documentElement.getAttribute('data-theme') === 'light';
    accentSprite = sprite(accent);
    signalSprite = sprite(signal);
  }

  function seed() {
    const count = w < 768 ? 35 : w < 1280 ? 70 : 90;
    nodes = Array.from({ length: count }, (_, i) => {
      const back = i < Math.round(count * 0.35);
      const speed = (back ? 0.005 : 0.011) * (0.5 + Math.random());
      const a = Math.random() * Math.PI * 2;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.cos(a) * speed,
        vy: Math.sin(a) * speed,
        r: 1.5 + Math.random() * 1.5,
        back,
        glow: 0,
      };
    });
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const nw = Math.max(1, rect.width);
    const nh = Math.max(1, rect.height);
    canvas.width = Math.round(nw * dpr);
    canvas.height = Math.round(nh * dpr);
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!nodes.length || (w < 768) !== (nw < 768)) {
      w = nw;
      h = nh;
      seed();
    } else {
      for (const n of nodes) {
        n.x *= nw / w;
        n.y *= nh / h;
      }
      w = nw;
      h = nh;
    }
    if (!raf) draw(0);
  }

  function neighborsOf(i: number): number[] {
    const a = nodes[i];
    const out: number[] = [];
    for (let j = 0; j < nodes.length; j++) {
      const b = nodes[j];
      if (j === i || b.back) continue;
      if (Math.hypot(a.x - b.x, a.y - b.y) < LINK_DIST) out.push(j);
    }
    return out;
  }

  function startPulse() {
    const front = nodes.map((n, i) => (n.back ? -1 : i)).filter((i) => i >= 0);
    for (let attempt = 0; attempt < 12; attempt++) {
      const startIdx = front[Math.floor(Math.random() * front.length)];
      const path = [startIdx];
      const hops = 3 + Math.floor(Math.random() * 2);
      while (path.length <= hops) {
        const options = neighborsOf(path[path.length - 1]).filter((j) => !path.includes(j));
        if (!options.length) break;
        path.push(options[Math.floor(Math.random() * options.length)]);
      }
      if (path.length >= 3) {
        nodes[startIdx].glow = 1;
        pulse = { path, seg: 0, t: 0 };
        return;
      }
    }
  }

  function step(dt: number) {
    for (const n of nodes) {
      n.x += n.vx * dt;
      n.y += n.vy * dt;
      if (n.x < -20) n.x = w + 20;
      else if (n.x > w + 20) n.x = -20;
      if (n.y < -20) n.y = h + 20;
      else if (n.y > h + 20) n.y = -20;
      if (n.glow > 0) n.glow = Math.max(0, n.glow - dt / 1400);
    }
    if (pulse) {
      pulse.t += dt / SEG_MS;
      if (pulse.t >= 1) {
        pulse.seg += 1;
        pulse.t = 0;
        const reached = pulse.path[pulse.seg];
        if (reached !== undefined) nodes[reached].glow = 1;
        if (pulse.seg >= pulse.path.length - 1) pulse = null;
      }
    } else {
      untilPulse -= dt;
      if (untilPulse <= 0) {
        startPulse();
        untilPulse = 2000 + Math.random() * 1000;
      }
    }
  }

  function draw(dt: number) {
    if (dt) step(dt);
    const c = ctx!;
    c.clearRect(0, 0, w, h);
    const lineBase = light ? 0.22 : 0.25;

    // Edges
    c.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        if (a.back !== b.back) continue;
        const max = a.back ? BACK_LINK_DIST : LINK_DIST;
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d >= max) continue;
        const alpha = (1 - d / max) * lineBase * (a.back ? 0.4 : 1);
        c.strokeStyle = rgba(accent, alpha);
        c.beginPath();
        c.moveTo(a.x, a.y);
        c.lineTo(b.x, b.y);
        c.stroke();
      }
    }

    // Signal trail
    let head: { x: number; y: number } | null = null;
    if (pulse) {
      c.lineWidth = 1.4;
      for (let s = 0; s <= pulse.seg && s < pulse.path.length - 1; s++) {
        const a = nodes[pulse.path[s]];
        const b = nodes[pulse.path[s + 1]];
        const t = s < pulse.seg ? 1 : pulse.t;
        const x = a.x + (b.x - a.x) * t;
        const y = a.y + (b.y - a.y) * t;
        c.strokeStyle = rgba(signal, light ? 0.7 : 0.55);
        c.beginPath();
        c.moveTo(a.x, a.y);
        c.lineTo(x, y);
        c.stroke();
        if (s === pulse.seg) head = { x, y };
      }
    }

    // Nodes
    for (const n of nodes) {
      const hover = Math.max(0, 1 - Math.hypot(n.x - pointer.x, n.y - pointer.y) / HOVER_DIST);
      if (n.back) {
        const s = n.r * 7;
        c.globalAlpha = light ? 0.16 : 0.2;
        c.drawImage(accentSprite, n.x - s / 2, n.y - s / 2, s, s);
        c.globalAlpha = 1;
        continue;
      }
      const lit = Math.max(n.glow, 0);
      const r = n.r * (1 + hover * 0.5 + lit * 0.4);
      const glowSize = r * (6 + lit * 5);
      c.globalAlpha = (light ? 0.28 : 0.35) + hover * 0.4;
      c.drawImage(accentSprite, n.x - glowSize / 2, n.y - glowSize / 2, glowSize, glowSize);
      if (lit > 0.02) {
        c.globalAlpha = lit * (light ? 0.8 : 0.9);
        c.drawImage(signalSprite, n.x - glowSize / 2, n.y - glowSize / 2, glowSize, glowSize);
      }
      c.globalAlpha = 1;
      c.fillStyle = lit > 0.35 ? rgba(signal, 0.95) : rgba(accent, 0.75 + hover * 0.25);
      c.beginPath();
      c.arc(n.x, n.y, r, 0, Math.PI * 2);
      c.fill();
    }

    if (head) {
      const s = 22;
      c.drawImage(signalSprite, head.x - s / 2, head.y - s / 2, s, s);
    }
  }

  function frame(now: number) {
    const dt = last ? Math.min(now - last, 50) : 16;
    last = now;
    draw(dt);
    raf = requestAnimationFrame(frame);
  }

  function shouldRun() {
    return onScreen && !document.hidden && !reducedQuery.matches;
  }

  function sync() {
    if (shouldRun() && !raf) {
      last = 0;
      raf = requestAnimationFrame(frame);
    } else if (!shouldRun() && raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  }

  function stillFrame() {
    // Static composition for reduced motion: a few lit nodes, no movement.
    nodes.filter((n) => !n.back).slice(0, 3).forEach((n) => (n.glow = 0.8));
    draw(0);
  }

  readTheme();
  resize();
  if (reducedQuery.matches) stillFrame();

  new ResizeObserver(() => resize()).observe(canvas);
  new IntersectionObserver((entries) => {
    onScreen = entries[0]?.isIntersecting ?? true;
    sync();
  }).observe(canvas);
  document.addEventListener('visibilitychange', sync);
  reducedQuery.addEventListener('change', () => {
    sync();
    if (reducedQuery.matches) stillFrame();
  });
  new MutationObserver(() => {
    readTheme();
    if (!raf) draw(0);
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  host.addEventListener('pointermove', (e) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = e.clientX - rect.left;
    pointer.y = e.clientY - rect.top;
  });
  host.addEventListener('pointerleave', () => {
    pointer.x = pointer.y = -1e4;
  });

  canvas.classList.add('is-ready');
  sync();
}
