import { Badge } from "components/Badge";

import { NEWS_URL } from "constants/news";

import "./style.css";

export const ChooseDataSource = ({ dataSource, setDataSource }) => {
  return (
    <div className="choose_data_source">
      <h2> Choose Data source </h2>
      <div className="choose_data_source_options">
        {Object.entries(NEWS_URL).map(([name, { queryParams }]) => {
          return (
            <Badge
              key={name}
              condition={dataSource.name === name}
              onClick={() =>
                setDataSource({
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
    </div>
  );
};
