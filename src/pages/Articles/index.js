import { useEffect, useState } from "react";

import { Articles } from "components/Articles";
import { ConditionalContainer } from "components/ConditionalContainer";
import { ArticleForm } from "components/Form/ArticleForm";
import { Pagination } from "components/Pagination";

import { NEWS_URL } from "constants/news";

import { useFetchNews } from "hooks/useFetchNews";

import "index.css";

export const ArticlesPage = () => {
  const [dataSource, setDataSource] = useState({
    name: "nytimes",
    queryParams: {
      page: "&page=",
      from: "&begin_date=",
      to: "&end_date=",
    },
  });

  const { data, submit, error, loading, fetchData, setData } = useFetchNews(
    dataSource.name,
    ["from", "to", "search", "author"],
  );

  useEffect(() => {
    setData(null);
  }, [dataSource]); // eslint-disable-line

  return (
    <>
      <ArticleForm
        isFetched={!!NEWS_URL[dataSource.name].entryData(data)?.length}
        onSubmit={submit}
        setDataSource={setDataSource}
        dataSource={dataSource}
      />
      <main>
        <ConditionalContainer
          loading={loading}
          error={error}
          condition={
            !!data && !!NEWS_URL[dataSource.name].entryData(data)?.length
          }
        >
          <>
            <Articles
              loading={loading}
              data={data}
              dataSource={dataSource.name}
            />

            <Pagination
              total={NEWS_URL[dataSource.name].meta.total(data)}
              dataSource={dataSource.name}
              fetchData={fetchData}
            />
          </>
        </ConditionalContainer>
      </main>
    </>
  );
};
