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
        'u-min-w-[280px] u-bg-surface-raised u-text-on-surface-raised u-rounded u-shadow-lg u-overflow-hidden u-transition-shadow hover:u-shadow-xl',
        classes,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
