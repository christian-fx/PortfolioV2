# Christian Akabueze | Portfolio V2

This repository contains the second generation of my personal portfolio, a comprehensive re-imagination of my digital presence. Built with React and Vite, this version transitions from static templates to a scalable, component-based architecture designed for high-performance and premium user experiences.

## Project Vision

The objective for Version 2 was to create a portfolio that feels less like a website and more like a fluid, professional application. This was achieved by prioritizing:
- Minimal interfaces with visual restraint.
- Intentional micro-interactions and quintic easing.
- Robust front-end engineering that bridges the gap between design and scalable code.

## Key Technical Features

### Orchestrated Motion Design
The application utilizes Framer Motion to manage all layout transitions. 
- Integrated a custom quintic easing function (0.22, 1, 0.36, 1) to provide animations with a feeling of physical weight and natural deceleration.
- Implemented staggered entrance variants for all case study sections, ensuring a rhythmic and coordinated content reveal as the user navigates.

### Layout Stability and Performance
To eliminate Cumulative Layout Shift (CLS) and provide a polished loading experience:
- Developed a global SkeletonImage system that renders shimmer loaders matching the exact aspect ratio of incoming assets.
- Utilized native lazy loading and asynchronous decoding for all non-critical images.
- Implemented high-priority fetch hints for hero assets to optimize the Largest Contentful Paint (LCP).

### Advanced SEO Strategy
The portfolio is architected for maximum search engine visibility:
- Dynamic metadata management using React Helmet Async.
- Automatic injection of Person, CreativeWork, and BreadcrumbList JSON-LD structured data for detailed search result snippets.
- Context-aware OpenGraph and Twitter card configurations, including precise image dimensions and optimized social previews.

## Technical Stack

- Core: React 18, Vite
- Logic: JavaScript (ES6+), React Hooks
- Styling: Vanilla CSS with modular design tokens
- Animation: Framer Motion
- Icons: Iconify Framework
- Search Optimization: React Helmet Async

## Project Architecture

- /src/components: Reusable UI primitives and modular case study building blocks.
- /src/data: Centralized project definitions and configuration.
- /src/pages: Route-level components including the dynamic Case Study renderer.
- /src/styles: Global typography and color system definitions.

## Getting Started

### Installation
Clone the repository and install dependencies:
```bash
npm install
```

### Development
Launch the Vite development server with Hot Module Replacement:
```bash
npm run dev
```

### Production
Generate an optimized production build:
```bash
npm run build
```

The portfolio is designed for seamless deployment on Vercel. Engagement and performance metrics are automatically tracked via **Vercel Analytics** and **Speed Insights** integrated into the core application.

