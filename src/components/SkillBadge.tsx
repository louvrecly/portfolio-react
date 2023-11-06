import { Skill } from '../data/skills';
import Link from './Link';

type BadgeSize = 'sm' | 'base' | 'lg';

interface SkillBadgeProps {
  skill: Skill;
  showName?: boolean;
  size?: BadgeSize;
}

const variants: Record<BadgeSize, string> = {
  sm: 'u-w-6 u-h-6',
  base: 'u-w-10 u-h-10',
  lg: 'u-w-14 u-h-14',
};

const SkillBadge = ({
  skill,
  showName = false,
  size = 'base',
}: SkillBadgeProps) => {
  return (
    <Link href={skill.link || '#'} target="_blank">
      <div className="u-flex u-flex-col u-items-center u-gap-1 u-transition-transform hover:u-scale-110">
        {skill.logo && (
          <div className={variants[size]}>
            <img className="u-w-full" src={skill.logo} alt={skill.name} />
          </div>
        )}

        {showName && <p className="u-text-sm">{skill.name}</p>}
      </div>
    </Link>
  );
};

export default SkillBadge;
