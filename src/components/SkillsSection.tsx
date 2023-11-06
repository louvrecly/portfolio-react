import Section from './Section';
import Card from './Card';
import SkillBadge from './SkillBadge';
import { DetailedSkillType } from '../data/skills';

interface SkillsSectionProps {
  skillTypes?: DetailedSkillType[];
}

const SkillsSection = ({ skillTypes = [] }: SkillsSectionProps) => {
  return (
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
                    <SkillBadge key={skill.key} skill={skill} showName />
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;
