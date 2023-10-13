import { IconProp } from '@fortawesome/fontawesome-svg-core';

const ALL_CONTACT_KEYS = ['email', 'github', 'linkedIn'] as const;

type ContactKey = (typeof ALL_CONTACT_KEYS)[number];

interface Contact {
  key: ContactKey;
  title: string;
  value: string;
  link: string;
  icon: IconProp;
}

type ContactMap = Record<ContactKey, Contact>;

const contactMap: ContactMap = {
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

const contactKeys: ContactKey[] = [...ALL_CONTACT_KEYS];

export const contacts = contactKeys.map((key) => contactMap[key]);
