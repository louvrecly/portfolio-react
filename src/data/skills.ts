type SkillTypeKeys =
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'databases'
  | 'devOps';

interface SkillType {
  key: SkillTypeKeys;
  title: string;
}

type SkillTypesMap = Record<SkillTypeKeys, SkillType>;

interface Skill {
  key: string;
  name: string;
  logo: string;
  link: string;
}

const skillTypesMap: SkillTypesMap = {
  languages: {
    key: 'languages',
    title: 'Languages',
  },
  frontend: {
    key: 'frontend',
    title: 'Frontend',
  },
  backend: {
    key: 'backend',
    title: 'Backend',
  },
  databases: {
    key: 'databases',
    title: 'Databases',
  },
  devOps: {
    key: 'devOps',
    title: 'DevOps',
  },
};

export const skillTypes = Object.keys(skillTypesMap).map(
  (key) => skillTypesMap[key as SkillTypeKeys],
);

const languagesSkills: Skill[] = [
  {
    key: 'javascript',
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Web/javascript',
  },
  {
    key: 'typescript',
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    link: 'https://www.typescriptlang.org/',
  },
  {
    key: 'python',
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    link: 'https://www.python.org/',
  },
  {
    key: 'dart',
    name: 'Dart',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
    link: 'https://dart.dev/',
  },
  {
    key: 'sql',
    name: 'SQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    link: 'https://www.mysql.com/',
  },
];
const frontendSkills: Skill[] = [
  {
    key: 'react',
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    link: 'https://react.dev/',
  },
  {
    key: 'vue',
    name: 'Vue',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    link: 'https://vuejs.org/',
  },
  {
    key: 'angularjs',
    name: 'AngularJS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    link: 'https://angularjs.org/',
  },
  {
    key: 'vite',
    name: 'Vite',
    logo: '/logos/vite.svg',
    link: 'https://vitejs.dev/',
  },
  {
    key: 'next',
    name: 'Next',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    link: 'https://nextjs.org/',
  },
  {
    key: 'redux',
    name: 'Redux',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    link: 'https://redux.js.org/',
  },
  {
    key: 'nuxt',
    name: 'Nuxt',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
    link: 'https://nuxt.com/',
  },
  {
    key: 'html',
    name: 'HTML',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    key: 'css',
    name: 'CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
    link: 'https://www.w3.org/Style/CSS/Overview.en.html',
  },
  {
    key: 'sass',
    name: 'SASS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    link: 'https://sass-lang.com/',
  },
  {
    key: 'tailwind-css',
    name: 'Tailwind CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    link: 'https://tailwindcss.com/',
  },
  {
    key: 'flutter',
    name: 'Flutter',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    link: 'https://flutter.dev/',
  },
];
const backendSkills: Skill[] = [
  {
    key: 'nodejs',
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
    link: 'https://nodejs.org/en',
  },
  {
    key: 'expressjs',
    name: 'Express.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    link: 'https://expressjs.com/',
  },
  {
    key: 'flask',
    name: 'Flask',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    link: 'https://flask.palletsprojects.com/en/3.0.x/',
  },
  {
    key: 'firebase',
    name: 'Firebase',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    link: 'https://firebase.google.com/',
  },
  {
    key: 'vitest',
    name: 'Vitest',
    logo: '/logos/vitest.png',
    link: 'https://vitest.dev/',
  },
];
const databasesSkills: Skill[] = [
  {
    key: 'sqlite',
    name: 'SQLite',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
    link: 'https://www.sqlite.org/index.html',
  },
  {
    key: 'postgresql',
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    link: 'https://www.postgresql.org/',
  },
  {
    key: 'firestore',
    name: 'Firestore',
    logo: '/logos/firestore.png',
    link: 'https://firebase.google.com/docs/firestore/',
  },
  {
    key: 'mongodb',
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
    link: 'https://www.mongodb.com/',
  },
  {
    key: 'redis',
    name: 'Redis',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    link: 'https://redis.io/',
  },
];
const devOpsSkills: Skill[] = [
  {
    key: 'gitLab-cicd',
    name: 'GitLab CICD',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
    link: 'https://docs.gitlab.com/ee/ci/',
  },
  {
    key: 'gcp',
    name: 'Google Cloud Platform (GCP)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    link: 'https://cloud.google.com/',
  },
  {
    key: 'aws',
    name: 'Amazon Web Services (AWS)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    link: 'https://aws.amazon.com/',
  },
  {
    key: 'bash',
    name: 'Bash',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
    link: 'https://www.gnu.org/software/bash/',
  },
];

export const skillsMap = {
  languages: languagesSkills,
  frontend: frontendSkills,
  backend: backendSkills,
  databases: databasesSkills,
  devOps: devOpsSkills,
};
