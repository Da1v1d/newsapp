import { Button } from "components/Button";
import { DateInputs } from "components/Input/DateInput";
import "components/Input/SearchInput/style.css";

import "./style.css";

export const NewsFilter = () => {
  return (
    <>
      <h2 className="filter_header">Filters</h2>
      <div className="filters">
        <DateInputs />
        <div className="filter_action">
          <input placeholder="Author" type="text" name="author" />
          <Button type="submit">Filter</Button>
        </div>
      </div>
    </>
  );
};
