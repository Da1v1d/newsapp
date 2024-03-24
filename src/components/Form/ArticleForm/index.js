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
      <ChooseDataSource setDataSource={setDataSource} dataSource={dataSource} />
      <form onSubmit={onSubmit}>
        <SearchInput />
        {isFetched && <NewsFilter />}
      </form>
    </>
  );
};
