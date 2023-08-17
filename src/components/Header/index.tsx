import React from "react";
import { useData } from "../../Context/DataContext";
import { DateRage } from "../DataRange";
import MonthsBtn from "../MonthsBtn";

export const Header = () => {
  const { data } = useData();
  console.log(data);
  return (
    <header className="mb">
      <div className="mb">
        <DateRage />
      </div>
      <MonthsBtn />
    </header>
  );
};
