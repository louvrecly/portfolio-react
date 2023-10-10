import { useState, useEffect, useMemo } from 'react'
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
      setIdentityIndex(index => (index + 1) % aboutData.identities.length);
    }, IDENTITY_CHANGE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const identity = useMemo(() => aboutData.identities[identityIndex], [identityIndex]);
  const identityArticle = useMemo(
    () => VOWELS.includes(identity[0].toLowerCase()) ? 'an' : 'a',
    [identity],
  );

  return (
    <div className="tw-relative">
      <Banner
        id="home"
        name={bannerData.name}
        title={bannerData.title}
        location={bannerData.location}
      ></Banner>

      <NavBar navItems={navItems}></NavBar>

      <div>
        <Section id="about" title="About Me">
          <div className="tw-max-w-4xl">
            <p className="tw-mb-5">
              {aboutData.name} is {identityArticle} <strong className="tw-font-mono">{identity}</strong>
            </p>

            <Card>
              <p className="tw-p-5">{aboutData.description}</p>
            </Card>
          </div>
        </Section>

        <Section id="skills" title="Tools and Skills">
          <div className="tw-max-w-4xl">
            <ul className="tw-flex tw-gap-5 tw-flex-wrap">
              {skillTypes.map(skillType => (
                <li key={skillType.key} className="tw-flex-1">
                  <Card>
                    <div className=" tw-p-5">
                      <h3 className="tw-mb-3 tw-text-xl tw-font-bold">{skillType.title}</h3>

                      <ul>
                        {skillsMap[skillType.key].map(skill => (
                          <li key={skill}>{skill}</li>
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
          <div className="tw-max-w-4xl">
            <ul className="tw-flex tw-flex-col tw-gap-5">
              {projects.map(project => (
                <li key={project.key} className="">
                  <Card>
                    <div className="tw-flex tw-flex-col tw-justify-items-stretch md:tw-flex-row">
                      {!!project.image && (
                        <div className="tw-flex-1 md:tw-w-1/2">
                          <img className="tw-w-full tw-h-full tw-object-cover" src={project.image} />
                        </div>
                      )}

                      <div className="tw-p-5 tw-flex-1">
                        <h3 className="tw-text-xl tw-font-bold">{project.title}</h3>

                        <div className="tw-my-3">
                          <p>{project.type} - {project.subtitle}</p>

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
            {contacts.map(contact => (
              <li key={contact.key} className="tw-mb-3">
                <label className="tw-text-l sm:tw-text-xl">
                  {contact.icon ? (
                    <FontAwesomeIcon className="tw-mr-3" icon={contact.icon}></FontAwesomeIcon>
                  ) : contact.title}
                  <a href={contact.link} target="_blank">{contact.value}</a>
                </label>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}

export default App;
