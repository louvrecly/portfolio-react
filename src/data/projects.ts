import { Skill, SkillKey, getSkillsByKeys } from './skills';

const ALL_PROJECT_KEYS = [
  'easyshipWebsite',
  'betBetter',
  'galleryOfTheGalaxy',
  'letsjamMusic',
  'matchmeSports',
  'fruitle',
] as const;

type ProjectKey = (typeof ALL_PROJECT_KEYS)[number];

type ProjectCore = {
  key: ProjectKey;
  title: string;
  subtitle: string;
  type: string;
  description: string;
  link: string;
  image: string;
};

type Project = ProjectCore & {
  skillKeys: SkillKey[];
};

export type DetailedProject = ProjectCore & {
  skills: Skill[];
};

type ProjectsMap = Record<ProjectKey, Project>;

const projectsMap: ProjectsMap = {
  easyshipWebsite: {
    key: 'easyshipWebsite',
    title: 'Easyship Website · Marketing Website with Dynamic Data through CMS',
    subtitle:
      'Server-side rendering Nuxt App with Node.js backend and NoSQL Database',
    type: 'Work Project',
    description:
      'An SEO friendly marketing website built with Vue, Nuxt, HTML, CSS (Tailwind) and JavaScript and hosted on GCP with features including shipping rates calculator and policy generator, etc.',
    link: 'https://www.easyship.com/',
    image: '/screenshots/easyship-website-1.jpg',
    skillKeys: [
      'vue',
      'nuxt',
      'javascript',
      'html',
      'css',
      'sass',
      'nodejs',
      'expressjs',
      'mongodb',
      'redis',
      'gcp',
    ],
  },
  betBetter: {
    key: 'betBetter',
    title: 'BetBetter · Odds Tracker for Sports Gambling',
    subtitle: `Next App with interactive UI built with data-driven documents by D3.js`,
    type: 'Side Project',
    description: `An odds tracker for sports gambling built with React, Next, TypeScript, HTML and CSS (Tailwind CSS), D3.js, Node.js, and MongoDB for analyzing historical odds data and visualizing trends for making a better betting decision`,
    link: 'https://bet-better-react.netlify.app/',
    image: '/screenshots/bet-better-3.jpg',
    skillKeys: [
      'react',
      'next',
      'typescript',
      'html',
      'css',
      'tailwindCss',
      'd3js',
      'nodejs',
      'expressjs',
      'mongodb',
    ],
  },
  galleryOfTheGalaxy: {
    key: 'galleryOfTheGalaxy',
    title: 'Gallery of the Galaxy · Astronomical Photo Gallery',
    subtitle: `Nuxt App with simplistic UI integrated with NASA's API`,
    type: 'Side Project',
    description: `An online gallery built with Vue, Nuxt, HTML and CSS (SASS) for browsing space photos and videos fetched from the NASA's API with filtering and like button features`,
    link: 'https://louvrecly.github.io/gallery-of-the-galaxy/',
    image: '/screenshots/gallery-of-the-galaxy-1.jpg',
    skillKeys: ['vue', 'nuxt', 'javascript', 'html', 'css', 'sass'],
  },
  letsjamMusic: {
    key: 'letsjamMusic',
    title: 'LetsJam · Virtual Band Room with Magenta A.I. Composing Feature',
    subtitle: 'React UI with Node.js server and Magenta A.I. integration',
    type: 'Side Project',
    description:
      'An online band room built with React, Redux, TypeScript, Node.js and PostgreSQL and hosted on AWS for composing music, jamming tunes with friends and getting inspiration playing with the Google A.I., Magenta',
    link: '',
    image: '/screenshots/letsjam-1.jpg',
    skillKeys: [
      'react',
      'redux',
      'typescript',
      'javascript',
      'html',
      'css',
      'bootstrap',
      'nodejs',
      'expressjs',
      'postgresql',
      'gitLabCicd',
      'aws',
    ],
  },
  matchmeSports: {
    key: 'matchmeSports',
    title:
      'MatchMe · Sports Players Matching Platform with Multiple Ranking Algorithms',
    subtitle: 'Minimalistic HTML, CSS & Javascript Website',
    type: 'Side Project',
    description:
      'An opponent matching platform built with HTML, TypeScript, CSS and JSON for sports players based on competency (by Elo Rating Algorithm), locations and availability',
    link: '',
    image: '/screenshots/matchme-1.jpg',
    skillKeys: [
      'typescript',
      'javascript',
      'html',
      'css',
      'bootstrap',
      'nodejs',
      'expressjs',
      'aws',
    ],
  },
  fruitle: {
    key: 'fruitle',
    title: 'Fruitle · Decryption Game',
    subtitle: 'Logic Puzzle built with Scratch',
    type: 'Side Project',
    description:
      'A fun puzzle game of logic built using Scratch with configurable difficulties',
    link: 'https://scratch.mit.edu/projects/691639249',
    image: '/screenshots/fruitle-3.jpg',
    skillKeys: [],
  },
};

const projectKeys: ProjectKey[] = [...ALL_PROJECT_KEYS];

export const projects: DetailedProject[] = projectKeys.map((projectKey) => {
  const { skillKeys, ...rest } = projectsMap[projectKey];
  return {
    ...rest,
    skills: getSkillsByKeys(skillKeys),
  };
});
