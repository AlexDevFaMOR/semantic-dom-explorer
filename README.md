
# Semantic DOM Explorer

Explorador interactivo del **Document Object Model (DOM)** construido con HTML semántico, CSS modular y JavaScript moderno.

El proyecto está diseñado como una **herramienta educativa** que permite visualizar la estructura del DOM, practicar la manipulación de elementos y comprender la importancia del HTML semántico a través de un entorno interactivo.

---

## Vista Previa

> *Próximamente: captura de pantalla o GIF de la aplicación en funcionamiento.*

---

## Características

* **Estructura Semántica**: Documento HTML construido con etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`).
* **Playground Interactivo**: Área de demostración con elementos HTML reales listos para ser inspeccionados.
* **Panel de Inspector**: Muestra información detallada del elemento seleccionado (etiqueta, clases, atributos, etc.).
* **Arquitectura Modular**: Código JavaScript organizado por responsabilidades (`core`, `dom`, `ui`, `utils`).
* **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla (tablets y móviles).
* **Documentación Educativa**: Explicación paso a paso del código y los conceptos aplicados.

---

## Tecnologías Utilizadas

| Tecnología               | Uso                                                   |
| ------------------------ | ----------------------------------------------------- |
| HTML5                    | Estructura semántica de la aplicación.                |
| CSS3                     | Diseño visual, layout con **Grid** y **Flexbox**.    |
| CSS Variables            | Sistema de diseño centralizado (Design Tokens).       |
| JavaScript (ES Modules)  | Lógica interactiva y manipulación del DOM.            |
| Git / GitHub             | Control de versiones y repositorio remoto.            |

---

## Estructura del Proyecto

El proyecto sigue una arquitectura basada en la **separación de responsabilidades**. Cada carpeta tiene un propósito específico, lo que facilita el mantenimiento y la escalabilidad.

```text
semantic-dom-explorer/
│
├── public/
│   └── images/               # Imágenes y recursos estáticos
│
├── src/
│   ├── css/
│   │   ├── base/             # Estilos fundamentales
│   │   │   ├── reset.css     # Reset de estilos por defecto
│   │   │   ├── variables.css # Design Tokens (colores, espaciado, etc.)
│   │   │   └── typography.css # Sistema tipográfico
│   │   │
│   │   ├── layout/           # Estructura de la página
│   │   │   ├── header.css
│   │   │   ├── navigation.css
│   │   │   ├── main.css
│   │   │   └── footer.css
│   │   │
│   │   ├── components/       # Componentes reutilizables
│   │   │   ├── dom-tree.css
│   │   │   ├── inspector.css
│   │   │   ├── cards.css
│   │   │   └── buttons.css
│   │   │
│   │   ├── playground.css    # Estilos específicos del área de juego
│   │   └── styles.css        # Punto de entrada de todos los estilos
│   │
│   ├── js/
│   │   ├── core/             # Lógica principal de la app
│   │   │   ├── app.js        # Controlador principal
│   │   │   └── config.js     # Configuración global
│   │   │
│   │   ├── dom/              # Manipulación y selección del DOM
│   │   │   ├── selector.js
│   │   │   ├── inspector.js
│   │   │   ├── traversal.js
│   │   │   └── mutations.js
│   │   │
│   │   ├── ui/               # Componentes de interfaz de usuario
│   │   │   ├── sidebar.js
│   │   │   ├── treeView.js
│   │   │   ├── breadcrumb.js
│   │   │   └── modal.js
│   │   │
│   │   ├── data/             # Datos estáticos y definiciones
│   │   │   └── semanticDefinitions.js
│   │   │
│   │   └── utils/            # Funciones de utilidad
│   │       ├── helpers.js
│   │       └── storage.js
│   │
│   └── index.html            # Punto de entrada de la aplicación
│
├── docs/                     # Documentación adicional
│   ├── architecture.md
│   ├── roadmap.md
│   └── screenshots/
│
├── .gitignore
├── README.md
└── LICENSE
Arquitectura del Proyecto
La aplicación sigue una arquitectura modular donde cada parte tiene una responsabilidad clara. Esto permite que el proyecto sea escalable, mantenible y fácil de entender.

text
HTML (Estructura Semántica)
 │
 ├── Define la jerarquía del documento
 │
CSS (Presentación)
 │
 ├── Design Tokens (variables CSS)
 ├── Layout (Grid / Flexbox)
 └── Componentes reutilizables
 │
JavaScript (Interactividad)
 │
 ├── Core (Estado y configuración)
 ├── DOM (Selección y manipulación)
 ├── UI (Componentes visuales)
 └── Utils (Funciones auxiliares)
¿Cómo Funciona?
Flujo General de la Aplicación (Estado Actual)
text
Carga de la página
        │
        ▼
Renderizado del HTML semántico
        │
        ▼
Aplicación de estilos CSS
        │
        ▼
El usuario puede visualizar:
        │
        ├── Playground con elementos semánticos
        ├── Panel de DOM Tree (en construcción)
        ├── Panel de Inspector (en construcción)
        └── Panel de Información Semántica (en construcción)
1. Estructura HTML
El archivo index.html es el punto de entrada de la aplicación. Está construido con HTML5 semántico, lo que significa que cada etiqueta tiene un significado claro sobre el contenido que contiene.

Explicación de la Estructura
html
<body>
    <!-- Cabecera global de la aplicación -->
    <header>
        <h1>Semantic DOM Explorer</h1>
        <p>Interactive visualization of the DOM and Semantic HTML</p>
    </header>

    <!-- Navegación principal -->
    <nav>
        <ul>
            <li><a href="#">Playground</a></li>
            <li><a href="#">DOM Tree</a></li>
            <li><a href="#">Inspector</a></li>
            <li><a href="#">Documentation</a></li>
        </ul>
    </nav>

    <!-- Contenido principal -->
    <main>
        <!-- Panel del Árbol DOM -->
        <aside id="dom-tree">
            <h2>DOM Tree</h2>
        </aside>

        <!-- Playground Semántico -->
        <section id="playground">
            <!-- Contenido educativo -->
        </section>

        <!-- Panel del Inspector -->
        <aside id="inspector">
            <h2>Inspector</h2>
        </aside>

        <!-- Panel de Información Semántica -->
        <aside id="semantic-info">
            <h2>Semantic Information</h2>
        </aside>
    </main>

    <!-- Pie de página global -->
    <footer>
        <p>Built with HTML, CSS and Vanilla JavaScript</p>
    </footer>
</body>
¿Por qué usar HTML semántico?
Etiqueta	Significado
<header>	Representa la cabecera de la página o de una sección.
<nav>	Define un bloque de navegación.
<main>	Contenido principal y único de la página.
<section>	Agrupa contenido temáticamente relacionado.
<article>	Contenido independiente y reutilizable (como un post).
<aside>	Contenido complementario (barras laterales).
<footer>	Pie de página de la sección o del documento.
Ventajas del HTML Semántico
Accesibilidad: Los lectores de pantalla pueden interpretar mejor la estructura de la página.

SEO: Los motores de búsqueda comprenden mejor el contenido y su jerarquía.

Mantenibilidad: El código es más legible y fácil de modificar.

Estándares: Sigue las recomendaciones del W3C para una web más robusta.

2. Estructura CSS
El CSS está organizado siguiendo una arquitectura modular y escalable. Se divide en tres capas principales:

Base: Estilos fundamentales como reset, variables y tipografía.

Layout: Estructura global de la página (header, main, footer).

Components: Estilos reutilizables para elementos específicos (botones, tarjetas, etc.).

Design Tokens (Variables CSS)
El sistema de diseño se centraliza en variables.css. Esto permite cambiar la apariencia global de la aplicación modificando solo estos valores.

css
:root {
    /* Colores */
    --color-primary: #2563eb;
    --color-secondary: #16a34a;
    --color-background: #f8fafc;
    --color-surface: #ffffff;

    /* Espaciado */
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;

    /* Bordes */
    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;

    /* Sombras */
    --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.07);
}
¿Por qué usar CSS Variables?
Consistencia: Todos los colores, espaciados y sombras están centralizados.

Mantenibilidad: Si cambia un color, se actualiza en un solo lugar.

Temas: Permite implementar fácilmente modo oscuro o temas personalizados.

Reutilización: Se pueden usar las mismas variables en diferentes componentes.

Layout Principal con CSS Grid
La estructura principal de la página utiliza CSS Grid para organizar los paneles.

css
body > main {
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr 260px;
    gap: var(--spacing-md);
}
Propiedad	Explicación
grid-template-columns: 300px 1fr	Define dos columnas: la primera de 300px y la segunda ocupa el espacio restante.
grid-template-rows: 1fr 260px	Define dos filas: la primera ocupa el espacio disponible y la segunda 260px.
gap	Espaciado entre las celdas del grid.
Ubicación de los Paneles en el Grid
Cada panel se posiciona en una celda específica usando grid-column y grid-row.

css
#dom-tree {
    grid-column: 1;  /* Columna 1 */
    grid-row: 1;     /* Fila 1 */
}

#playground {
    grid-column: 2;  /* Columna 2 */
    grid-row: 1;     /* Fila 1 */
}

#inspector {
    grid-column: 1;  /* Columna 1 */
    grid-row: 2;     /* Fila 2 */
}

#semantic-info {
    grid-column: 2;  /* Columna 2 */
    grid-row: 2;     /* Fila 2 */
}
3. Playground Semántico
El área de juego (playground) contiene un documento HTML completo con etiquetas semánticas. Cada elemento tiene la clase .semantic-element para hacerlo interactivo y visualmente distinguible.

html
<article class="semantic-element" data-element="article">
    <h4>Introduction to Semantic HTML</h4>
    <p>Semantic HTML improves accessibility...</p>
    <button type="button">Read More</button>
</article>
Estados Interactivos
Los elementos del playground tienen estilos para estados hover y selected.

css
.semantic-element:hover {
    transform: translateY(-2px);
    border-color: var(--color-primary);
    box-shadow: var(--shadow-md);
}

.selected {
    border-color: var(--color-primary);
    outline: 3px solid rgba(37, 99, 235, .25);
}
Hover: Al pasar el mouse, el elemento se eleva ligeramente y cambia de color.

Selected: Se aplica una clase .selected para resaltar el elemento cuando es seleccionado (esto se activará con JavaScript).

4. Responsive Design
El layout se adapta a diferentes tamaños de pantalla utilizando media queries.

css
@media (max-width: 1024px) {
    body > main {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
}
En pantallas más pequeñas (tablets y móviles), el grid se convierte en una sola columna y los paneles se apilan verticalmente.

Estado Actual del Proyecto
🚧 En desarrollo activo

Hitos Completados
☑ Estructura HTML semántica

☑ Arquitectura CSS modular

☑ Design Tokens (variables CSS)

☑ Layout responsivo

☑ Playground con elementos semánticos

☑ Estados interactivos (hover, selected)

Próximos Pasos
□ Implementar JavaScript para selección de elementos

□ Construir el panel del Inspector

□ Generar el árbol DOM dinámicamente

□ Añadir manipulación de elementos (crear, eliminar, modificar)

Aprendizajes Obtenidos
Hasta este punto, el proyecto ha reforzado conceptos clave de desarrollo frontend:

HTML Semántico: Uso correcto de etiquetas para estructura y accesibilidad.

CSS Grid y Flexbox: Creación de layouts complejos y responsivos.

CSS Variables: Centralización de estilos para mantenibilidad.

Arquitectura CSS: Organización modular de estilos.

Responsive Design: Adaptación a diferentes dispositivos.

Autor
Geovani Alejandro Padilla Morales

Desarrollador enfocado en tecnologías web, automatización y robótica.

