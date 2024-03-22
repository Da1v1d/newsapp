import "./style.css";

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
