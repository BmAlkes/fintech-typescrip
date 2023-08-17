import React, { useEffect, useState } from "react";
import { useData } from "../../Context/DataContext";
import { DateRage } from "../DataRange";
import MonthsBtn from "../MonthsBtn";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resume");
    } else if (location.pathname === "/sells") {
      setTitle("Sells");
    }
  }, [location]);
  const { data } = useData();
  return (
    <header className="mb">
      <div className="mb dateRange">
        <DateRage />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <MonthsBtn />
    </header>
  );
};
