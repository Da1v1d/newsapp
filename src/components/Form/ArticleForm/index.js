import { Button } from "components/Button";
import { DateInputs } from "components/Input/DateInput";
import { TextInputs } from "components/Input/TextInput";

import "./style.css";

export const ArticleForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <DateInputs />
      <TextInputs />
      <Button type="submit">
        <img alt="search" src={require("assets/icons/search.png")} />
      </Button>
    </form>
  );
};
