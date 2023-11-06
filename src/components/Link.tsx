import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

const Link = ({
  className,
  ...props
}: DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => {
  return (
    <a
      className={twMerge(
        'u-text-highlight/70 u-transition-colors hover:u-text-highlight',
        className,
      )}
      {...props}
    />
  );
};

export default Link;
