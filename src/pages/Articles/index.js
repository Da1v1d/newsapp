import { useState } from "react";

import { ChooseDataSource } from "components/ChooseDataSource";
import { DateInputs } from "components/Input/DateInput";
import { TextInputs } from "components/Input/TextInput";

import "../../index.css";

export const Articles = () => {
  const [selectedDataSource, setSelectedDataSource] = useState({});
  console.log(selectedDataSource);
  return (
    <>
      <ChooseDataSource
        setSelectedDataSource={setSelectedDataSource}
        selectedDataSource={selectedDataSource}
      />
      <DateInputs />
      <TextInputs />
    </>
  );
};
