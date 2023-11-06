import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GradientBackground from './components/Background/GradientBackground';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Section from './components/Section';
import Card from './components/Card';
import Link from './components/Link';
import { navItems } from './data/navigation';
import { bannerData } from './data/banner';
import { aboutData } from './data/about';
import { skillTypes } from './data/skills';
import { projects } from './data/projects';
import { contacts } from './data/contacts';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';

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

        <ProjectsSection projects={projects} />

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
