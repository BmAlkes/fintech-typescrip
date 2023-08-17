import React, { useState } from "react";
import { InputData } from "../DateInput";
import { useData } from "../../Context/DataContext";

export const DateRage = () => {
  const { final, inicio, setFinal, setInicio } = useData();

  return (
    <form onSubmit={(e) => e.preventDefault()} className="box flex">
      <InputData
        label="Start"
        value={inicio}
        onChange={(e) => setInicio(e.currentTarget.value)}
      />
      <InputData
        value={final}
        label="End"
        onChange={(e) => setFinal(e.currentTarget.value)}
      />
    </form>
  );
};
