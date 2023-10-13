import { ReactNode } from 'react';

interface CardProps {
  classes?: string;
  children?: ReactNode;
}

const Card = ({ classes = '', children }: CardProps) => {
  return (
    <div
      className={
        'u-rounded u-bg-zinc-950/50 u-overflow-hidden u-min-w-[280px] u-shadow-lg u-transition-shadow hover:u-shadow-xl ' +
        classes
      }
    >
      {children}
    </div>
  );
};

export default Card;
