# Página personal de Andrés Jaramillo

Portafolio de una sola página, en español (`/`) e inglés (`/en/`). Sitio estático en Astro + Tailwind, publicado en Vercel Hobby (0 USD). El spec completo está en el doc "Spec de la página personal v1".

## Comandos

- `npm run dev` — servidor local en http://localhost:4321
- `npm run build` — genera `dist/`; debe terminar sin errores antes de cada commit
- `npm run preview` — sirve `dist/` para revisarlo

## Dónde está cada cosa

- `src/i18n/es.ts` y `src/i18n/en.ts`: **todo el texto**. Mismo tipo `Content` (`src/i18n/types.ts`); si cambias uno, cambia el otro.
- `src/i18n/roadmap.ts`: las 8 semanas del proyecto destacado.
- `src/components/`: una sección por componente; no llevan texto propio.
- `src/styles/global.css`: tokens de color (tema oscuro y claro), escala tipográfica y componentes base.
- `src/scripts/node-graph.ts`: el grafo animado del hero (canvas, sin librerías).
- `src/scripts/ui.ts`: selector de tema, aparición al hacer scroll, copiar correo y semana actual del roadmap.
- `public/cv/`: CV **públicos** (sin cédula, fecha de nacimiento, teléfono, tarjeta profesional ni referencias).
- `public/og-es.png`, `public/og-en.png`: vista previa para LinkedIn (1200 × 630).

## Reglas de diseño (no romperlas)

- Colores solo desde los tokens (`bg`, `surface`, `line`, `ink`, `muted`, `accent`, `signal`). El ámbar (`signal`) es señal: máximo un elemento por pantalla.
- Cuatro tamaños de texto: `.t-display`, `.t-title`, `.t-lead` y cuerpo 16 px; `.t-mono` 13 px para chips y etiquetas.
- Espaciado en múltiplos de 8; radio 12 px en tarjetas; sin sombras salvo el halo de la foto.
- Animaciones: entrada de 450 ms con `cubic-bezier(0.2, 0.8, 0.2, 1)`; hover 150 ms. Todo respeta `prefers-reduced-motion`.
- Nada de datos personales sensibles en el sitio ni en los PDF.

## Tareas frecuentes

- **Publicar el repositorio del buscador:** en `es.ts` y `en.ts`, cambia `project.repoHref: null` por la URL.
- **Agregar un proyecto o un empleo:** agrega un objeto al arreglo correspondiente en ambos idiomas.
- **Cambiar la URL del sitio:** `SITE_URL` en `astro.config.mjs` y la línea `Sitemap:` de `public/robots.txt`.
- **Actualizar el CV:** reemplaza los PDF de `public/cv/` por versiones públicas con los mismos nombres.

## Criterios de aceptación

Lighthouse móvil ≥ 95 en las cuatro categorías, sin scroll horizontal entre 320 y 1.920 px, contraste AA en ambos temas, menos de 30 KB de JS comprimido.
