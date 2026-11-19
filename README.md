# Sitio público CUEH — GitHub Pages

Contenido estático: se sube a la **raíz** del repositorio `voces_hum` (público).

## Publicar
1. En GitHub, crear el repositorio `voces_hum` (público) con la cuenta de la organización.
2. Subir **el contenido de esta carpeta** (`index.html`, `publico.json`, `css/`, `js/`, `.nojekyll`) a la raíz del repo.
3. En el repo: *Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save*.
4. En un par de minutos queda en `https://jup-unsa.github.io/voces_hum/`.

## Editar el contenido
Todo el texto (carreras, servicios, horarios, contactos) está en `publico.json`. Se puede editar desde la web de GitHub (lápiz → *Commit changes*) y se actualiza solo. Los textos que dicen **EDITAR** son de ejemplo.

## Probarlo en tu PC
No abrir `index.html` con doble clic (el navegador bloquea la lectura de `publico.json`). Usar, dentro de esta carpeta: `npx serve` y abrir la dirección que indica.
