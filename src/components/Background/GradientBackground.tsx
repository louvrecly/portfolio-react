const GradientBackground = () => {
  return (
    <div className="u-fixed u-inset-x-0 u-top-0 u-h-screen u-justify-center u-flex u-items-center u-animate-spin-slow">
      <div className="u-absolute u-w-[50vh] u-h-[50vh] u-bg-gradient-to-r u-from-cool-positive u-to-cool-negative u-rounded-full u-blur-3xl u-animate-pulse-full"></div>
      <div className="u-absolute u-w-[50vh] u-h-[50vh] u-bg-gradient-to-r u-from-warm-positive u-to-warm-negative u-rounded-full u-blur-3xl u-animate-pulse-full-alt"></div>
    </div>
  );
};

export default GradientBackground;
