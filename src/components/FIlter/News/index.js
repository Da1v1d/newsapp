import { Button } from "components/Button";
import { DateInputs } from "components/Input/DateInput";
import "components/Input/SearchInput/style.css";

import "./style.css";

// ! Just realised that none of the provided apis have filtering byauthor,
// ! So I think filtering by method Array.filer or fetching again will be not good solution for User Experience.

export const NewsFilter = () => {
  return (
    <>
      <h2 className="filter_header">Filters</h2>
      <div className="filters">
        <DateInputs />
        <div className="filter_action">
          <input placeholder="Author" type="text" name="author" />
          <Button type="submit">FILTER</Button>
        </div>
      </div>
    </>
  );
};
