import React from "react";
import { useData } from "../../Context/DataContext";
import { DateRage } from "../DataRange";

export const Header = () => {
  const { data } = useData();
  console.log(data);
  return (
    <div>
      <DateRage />
    </div>
  );
};
