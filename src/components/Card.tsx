import { ReactNode } from 'react';

interface CardProps {
  classes?: string;
  children?: ReactNode;
}

const Card = ({ classes = '', children }: CardProps) => {
  return (
    <div
      className={
        'tw-relative tw-rounded tw-overflow-hidden tw-min-w-[280px] tw-h-full tw-shadow-lg tw-transition-shadow hover:tw-shadow-xl ' +
        classes
      }
    >
      <div className="tw-absolute tw-w-full tw-h-full tw-bg-zinc-950 tw-opacity-50"></div>

      <div className="tw-relative">{children}</div>
    </div>
  );
};

export default Card;
