import "./style.css";

export const TextInputs = () => {
  return (
    <div className="text_inputs">
      <input
        placeholder="search"
        required
        type="text"
        name="search"
        onChange={() => {}}
      />
      <input
        placeholder="author"
        type="text"
        name="author"
        onChange={() => {}}
      />
    </div>
  );
};
