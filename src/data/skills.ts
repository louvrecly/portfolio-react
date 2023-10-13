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

const languagesSkills = ['JavaScript', 'TypeScript', 'Python', 'SQL'];
const frontendSkills = [
  'Vue',
  'Nuxt',
  'React',
  'Redux',
  'Next',
  'AngularJS',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'SASS',
  'Flutter',
];
const backendSkills = ['Node.js', 'Express.js', 'Flask', 'Firebase', 'Vitest'];
const databasesSkills = [
  'SQLite',
  'PostgreSQL',
  'Firestore',
  'MongoDB',
  'Redis',
];
const devOpsSkills = [
  'Google Cloud Platform (GCP)',
  'Amazon Web Services (AWS)',
  'GitLab CICD',
];

export const skillsMap = {
  languages: languagesSkills,
  frontend: frontendSkills,
  backend: backendSkills,
  databases: databasesSkills,
  devOps: devOpsSkills,
};
