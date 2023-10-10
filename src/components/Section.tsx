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
      className="u-relative u-min-h-screen u-flex u-flex-col u-scroll-m-16"
    >
      {title && (
        <h2 className="u-p-5 u-text-3xl u-font-bold u-flex u-items-center u-gap-4">
          <span className="u-border-y-2 u-border-inherit u-h-0 u-flex-1"></span>
          <span>{title}</span>
          <span className="u-border-y-2 u-border-inherit u-h-0 u-flex-1"></span>
        </h2>
      )}

      <div
        className={
          'u-pb-16 u-px-5 u-flex-1 u-flex u-items-center u-justify-center' +
          (!title ? ' u-pt-16' : '')
        }
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
