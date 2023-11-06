import GradientBackground from './components/Background/GradientBackground';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { navItems } from './data/navigation';
import { bannerData } from './data/banner';
import { aboutData } from './data/about';
import { skillTypes } from './data/skills';
import { projects } from './data/projects';
import { contacts } from './data/contacts';

const App = () => {
  return (
    <div className="u-relative">
      <GradientBackground />

      <Banner
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

        <ContactSection contacts={contacts} />
      </div>
    </div>
  );
};

export default App;
