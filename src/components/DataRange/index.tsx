import React, { useState } from "react";
import { InputData } from "../DateInput";

export const DateRage = () => {
  const [inicio, setInicio] = useState("");
  const [final, setFinal] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()} className="box flex">
      <InputData
        label="Start"
        onChange={(e) => setInicio(e.currentTarget.value)}
      />
      <InputData
        label="End"
        onChange={(e) => setFinal(e.currentTarget.value)}
      />
    </form>
  );
};
