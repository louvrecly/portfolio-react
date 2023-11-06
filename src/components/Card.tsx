import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  classes?: string;
  children?: ReactNode;
}

const Card = ({ classes = '', children }: CardProps) => {
  return (
    <div
      className={twMerge(
        'u-min-w-[280px] u-bg-zinc-950/50 u-text-secondary u-rounded u-shadow-lg u-overflow-hidden u-transition-shadow hover:u-shadow-xl',
        classes,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
