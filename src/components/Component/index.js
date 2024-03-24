import { Loader } from "components/Loader";

import { showErrorText } from "utils";

export const Component = ({ children, loading, error, condition }) => {
  return (
    <>
      {loading && <Loader />}
      {!!error && showErrorText(error)}
      {!error && condition && <>{children}</>}
    </>
  );
};
