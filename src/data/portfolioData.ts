export interface Project {
  id: string;
  code: string;
  title: string;
  category: 'web-apps' | 'e-commerce' | 'portfolios' | 'tools';
  categoryLabel: string;
  bannerTitle: string;
  bannerSubtitle: string;
  isFeatured?: boolean;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  stats?: string;
  gradientTheme?: 'cyan' | 'blue' | 'emerald';
}

export interface SkillMeter {
  id: string;
  name: string;
  percentage: number;
  color: 'primary' | 'secondary' | 'tertiary';
  category: 'core' | 'framework' | 'backend';
}

export interface ToolTile {
  name: string;
  category: string;
  iconName: string;
  colorClass: string;
}

export interface SoftSkill {
  name: string;
  score: number; // out of 5
  iconName: string;
}

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'nexus-ui',
    code: 'PROJ-01',
    title: 'NEXUS UI',
    category: 'web-apps',
    categoryLabel: 'Web Apps',
    bannerTitle: 'NEXUS_UI.V3',
    bannerSubtitle: '> SaaS telemetry interface deployed',
    isFeatured: true,
    description: 'Modern SaaS cloud landing page and multi-tenant telemetry template built with Next.js, Tailwind CSS, and TypeScript.',
    tags: ['Next.js', 'Tailwind', 'TypeScript'],
    liveUrl: 'https://nexus-telemetry.example.com',
    repoUrl: 'https://github.com/karthikeyan/nexus-ui',
    gradientTheme: 'cyan',
    stats: '99.9% UPTIME'
  },
  {
    id: 'taskflow',
    code: 'PROJ-02',
    title: 'TASKFLOW',
    category: 'web-apps',
    categoryLabel: 'Web Apps',
    bannerTitle: 'TASKFLOW_OPS',
    bannerSubtitle: '> Realtime kanban engine synced',
    isFeatured: true,
    description: 'A high-throughput productivity dashboard and task manager application featuring live metrics and Chart.js telemetry.',
    tags: ['React', 'Firebase', 'Chart.js'],
    liveUrl: 'https://taskflow.example.com',
    repoUrl: 'https://github.com/karthikeyan/taskflow',
    gradientTheme: 'blue',
    stats: '12ms LATENCY'
  },
  {
    id: 'echo-portfolio',
    code: 'PROJ-03',
    title: 'ECHO PORTFOLIO',
    category: 'portfolios',
    categoryLabel: 'Portfolios',
    bannerTitle: 'ECHO_SYSTEMS',
    bannerSubtitle: '> Holographic spatial canvas',
    isFeatured: true,
    description: 'A minimal and interactive 3D web experience template designed for creative technologists and high-fidelity showcase.',
    tags: ['HTML', 'CSS', 'Three.js'],
    liveUrl: 'https://echo-portfolio.example.com',
    repoUrl: 'https://github.com/karthikeyan/echo-portfolio',
    gradientTheme: 'emerald',
    stats: '60 FPS BUFFER'
  },
  {
    id: 'shop-co',
    code: 'PROJ-04',
    title: 'SHOP.CO',
    category: 'e-commerce',
    categoryLabel: 'E-Commerce',
    bannerTitle: 'SHOP.CO',
    bannerSubtitle: '> High conversion e-commerce matrix',
    description: 'Full-scale e-commerce platform with cart state, instant wishlist, Stripe checkout gateway, and MongoDB database.',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://shop-co.example.com',
    repoUrl: 'https://github.com/karthikeyan/shop-co',
    gradientTheme: 'cyan'
  },
  {
    id: 'weather-app',
    code: 'PROJ-05',
    title: 'WEATHER APP',
    category: 'tools',
    categoryLabel: 'Tools',
    bannerTitle: 'WEATHER APP',
    bannerSubtitle: '> Doppler radar & live atmospheric feed',
    description: 'Real-time atmospheric telemetry client with satellite radar mapping, micro-location search, and weather alert triggers.',
    tags: ['JavaScript', 'API', 'CSS'],
    liveUrl: 'https://weather-telemetry.example.com',
    repoUrl: 'https://github.com/karthikeyan/weather-app',
    gradientTheme: 'blue'
  },
  {
    id: 'notekeeper',
    code: 'PROJ-06',
    title: 'NOTEKEEPER',
    category: 'tools',
    categoryLabel: 'Tools',
    bannerTitle: 'NOTEKEEPER',
    bannerSubtitle: '> Zero-latency offline client',
    description: 'A minimalist note taking utility with zero latency, local encrypted storage, and markdown syntax export.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://notekeeper.example.com',
    repoUrl: 'https://github.com/karthikeyan/notekeeper',
    gradientTheme: 'emerald'
  },
  {
    id: 'sentinel-api',
    code: 'PROJ-07',
    title: 'SENTINEL GATEWAY',
    category: 'web-apps',
    categoryLabel: 'Web Apps',
    bannerTitle: 'SENTINEL_GATEWAY',
    bannerSubtitle: '> Edge rate limiter & auth token proxy',
    description: 'High-speed reverse proxy with Redis caching, biometric key validation, and telemetry analytics dashboard.',
    tags: ['TypeScript', 'Express', 'Redis', 'Docker'],
    liveUrl: 'https://sentinel.example.com',
    repoUrl: 'https://github.com/karthikeyan/sentinel-gateway',
    gradientTheme: 'cyan'
  },
  {
    id: 'stellar-pay',
    code: 'PROJ-08',
    title: 'STELLAR PAY',
    category: 'e-commerce',
    categoryLabel: 'E-Commerce',
    bannerTitle: 'STELLAR_PAY',
    bannerSubtitle: '> Web3 checkout micro-widget',
    description: 'Embeddable payment modal with instant settlement, currency conversion rates, and localized receipt generators.',
    tags: ['React', 'Tailwind', 'Stripe', 'Wasm'],
    liveUrl: 'https://stellarpay.example.com',
    repoUrl: 'https://github.com/karthikeyan/stellar-pay',
    gradientTheme: 'blue'
  }
];

export const SKILL_METERS: SkillMeter[] = [
  { id: 'html', name: 'HTML5 / Semantic DOM', percentage: 95, color: 'primary', category: 'core' },
  { id: 'css', name: 'CSS3 / Tailwind CSS', percentage: 98, color: 'primary', category: 'core' },
  { id: 'js', name: 'JavaScript (ESNext)', percentage: 90, color: 'secondary', category: 'core' },
  { id: 'ts', name: 'TypeScript', percentage: 88, color: 'secondary', category: 'core' },
  { id: 'react', name: 'React & Next.js SSR', percentage: 92, color: 'tertiary', category: 'framework' },
  { id: 'node', name: 'Node.js / REST & GraphQL', percentage: 85, color: 'primary', category: 'backend' }
];

export const TOOL_TILES: ToolTile[] = [
  { name: 'Git', category: 'Version Control', iconName: 'GitBranch', colorClass: 'text-[#00f0ff]' },
  { name: 'GitHub', category: 'Code Collaboration', iconName: 'Github', colorClass: 'text-[#dae2f8]' },
  { name: 'VS Code', category: 'Editor & Debugger', iconName: 'Code', colorClass: 'text-[#c4e7ff]' },
  { name: 'Figma', category: 'UI/UX Prototypes', iconName: 'Palette', colorClass: 'text-[#6ffbbe]' },
  { name: 'DevTools', category: 'Profiling & Memory', iconName: 'Cpu', colorClass: 'text-[#00dbe9]' },
  { name: 'npm', category: 'Package Registry', iconName: 'Package', colorClass: 'text-[#ffb4ab]' },
  { name: 'Vite', category: 'Bundler & HMR', iconName: 'Zap', colorClass: 'text-[#7bd0ff]' },
  { name: 'ESLint', category: 'Linter & Formatter', iconName: 'CheckCircle', colorClass: 'text-[#00f0ff]' },
  { name: 'Netlify', category: 'CI/CD & Cloud Edge', iconName: 'Cloud', colorClass: 'text-[#6ffbbe]' },
  { name: 'Docker', category: 'Containerization', iconName: 'Box', colorClass: 'text-[#c4e7ff]' }
];

export const SOFT_SKILLS: SoftSkill[] = [
  { name: 'Problem Solving', score: 5, iconName: 'Lightbulb' },
  { name: 'Attention to Detail', score: 4, iconName: 'Eye' },
  { name: 'Time Management', score: 4, iconName: 'Clock' },
  { name: 'Collaboration', score: 5, iconName: 'Users' }
];
