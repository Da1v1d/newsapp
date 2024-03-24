import { Button } from "components/Button";

import "./style.css";

export const SearchInput = () => {
  return (
    <div className="search_input">
      <input
        placeholder="Search by keyword"
        required
        type="text"
        name="search"
      />
      <Button type="submit">
        <img alt="search" src={require("assets/icons/search.png")} />
      </Button>
    </div>
  );
};
