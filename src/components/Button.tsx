import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

const Button = ({
  className,
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      className={twMerge(
        'u-py-1 u-px-5 u-bg-surface-raised u-text-highlight u-cursor-pointer u-transition-colors hover:u-border-highlight',
        className,
      )}
      {...props}
    />
  );
};

export default Button;
