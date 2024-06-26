import { Article } from "components/Article";

import { NEWS_URL } from "constants/news";

import "./style.css";

export const Articles = ({ loading, data, dataSource }) => {
  const image = NEWS_URL[dataSource].img;
  const fields = NEWS_URL[dataSource].dataFields;
  const articles = NEWS_URL[dataSource].entryData(data);
  return (
    <div className={`articles ${loading ? "blur" : ""}`}>
      {articles?.map((article, key) => (
        <Article
          fields={fields}
          img={image}
          key={key + article[fields.id]}
          article={article}
        />
      ))}
    </div>
  );
};
