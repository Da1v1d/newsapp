import "./style.css";

export const Badge = ({ children, onClick, condition }) => {
  return (
    <div
      className={`badge ${condition ? "selected_badge" : ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
