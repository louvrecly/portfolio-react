import { useState, useEffect, useMemo } from 'react';
import GradientBackground from './components/Background/GradientBackground';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Section from './components/Section';
import Card from './components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navItems } from './data/navigation';
import { bannerData } from './data/banner';
import { aboutData } from './data/about';
import { skillTypes } from './data/skills';
import { projects } from './data/projects';
import { contacts } from './data/contacts';

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const IDENTITY_CHANGE_INTERVAL = 1500;

const App = () => {
  const [identityIndex, setIdentityIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdentityIndex((index) => (index + 1) % aboutData.identities.length);
    }, IDENTITY_CHANGE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const identity = useMemo(
    () => aboutData.identities[identityIndex],
    [identityIndex],
  );
  const identityArticle = useMemo(
    () => (VOWELS.includes(identity[0].toLowerCase()) ? 'an' : 'a'),
    [identity],
  );

  return (
    <div className="u-relative">
      <GradientBackground />

      <Banner
        id="home"
        name={bannerData.name}
        title={bannerData.title}
        location={bannerData.location}
      ></Banner>

      <NavBar navItems={navItems}></NavBar>

      <div>
        <Section id="about" title="About Me">
          <div className="u-max-w-4xl">
            <h3 className="u-my-16 u-text-2xl">
              <span className="u-block sm:u-inline">
                {aboutData.name} is {identityArticle}
              </span>{' '}
              <strong className="u-font-mono">{identity}</strong>
            </h3>

            <Card>
              <p className="u-py-3 u-px-5 u-font-mono u-text-start sm:u-px-12">
                {aboutData.description}
              </p>
            </Card>
          </div>
        </Section>

        <Section id="skills" title="Tools and Skills">
          <div className="u-max-w-4xl">
            <div className="u-flex u-flex-col u-gap-5 u-flex-wrap u-items-stretch sm:u-flex-row">
              {skillTypes.map((skillType) => (
                <Card key={skillType.key} classes="u-flex-1">
                  <div className="u-p-5">
                    <h3 className="u-mb-3 u-text-xl u-font-bold">
                      {skillType.title}
                    </h3>

                    <ul className="u-flex u-flex-wrap u-justify-around u-gap-4">
                      {skillType.skills.map((skill) => (
                        <a
                          key={skill.key}
                          href={skill.link || '#'}
                          target="_blank"
                        >
                          <li className="u-flex u-flex-col u-items-center u-gap-1 u-transition-transform hover:u-scale-110">
                            {skill.logo && (
                              <img
                                src={skill.logo}
                                alt={skill.name}
                                width="50"
                              />
                            )}
                            {skill.name}
                          </li>
                        </a>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="u-max-w-4xl">
            <div className="u-flex u-flex-col u-gap-5 sm:u-gap-10">
              {projects.map((project, index) => (
                <Card key={project.key}>
                  <div
                    className={`u-flex u-flex-col u-justify-items-stretch ${
                      index % 2 ? 'sm:u-flex-row-reverse' : 'sm:u-flex-row'
                    }`}
                  >
                    {project.image && (
                      <div className="sm:u-w-1/2">
                        <img
                          className="u-w-full u-h-full u-object-cover"
                          src={project.image}
                        />
                      </div>
                    )}

                    <div className="u-p-5 sm:u-flex-1">
                      <h3 className="u-text-xl u-font-bold">{project.title}</h3>

                      <div className="u-my-3">
                        <p>
                          {project.type} - {project.subtitle}
                        </p>

                        {!!project.skills.length && (
                          <div>
                            <p>Tech Stack:</p>

                            <div className="u-flex u-flex-wrap u-justify-center u-gap-4">
                              {project.skills.map((skill) => (
                                <a
                                  key={skill.key}
                                  href={skill.link}
                                  target="_blank"
                                >
                                  <img
                                    className="u-transition-transform hover:u-scale-110"
                                    src={skill.logo}
                                    alt={skill.name}
                                    width="30"
                                  />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        <p>{project.description}</p>
                      </div>

                      {project.link && (
                        <a href={project.link} target="_blank">
                          <button>View Demo</button>
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <Card>
            <div className="u-py-3 u-px-5">
              {contacts.map((contact) => (
                <div key={contact.key} className="u-mb-3 last:u-mb-0">
                  <label className="u-text-l sm:u-text-xl">
                    {contact.icon ? (
                      <FontAwesomeIcon
                        className="u-mr-3"
                        icon={contact.icon}
                      ></FontAwesomeIcon>
                    ) : (
                      contact.title
                    )}
                    <a href={contact.link} target="_blank">
                      {contact.value}
                    </a>
                  </label>
                </div>
              ))}
            </div>
          </Card>
        </Section>
      </div>
    </div>
  );
};

export default App;
