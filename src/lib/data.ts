import type { Profile, Skill, Experience, Project } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const findImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) return { id: 'default', url: 'https://picsum.photos/seed/default/600/400', hint: 'placeholder' };
  return { id: image.id, url: image.imageUrl, hint: image.imageHint };
};

export const profileData: Profile = {
  name: 'Saurabh Tiwari',
  title: 'Associate Software Engineer | WordPress & Full-Stack',
  location: 'Noida, India',
  about: 'Associate SE at Our World Energy. Proficient in React/Next.js,React Native, Node, WordPress, PHP, and MySQL. Experienced in building e-commerce sites, AI tools, and a price tracker.',
  email: 'risabht043@gmail.com',
  phone: 'YOUR_PHONE',
  links: {
    linkedin: 'https://www.linkedin.com/in/saurabh-tiwari-30b249225/',
    github: 'https://github.com/sk230144',
    portfolio: 'https://6511dad7fa4fbc1057282563--stellular-haupia-ee1e84.netlify.app/',
    leetcode: 'https://leetcode.com/saurabhtiwar_17/',
    twitter: '@saurabh', // Add twitter or remove if not applicable
  },
  resumeUrl: '/Saurabh_Tiwari_Resume.pdf',
};

export const skillsData: Skill[] = [
  { name: 'React.js' },
  { name: 'Next.js' },
  { name: 'Node.js' },
  { name: 'Express.js' },
  { name: 'MongoDB' },
  { name: 'MySQL' },
  { name: 'PHP' },
  { name: 'WordPress' },
  { name: 'C++' },
  { name: 'Python' },
  { name: 'Tailwind CSS' },
  { name: 'TypeScript' },
  { name: "Elementor" },
];

export const experienceData: Experience[] = [
  {
    company: 'Our World Energy',
    role: 'Associate Software Engineer',
    start: '2024-04-01',
    end: null,
    bullets: [
      'WordPress dev & integrations; custom themes/plugins.',
      'React/Node features for internal tools; MySQL data flows.',
      'Optimized SEO & Core Web Vitals for product pages.'
    ],
    links: ['https://acornenergy-io.us.stackstaging.com/'],
  },
  {
    company: 'Voomp Technologies',
    role: 'Full Stack Intern',
    start: '2023-11-01',
    end: '2024-03-31',
    bullets: ['Contributed to both front-end and back-end development of web applications.', 'Worked with modern JavaScript frameworks and libraries.'],
  },
  {
    company: 'Probtosoft Technologies',
    role: 'Testing/Dev Intern',
    start: '2023-10-01',
    end: '2023-12-31',
    bullets: ['Assisted in software testing and quality assurance processes.', 'Wrote and executed test cases to identify and report bugs.'],
  },
  {
    company: 'Sofodel',
    role: 'Full Stack Intern',
    start: '2023-04-01',
    end: '2023-10-31',
    bullets: ['Gained hands-on experience in full-stack development, from database design to UI implementation.'],
  },
  {
    company: 'ScoopIT',
    role: 'WordPress Intern',
    start: '2023-04-01',
    end: '2023-05-31',
    bullets: ['Customized WordPress themes and plugins to meet client requirements.'],
  },
  {
    company: 'Bhaktivedanta Institute',
    role: 'Front End Intern',
    start: '2023-01-01',
    end: '2023-03-31',
    bullets: ['Developed responsive and interactive user interfaces using HTML, CSS, and JavaScript.'],
  },
];

export const projectsData: Project[] = [
  {
    title: 'FlexFit Gym Website',
    slug: 'flexfit-gym',
    summary: 'A fully responsive fitness website built with Next.js, featuring modern UI, animations, and a dynamic class schedule.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    repo: 'https://github.com/sk230144', // replace with actual repo link if separate
    live: 'https://gymdemo0312.netlify.app/',
    images: [findImage('gym-website')],
    highlights: [
      'Animated and responsive Next.js frontend',
      'Dynamic sections for classes, memberships, and trainers',
    ],
  },
  {
    title: '3D Laptop E-Commerce',
    slug: 'laptop-3d-ecommerce',
    summary: 'Interactive 3D e-commerce site for laptops using React Three Fiber with smooth animations and dynamic product views.',
    tech: ['React', 'Three.js', 'React Three Fiber', 'Tailwind CSS'],
    repo: 'https://github.com/sk230144',
    live: 'https://merry-semolina-6a4c79.netlify.app/',
    images: [findImage('laptop-ecommerce')],
    highlights: [
      'Real-time 3D product viewer with interactive controls',
      'Modern responsive UI with smooth transitions',
    ],
  },
  {
    title: 'Amazon Price Tracker',
    slug: 'pricewise-tracker',
    summary: 'Tracks Amazon product prices, sends alerts on price drops, and displays historical price trends with charts.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Cron'],
    repo: 'https://github.com/sk230144',
    live: 'https://pricewise-7ikpsi2jj-js-mastery-pro.vercel.app/',
    images: [findImage('pricewise')],
    highlights: [
      'Scheduler for periodic scraping & delta alerts',
      'Responsive dashboard with charts',
    ],
  },
  {
    title: 'S-Mart Backend',
    slug: 's-mart-back',
    summary: 'A robust e-commerce backend with features for user authentication, product management, and order processing.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    repo: 'https://github.com/sk230144',
    live: 'https://s-mart-back.vercel.app/',
    images: [findImage('s-mart')],
    highlights: [
      'Developed a RESTful API for handling products, users, and orders.',
      'Implemented JWT-based authentication and authorization for secure access.',
      'Designed the MongoDB schema for efficient data storage and retrieval.',
    ],
  },
  {
    title: 'AI Summarizer',
    slug: 'ai-summarizer',
    summary: 'A web application that summarizes long articles and web pages using an external AI API, presented in a clean, readable UI.',
    tech: ['React.js', 'API'],
    live: 'https://bespoke-bombolone-34be41.netlify.app/',
    images: [findImage('ai-summarizer')],
    highlights: [
      'Integrated a third-party AI API for text summarization.',
      'Managed application state effectively using Redux Toolkit.',
      'Created a simple and intuitive user interface for a seamless experience.',
    ],
  },
  {
    title: 'WordPress – Acorn Energy',
    slug: 'acorn-wp',
    summary: 'A custom WordPress website for Acorn Energy, focusing on performance, SEO, and a user-friendly content management experience.',
    tech: ['WordPress', 'PHP', 'MySQL', 'Elementor'],
    live: 'https://acornenergy-io.us.stackstaging.com/',
    images: [findImage('acorn-energy')],
    highlights: [
      'Developed a custom WordPress theme tailored to the client’s brand.',
      'Optimized the site for speed and search engines, improving Core Web Vitals.',
      'Utilized Elementor for flexible and easy content updates by the client.',
    ],
  },
];
