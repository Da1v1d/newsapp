import { ChooseDataSource } from "components/ChooseDataSource";
import { NewsFilter } from "components/FIlter/News";
import { SearchInput } from "components/Input/SearchInput";

import "./style.css";

export const ArticleForm = ({
  onSubmit,
  setDataSource,
  dataSource,
  isFetched,
}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>News App</h1>

        <ChooseDataSource
          setDataSource={setDataSource}
          dataSource={dataSource}
        />

        <SearchInput />
        {isFetched && <NewsFilter />}
      </form>
    </>
  );
};
