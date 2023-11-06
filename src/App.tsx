import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GradientBackground from './components/Background/GradientBackground';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Section from './components/Section';
import Card from './components/Card';
import Link from './components/Link';
import Button from './components/Button';
import SkillBadge from './components/SkillBadge';
import { navItems } from './data/navigation';
import { bannerData } from './data/banner';
import { aboutData } from './data/about';
import { skillTypes } from './data/skills';
import { projects } from './data/projects';
import { contacts } from './data/contacts';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';

const App = () => {
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
        <AboutSection
          name={aboutData.name}
          description={aboutData.description}
          identities={aboutData.identities}
        />

        <SkillsSection skillTypes={skillTypes} />

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
                                <SkillBadge
                                  key={skill.key}
                                  skill={skill}
                                  size="sm"
                                />
                              ))}
                            </div>
                          </div>
                        )}

                        <p>{project.description}</p>
                      </div>

                      {project.link && (
                        <Link href={project.link} target="_blank">
                          <Button>View Demo</Button>
                        </Link>
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
                    <Link href={contact.link} target="_blank">
                      {contact.value}
                    </Link>
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
