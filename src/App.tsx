import { useState, useEffect, useMemo } from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Section from './components/Section';
import Card from './components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navItems } from './data/navigation';
import { bannerData } from './data/banner';
import { aboutData } from './data/about';
import { skillTypes, skillsMap } from './data/skills';
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
              <p className="u-py-3 u-px-6 u-font-mono u-text-start sm:u-px-12">{aboutData.description}</p>
            </Card>
          </div>
        </Section>

        <Section id="skills" title="Tools and Skills">
          <div className="u-max-w-4xl">
            <ul className="u-flex u-gap-5 u-flex-wrap">
              {skillTypes.map((skillType) => (
                <li key={skillType.key} className="u-flex-1">
                  <Card>
                    <div className="u-p-5">
                      <h3 className="u-mb-3 u-text-xl u-font-bold">
                        {skillType.title}
                      </h3>

                      <ul className="u-flex u-flex-wrap u-justify-around u-gap-4">
                        {skillsMap[skillType.key].map((skill) => (
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
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="u-max-w-4xl">
            <ul className="u-flex u-flex-col u-gap-5 sm:u-gap-10">
              {projects.map((project, index) => (
                <li key={project.key}>
                  <Card>
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
                        <h3 className="u-text-xl u-font-bold">
                          {project.title}
                        </h3>

                        <div className="u-my-3">
                          <p>
                            {project.type} - {project.subtitle}
                          </p>

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
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <ul>
            {contacts.map((contact) => (
              <li key={contact.key} className="u-mb-3">
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
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default App;
