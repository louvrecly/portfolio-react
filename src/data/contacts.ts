import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Contact {
  key: string;
  title: string;
  value: string;
  link: string;
  icon: IconProp;
}

type ContactMap = Record<string, Contact>;

const contactMap: ContactMap = {
  mobile: {
    key: 'mobile',
    title: 'Mobile',
    value: '+1 (647) 834 6410',
    link: 'tel:+1 (647) 834 6410',
    icon: ['fas', 'mobile'],
  },
  email: {
    key: 'email',
    title: 'Email',
    value: 'louvrecly@gmail.com',
    link: 'mailto:louvrecly@gmail.com',
    icon: ['fas', 'envelope'],
  },
  github: {
    key: 'github',
    title: 'GitHub',
    value: 'https://github.com/louvrecly',
    link: 'https://github.com/louvrecly',
    icon: ['fab', 'github'],
  },
  linkedIn: {
    key: 'linkedIn',
    title: 'LinkedIn',
    value: 'https://linkedin.com/in/louvrecly',
    link: 'https://linkedin.com/in/louvrecly',
    icon: ['fab', 'linkedin'],
  },
};

type ContactKey = keyof ContactMap;

const contactKeys: ContactKey[] = ['email', 'github', 'linkedIn'];

export const contacts = contactKeys.map((key) => contactMap[key]);
