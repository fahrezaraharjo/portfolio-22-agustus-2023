import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  hoobank,
  ecommerce,
  tiktok,
  nike,
  youtube,
  peatrice,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  // {
  //   title: 'Backend Developer',
  //   icon: backend,
  // },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  // {
  //   title: 'Software Prototyping',
  //   icon: prototyping,
  // },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Ganeshcom',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Apr 2023 - Mei 2024',
  },
  // {
  //   title: 'Mentor (Volunteer)',
  //   company_name: 'Microverse',
  //   icon: microverse,
  //   iconBg: '#333333',
  //   date: 'Mar 2022 - May 2022',
  // },
  // {
  //   title: 'Junior Software Engineer',
  //   company_name: 'Kelhel',
  //   icon: kelhel,
  //   iconBg: '#333333',
  //   date: 'May 2022 - Oct 2022',
  // },
  // {
  //   title: 'Full Stack Developer',
  //   company_name: 'Diversity Cyber Council',
  //   icon: dcc,
  //   iconBg: '#333333',
  //   date: 'Sep 2022 - Present',
  // },
];

const projects = [
  {
    id: 'project-1',
    name: 'Peatrice',
    description: 'Pertamina project calculation pipeline',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: peatrice,
    repo: 'https://github.com/fahrezaraharjo/Modern_Bank_Website',
    demo: 'https://404/',
  },
  // {
  //   id: 'project-2',
  //   name: 'Hoobank',
  //   description: 'development by building a responsive React JS application consisting of a stunning hero section, high-quality assets and gradients, business stats, reusable feature sections with call-to-action buttons, testimonials, and more!',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'mongodb',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'tailwind',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: hoobank,
  //   repo: 'https://github.com/fahrezaraharjo/Modern_Bank_Website',
  //   demo: 'https://modern-bank-website.vercel.app/',
  // },
  {
    id: 'project-3',
    name: 'Ecommerce',
    description:
      'Build and Deploy a fully responsive Modern Full Stack Ecommerce application with Payments functionality. With Modern design, animations, the ability to add and edit products on the go using a CMS',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: ecommerce,
    repo: 'https://github.com/fahrezaraharjo/ecommerce/tree/8eb3674b25479a0ebbb45df299b7b77aa4c2bd55',
    demo: 'https://ecommerce-tan-beta.vercel.app/',
  },
  {
    id: 'project-4',
    name: 'TikTok',
    description: 'Our TikTok Clone Application includes Google Auth, the ability to upload, publish, share, comment on, and like the videos; filtering by categories and advanced search functionalities, profile pages, suggested accounts, custom responsive design, and much more.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tiktok,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://tiktok-sooty.vercel.app//',
  },
  {
    id: 'project-4',
    name: 'Landing Page Nike',
    description: `Dive into the world of #tailwindcss, build a Nike #website, and join top-tier organizations like OpenAI, Shopify, and NASA in building stunning apps effortlessly.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nike,
    repo: 'https://github.com/fahrezaraharjo/nike',
    demo: 'https://nike-ebon.vercel.app/',
  },
  {
    id: 'project-5',
    name: 'Youtube Clone',
    description:
      'Master modern web development by building a responsive React JS application consisting of stunning video sections, custom categories, channel pages, and, most importantly, you can play videos straight from your YouTube Clone App!',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: youtube,
    repo: 'https://github.com/fahrezaraharjo/youtube_clone',
    demo: 'https://youtube-clone-ten-pi.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
