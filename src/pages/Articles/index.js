import { useState } from "react";
import { ChooseDataSource } from "../../components/ChooseDataSource";

export const Articles = () => {
  const [selectedDataSource, setSelectedDataSource] = useState({});

  return (
    <>
      <ChooseDataSource
        setSelectedDataSource={setSelectedDataSource}
        selectedDataSource={selectedDataSource}
      />
      <input type="date" />
    </>
  );
};
