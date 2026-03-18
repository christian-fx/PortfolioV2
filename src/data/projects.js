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
    id: 'aura-ecommerce',
    title: 'Aura E-Commerce',
    category: 'E-Commerce',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/2931f37a-6689-4bd4-86c9-9276f20d1539.jpg',
    description: 'A headless e-commerce storefront focusing on sub-second page loads and seamless checkout flows for a premium fashion brand.',
    tags: [
      { icon: 'skill-icons:nextjs-dark', label: 'Next.js' },
      { icon: 'logos:shopify', label: 'Shopify' },
      { icon: 'simple-icons:framer', label: 'Framer Motion' }
    ],
    github: '#',
    live: '#',
    hasCaseStudy: false // This will route to the "Coming Soon" placeholder
  },
  {
    id: 'healthsync-app',
    title: 'HealthSync App',
    category: 'Mobile First',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/d298266c-443a-4430-a988-7c164818a359.jpg',
    description: 'A patient portal web application allowing users to book appointments, view test results, and message doctors securely.',
    tags: [
      { icon: 'skill-icons:react-dark', label: 'React' },
      { icon: 'vscode-icons:file-type-firebase', label: 'Firebase' },
      { icon: 'skill-icons:materialui', label: 'Material UI' }
    ],
    github: '#',
    live: '#',
    hasCaseStudy: false
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
    github: '#',
    live: '#',
    hasCaseStudy: false
  }
];
