import Section from './Section';
import GlowBackground from './GlowBackground';

interface BannerProps {
  id?: string;
  name: string;
  title: string;
  location: string;
}

const Banner = ({ id, name, title, location }: BannerProps) => {
  return (
    <Section id={id}>
      <GlowBackground />

      <div className="u-absolute u-inset-0 u-bg-gradient-to-t u-from-zinc-950 u-to-transparent u-opacity-50"></div>

      <div className="u-relative">
        <div className="u-mb-5">
          <h1 className="u-mb-3">{name}</h1>

          <h2>
            {title} - {location}
          </h2>
        </div>

        <a href="#about">
          <button>Learn More</button>
        </a>
      </div>
    </Section>
  );
};

export default Banner;
