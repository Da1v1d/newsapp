import { Badge } from "components/Badge";

import { NEWS_URL } from "constants/news";

import "./style.css";

export const ChooseDataSource = ({
  selectedDataSource,
  setSelectedDataSource,
}) => {
  return (
    <>
      <h2> Choose Data source </h2>
      <div className="choose_data_source">
        {Object.entries(NEWS_URL).map(([name, { queryParams }]) => {
          return (
            <Badge
              key={name}
              condition={selectedDataSource.name === name}
              onClick={() =>
                setSelectedDataSource({
                  name,
                  queryParams,
                })
              }
            >
              {name}
            </Badge>
          );
        })}
      </div>
    </>
  );
};
