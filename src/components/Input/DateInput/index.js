import "./style.css";

// !In this component memo is not necesarry, because the component is not bitg and can't such an performance in re-render
export const DateInputs = () => {
  return (
    <div className="date_inputs">
      <div className="date_input">
        <p>From</p>
        <input type="date" name="from" />
      </div>
      <div className="date_input">
        <p>To</p>
        <input type="date" name="to" />
      </div>
    </div>
  );
};
