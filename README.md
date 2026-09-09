# Inclue Technologies — Web Platform

> Product-facing React + TypeScript web application for a technology business serving manufacturing and healthcare domains.

The **Inclue Website** is a frontend engineering case study demonstrating how a multi-domain technology offering can be presented through a responsive, maintainable and structured web experience.

## What this project demonstrates

- React + TypeScript application development
- Component-based frontend architecture
- Redux Toolkit for application state
- React Router for route composition
- Material UI for reusable interface patterns
- Framer Motion for interaction and animation
- English/German internationalisation
- Light/dark theme support
- Axios-based API integration
- Responsive, mobile-first presentation
- SEO-conscious page structure
- Webpack-based production builds

## Product experience

The application organises the business experience around three primary domains:

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

This structure reflects a common product-information challenge: making a technically broad offering easy to understand and navigate.

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
├── routes/       # Navigation configuration
├── styles/       # Global styles and themes
├── types/        # TypeScript domain types
├── utils/        # Reusable utilities
├── App.tsx       # Application composition
└── index.tsx     # Entry point
```

The separation between pages, reusable components, state, integrations and cross-cutting concerns provides a clearer foundation than a page-by-page collection of tightly coupled markup.

## Key engineering decisions

### TypeScript-first development

Typed domain models and component contracts make interfaces explicit and make refactoring safer.

### Deliberate state management

Redux Toolkit is used for state that genuinely crosses component or page boundaries. Local interaction state remains local where appropriate.

### Internationalisation

English and German content are maintained through translation resources rather than hard-coded strings scattered throughout the UI.

### Theme architecture

Light and dark presentation is handled through shared theme configuration so visual decisions remain consistent across the application.

### Responsive delivery

Responsive navigation, grids, typography and interaction patterns support desktop and mobile experiences.

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

The application produces a static production build in `build/`. It can be served through a conventional static host or CDN.

Deployment-specific configuration should remain outside source control.

## Portfolio role

Inclue Website is the **product-facing frontend case study** in my portfolio. It demonstrates the ability to turn a broad technology offering into a coherent, responsive and maintainable web experience.

It complements:

- **Enterprise React Platform** — scalable frontend architecture
- **SmartGenics** — industrial IoT and product engineering
- **Data Analysis Portfolio** — data science and machine learning
- **Software Engineering Portfolio** — broader application engineering

## Status

This is a historical production-oriented implementation. Some dependencies and platform choices reflect the original project period; the repository is retained to demonstrate practical frontend engineering and product delivery.

## Author

**Vinu Joseph**

Frontend Engineering · React · TypeScript · Product Engineering
