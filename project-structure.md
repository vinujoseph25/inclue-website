inclue-website/
├── node_modules/
├── public/ # Static files
│ ├── favicon.ico # Site favicon
│ ├── index.html # HTML entry point
│ ├── logo192.png # Logo for PWA
│ ├── logo512.png # Logo for PWA
│ ├── manifest.json # PWA manifest
│ ├── robots.txt # SEO robots config
│ └── sitemap.xml # Site map for SEO
├── src/ # Source code
│ ├── animations/ # Animation utilities
│ │ ├── pageTransitions.ts # Page transition animations
│ │ ├── scrollEffects.ts # Scroll-based animations
│ │ └── hoverEffects.ts # Hover effect animations
│ ├── api/ # API integration
│ │ ├── mock/ # Mock data for development
│ │ │ ├── products.ts # Products data
│ │ │ ├── services.ts # Services data
│ │ │ ├── industries.ts # Industries data
│ │ │ └── resources.ts # Resources data
│ │ ├── endpoints.ts # API endpoint definitions
│ │ └── apiClient.ts # Axios configuration
│ ├── assets/ # Static assets
│ │ ├── fonts/ # Custom fonts (Funnel Display)
│ │ ├── images/ # Image files
│ │ │ ├── logo/ # Logo variants
│ │ │ ├── products/ # Product images
│ │ │ ├── services/ # Service images
│ │ │ ├── industries/ # Industry images
│ │ │ └── about/ # About page images
│ │ └── icons/ # Icon assets
│ ├── components/ # React components
│ │ ├── common/ # Shared components
│ │ │ ├── Button/ # Button component
│ │ │ │ ├── index.tsx # Component implementation
│ │ │ │ └── styles.ts # Component-specific styles
│ │ │ ├── Card/ # Card component
│ │ │ │ └── index.tsx # Component implementation
│ │ │ ├── ErrorBoundary/ # Error boundary component
│ │ │ │ └── index.tsx # Component implementation
│ │ │ ├── Footer/ # Footer component
│ │ │ │ └── index.tsx # Component implementation
│ │ │ ├── Header/ # Header component
│ │ │ │ ├── index.tsx # Component implementation
│ │ │ │ ├── MobileMenu.tsx # Mobile navigation menu
│ │ │ │ └── DesktopMenu.tsx # Desktop navigation menu
│ │ │ ├── Hero/ # Hero section component
│ │ │ │ └── index.tsx # Component implementation
│ │ │ ├── LanguageSwitcher/ # Language toggle component
│ │ │ │ └── index.tsx # Component implementation
│ │ │ ├── Loader/ # Loading indicator component
│ │ │ │ └── index.tsx # Component implementation
│ │ │ ├── PageTransition/ # Page transition wrapper
│ │ │ │ └── index.tsx # Component implementation
│ │ │ ├── SectionTitle/ # Section title component
│ │ │ │ └── index.tsx # Component implementation
│ │ │ ├── SEO/ # SEO component
│ │ │ │ ├── index.tsx # Component implementation
│ │ │ │ └── schema.ts # Structured data schemas
│ │ │ └── ThemeToggle/ # Theme toggle component
│ │ │ └── index.tsx # Component implementation
│ │ ├── home/ # Homepage components
│ │ │ ├── BenefitsSection/ # Benefits section
│ │ │ │ └── index.tsx # Component implementation
│ │ │ ├── ClientsSection/ # Clients section
│ │ │ │ └── index.tsx # Component implementation
│ │ │ ├── FeaturedProducts/ # Featured products section
│ │ │ │ └── index.tsx # Component implementation
│ │ │ ├── HeroSection/ # Hero section
│ │ │ │ └── index.tsx # Component implementation
│ │ │ ├── IndustriesSection/ # Industries section
│ │ │ │ └── index.tsx # Component implementation
│ │ │ └── ServicesSection/ # Services section
│ │ │ └── index.tsx # Component implementation
│ │ ├── products/ # Product page components
│ │ │ ├── BenefitsList/ # Benefits list component
│ │ │ │ └── index.tsx # Component implementation
│ │ │ ├── FeatureCard/ # Feature card component
│ │ │ │ └── index.tsx # Component implementation
│ │ │ ├── ProductCard/ # Product card component
│ │ │ │ └── index.tsx # Component implementation
│ │ │ └── RequestDemoForm/ # Demo request form
│ │ │ └── index.tsx # Component implementation
│ │ ├── services/ # Service page components
│ │ │ ├── ProcessSteps/ # Process steps component
│ │ │ │ └── index.tsx # Component implementation
│ │ │ ├── ServiceCard/ # Service card component
│ │ │ │ └── index.tsx # Component implementation
│ │ │ └── ServiceFeatures/ # Service features component
│ │ │ └── index.tsx # Component implementation
│ │ ├── industries/ # Industry page components
│ │ │ ├── IndustryCard/ # Industry card component
│ │ │ │ └── index.tsx # Component implementation
│ │ │ └── SolutionsList/ # Solutions list component
│ │ │ └── index.tsx # Component implementation
│ │ ├── about/ # About page components
│ │ │ ├── CompanyHistory/ # Company history component
│ │ │ │ └── index.tsx # Component implementation
│ │ │ ├── MissionVision/ # Mission/vision component
│ │ │ │ └── index.tsx # Component implementation
│ │ │ └── TeamSection/ # Team section component
│ │ │ └── index.tsx # Component implementation
│ │ ├── contact/ # Contact page components
│ │ │ ├── ContactForm/ # Contact form component
│ │ │ │ └── index.tsx # Component implementation
│ │ │ └── LocationMap/ # Map component
│ │ │ └── index.tsx # Component implementation
│ │ └── resources/ # Resources page components
│ │ ├── BlogCard/ # Blog card component
│ │ │ └── index.tsx # Component implementation
│ │ ├── CaseStudyCard/ # Case study card component
│ │ │ └── index.tsx # Component implementation
│ │ └── WhitepaperCard/ # Whitepaper card component
│ │ └── index.tsx # Component implementation
│ ├── context/ # React context providers
│ │ ├── LanguageContext.tsx # Language context
│ │ └── ThemeContext.tsx # Theme context
│ ├── hooks/ # Custom React hooks
│ │ ├── useAnimatedElement.ts # Animation hook
│ │ ├── useFormValidation.ts # Form validation hook
│ │ ├── useResponsive.ts # Responsive design hook
│ │ └── useScrollPosition.ts # Scroll position hook
│ ├── layouts/ # Layout components
│ │ ├── MainLayout.tsx # Main site layout
│ │ └── DashboardLayout.tsx # Admin dashboard layout (if needed)
│ ├── locales/ # Internationalization files
│ │ ├── en-US.json # English translations
│ │ └── de-DE.json # German translations
│ ├── pages/ # Page components
│ │ ├── Home/ # Homepage
│ │ │ └── index.tsx # Page implementation
│ │ ├── Products/ # Products page
│ │ │ ├── ProductDetail.tsx # Product detail page
│ │ │ └── index.tsx # Products listing page
│ │ ├── Services/ # Services page
│ │ │ ├── ServiceDetail.tsx # Service detail page
│ │ │ └── index.tsx # Services listing page
│ │ ├── Industries/ # Industries page
│ │ │ ├── IndustryDetail.tsx # Industry detail page
│ │ │ └── index.tsx # Industries listing page
│ │ ├── About/ # About page
│ │ │ └── index.tsx # Page implementation
│ │ ├── Contact/ # Contact page
│ │ │ └── index.tsx # Page implementation
│ │ ├── Resources/ # Resources pages
│ │ │ ├── Blog.tsx # Blog page
│ │ │ ├── BlogPost.tsx # Individual blog post
│ │ │ ├── CaseStudies.tsx # Case studies page
│ │ │ ├── CaseStudyDetail.tsx # Case study detail
│ │ │ ├── Whitepapers.tsx # Whitepapers page
│ │ │ ├── FAQs.tsx # FAQs page
│ │ │ └── index.tsx # Resources landing page
│ │ └── NotFound/ # 404 page
│ │ └── index.tsx # Page implementation
│ ├── redux/ # Redux state management
│ │ ├── slices/ # Redux Toolkit slices
│ │ │ ├── productsSlice.ts # Products state
│ │ │ ├── servicesSlice.ts # Services state
│ │ │ ├── industriesSlice.ts # Industries state
│ │ │ ├── contactSlice.ts # Contact form state
│ │ │ └── resourcesSlice.ts # Resources state
│ │ └── store.ts # Redux store configuration
│ ├── routes/ # Routing configuration
│ │ └── index.tsx # Route definitions
│ ├── styles/ # Styling utilities
│ │ ├── animations.ts # Animation definitions
│ │ ├── globalStyles.css # Global CSS styles
│ │ ├── mediaQueries.ts # Responsive breakpoints
│ │ └── theme.ts # Theme configuration
│ ├── types/ # TypeScript type definitions
│ │ ├── product.types.ts # Product-related types
│ │ ├── service.types.ts # Service-related types
│ │ ├── industry.types.ts # Industry-related types
│ │ ├── resource.types.ts # Resource-related types
│ │ └── common.types.ts # Shared type definitions
│ ├── utils/ # Utility functions
│ │ ├── analytics.ts # Google Analytics utilities
│ │ ├── formValidation.ts # Form validation utilities
│ │ ├── i18n.ts # Internationalization utilities
│ │ ├── performance.ts # Performance monitoring utilities
│ │ ├── responsiveUtils.ts # Responsive design utilities
│ │ └── seo.ts # SEO utilities
│ ├── App.tsx # Main App component
│ ├── index.tsx # Application entry point
│ └── reportWebVitals.ts # Performance reporting
├── .eslintrc.js # ESLint configuration
├── .gitignore # Git ignore rules
├── .prettierrc # Prettier configuration
├── babel.config.js # Babel configuration
├── jest.config.js # Jest test configuration
├── jest.setup.js # Jest setup file
├── package.json # NPM dependencies and scripts
├── README.md # Project documentation
├── tsconfig.json # TypeScript configuration
├── webpack.config.js # Webpack configuration
└── yarn.lock # Yarn lock file
