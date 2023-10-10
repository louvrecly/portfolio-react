import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children?: ReactNode;
}

const Section = ({ title = '', id, children }: SectionProps) => {
  return (
    <section
      id={id}
      className="tw-relative tw-min-h-screen tw-flex tw-flex-col tw-scroll-m-16"
    >
      <h1></h1>
      {title && (
        <h2 className="tw-p-5 tw-text-3xl tw-font-bold tw-flex tw-items-center tw-gap-4">
          <span className="tw-border-y-2 tw-border-inherit tw-h-0 tw-flex-1"></span>
          <span>{title}</span>
          <span className="tw-border-y-2 tw-border-inherit tw-h-0 tw-flex-1"></span>
        </h2>
      )}

      <div className="tw-pb-16 tw-px-5 tw-flex-1 tw-flex tw-items-center tw-justify-center">
        {children}
      </div>
    </section>
  );
};

export default Section;
