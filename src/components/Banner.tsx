import Section from './Section';
import GlowBackground from './Background/GlowBackground';
import Link from './Link';
import Button from './Button';

interface BannerProps {
  name: string;
  title: string;
  location: string;
}

const Banner = ({ name, title, location }: BannerProps) => {
  return (
    <Section id="home">
      {/*
        `o-hero` paints this region dark and re-declares the theme tokens for
        everything inside it, so the hero stays dark in both themes. Components
        below use the ordinary tokens — `u-bg-surface`, `u-text-on-surface`,
        the Button's own — and get the hero's dark values. See CONTEXT.md.
      */}
      <div className="o-hero u-absolute u-inset-0 u-overflow-hidden u-bg-surface">
        <GlowBackground />

        {/*
          A scrim, not a background: it darkens the bright particles behind the
          text. The hero's ground is painted above.
        */}
        <div className="u-py-16 u-px-5 u-absolute u-inset-0 u-bg-gradient-to-t u-from-zinc-950/70 u-to-transparent u-flex u-justify-center u-items-center sm:u-px-10">
          <div>
            <div className="u-mb-5 u-text-on-surface">
              <h1 className="u-mb-3 u-text-4xl">{name}</h1>

              <h2>
                {title} - {location}
              </h2>
            </div>

            <Link href="#about">
              <Button>Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Banner;
