import React from "react";
import MonthBtn from "../MonthBtn";

const MonthsBtn = () => {
  return (
    <div className="flex">
      <MonthBtn n={2} />
      <MonthBtn n={-1} />
      <MonthBtn n={0} />
    </div>
  );
};

export default MonthsBtn;
