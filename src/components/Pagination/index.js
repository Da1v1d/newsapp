import { useSearchParams } from "react-router-dom";

import { fetchNews } from "api";

import { Button } from "components/Button";

import { changeQueryParam, convertTotalPages } from "utils";

import "./style.css";

export const Pagination = ({ total, fetchData, dataSource }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let page = +searchParams.get("page");

  // ! Every time fetching with new york times api we get different datas with defferent total pages result
  const totalPages = convertTotalPages(total);

  const next = async () => {
    if (page < totalPages) {
      const { params, url } = changeQueryParam(searchParams, "page", ++page);
      setSearchParams(params);
      await fetchData(() => fetchNews(dataSource, url));
    }
  };
  const previous = async () => {
    if (page > 1) {
      const { params, url } = changeQueryParam(searchParams, "page", --page);
      setSearchParams(params);
      await fetchData(() => fetchNews(dataSource, url));
    }
  };

  return (
    <div className="pagination">
      <Button size="md" variant="circle" onClick={previous}>
        <img alt="previous" src={require("assets/icons/previous.png")} />
      </Button>
      {page === totalPages ? page : `${page} . . . ${totalPages}`}

      <Button size="md" variant="circle" onClick={next}>
        <img alt="next" src={require("assets/icons/next.png")} />
      </Button>
    </div>
  );
};
