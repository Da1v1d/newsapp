import "./style.css";

export const Button = ({
  children,
  size = "md",
  variant = "default",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`button ${variant} ${size} ${props.className} `}
      {...props}
    >
      {children}
    </button>
  );
};
