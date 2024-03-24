import "./style.css";

export const Badge = ({ children, onClick, selected }) => {
  return (
    <div
      className={`badge ${selected ? "selected_badge" : ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
