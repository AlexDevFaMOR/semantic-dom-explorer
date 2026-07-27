
---

## 📄 **docs/roadmap.md** (Hoja de Ruta del Proyecto)

```markdown
# Roadmap del Proyecto

## Visión General

El proyecto se desarrolla en fases progresivas, cada una agregando funcionalidad y complejidad. Esta hoja de ruta documenta los hitos completados, los que están en progreso y los planificados para el futuro.

---

## Fase 1: Fundación ✅

**Objetivo**: Establecer la base del proyecto con HTML semántico y CSS modular.

### Hitos Completados

- ☑ Estructura HTML semántica (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`)
- ☑ Arquitectura CSS modular (base/, layout/, components/)
- ☑ Design Tokens (variables CSS centralizadas)
- ☑ Layout responsivo con CSS Grid y Flexbox
- ☑ Playground con elementos semánticos reales
- ☑ Estados interactivos (hover, selected)

### Archivos Creados

```text
src/css/base/reset.css
src/css/base/variables.css
src/css/base/typography.css
src/css/layout/header.css
src/css/layout/navigation.css
src/css/layout/main.css
src/css/layout/footer.css
src/css/components/dom-tree.css
src/css/components/inspector.css
src/css/components/cards.css
src/css/components/buttons.css
src/css/playground.css
src/css/styles.css
src/index.html
README.md
docs/architecture.md
docs/roadmap.md

Fase 2: JavaScript Core 🚧
Objetivo: Implementar la lógica principal de la aplicación.

Hitos Completados
☑ Módulo de estado global (core/state.js)

☑ Utilidades DOM (utils/dom-helpers.js)

Hitos Pendientes
□ Implementar core/app.js (controlador principal)

□ Implementar core/config.js (configuración global)

□ Implementar dom/selector.js (selección de elementos)

□ Implementar dom/inspector.js (panel de información)

□ Implementar ui/sidebar.js (barra lateral)

□ Implementar utils/storage.js (persistencia de datos)

Entregables Esperados
Selección de elementos al hacer clic

Resaltado visual del elemento seleccionado

Panel de inspector mostrando información básica (tag, clases, atributos)

Fase 3: Interactividad Avanzada ⏳
Objetivo: Mejorar la experiencia de usuario con funcionalidades interactivas.

Hitos Planificados
□ Generación dinámica del árbol DOM

□ Expandir/colapsar nodos en el árbol

□ Resaltado de elementos al pasar el mouse (hover)

□ Navegación por migas de pan (breadcrumb)

□ Historial de elementos seleccionados

Entregables Esperados
Árbol DOM completamente funcional y navegable

Feedback visual en tiempo real

Navegación intuitiva entre elementos

Fase 4: Manipulación del DOM ⏳
Objetivo: Permitir la manipulación de elementos del DOM.

Hitos Planificados
□ Creación de nuevos elementos

□ Eliminación de elementos existentes

□ Edición de atributos y contenido

□ Movimiento de nodos en el árbol

□ Duplicación de elementos

Entregables Esperados
Editor visual de elementos

Operaciones CRUD en el DOM

Actualización en tiempo real del árbol y el inspector

Fase 5: Optimización y Mejoras ⏳
Objetivo: Refinar el proyecto y prepararlo para producción.

Hitos Planificados
□ Optimización de rendimiento (debouncing, throttling)

□ Mejoras de accesibilidad (ARIA, teclado)

□ Modo oscuro (dark mode)

□ Exportación/importación de estado

□ Pruebas unitarias (Jest/Vitest)

□ Empaquetado con Vite

Entregables Esperados
Aplicación rápida y accesible

Código optimizado para producción

Documentación completa y actualizada

Estado Actual del Proyecto
🚧 Fase 2: JavaScript Core - En desarrollo

Próximo Hito
Implementar dom/selector.js para permitir la selección de elementos al hacer clic en el playground.

