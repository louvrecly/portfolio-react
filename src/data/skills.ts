const ALL_SKILL_TYPE_KEYS = [
  'languages',
  'frontend',
  'backend',
  'databases',
  'devOps',
] as const;

type SkillTypeKey = (typeof ALL_SKILL_TYPE_KEYS)[number];

export interface Skill {
  key: string;
  name: string;
  logo: string;
  link: string;
}

export type SkillKey = Skill['key'];
type SkillsMap = Record<SkillKey, Skill>;

interface SkillType {
  key: SkillTypeKey;
  title: string;
  skillKeys: SkillKey[];
}

interface DetailedSkillType {
  key: SkillTypeKey;
  title: string;
  skills: Skill[];
}

type SkillTypesMap = Record<SkillTypeKey, SkillType>;

const languagesSkillKeys: SkillKey[] = [
  'javascript',
  'typescript',
  'python',
  'dart',
  'sql',
];
const frontendSkillKeys: SkillKey[] = [
  'react',
  'vue',
  'angularjs',
  'vite',
  'next',
  'redux',
  'nuxt',
  'html',
  'css',
  'sass',
  'tailwindCss',
  'bootstrap',
  'flutter',
];
const backendSkillKeys: SkillKey[] = [
  'nodejs',
  'expressjs',
  'flask',
  'firebase',
  'vitest',
];
const databasesSkillKeys: SkillKey[] = [
  'sqlite',
  'postgresql',
  'firestore',
  'mongodb',
  'redis',
];
const devOpsSkillKeys: SkillKey[] = ['gitLabCicd', 'gcp', 'aws', 'bash'];

const skillTypesMap: SkillTypesMap = {
  languages: {
    key: 'languages',
    title: 'Languages',
    skillKeys: languagesSkillKeys,
  },
  frontend: {
    key: 'frontend',
    title: 'Frontend',
    skillKeys: frontendSkillKeys,
  },
  backend: {
    key: 'backend',
    title: 'Backend',
    skillKeys: backendSkillKeys,
  },
  databases: {
    key: 'databases',
    title: 'Databases',
    skillKeys: databasesSkillKeys,
  },
  devOps: {
    key: 'devOps',
    title: 'DevOps',
    skillKeys: devOpsSkillKeys,
  },
};

const skillsMap: SkillsMap = {
  javascript: {
    key: 'javascript',
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Web/javascript',
  },
  typescript: {
    key: 'typescript',
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    link: 'https://www.typescriptlang.org/',
  },
  python: {
    key: 'python',
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    link: 'https://www.python.org/',
  },
  dart: {
    key: 'dart',
    name: 'Dart',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
    link: 'https://dart.dev/',
  },
  sql: {
    key: 'sql',
    name: 'SQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    link: 'https://www.mysql.com/',
  },
  react: {
    key: 'react',
    name: 'React',
    logo: '/logos/react.svg',
    link: 'https://react.dev/',
  },
  vue: {
    key: 'vue',
    name: 'Vue',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    link: 'https://vuejs.org/',
  },
  angularjs: {
    key: 'angularjs',
    name: 'AngularJS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    link: 'https://angularjs.org/',
  },
  vite: {
    key: 'vite',
    name: 'Vite',
    logo: '/logos/vite.svg',
    link: 'https://vitejs.dev/',
  },
  next: {
    key: 'next',
    name: 'Next',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    link: 'https://nextjs.org/',
  },
  redux: {
    key: 'redux',
    name: 'Redux',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    link: 'https://redux.js.org/',
  },
  nuxt: {
    key: 'nuxt',
    name: 'Nuxt',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
    link: 'https://nuxt.com/',
  },
  html: {
    key: 'html',
    name: 'HTML',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  css: {
    key: 'css',
    name: 'CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
    link: 'https://www.w3.org/Style/CSS/Overview.en.html',
  },
  sass: {
    key: 'sass',
    name: 'SASS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    link: 'https://sass-lang.com/',
  },
  tailwindCss: {
    key: 'tailwindCss',
    name: 'Tailwind CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    link: 'https://tailwindcss.com/',
  },
  bootstrap: {
    key: 'bootstrap',
    name: 'Bootstrap',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    link: 'https://getbootstrap.com/',
  },
  flutter: {
    key: 'flutter',
    name: 'Flutter',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    link: 'https://flutter.dev/',
  },
  nodejs: {
    key: 'nodejs',
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
    link: 'https://nodejs.org/en',
  },
  expressjs: {
    key: 'expressjs',
    name: 'Express.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    link: 'https://expressjs.com/',
  },
  flask: {
    key: 'flask',
    name: 'Flask',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    link: 'https://flask.palletsprojects.com/en/3.0.x/',
  },
  firebase: {
    key: 'firebase',
    name: 'Firebase',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    link: 'https://firebase.google.com/',
  },
  vitest: {
    key: 'vitest',
    name: 'Vitest',
    logo: '/logos/vitest.png',
    link: 'https://vitest.dev/',
  },
  sqlite: {
    key: 'sqlite',
    name: 'SQLite',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
    link: 'https://www.sqlite.org/index.html',
  },
  postgresql: {
    key: 'postgresql',
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    link: 'https://www.postgresql.org/',
  },
  firestore: {
    key: 'firestore',
    name: 'Firestore',
    logo: '/logos/firestore.png',
    link: 'https://firebase.google.com/docs/firestore/',
  },
  mongodb: {
    key: 'mongodb',
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
    link: 'https://www.mongodb.com/',
  },
  redis: {
    key: 'redis',
    name: 'Redis',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    link: 'https://redis.io/',
  },
  gitLabCicd: {
    key: 'gitLabCicd',
    name: 'GitLab CICD',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
    link: 'https://docs.gitlab.com/ee/ci/',
  },
  gcp: {
    key: 'gcp',
    name: 'Google Cloud Platform (GCP)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    link: 'https://cloud.google.com/',
  },
  aws: {
    key: 'aws',
    name: 'Amazon Web Services (AWS)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    link: 'https://aws.amazon.com/',
  },
  bash: {
    key: 'bash',
    name: 'Bash',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
    link: 'https://www.gnu.org/software/bash/',
  },
};

export function getSkillsByKeys(keys: SkillKey[]) {
  return keys.map((key) => skillsMap[key]);
}

const skillTypeKeys: SkillTypeKey[] = [...ALL_SKILL_TYPE_KEYS];

export const skillTypes: DetailedSkillType[] = skillTypeKeys.map(
  (skillTypeKey) => {
    const { skillKeys, ...rest } = skillTypesMap[skillTypeKey];

    return {
      ...rest,
      skills: getSkillsByKeys(skillKeys),
    };
  },
);
