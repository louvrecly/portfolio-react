import { useEffect, useMemo, useState } from 'react';
import Section from './Section';
import Card from './Card';

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const IDENTITY_CHANGE_INTERVAL = 1500;

interface AboutSectionProps {
  name: string;
  description: string;
  identities?: string[];
}

const AboutSection = ({
  name,
  description,
  identities = [],
}: AboutSectionProps) => {
  const [identityIndex, setIdentityIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdentityIndex((index) => (index + 1) % identities.length);
    }, IDENTITY_CHANGE_INTERVAL);

    return () => clearInterval(timer);
  }, [identities.length]);

  const identity = useMemo(
    () => identities[identityIndex],
    [identities, identityIndex],
  );
  const identityArticle = useMemo(
    () => (VOWELS.includes(identity[0].toLowerCase()) ? 'an' : 'a'),
    [identity],
  );

  return (
    <Section id="about" title="About Me">
      <div className="u-max-w-4xl">
        <h3 className="u-my-16 u-text-2xl">
          <span className="u-block sm:u-inline">
            {name} is {identityArticle}
          </span>{' '}
          <strong className="u-font-mono">{identity}</strong>
        </h3>

        <Card>
          <p className="u-py-3 u-px-5 u-font-mono u-text-start sm:u-px-12">
            {description}
          </p>
        </Card>
      </div>
    </Section>
  );
};

export default AboutSection;
