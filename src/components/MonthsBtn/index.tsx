import React from "react";
import MonthBtn from "../MonthBtn";

const MonthsBtn = () => {
  return (
    <div className="flex">
      <MonthBtn n={-7} />
      <MonthBtn n={-6} />
      <MonthBtn n={-5} />
      <MonthBtn n={-4} />
      <MonthBtn n={-3} />
      <MonthBtn n={-2} />
      <MonthBtn n={-1} />
      <MonthBtn n={0} />
      <MonthBtn n={1} />
      <MonthBtn n={2} />
      <MonthBtn n={3} />
      <MonthBtn n={4} />
    </div>
  );
};

export default MonthsBtn;
