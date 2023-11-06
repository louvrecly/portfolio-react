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
        'u-py-1 u-px-5 u-bg-zinc-950/50 u-text-highlight/90 u-cursor-pointer u-transition-colors hover:u-bg-zinc-950/70 hover:u-text-highlight hover:u-border-highlight',
        className,
      )}
      {...props}
    />
  );
};

export default Button;
