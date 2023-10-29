import '../../styles/GlowBackground.scss';

const GlowBackground = () => {
  const circles = new Array(100).fill(null);

  return (
    <div className="u-absolute u-inset-0 u-overflow-hidden o-glow-background">
      {circles.map((_, index) => (
        <div
          key={index}
          className={`o-glow-background__particle-container o-glow-background__particle-container--${
            index + 1
          }`}
        >
          <div
            className={`o-glow-background__particle o-glow-background__particle--${
              index + 1
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default GlowBackground;
