const ShinyText = ({
  text,
  disabled = false,
  speed = 5,
  color = "#ffffff", // لون النص الأساسي (أبيض)
  // shineColor = "#ffffff", // لون اللمعة (برتقالي)
  shineColor = "#d85b00", // لون اللمعة (برتقالي)
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`inline-block bg-clip-text ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        backgroundImage: `linear-gradient(
          120deg,
          ${color} 40%,
          ${shineColor} 50%,
          ${color} 60%
        )`,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animationDuration,
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
