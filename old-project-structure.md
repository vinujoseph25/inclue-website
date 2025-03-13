inclue-website/
├── .github/ # GitHub configuration
│ └── workflows/ # CI/CD workflows
│ ├── deploy.yml # Deployment workflow
│ └── test.yml # Testing workflow
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
│ ├── api/
│ │ ├── mock/
│ │ │ ├── products.ts
│ │ │ ├── services.ts
│ │ │ ├── industries.ts
│ │ │ └── resources.ts
│ │ ├── endpoints.ts
│ │ └── apiClient.ts
│ ├── assets/
│ │ ├── fonts/
│ │ ├── images/
│ │ │ ├── logo.png
│ │ │ ├── babble-product.jpg
│ │ │ ├── babble-lite-product.jpg
│ │ │ ├── industrial-automation.jpg
│ │ │ ├── custom-iot.jpg
│ │ │ ├── plc-solutions.jpg
│ │ │ ├── web-development.jpg
│ │ │ ├── manufacturing.jpg
│ │ │ ├── healthcare.jpg
│ │ │ ├── hero-bg.jpg
│ │ │ └── about-bg.jpg
│ │ └── icons/
│ ├── components/
│ │ ├── common/
│ │ │ ├── Button/
│ │ │ │ └── index.tsx
│ │ │ ├── Card/
│ │ │ │ └── index.tsx
│ │ │ ├── Footer/
│ │ │ │ └── index.tsx
│ │ │ ├── Header/
│ │ │ │ └── index.tsx
│ │ │ ├── Hero/
│ │ │ │ └── index.tsx
│ │ │ ├── LanguageSwitcher/
│ │ │ │ └── index.tsx
│ │ │ ├── Loader/
│ │ │ │ └── index.tsx
│ │ │ ├── PageTransition/
│ │ │ │ └── index.tsx
│ │ │ ├── SectionTitle/
│ │ │ │ └── index.tsx
│ │ │ ├── SEO/
│ │ │ │ └── index.tsx
│ │ │ └── ThemeToggle/
│ │ │ └── index.tsx
│ │ ├── home/
│ │ │ ├── BenefitsSection/
│ │ │ │ └── index.tsx
│ │ │ ├── ClientsSection/
│ │ │ │ └── index.tsx
│ │ │ ├── FeaturedProducts/
│ │ │ │ └── index.tsx
│ │ │ ├── HeroSection/
│ │ │ │ └── index.tsx
│ │ │ ├── IndustriesSection/
│ │ │ │ └── index.tsx
│ │ │ └── ServicesSection/
│ │ │ └── index.tsx
│ │ ├── products/
│ │ │ ├── BenefitsList/
│ │ │ │ └── index.tsx
│ │ │ ├── FeatureCard/
│ │ │ │ └── index.tsx
│ │ │ ├── ProductCard/
│ │ │ │ └── index.tsx
│ │ │ └── RequestDemoForm/
│ │ │ └── index.tsx
│ │ ├── services/
│ │ │ ├── ProcessSteps/
│ │ │ │ └── index.tsx
│ │ │ ├── ServiceCard/
│ │ │ │ └── index.tsx
│ │ │ └── ServiceFeatures/
│ │ │ └── index.tsx
│ │ ├── industries/
│ │ │ ├── IndustryCard/
│ │ │ │ └── index.tsx
│ │ │ └── SolutionsList/
│ │ │ └── index.tsx
│ │ ├── about/
│ │ │ ├── CompanyHistory/
│ │ │ │ └── index.tsx
│ │ │ ├── MissionVision/
│ │ │ │ └── index.tsx
│ │ │ └── TeamSection/
│ │ │ └── index.tsx
│ │ ├── contact/
│ │ │ ├── ContactForm/
│ │ │ │ └── index.tsx
│ │ │ └── LocationMap/
│ │ │ └── index.tsx
│ │ └── resources/
│ │ ├── BlogCard/
│ │ │ └── index.tsx
│ │ ├── CaseStudyCard/
│ │ │ └── index.tsx
│ │ └── WhitepaperCard/
│ │ └── index.tsx
│ ├── context/
│ │ ├── LanguageContext.tsx
│ │ └── ThemeContext.tsx
│ ├── hooks/
│ │ ├── useAnimatedElement.ts
│ │ ├── useResponsive.ts
│ │ └── useScrollPosition.ts
│ ├── locales/
│ │ ├── en-US.json
│ │ └── de-DE.json
│ ├── pages/
│ │ ├── Home/
│ │ │ └── index.tsx
│ │ ├── Products/
│ │ │ ├── ProductDetail.tsx
│ │ │ └── index.tsx
│ │ ├── Services/
│ │ │ ├── ServiceDetail.tsx
│ │ │ └── index.tsx
│ │ ├── Industries/
│ │ │ ├── IndustryDetail.tsx
│ │ │ └── index.tsx
│ │ ├── About/
│ │ │ └── index.tsx
│ │ ├── Contact/
│ │ │ └── index.tsx
│ │ ├── Resources/
│ │ │ ├── Blog.tsx
│ │ │ ├── CaseStudies.tsx
│ │ │ ├── Whitepapers.tsx
│ │ │ ├── FAQs.tsx
│ │ │ └── index.tsx
│ │ └── NotFound/
│ │ └── index.tsx
│ ├── redux/
│ │ ├── slices/
│ │ │ ├── productsSlice.ts
│ │ │ ├── servicesSlice.ts
│ │ │ ├── industriesSlice.ts
│ │ │ ├── contactSlice.ts
│ │ │ └── resourcesSlice.ts
│ │ └── store.ts
│ ├── routes/
│ │ └── index.tsx
│ ├── styles/
│ │ ├── animations.ts
│ │ ├── globalStyles.css
│ │ └── theme.ts
│ ├── types/
│ │ ├── product.types.ts
│ │ ├── service.types.ts
│ │ ├── industry.types.ts
│ │ ├── resource.types.ts
│ │ └── common.types.ts
│ ├── utils/
│ │ ├── animations.ts
│ │ ├── formValidation.ts
│ │ ├── i18n.ts
│ │ ├── responsiveUtils.ts
│ │ └── seo.ts
│ ├── App.tsx
│ ├── index.tsx
│ └── reportWebVitals.ts
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── package.json
├── README.md
├── tsconfig.json
├── webpack.config.js
└── yarn.lock
