import Section from './Section';

interface BannerProps {
  id?: string;
  name: string;
  title: string;
  location: string;
}

const Banner = ({ id, name, title, location }: BannerProps) => {
  return (
    <Section id={id}>
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-zinc-950 tw-to-transparent tw-opacity-50"></div>

      <div className="tw-relative">
        <div className="tw-mb-5">
          <h1 className="tw-mb-3">{name}</h1>

          <h2>{title} - {location}</h2>
        </div>

        <a href="#about">
          <button>Learn More</button>
        </a>
      </div>
    </Section>
  );
}

export default Banner;
