const Loader = ({ size = "medium", color = "primary" }) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  };

  const colorClasses = {
    primary: "border-global-1",
    secondary: "border-global-2",
    white: "border-global-6",
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`
          ${sizeClasses[size]} 
          ${colorClasses[color]} 
          border-2 border-t-transparent 
          rounded-full 
          animate-spin
        `}
      />
    </div>
  );
};

export default Loader;
