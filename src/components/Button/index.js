import "./style.css";

export const Button = ({
  children,
  size = "md",
  variant = "default",
  ...props
}) => {
  return (
    <button className={`button ${variant} ${size}`} {...props}>
      {children}
    </button>
  );
};
