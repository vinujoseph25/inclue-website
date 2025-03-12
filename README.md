# Inclue Technologies Website

This repository contains the official website for Inclue Technologies Private Limited, a tech startup with innovative products and services in manufacturing and healthcare industries.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Internationalization](#internationalization)
- [Theme](#theme)
- [Contributing](#contributing)

## Features

- Modern responsive design
- Multi-language support (English and German)
- Light and dark theme
- Rich UI animations
- SEO optimized
- Mobile-friendly layout

## Technologies Used

- React 18 with TypeScript
- React Router for navigation
- Redux Toolkit for state management
- Context API for theme and language settings
- Material UI for design components
- Framer Motion for animations
- React Intl Universal for internationalization
- Axios for API integration
- Webpack for build optimization

## Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm (v8.0.0 or higher) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/inclue-technologies/website.git
   cd inclue-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

## Project Structure

```
inclue-website/
├── src/
│   ├── api/          # API clients and mock data
│   ├── assets/       # Static assets like images and icons
│   ├── components/   # Reusable components
│   ├── context/      # Context providers for theme and language
│   ├── hooks/        # Custom React hooks
│   ├── locales/      # Internationalization files
│   ├── pages/        # Page components
│   ├── redux/        # Redux store and slices
│   ├── routes/       # Routing configuration
│   ├── styles/       # Global styles and theme
│   ├── types/        # TypeScript type definitions
│   ├── utils/        # Utility functions
│   ├── App.tsx       # Main application component
│   └── index.tsx     # Entry point
└── public/           # Public static assets
```

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm run analyze`: Analyzes the bundle size
- `npm run lint`: Lints the codebase
- `npm run lint:fix`: Fixes linting errors automatically
- `npm run format`: Formats code using Prettier
- `npm run type-check`: Checks TypeScript types

## Deployment

The website is configured for deployment on Hostinger. The build process optimizes the application for best performance.

To deploy:

1. Build the project:
   ```bash
   npm run build
   ```

2. The build artifacts will be stored in the `build/` directory.

3. Upload the contents of the `build/` directory to your Hostinger hosting.

## Internationalization

The website supports English and German languages. To add or modify translations:

1. Update the translation files in `src/locales/` directory.
2. Use the `intl.get('key')` function to retrieve translated text in components.

## Theme

The website supports both light and dark themes based on the Inclue Technologies brand guidelines. Theme settings are saved in local storage for returning visitors.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Developed with ❤️ for Inclue Technologies Private Limited