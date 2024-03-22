import "./style.css";

export const TextInputs = () => {
  return (
    <div className="text_inputs">
      <input
        placeholder="search"
        required
        type="text"
        onChange={e => console.log(e)}
      />
      <input placeholder="author" type="text" onChange={e => console.log(e)} />
    </div>
  );
};
