import { DetailedProject } from '../data/projects';
import Button from './Button';
import Card from './Card';
import Link from './Link';
import Section from './Section';
import SkillBadge from './SkillBadge';

interface ProjectsSectionProps {
  projects?: DetailedProject[];
}

const ProjectsSection = ({ projects = [] }: ProjectsSectionProps) => {
  return (
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
  );
};

export default ProjectsSection;
