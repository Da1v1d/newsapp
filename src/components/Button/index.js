import "./style.css";

export const Button = ({
  children,
  size = "md",
  variant = "default",
  type = "button",
  customClass,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`button ${variant} ${size} ${customClass}`}
      {...props}
    >
      {children}
    </button>
  );
};
