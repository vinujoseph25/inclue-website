# Inclue Technologies — Web Platform

A responsive React + TypeScript web platform developed for **Inclue Technologies**, presenting products, services and technology solutions across manufacturing and healthcare domains.

The project demonstrates practical frontend engineering around **responsive UI, application navigation, state management, internationalisation, theming, animation and production delivery**.

## What this project demonstrates

- React 18 + TypeScript application development
- Component-based frontend architecture
- Redux Toolkit for application state
- React Router for page and route composition
- Material UI for reusable interface patterns
- Framer Motion for purposeful interaction and animation
- English/German internationalisation
- Light/dark theme support
- API integration through Axios
- Responsive, mobile-first presentation
- SEO-conscious page structure
- Webpack-based production builds

## Product experience

The site is organised around three primary content domains:

```text
                    Inclue Technologies
                           │
          ┌────────────────┼────────────────┐
          ↓                ↓                ↓
      Industries        Products         Services
          │                │                │
 Manufacturing         Product          Industrial
 Healthcare             stories          Automation
                                          IoT Services
                                          PLC Solutions
```

This structure keeps the user journey aligned with how a technology company communicates its offering: **who it serves, what it builds and how it delivers value**.

## Frontend architecture

```text
src/
├── api/          # API clients and integration boundaries
├── assets/       # Images, icons and static assets
├── components/   # Reusable UI components
├── context/      # Theme and language providers
├── hooks/        # Shared custom hooks
├── locales/      # Translation resources
├── pages/        # Route-level experiences
├── redux/        # Store, slices and application state
├── routes/       # Navigation and route configuration
├── styles/       # Global styles and theme configuration
├── types/        # TypeScript domain types
├── utils/        # Reusable pure utilities
├── App.tsx       # Application composition
└── index.tsx     # Entry point
```

The separation between pages, reusable components, state, integration and cross-cutting presentation concerns makes the application easier to evolve than a page-by-page collection of tightly coupled markup.

## Key engineering decisions

### TypeScript-first development

Domain models and component contracts are explicitly typed to reduce runtime ambiguity and make refactoring safer.

### Centralised application state

Redux Toolkit is used where state needs to cross page or component boundaries. Local UI concerns remain local instead of unnecessarily entering the global store.

### Internationalisation as a first-class concern

English and German content are structured through translation resources rather than hard-coded text scattered throughout components.

### Theme architecture

Light and dark presentation are handled through shared theme configuration, allowing visual changes to propagate consistently across the application.

### Responsive delivery

The UI is designed for desktop and mobile layouts, with responsive navigation, grids, typography and interaction patterns.

## Getting started

### Prerequisites

- Node.js 16+
- npm 8+ or Yarn

### Install

```bash
npm install
```

### Development

```bash
npm start
```

### Production build

```bash
npm run build
```

### Quality checks

```bash
npm run lint
npm run lint:fix
npm run format
npm run type-check
```

## Deployment

The application produces a static production build in `build/`. The original deployment target was Hostinger; the generated build can also be served through a conventional static web host or CDN.

Deployment-specific configuration should remain outside source control.

## Portfolio context

Inclue Website is a **product-facing frontend case study** in my portfolio. It demonstrates the ability to turn a multi-domain technology offering into a coherent, responsive and maintainable web experience.

It complements:

- **Enterprise React Platform** — scalable frontend architecture and engineering patterns
- **SmartGenics** — industrial IoT and product engineering
- **Data Analysis Portfolio** — data science and machine learning
- **Software Engineering Portfolio** — broader full-stack and application engineering work

## Status

This is a historical production-oriented implementation. Some dependencies and platform choices reflect the original project period; the repository is retained to demonstrate practical engineering experience and product delivery.

## Author

**Vinu Joseph**

Frontend Engineering · React · TypeScript · Product Engineering
