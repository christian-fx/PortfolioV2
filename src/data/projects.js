export const PROJECTS = [
  {
    id: 'fintech-dashboard',
    title: 'Fintech Dashboard',
    category: 'Web Application',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/94f1209d-354a-4bbf-8387-9d17992f8af2.jpg',
    description: 'A comprehensive financial management platform enabling real-time portfolio tracking, expense analytics, and cryptocurrency monitoring for modern investors.',
    tags: [
      { icon: 'skill-icons:react-dark', label: 'React' },
      { icon: 'skill-icons:typescript', label: 'TypeScript' },
      { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind' },
      { icon: 'simple-icons:zustand', label: 'Zustand' }
    ],
    status: 'Completed',
    github: '#',
    live: '#',
    hasCaseStudy: true,
    meta: {
      client: 'FinanceFlow Inc.',
      year: '2024',
      role: 'Lead Frontend Developer',
      duration: '4 Months',
    },
    caseStudy: {
      sections: [
        {
          type: 'overview',
          content: [
            'FinanceFlow Inc. approached me to rebuild an aging legacy dashboard that suffered from severe rendering bottlenecks and a disconnected user experience. The previous platform, reliant on jQuery and outdated charting libraries, forced users to endure 8-second load times resulting in a 40% bounce rate.',
            'The primary objective was to architect a modern, highly performant dashboard capable of ingesting high-frequency real-time data streams. It needed to maintain crisp 60fps animations and achieve sub-second initial load times, serving both individual retail investors profiling personal portfolios and institutional advisors managing hundreds of client accounts.'
          ]
        },
        {
          type: 'challenges',
          content: [
            { icon: 'lucide:zap', title: 'Real-time Canvas Rendering', desc: 'Processing and rendering over 1,000 WebSocket pricing updates per second without causing main-thread UI jank or memory leaks.' },
            { icon: 'lucide:shield', title: 'Data Security & Integrity', desc: 'Enforcing bank-grade client-side encryption while maintaining instant, unhindered data access for authorized sessions.' },
            { icon: 'lucide:smartphone', title: 'Dense Data on Mobile', desc: 'Translating incredibly dense financial data grids and complex charts into an intuitive, readable mobile interface.' }
          ]
        },
        {
          type: 'solution',
          content: [
            { title: 'Virtualized Data Grids', desc: 'Implemented strict windowing techniques that only render visible rows on the DOM. This reduced the active DOM node count from over 10,000 to just 50, which, when combined with React Query\'s optimistic updates, created a perceived instant interaction state.' },
            { title: 'Custom WebSocket Architecture', desc: 'Engineered a hook-based WebSocket manager with automatic sophisticated reconnection strategies, message batching, and priority queuing. Critical asset updates render visually in under 16ms, while heavy background analytics are creatively deferred to browser idle time.' },
            { title: 'Adaptive Charting Engine', desc: 'Authored a dynamic D3.js wrapper that intelligently evaluates the device hardware and dataset size, automatically switching rendering modes between precise SVGs on desktop and high-performance Canvas on mobile devices.' },
            { title: 'Edge-First API Deployment', desc: 'Migrated heavy data aggregation tasks to Vercel Edge Functions. This strategic move reduced client-side network requests by over 90%, allowing the static dashboard shell to load globally in under 200ms.' }
          ]
        },
        {
          type: 'tech-stack',
          content: [
            { icon: 'skill-icons:react-dark', label: 'React 18' },
            { icon: 'skill-icons:typescript', label: 'TypeScript' },
            { icon: 'skill-icons:nextjs-dark', label: 'Next.js 14' },
            { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS' },
            { icon: 'skill-icons:react-dark', label: 'TanStack Query' },
            { icon: 'simple-icons:zustand', label: 'Zustand' },
            { icon: 'skill-icons:d3-dark', label: 'D3.js' },
            { icon: 'skill-icons:vercel-dark', label: 'Vercel Edge' },
            { icon: 'skill-icons:postgresql-dark', label: 'PostgreSQL' }
          ]
        },
        {
          type: 'results',
          content: {
            metrics: [
              { number: '0.8s', label: 'Time to Interactive' },
              { number: '60', label: 'FPS During Updates' },
              { number: '-65%', label: 'Bounce Rate' },
              { number: '4.9★', label: 'User Rating' }
            ],
            testimonial: {
              text: 'Christian transformed our struggling platform into something our users genuinely love. The attention to performance details—down to optimizing re-renders for each cell in our data grids—showed engineering excellence we hadn\'t seen before. Our advisors now complete portfolio reviews in half the time.',
              name: 'Sarah Chen',
              role: 'VP of Product, FinanceFlow Inc.',
              avatar: 'https://storage.googleapis.com/banani-generated-images/generated-images/d298266c-443a-4430-a988-7c164818a359.jpg'
            }
          }
        },
        {
          type: 'gallery',
          content: [
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/94f1209d-354a-4bbf-8387-9d17992f8af2.jpg', alt: 'Dashboard Overview', caption: 'Main dashboard with portfolio overview' },
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/dbbf9b07-e2b2-46e4-9fe6-067c9dd31bbd.jpg', alt: 'Analytics View', caption: 'Detailed analytics with custom date ranges' },
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/2931f37a-6689-4bd4-86c9-9276f20d1539.jpg', alt: 'Mobile View', caption: 'Responsive mobile experience' },
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/d298266c-443a-4430-a988-7c164818a359.jpg', alt: 'Dark Mode', caption: 'Dark mode for reduced eye strain' }
          ]
        }
      ]
    }
  },

  {
    id: 'devfolio',
    title: 'Devfolio',
    category: 'Developer Tools',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/devfolio-cover.jpg',
    description: 'Devfolio is a Node.js CLI tool that scaffolds a fully functional, GitHub-powered developer portfolio in one command, fetching live data from GitHub to keep it always up-to-date.',
    tags: [
      { icon: 'skill-icons:nodejs-dark', label: 'Node.js' },
      { icon: 'skill-icons:react-dark', label: 'React' },
      { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS' },
      { icon: 'skill-icons:vitejs', label: 'Vite' },
      { icon: 'skill-icons:framer-motion', label: 'Framer Motion' }
    ],
    status: 'In Development',
    github: 'https://github.com/christian-fx/Devfolio',
    live: '#',
    hasCaseStudy: true,
    meta: {
      projectType: 'Open Source',
      year: '2025',
      role: 'Creator and Maintainer',
      collaborators: '4 Contributors'
    },
    caseStudy: {
      sections: [
        {
          type: 'overview',
          content: [
            'Devfolio is a specialized Node.js CLI tool designed to completely eliminate the friction of creating and updating developer portfolios. By executing a single command, developers can scaffold a highly customizable, production-ready React web application.',
            'What truly sets Devfolio apart is its deep, automated GitHub integration. The generated portfolio automatically hooks into the GitHub REST API to fetch live repositories, language statistics, star counts, and profile metadata. This ensures the developer\'s portfolio is continuously and effortlessly up-to-date without any manual CMS management or code pushes.'
          ]
        },
        {
          type: 'challenges',
          content: [
            { icon: 'lucide:zap', title: 'Automated Code Scaffolding', desc: 'Writing a robust Node CLI that cleanly handles file system operations, dynamic template hydration, and dependency installation without failing on varying OS environments.' },
            { icon: 'lucide:github', title: 'Live GitHub Data Integration', desc: 'Mapping raw, unpaginated GitHub API data into normalized, accessible props for the UI while avoiding rate limits.' },
            { icon: 'lucide:paintbrush', title: 'Modular Template Support', desc: 'Engineering a core scaffolding engine that seamlessly swaps between entirely different Tailwind and Framer Motion layouts based on CLI inputs.' }
          ]
        },
        {
          type: 'solution',
          content: [
            { title: 'Interactive CLI Engine', desc: 'Utilized Inquirer.js to build an intuitive, guided terminal experience. The CLI asks users targeted questions about their preferences and instantly boots up the tailored React environment using fs-extra for fast template copying.' },
            { title: 'Optimized GitHub Data Fetching', desc: 'Built a smart caching layer and specific query parameters into the GitHub REST API fetchers, pulling down live repositories, languages, and profile data instantly upon load, keeping the site perpetually fresh.' },
            { title: 'Pluggable Architecture', desc: 'Abstracted the portfolio \'theme\' into easily swappable JSON and component files, allowing the community to eventually design and inject their own custom Devfolio themes.' }
          ]
        },
        {
          type: 'tech-stack',
          content: [
            { icon: 'skill-icons:nodejs-dark', label: 'Node.js' },
            { icon: 'skill-icons:react-dark', label: 'React' },
            { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS' },
            { icon: 'skill-icons:vitejs', label: 'Vite' },
            { icon: 'skill-icons:framer-motion', label: 'Framer Motion' },
            { icon: 'simple-icons:github', label: 'GitHub REST API' },
            { icon: 'skill-icons:npm-dark', label: 'Inquirer.js' }
          ]
        },
        {
          type: 'gallery',
          content: [
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/devfolio-dashboard.jpg', alt: 'CLI Usage', caption: 'Running the interactive Devfolio CLI to generate a portfolio' },
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/devfolio-template.jpg', alt: 'Template Preview', caption: 'Browsing through the selectable React templates' },
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/devfolio-live-data.jpg', alt: 'Live GitHub Data', caption: 'Portfolio actively displaying live GitHub repositories and stats' },
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/devfolio-deploy.jpg', alt: 'Deployment Ready', caption: 'The generated Vite portfolio ready for an immediate production deploy' }
          ]
        }
      ]
    }
  },

  {
    id: 'gadgetstore-admin',
    title: 'Admin Dashboard',
    category: 'E-commerce',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/gadget-store-cover.jpg',
    description: 'A modern, responsive admin dashboard for managing a gadget e-commerce store, featuring real-time analytics, inventory and order management, and product CRUD operations—all powered by Firebase and Vanilla JavaScript.',
    tags: [
      { icon: 'skill-icons:javascript', label: 'Vanilla JavaScript' },
      { icon: 'skill-icons:html', label: 'HTML5' },
      { icon: 'skill-icons:css', label: 'CSS3' },
      { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS' },
      { icon: 'vscode-icons:file-type-firebase', label: 'Firebase' }
    ],
    status: 'In Development',
    github: 'https://github.com/christian-fx/Go-Gadget-Admin',
    live: 'https://gogadgets-theta.vercel.app/',
    hasCaseStudy: true,
    meta: {
      projectType: 'Independent Project - E-commerce Admin Tool',
      year: '2025',
      role: 'FullStack Developer',
      duration: '2 Months'
    },
    caseStudy: {
      sections: [
        {
          type: 'overview',
          content: [
            'Gadget Store Admin Dashboard is a sophisticated internal tool built to streamline complex e-commerce management. Despite its advanced feature set, it was architected entirely using modern Vanilla JavaScript, CSS, HTML, and Firebase, proving that large-scale SPA-like applications can be built proficiently without a massive framework overhead.',
            'The dashboard provides business owners with instant real-time analytics, dynamic visual inventory control, comprehensive product and category CRUD management, and a seamless order tracking interface.'
          ]
        },
        {
          type: 'challenges',
          content: [
            { icon: 'lucide:bar-chart', title: 'Real-Time Reactivity in Vanilla JS', desc: 'Syncing live revenue, top-selling categories, and key business metrics globally across the UI without a dedicated state management library like Redux.' },
            { icon: 'lucide:package', title: 'Complex Media Forms', desc: 'Engineering robust product creation forms that securely handle image uploads to Cloudinary, automated slug generation, and real-time validation.' },
            { icon: 'lucide:shopping-cart', title: 'Order State Syncing', desc: 'Managing precise order lifecycle states (from Pending to Delivered) using Firestore listeners, ensuring administrators look at the most accurate data instantly.' }
          ]
        },
        {
          type: 'solution',
          content: [
            { title: 'Modular JavaScript Architecture', desc: 'Leveraged ES6 Modules to cleanly decouple the logic, routing, and UI rendering. This made the application highly maintainable and blazing fast.' },
            { title: 'Firestore Real-Time Data Streams', desc: 'Integrated heavily with Firebase Firestore listeners to push live sales data, stock adjustments, and order updates to the DOM without requiring manual page refreshes.' },
            { title: 'Media Pipeline Integration', desc: 'Built seamless integration with the Cloudinary upload API, managing image transformations and securely associating image endpoints with product records in Firebase.' },
            { title: 'Liquid Mobile-First Layout', desc: 'Authored a highly adaptive UI using Tailwind CSS, featuring collapsible asynchronous sidebar navigations and dense data grids that gracefully stack on mobile devices.' }
          ]
        },
        {
          type: 'tech-stack',
          content: [
            { icon: 'skill-icons:html', label: 'HTML5' },
            { icon: 'skill-icons:css', label: 'CSS3' },
            { icon: 'skill-icons:javascript', label: 'Vanilla JavaScript (ES Modules)' },
            { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS v4' },
            { icon: 'skill-icons:vitejs', label: 'Vite' },
            { icon: 'vscode-icons:file-type-firebase', label: 'Firebase (Auth & Firestore)' },
            { icon: 'simple-icons:cloudinary', label: 'Cloudinary' }
          ]
        },
        {
          type: 'gallery',
          content: [
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/gadget-dashboard.jpg', alt: 'Dashboard Overview', caption: 'Main dashboard showing interactive revenue charts and key business metrics' },
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/gadget-products.jpg', alt: 'Product Management', caption: 'Full CRUD interface for product inventory, supporting rich media uploads' },
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/gadget-inventory.jpg', alt: 'Inventory Control', caption: 'Visual stock indicators calculating real-time inventory valuation' },
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/gadget-orders.jpg', alt: 'Order Management', caption: 'Actionable order tracking interface managing states from Pending to Delivered' }
          ]
        }
      ]
    }
  },

  {
    id: 'go-gadgets-store',
    title: 'Go Gadgets Store',
    category: 'E-commerce',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/go-gadgets-cover.jpg',
    description: 'A modern, fast, and fully functional single-page application (SPA) storefront for Go Gadgets e-commerce platform, featuring seamless navigation, secure checkout, and real-time product updates.',
    tags: [
      { icon: 'skill-icons:javascript', label: 'Vanilla JavaScript' },
      { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS' },
      { icon: 'vscode-icons:file-type-firebase', label: 'Firebase' }
    ],
    status: 'In Development',
    github: 'https://github.com/christian-fx/Go-Gadgets',
    live: 'https://gogadgets-alpha.vercel.app/',
    hasCaseStudy: true,
    meta: {
      projectType: 'Independent Project - Customer Store',
      year: '2025',
      role: 'FullStack Developer',
      duration: '2 Months'
    },
    caseStudy: {
      sections: [
        {
          type: 'overview',
          content: [
            'Go Gadgets Customer Store is the companion storefront built specifically for gadget enthusiasts. It operates as a fully responsive, natively constructed Single Page Application (SPA), rivaling modern React applications in layout shifting and navigation speed.',
            'The storefront focuses on delivering an uninterrupted shopping experience. By leveraging a custom-built JavaScript router for page transitions and Firebase for a real-time database backbone, it handles cart synchronizations, user profiles, and secure checkout natively.'
          ]
        },
        {
          type: 'challenges',
          content: [
            { icon: 'lucide:router', title: 'Custom SPA Routing', desc: 'Engineering a lightweight, History-API-based JavaScript router from scratch to enable instantaneous, reload-free page transitions and dynamic DOM manipulation.' },
            { icon: 'lucide:shield', title: 'Authentication State Flows', desc: 'Securely handling multi-provider authentication, preserving user sessions across reloads, and blocking protected routes (like Checkout) dynamically.' },
            { icon: 'lucide:database', title: 'Atomic Transactions', desc: 'Ensuring absolute database integrity during the checkout process by accurately updating remote stock availability and user cart states simultaneously.' }
          ]
        },
        {
          type: 'solution',
          content: [
            { title: 'Bespoke Navigation Engine', desc: 'Designed a completely custom JavaScript routing layer that intercepts browser history and hydrates targeted layout containers dynamically, resulting in an app-like friction-less navigation.' },
            { title: 'Robust Firebase Authentication', desc: 'Implemented an impenetrable Auth layer managing strict session validations for email/password and Google OAuth, bridging securely into full CRUD capabilities for shipping profiles and order histories.' },
            { title: 'Transactional Payment Processing', desc: 'Developed a bulletproof checkout sequence utilizing Firestore `runTransaction`. This guarantees atomic updates, verifying exact warehouse stock milliseconds before finalizing an order creation.' },
            { title: 'Persistent State Caching', desc: 'Built a sophisticated Cart abstraction utilizing `localStorage` and periodic background syncs to Firebase, guaranteeing a user never loses their queued items across devices.' }
          ]
        },
        {
          type: 'tech-stack',
          content: [
            { icon: 'skill-icons:html', label: 'HTML5' },
            { icon: 'skill-icons:css', label: 'CSS3' },
            { icon: 'skill-icons:javascript', label: 'Vanilla JavaScript (ES6+)' },
            { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS' },
            { icon: 'vscode-icons:file-type-firebase', label: 'Firebase (Auth & Firestore)' },
            { icon: 'skill-icons:vitejs', label: 'Vite' }
          ]
        },
        {
          type: 'gallery',
          content: [
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/go-gadgets-home.jpg', alt: 'Home Page', caption: 'The customer storefront spotlighting live trending products' },
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/go-gadgets-product.jpg', alt: 'Product Listing', caption: 'Dynamic marketplace grids equipped with real-time stock indicators' },
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/go-gadgets-cart.jpg', alt: 'Shopping Cart', caption: 'Intuitive, persistent shopping cart drawer and checkout flow' },
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/go-gadgets-account.jpg', alt: 'Account Management', caption: 'Secure user account dashboard displaying granular order histories' }
          ]
        }
      ]
    }
  },
  {
    id: 'academiatrack',
    title: 'AcademiaTrack',
    category: 'Educational',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/2931f37a-6689-4bd4-86c9-9276f20d1539.jpg',
    description: 'AcademiaTrack is a full-stack academic tracking system that enables students to manage their academic records through GPA/CGPA computation, progress analytics, and report generation.',
    tags: [
      { icon: 'skill-icons:html', label: 'HTML' },
      { icon: 'skill-icons:css', label: 'CSS' },
      { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS' },
      { icon: 'vscode-icons:file-type-firebase', label: 'Firebase' }
    ],
    status: 'Completed',
    github: '#',
    live: 'https://academiatrack.vercel.app',
    hasCaseStudy: true,
    meta: {
      projectType: 'Independent Project - Student Solution',
      year: '2025',
      role: 'Lead FullStack Developer',
      duration: '3 Months',
    },
    caseStudy: {
      sections: [
        {
          type: 'overview',
          content: [
            'AcademiaTrack is a powerful academic management platform exclusively engineered to eliminate the friction students face when tracking their long-term educational trajectory. It acts as a comprehensive vault for academic records, drastically simplifying GPA/CGPA projections across complex multi-semester algorithms.',
            'Beyond raw calculation, the platform serves as an intelligent academic assistant. It combines historical performance analytics, customizable activity tracking, and an embedded AI-powered chatbot designed to help students optimize their remaining course loads.'
          ]
        },
        {
          type: 'challenges',
          content: [
            { icon: 'lucide:zap', title: 'Algorithmic Accuracy', desc: 'Building flawlessly accurate, highly-tested GPA and CGPA mathematical calculation models that scale predictably across infinite semesters and custom grading weights.' },
            { icon: 'lucide:shield', title: 'Data Privacy', desc: 'Ensuring that deeply sensitive student grades and academic data remain absolutely private and untamperable through strict Firestore security rules.' },
            { icon: 'lucide:smartphone', title: 'UI Density Navigation', desc: 'Crafting a dashboard that conveys overwhelming amounts of academic analytics and interactive charts without feeling visually cluttered.' }
          ]
        },
        {
          type: 'solution',
          content: [
            { title: 'Predictive Grading Logic', desc: 'Engineered a highly reliable core calculator module strictly segregated from the UI, executing isolated computations of course units against grade denominators to instantly calculate and project theoretical CGPAs.' },
            { title: 'Architected Firebase Security', desc: 'Leveraged Firebase Auth combined with tailored Firestore Security Rules to guarantee isolation, ensuring users can only read or mutate documents containing their specific unique user identifiers.' },
            { title: 'Conversational Academic AI', desc: 'Integrated an embedded, context-aware chatbot interface to answer student queries, provide layout guidance, and generate motivational insights entirely in-browser.' }
          ]
        },
        {
          type: 'tech-stack',
          content: [
            { icon: 'skill-icons:html', label: 'HTML5' },
            { icon: 'skill-icons:css', label: 'CSS3' },
            { icon: 'skill-icons:javascript', label: 'JavaScript' },
            { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS' },
            { icon: 'vscode-icons:file-type-firebase', label: 'Firebase Data layer' },
            { icon: 'skill-icons:vercel-dark', label: 'Vercel Edge' }
          ]
        },
        {
          type: 'gallery',
          content: [
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/94f1209d-354a-4bbf-8387-9d17992f8af2.jpg', alt: 'Dashboard Overview', caption: 'The main dashboard cleanly presenting active course loads' },
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/dbbf9b07-e2b2-46e4-9fe6-067c9dd31bbd.jpg', alt: 'Analytics View', caption: 'Deep-dive analytical charts monitoring semester trends' },
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/2931f37a-6689-4bd4-86c9-9276f20d1539.jpg', alt: 'Mobile View', caption: 'The responsive GPA calculator optimized for smartphones' },
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/d298266c-443a-4430-a988-7c164818a359.jpg', alt: 'Dark Mode', caption: 'The platform\'s elegant programmatic dark mode' }
          ]
        }
      ]
    }
  },
  {
    id: 'fitnesshub',
    title: 'Fitness Hub',
    category: 'Health & Fitness',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/fitness-hub-cover.jpg',
    description: 'Fitness Hub is an AI-powered fitness web application that helps users achieve their health goals through personalized workout plans, progress tracking, and interactive training experiences.',
    tags: [
      { icon: 'skill-icons:nextjs-dark', label: 'Next.js' },
      { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS' },
      { icon: 'vscode-icons:file-type-firebase', label: 'Firebase' },
      { icon: 'skill-icons:react-dark', label: 'React' }
    ],
    status: 'Completed',
    github: 'https://github.com/christian-fx/FitnessHub',
    live: 'https://fitnesshub-beta.vercel.app',
    hasCaseStudy: true,
    meta: {
      projectType: 'Independent Project - Fitness Tech',
      year: '2025',
      role: 'FullStack Developer',
      duration: '3 Months'
    },
    caseStudy: {
      sections: [
        {
          type: 'overview',
          content: [
            'Fitness Hub fundamentally reimagines personal health tracking by integrating powerful GenAI technologies directly into the user\'s routine. It is a highly optimized Next.js Web Application designed to act as an unyielding personal trainer.',
            'Rather than offering static, mundane spreadsheets of workout reps, the platform dynamically generates intelligent, responsive routines tailored specifically to the user\'s real-life goals, varying physical capabilities, and immediate equipment availability.'
          ]
        },
        {
          type: 'challenges',
          content: [
            { icon: 'lucide:brain', title: 'Stable LLM Generation', desc: 'Crafting extremely rigid AI generation prompts so the LLMs invariably return safely structured, parseable JSON workout sets rather than erratic chat text.' },
            { icon: 'lucide:activity', title: 'Live Workout Syncing', desc: 'Maintaining flawless reactivity when tracking intensive mid-workout timers and form milestones without causing application stutter.' },
            { icon: 'lucide:bar-chart', title: 'Data Visualization', desc: 'Converting raw, heavily unformatted fitness data spanning hundreds of sessions into actionable, beautiful macro-level charts.' }
          ]
        },
        {
          type: 'solution',
          content: [
            { title: 'Generative AI Pipelines', desc: 'Integrated advanced Google Generative AI frameworks to dynamically produce context-aware fitness programs. By standardizing output schemas, the AI injects personalized workouts directly into the database.' },
            { title: 'Real-Time Interface Execution', desc: 'Engineered a highly responsive React workout-execution layout featuring zero-delay interval timers, immediate set logging, and progression flows optimized specifically for sweaty hands on mobile screens.' },
            { title: 'Recharts Dashboard', desc: 'Built a visually stunning progress analytics suite utilizing Recharts to map long-term user consistency, extrapolating weekly calorie expenditure and cumulative hypertrophic volume.' },
            { title: 'Firebase Cloud Architecture', desc: 'Relying heavily on Firebase Firestore for high-velocity write throughput, ensuring every single bicep curl or treadmill mile is securely mirrored to the cloud instantaneously.' }
          ]
        },
        {
          type: 'tech-stack',
          content: [
            { icon: 'skill-icons:nextjs-dark', label: 'Next.js (App Router)' },
            { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS' },
            { icon: 'skill-icons:react-dark', label: 'React' },
            { icon: 'vscode-icons:file-type-firebase', label: 'Firebase (Auth & Firestore)' },
            { icon: 'skill-icons:vercel-dark', label: 'Vercel' },
            { icon: 'simple-icons:recharts', label: 'Recharts' }
          ]
        },
        {
          type: 'gallery',
          content: [
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/fitness-dashboard.jpg', alt: 'Dashboard', caption: 'The central hub mapping daily macros and streaks' },
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/workout-session.jpg', alt: 'Workout Session', caption: 'In-progress training session interface with active timers' },
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/progress-charts.jpg', alt: 'Progress Charts', caption: 'Granular progression graphs visualizing long-term volume increases' },
            { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/social-challenges.jpg', alt: 'Challenges', caption: 'Community-driven competitive leaderboards' }
          ]
        }
      ]
    }
  },
  {
    id: 'nexus-design-system',
    title: 'Nexus Design System',
    category: 'Design System',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/dbbf9b07-e2b2-46e4-9fe6-067c9dd31bbd.jpg',
    description: 'A comprehensive React component library and design system documentation site built for internal tooling teams.',
    tags: [
      { icon: 'skill-icons:storybook', label: 'Storybook' },
      { icon: 'skill-icons:react-dark', label: 'React' },
      { icon: 'skill-icons:styledcomponents', label: 'Styled Components' }
    ],
    status: 'Planning',
    github: '#',
    live: '#',
    hasCaseStudy: false
  }
];