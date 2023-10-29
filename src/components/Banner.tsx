import Section from './Section';
import GlowBackground from './Background/GlowBackground';

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

      <div className="u-py-16 u-px-5 u-absolute u-inset-0 u-bg-gradient-to-t u-from-zinc-950/70 u-to-transparent u-flex u-justify-center u-items-center sm:u-px-10">
        <div>
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
      </div>
    </Section>
  );
};

export default Banner;
