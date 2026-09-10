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
        'u-text-highlight u-transition hover:u-underline',
        className,
      )}
      {...props}
    />
  );
};

export default Link;
