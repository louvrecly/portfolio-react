import '../../styles/GradientBackground.css';

const GradientBackground = () => {
  return (
    <div className="u-fixed u-inset-x-0 u-top-0 u-h-screen u-justify-center u-flex u-items-center o-gradient-background">
      <div className="u-absolute o-gradient-background__glow o-gradient-background__glow--cool"></div>
      <div className="u-absolute o-gradient-background__glow o-gradient-background__glow--warm"></div>
    </div>
  );
};

export default GradientBackground;
