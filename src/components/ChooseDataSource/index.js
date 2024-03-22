import { NEWS_URL } from "../../constants/news";
import { Badge } from "../Badge";
import "./style.css";

export const ChooseDataSource = ({
  selectedDataSource,
  setSelectedDataSource,
}) => {
  return (
    <>
      <h2> Choose Data source </h2>
      <div className="choose_data_source">
        {Object.entries(NEWS_URL).map(([name, value]) => {
          return (
            <Badge
              key={name}
              condition={selectedDataSource.name === name}
              onClick={() =>
                setSelectedDataSource({
                  name,
                  queryParams: { ...value.queryParams },
                })
              }
            >
              {name}
              {/* <img height="24" src={value.img} alt={name} /> */}
            </Badge>
          );
        })}
      </div>
    </>
  );
};
