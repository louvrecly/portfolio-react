interface Project {
  key: string;
  title: string;
  subtitle: string;
  type: string;
  description: string;
  link: string;
  image: string;
}

type ProjectsMap = Record<string, Project>;

type ProjectKey = keyof ProjectsMap;

const projectsMap: ProjectsMap = {
  'easyship-website': {
    key: 'easyship-website',
    title: 'Easyship Website · Marketing Website with Dynamic Data through CMS',
    subtitle: 'Server-side rendering Nuxt App with Node.js backend and NoSQL Database',
    type: 'Work Project',
    description: 'An SEO friendly marketing website built with Vue, Nuxt, HTML, CSS (Tailwind) and JavaScript and hosted on GCP with features including shipping rates calculator and policy generator, etc.',
    link: 'https://www.easyship.com/',
    image: '/screenshots/easyship-website-1.jpg',
  },
  'gallery-of-the-galaxy': {
    key: 'gallery-of-the-galaxy',
    title: 'Gallery of the Galaxy · Astronomical Photo Gallery',
    subtitle: `Nuxt App with simplistic UI integrated with NASA's API`,
    type: 'Personal Project',
    description: `An online gallery built with Vue, Nuxt, HTML and CSS (SASS) for browsing space photos and videos fetched from the NASA's API with filtering and like button features`,
    link: 'https://louvrecly.github.io/gallery-of-the-galaxy/',
    image: '/screenshots/gallery-of-the-galaxy-1.jpg',
  },
  'letsjam-music': {
    key: 'letsjam-music',
    title: 'LetsJam · Virtual Band Room with Magenta A.I. Composing Feature',
    subtitle: 'React UI with Node.js server and Magenta A.I. integration',
    type: 'Personal Project',
    description: 'An online band room built with React, Redux, TypeScript, Node.js and PostgreSQL and hosted on AWS for composing music, jamming tunes with friends and getting inspiration playing with the Google A.I., Magenta',
    link: '',
    image: '/screenshots/letsjam-1.jpg',
  },
  'matchme-sports': {
    key: 'matchme-sports',
    title: 'MatchMe · Sports Players Matching Platform with Multiple Ranking Algorithms',
    subtitle: 'Minimalistic HTML, CSS & Javascript Website',
    type: 'Personal Project',
    description: 'An opponent matching platform built with HTML, TypeScript, CSS and JSON for sports players based on competency (by Elo Rating Algorithm), locations and availability',
    link: '',
    image: '/screenshots/matchme-1.jpg',
  },
  'fruitle': {
    key: 'fruitle',
    title: 'Fruitle · Decryption Game',
    subtitle: 'Logic Puzzle built with Scratch',
    type: 'Personal Project',
    description: 'A fun puzzle game of logic built using Scratch with configurable difficulties',
    link: 'https://scratch.mit.edu/projects/691639249',
    image: '/screenshots/fruitle-3.jpg',
  },
};

const projectKeys: ProjectKey[] = [
  'easyship-website',
  'gallery-of-the-galaxy',
  'letsjam-music',
  'matchme-sports',
  'fruitle',
];

export const projects = projectKeys.map(key => projectsMap[key]);
