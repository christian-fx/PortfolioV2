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
    hasCaseStudy: false,
    meta: {
      client: 'FinanceFlow Inc.',
      year: '2024',
      role: 'Lead Frontend Developer',
      duration: '4 Months',
    },
    caseStudy: {
      overview: [
        'FinanceFlow Inc. approached me to rebuild their legacy dashboard that was struggling with performance issues and poor user engagement. The existing platform, built with jQuery and outdated charting libraries, was experiencing 8-second load times and 40% bounce rates.',
        'The goal was to create a modern, performant dashboard that could handle real-time data streams while maintaining 60fps animations and sub-second initial load times. The platform needed to serve both retail investors managing personal portfolios and financial advisors overseeing multiple client accounts.'
      ],
      challenges: [
        { icon: 'lucide:zap', title: 'Real-time Performance', desc: 'Handling 1000+ WebSocket updates per second without UI jank or memory leaks' },
        { icon: 'lucide:shield', title: 'Data Security', desc: 'Implementing bank-grade encryption while maintaining instant data access' },
        { icon: 'lucide:smartphone', title: 'Responsive Complexity', desc: 'Adapting dense financial data layouts for mobile without information loss' }
      ],
      solution: [
        { title: 'Virtualized Data Grids', desc: 'Implemented windowing techniques rendering only visible rows, reducing DOM nodes from 10,000 to 50. Combined with React Query\'s optimistic updates for perceived instant interactions.' },
        { title: 'WebSocket Architecture', desc: 'Built a custom hook-based WebSocket manager with automatic reconnection, message batching, and priority queuing. Critical price updates render in 16ms, background analytics deferred to idle time.' },
        { title: 'Adaptive Charting System', desc: 'Created a D3.js wrapper that automatically switches rendering modes—SVG for precision on desktop, Canvas for performance on mobile, WebGL for 10k+ point datasets.' },
        { title: 'Edge-First Deployment', desc: 'Leveraged Vercel Edge Functions for API aggregation, reducing client-side requests from 12 to 1. Static dashboard shell loads in 200ms, data streams progressively enhance.' }
      ],
      techStack: [
        { icon: 'skill-icons:react-dark', label: 'React 18' },
        { icon: 'skill-icons:typescript', label: 'TypeScript' },
        { icon: 'skill-icons:nextjs-dark', label: 'Next.js 14' },
        { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS' },
        { icon: 'skill-icons:react-dark', label: 'TanStack Query' },
        { icon: 'simple-icons:zustand', label: 'Zustand' },
        { icon: 'skill-icons:d3-dark', label: 'D3.js' },
        { icon: 'skill-icons:vercel-dark', label: 'Vercel Edge' },
        { icon: 'skill-icons:postgresql-dark', label: 'PostgreSQL' }
      ],
      results: {
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
      },
      gallery: [
        { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/94f1209d-354a-4bbf-8387-9d17992f8af2.jpg', alt: 'Dashboard Overview', caption: 'Main dashboard with portfolio overview' },
        { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/dbbf9b07-e2b2-46e4-9fe6-067c9dd31bbd.jpg', alt: 'Analytics View', caption: 'Detailed analytics with custom date ranges' },
        { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/2931f37a-6689-4bd4-86c9-9276f20d1539.jpg', alt: 'Mobile View', caption: 'Responsive mobile experience' },
        { src: 'https://storage.googleapis.com/banani-generated-images/generated-images/d298266c-443a-4430-a988-7c164818a359.jpg', alt: 'Dark Mode', caption: 'Dark mode for reduced eye strain' }
      ]
    }
  },

  {
    id: 'devfolio',
    title: 'Devfolio',
    category: 'Developer Tools',
    image: '/images/case-studies/devfolioHero.png',
    description: 'Devfolio is a Node.js CLI tool that scaffolds a fully functional, GitHub-powered developer portfolio in one command, fetching live data from GitHub to keep it always up-to-date.',
    tags: [
      { icon: 'skill-icons:nodejs', label: 'Node.js' },
      { icon: 'skill-icons:react-dark', label: 'React' },
      { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS' },
      { icon: 'skill-icons:vitejs', label: 'Vite' },
      { icon: 'skill-icons:framer-motion', label: 'Framer Motion' }
    ],
    status: 'in-development',
    github: 'https://github.com/christian-fx/Devfolio',
    live: '#',
    hasCaseStudy: true,
    meta: {
      project_type: 'Open Source',
      year: '2025',
      role: 'Creator and Maintainer',
      collaborators: '4 Contributors'
    },
    caseStudy: {
      overview: [
        'Devfolio is a Node.js CLI tool that generates production-ready developer portfolio websites in a single command.',
        'It fetches live GitHub data — including repositories, stars, languages, bio, and profile picture — ensuring your portfolio is always current without manual updates.',
        'With multiple template options, Tailwind CSS styling, optional Framer Motion animations, and Vite-powered builds, developers get a fast, fully functional portfolio ready for deployment in minutes.'
      ],
      challenges: [
        {
          icon: 'lucide:zap',
          title: 'Automating Portfolio Generation',
          desc: 'Creating a CLI tool that generates a complete React portfolio in one command, with no manual setup, required careful handling of templates, project structure, and dependencies.'
        },
        {
          icon: 'lucide:github',
          title: 'Live GitHub Data Integration',
          desc: 'Fetching and displaying live GitHub repositories, languages, stars, and profile information required proper API handling and asynchronous data management.'
        },
        {
          icon: 'lucide:paintbrush',
          title: 'Multiple Template Support',
          desc: 'Allowing users to choose between different portfolio templates while ensuring compatibility and minimal configuration was challenging.'
        },
        {
          icon: 'lucide:rocket',
          title: 'Optimized Build & Deployment',
          desc: 'Ensuring the generated project works seamlessly with Vite for fast development and is ready to deploy to Vercel, Netlify, or GitHub Pages.'
        }],
      solution: [
        {
          title: 'One-Command CLI Tool',
          desc: 'Built the CLI with Node.js and Inquirer.js, allowing users to scaffold a full portfolio project by answering two quick prompts.'
        },
        {
          title: 'Live GitHub Integration',
          desc: 'Implemented GitHub REST API calls to automatically fetch repositories, stars, languages, and profile data, keeping the portfolio up-to-date.'
        },
        {
          title: 'Template-Based Architecture',
          desc: 'Created multiple React templates that can be selected during CLI setup, all pre-configured with Tailwind CSS and optional Framer Motion animations.'
        },
        {
          title: 'Production-Ready Build',
          desc: 'Used Vite for fast dev builds and optimized production output, ensuring the generated portfolio is ready to deploy immediately.'
        }],
      techStack: [
        { icon: 'skill-icons:nodejs', label: 'Node.js' },
        { icon: 'skill-icons:react-dark', label: 'React' },
        { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS' },
        { icon: 'skill-icons:vitejs', label: 'Vite' },
        { icon: 'skill-icons:framer-motion', label: 'Framer Motion' },
        { icon: 'simple-icons:github', label: 'GitHub REST API' },
        { icon: 'skill-icons:inquirer', label: 'Inquirer.js' }
      ]
    }
  },

  {
    id: 'gadgetstore-admin',
    title: 'Go Gadget Admin Dashboard',
    category: 'E-commerce',
    image: '/images/case-studies/adminDashboard.png',
    description: 'A modern, responsive admin dashboard for managing a gadget e-commerce store, featuring real-time analytics, inventory and order management, and product CRUD operations—all powered by Firebase and Vanilla JavaScript.',
    tags: [
      { icon: 'skill-icons:javascript', label: 'Vanilla JavaScript' },
      { icon: 'skill-icons:html', label: 'HTML5' },
      { icon: 'skill-icons:css', label: 'CSS3' },
      { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS' },
      { icon: 'vscode-icons:file-type-firebase', label: 'Firebase (Auth & Firestore)' }
    ],
    status: 'in-development',
    github: 'https://github.com/christian-fx/Go-Gadget-Admin',
    live: 'https://gogadgets-theta.vercel.app/',
    hasCaseStudy: true,
    meta: {
      project_type: 'Independent Project - E-commerce Admin Tool',
      year: '2025',
      role: 'FullStack Developer',
      duration: '2 Months'
    },
    caseStudy: {
      overview: [
        'Gadget Store Admin Dashboard is a responsive web application built to streamline e-commerce management for a gadget store.',
        'The dashboard provides real-time analytics, inventory control, product and category management, and order tracking through a user-friendly interface.',
        'Built with Vanilla JavaScript, Tailwind CSS, Vite, and Firebase, it combines performance, responsiveness, and secure data management to empower store administrators.'
      ],
      challenges: [
        {
          icon: 'lucide:bar-chart',
          title: 'Real-Time Analytics',
          desc: 'Displaying live revenue, top-selling categories, and key business metrics required efficient data fetching and state management from Firebase.'
        },
        {
          icon: 'lucide:package',
          title: 'Product & Category Management',
          desc: 'Enabling full CRUD operations with image uploads, automated category slugs, and icon suggestions demanded careful UI design and backend integration.'
        },
        {
          icon: 'lucide:clipboard',
          title: 'Inventory Control',
          desc: 'Tracking stock levels, low-stock alerts, and total inventory valuation in real time while keeping the interface intuitive was challenging.'
        },
        {
          icon: 'lucide:shopping-cart',
          title: 'Order Management',
          desc: 'Implementing order tracking from "Pending" to "Delivered" with easy status updates required accurate state management and real-time database syncing.'
        },
        {
          icon: 'lucide:smartphone',
          title: 'Mobile Responsiveness',
          desc: 'Designing a dashboard that is fully functional on smartphones and tablets with collapsible sidebar navigation for small screens posed layout challenges.'
        }],
      solution: [
        {
          title: 'Live Dashboard & Analytics',
          desc: 'Integrated Firebase Firestore to fetch live sales data, stock levels, and key metrics, rendering charts and indicators in real time.'
        },
        {
          title: 'Product & Category CRUD',
          desc: 'Built seamless create, read, update, and delete operations for products and categories, with image uploads via Cloudinary and automated slug/icon generation.'
        },
        {
          title: 'Inventory Management System',
          desc: 'Developed an interface for stock adjustments, status tracking, and automatic calculation of total inventory value.'
        },
        {
          title: 'Order Tracking & Updates',
          desc: 'Implemented order status management and real-time syncing to keep administrators and customers updated.'
        },
        {
          title: 'Responsive & Mobile-Friendly Design',
          desc: 'Designed a mobile-first layout with collapsible sidebar navigation to ensure smooth usability across all devices.'
        }],
      techStack: [
        { icon: 'skill-icons:html', label: 'HTML5' },
        { icon: 'skill-icons:css', label: 'CSS3' },
        { icon: 'skill-icons:javascript', label: 'Vanilla JavaScript (ES Modules)' },
        { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS v4' },
        { icon: 'skill-icons:vitejs', label: 'Vite' },
        { icon: 'vscode-icons:file-type-firebase', label: 'Firebase (Auth & Firestore)' },
        { icon: 'simple-icons:cloudinary', label: 'Cloudinary' },
        { icon: 'simple-icons:materialdesign', label: 'Material Symbols' }
      ],
      results: {
        metrics: [
          { number: 'Real-Time', label: 'Analytics & Stock Alerts' },
          { number: 'Full CRUD', label: 'Product & Category Management' },
          { number: 'Mobile-First', label: 'Responsive Dashboard' },
          { number: 'Efficient', label: 'Order Tracking & Inventory Control' }
        ]
      },
      gallery: [
        { src: '/images/case-studies/productsdetails.png', alt: 'Product Details', caption: 'Product Details Page showing all the details of the product' },
        { src: '/images/case-studies/products.png', alt: 'Product Management', caption: 'Full CRUD for products with image uploads' },
        { src: '/images/case-studies/inventory.png', alt: 'Inventory Control', caption: 'Visual stock status indicators and valuation' },
      ]
    }
  },
  {
    id: 'go-gadgets-store',
    title: 'Go Gadgets Customer Store',
    category: 'E-commerce',
    image: '/images/case-studies/goGadgetsLanding.png',
    description: 'A modern, fast, and fully functional single-page application (SPA) storefront for Go Gadgets e-commerce platform, featuring seamless navigation, secure checkout, and real-time product updates.',
    tags: [
      { icon: 'skill-icons:javascript', label: 'Vanilla JavaScript' },
      { icon: 'skill-icons:html', label: 'HTML5' },
      { icon: 'skill-icons:css', label: 'CSS3' },
      { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS' },
      { icon: 'vscode-icons:file-type-firebase', label: 'Firebase (Auth & Firestore)' }
    ],
    status: 'in-development',
    github: 'https://github.com/christian-fx/Go-Gadgets',
    live: 'https://gogadget-alpha.vercel.app/',
    hasCaseStudy: true,
    meta: {
      project_type: 'Independent Project - Customer-Facing E-commerce',
      year: '2025',
      role: 'FullStack Developer',
      duration: '2 Months'
    },
    caseStudy: {
      overview: [
        'Go Gadgets Customer Store is a fully responsive single-page application built to deliver a seamless shopping experience for users.',
        'The SPA leverages a custom JavaScript router for reload-free navigation, Firebase Authentication for secure login/signup, and Firestore for real-time product data.',
        'With features like persistent shopping carts, secure checkout, and full account management, the storefront ensures customers can browse, purchase, and manage their orders efficiently across all devices.'
      ],
      challenges: [
        {
          icon: 'lucide:router',
          title: 'Seamless SPA Navigation',
          desc: 'Creating a lightweight, history-API-based JavaScript router to enable reload-free page transitions while maintaining dynamic content updates was challenging.'
        },
        {
          icon: 'lucide:shield',
          title: 'Secure Authentication & User Accounts',
          desc: 'Implementing email/password login, Google OAuth, email verification, password resets, and full CRUD on user profiles required secure handling and proper Firebase integration.'
        },
        {
          icon: 'lucide:database',
          title: 'Real-Time Product Data',
          desc: 'Fetching products, trending items, categories, and ensuring real-time updates from Firestore while maintaining app performance was complex.'
        },
        {
          icon: 'lucide:shopping-cart',
          title: 'Shopping Cart & Checkout',
          desc: 'Building a persistent shopping cart with localStorage and secure checkout using Firestore transactions to handle stock verification and order creation safely.'
        },
        {
          icon: 'lucide:smartphone',
          title: 'Responsive Design Across Devices',
          desc: 'Ensuring the storefront looked and functioned flawlessly on mobile, tablet, and desktop devices required careful layout planning with Tailwind CSS.'
        }],
      solution: [
        {
          title: 'Custom SPA Router',
          desc: 'Implemented a lightweight history-API-based router that enables seamless, reload-free navigation while dynamically updating content for different pages.'
        },
        {
          title: 'Firebase Authentication & Profile Management',
          desc: 'Used Firebase Authentication to provide secure email/password and Google OAuth login, plus full CRUD for user profiles, shipping addresses, payment methods, and real-time order history.'
        },
        {
          title: 'Real-Time Firestore Integration',
          desc: 'Integrated Firestore to fetch and display products, trending items, and categories dynamically, ensuring live updates and accurate stock information.'
        },
        {
          title: 'Persistent Cart & Secure Checkout',
          desc: 'Implemented a persistent shopping cart with localStorage and secure checkout using Firestore runTransaction for atomic order creation and stock verification.'
        },
        {
          title: 'Mobile-First Responsive Design',
          desc: 'Designed a fully responsive layout with Tailwind CSS, optimized for mobile, tablet, and desktop devices with smooth UI interactions.'
        }],
      techStack: [
        { icon: 'skill-icons:html', label: 'HTML5' },
        { icon: 'skill-icons:css', label: 'CSS3' },
        { icon: 'skill-icons:javascript', label: 'Vanilla JavaScript (ES6+)' },
        { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS' },
        { icon: 'vscode-icons:file-type-firebase', label: 'Firebase (Auth & Firestore)' },
        { icon: 'skill-icons:vitejs', label: 'Vite' }
      ],
      results: {
        metrics: [
          { number: 'Seamless', label: 'SPA Navigation' },
          { number: 'Secure', label: 'Authentication & Accounts' },
          { number: 'Real-Time', label: 'Product Updates & Stock' },
          { number: 'Mobile-Optimized', label: 'Responsive UI' }
        ]
      },
      gallery: [
        { src: '/images/case-studies/AuthPage.jpeg', alt: 'Authentication Page', caption: 'Authentication Page showing login and signup' },
        { src: '/images/case-studies/CartPage.jpeg', alt: 'Shopping Cart', caption: 'Persistent shopping cart and checkout interface' },
        { src: '/images/case-studies/AccountPage.jpeg', alt: 'Account Management', caption: 'User profile, shipping addresses, payment methods, and order history' }
      ]
    }
  },
  {
    id: 'academiatrack',
    title: 'AcademiaTrack',
    category: 'Educational',
    image: '/images/case-studies/AcademiaTrack.png',
    description: 'AcademiaTrack is a full-stack academic tracking system that enables students to manage their academic records through GPA/CGPA computation, progress analytics, and report generation.',
    tags: [
      { icon: 'skill-icons:html', label: 'HTML' },
      { icon: 'logos:css', label: 'CSS' },
      { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS' },
      { icon: 'vscode-icons:file-type-firebase', label: 'Firebase' }
    ],
    status: 'Completed',
    github: '#',
    live: 'https://academiatrack.vercel.app',
    hasCaseStudy: true,
    meta: {
      project_type: 'Independent Project - Student-Focused Solution',
      year: '2025',
      role: 'Lead FullStack Developer',
      duration: '3 Months',
    },
    caseStudy: {
      overview: [
        'AcademiaTrack is a web-based academic management platform designed to help students monitor and manage their academic performance efficiently. The system provides tools for GPA/CGPA calculation, progress tracking, and academic reporting, all within a centralized dashboard.',
        ' Built specifically with students in mind, the platform simplifies how users interact with their academic data by combining performance analytics, activity tracking, and intelligent assistance through an AI-powered chatbot. It also includes secure authentication to ensure user data is protected.',
        'The goal of AcademiaTrack is to reduce the stress of manual GPA calculations and give students a clear, structured view of their academic journey.'
      ],
      challenges: [
        { icon: 'lucide:zap', title: 'Accurate GPA/CGPA Computation', desc: 'Handling GPA and CGPA calculations across multiple semesters required careful logic implementation to ensure accuracy, especially when dealing with varying course units and grades.' },
        { icon: 'lucide:shield', title: 'User Data Management and Authentication', desc: 'Designing a secure system to manage user data while implementing authentication posed challenges in ensuring both data privacy and smooth user experience' },
        { icon: 'lucide:smartphone', title: 'Integrating Multiple Features Seamlessly', desc: 'Combining features like GPA tracking, progress reports, AI chatbot, and activity logs into a single cohesive system without overwhelming the user was a key challenge.' }
      ],
      solution: [
        { title: 'Structured GPA Calculation Logic', desc: 'A reliable algorithm was implemented to handle GPA and CGPA calculations based on course units and grade values, ensuring accurate academic results across semesters.' },
        { title: 'Secure Authentication System', desc: 'A secure and reliable authentication system was implemented using Firebase Authentication. This allowed for efficient user management, including sign-up and login functionality, while ensuring data privacy and security. Leveraging Firebase reduced development complexity and enabled a faster, more scalable implementation without compromising security.' },
        {
          title: 'Modular Feature Integration',
          desc: 'Each feature (GPA checker, progress report, chatbot, activity tracker) was built as a modular component, allowing seamless integration while maintaining performance and usability.'
        },
      ],
      techStack: [
        { icon: 'skill-icons:html', label: 'HTML5' },
        { icon: 'skill-icons:css', label: 'CSS3' },
        { icon: 'skill-icons:javascript', label: 'JavaScript' },
        { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS' },
        { icon: 'vscode-icons:file-type-firebase', label: 'Firebase (Auth & Database)' },
        { icon: 'skill-icons:vercel-dark', label: 'Vercel' }
      ],
      results: {
        metrics: [
          { number: '100%', label: 'Accurate GPA Calculations' },
          { number: 'Instant', label: 'Report Generation Time' },
          { number: 'All-in-One', label: 'Academic Tracking System' },
          { number: 'Secure', label: 'Authentication System (Firebase)' }
        ],
      },
      gallery: [
        { src: '/images/case-studies/academiatrackUserDashboard.png', alt: 'Dashboard Overview', caption: 'Main dashboard with portfolio overview' },
        { src: '/images/case-studies/activityPage.png', alt: 'Activity View', caption: 'Activity tracking page' },
        { src: '/images/case-studies/profilePage.png', alt: 'Profile View', caption: 'Profile management page' },
        { src: '/images/case-studies/progressPage.png', alt: 'Progress View', caption: 'Progress tracking page' }
      ]
    }
  },
  {
    id: 'fitnesshub',
    title: 'Fitness Hub',
    category: 'Health & Fitness',
    image: '/images/case-studies/userDashboard.png',
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
      project_type: 'Independent Project - Fitness Solution',
      year: '2025',
      role: 'FullStack Developer',
      duration: '2-3 Months'
    },
    caseStudy: {
      overview: [
        'Fitness Hub is a modern AI-powered web application designed to help users achieve their fitness goals through personalized workout planning and progress tracking.',
        'The platform combines intelligent workout recommendations, interactive training sessions, and detailed analytics into a single, user-friendly dashboard.',
        'By integrating AI with fitness tracking, Fitness Hub provides users with tailored workout routines, motivation through social challenges, and a structured way to monitor their health journey.'
      ],
      challenges: [
        {
          icon: 'lucide:brain',
          title: 'Personalized Workout Generation',
          desc: 'Generating workout routines that adapt to a user’s goals, fitness level, and available equipment was complex. The system had to ensure every plan was relevant and safe.'
        },
        {
          icon: 'lucide:activity',
          title: 'Real-Time Workout Interaction',
          desc: 'Ensuring a smooth, interactive workout experience with timers, exercise guidance, and progression tracking without lag was challenging.'
        },
        {
          icon: 'lucide:bar-chart',
          title: 'Data Visualization of Progress',
          desc: 'Users needed clear visual feedback on performance metrics like calories burned, volume lifted, streaks, and trends over time.'
        },
        {
          icon: 'lucide:users',
          title: 'User Engagement & Motivation',
          desc: 'Maintaining user motivation over time is difficult, especially for solo users; social interaction and challenges were essential.'
        },
        {
          icon: 'lucide:shield',
          title: 'Secure User Data Management',
          desc: 'Protecting personal and fitness data while ensuring fast access and reliable storage required careful planning.'
        }],
      solution: [
        {
          title: 'AI-Powered Workout Recommendations',
          desc: 'Integrated generative AI using Google AI and Genkit to create personalized workout routines tailored to user goals, fitness level, and available equipment.'
        },
        {
          title: 'Interactive Workout System',
          desc: 'Developed guided workout sessions with timers and structured exercise flows for responsive, real-time training experiences.'
        },
        {
          title: 'Comprehensive Analytics Dashboard',
          desc: 'Implemented a dashboard using Recharts to visualize workout history, calories burned, volume lifted, streaks, and other key metrics.'
        },
        {
          title: 'Social Fitness Challenges',
          desc: 'Built community challenges and leaderboards to keep users motivated, engaged, and accountable for their progress.'
        },
        {
          title: 'Secure Backend with Firebase',
          desc: 'Leveraged Firebase Authentication and Firestore to manage user accounts and workout data securely, providing real-time sync and privacy.'
        }],
      techStack: [
        { icon: 'skill-icons:nextjs-dark', label: 'Next.js (App Router)' },
        { icon: 'skill-icons:tailwindcss-dark', label: 'Tailwind CSS' },
        { icon: 'skill-icons:react-dark', label: 'React' },
        { icon: 'vscode-icons:file-type-firebase', label: 'Firebase (Auth & Firestore)' },
        { icon: 'skill-icons:vercel-dark', label: 'Vercel' },
        { icon: 'logos:react-hook-form', label: 'React Hook Form' },
        { icon: 'logos:zod', label: 'Zod' },
        { icon: 'simple-icons:recharts', label: 'Recharts' }
      ],
      results: {
        metrics: [
          { number: 'Personalized', label: 'AI Workout Plans' },
          { number: 'Real-Time', label: 'Workout Tracking Experience' },
          { number: 'Interactive', label: 'Guided Training Sessions' },
          { number: 'Engaging', label: 'Social Fitness Challenges' }
        ]
      },
      gallery: [
        { src: '/images/case-studies/userDashboard.png', alt: 'Dashboard', caption: 'Fitness dashboard with key metrics and activity overview' },
        { src: '/images/case-studies/workoutPlans.png', alt: 'Workout plans', caption: 'Workout plan with difficulty levels' },
        { src: '/images/case-studies/workoutChart.jpeg', alt: 'Progress Charts', caption: 'Data visualization of workout progress and performance' },
        { src: '/images/case-studies/community.png', alt: 'Challenges', caption: 'Community fitness challenges and engagement features' }
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