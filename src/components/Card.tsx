import { ReactNode } from 'react';

interface CardProps {
  classes?: string;
  children?: ReactNode;
}

const Card = ({ classes = '', children }: CardProps) => {
  return (
    <div
      className={
        'u-relative u-rounded u-overflow-hidden u-min-w-[280px] u-h-full u-shadow-lg u-transition-shadow hover:u-shadow-xl ' +
        classes
      }
    >
      <div className="u-absolute u-w-full u-h-full u-bg-zinc-950 u-opacity-50"></div>

      <div className="u-relative">{children}</div>
    </div>
  );
};

export default Card;
