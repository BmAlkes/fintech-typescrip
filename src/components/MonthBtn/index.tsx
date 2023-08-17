import React from "react";
import { useData } from "../../Context/DataContext";

const nameMonth = (n: number) => {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat("us-En", { month: "long" }).format(date);
};

const style: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  color: "var(--color-5)",
  border: "none",
  borderRadius: "10px",
  fontWeight: "600",
  textTransform: "capitalize",
};

const MonthBtn = ({ n }: { n: number }) => {
  const { setFinal, setInicio } = useData();

  function format(date: Date) {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = String(date.getFullYear());

    return `${yyyy}-${mm}-${dd}`;
  }

  const setMonth = (n: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    console.log(lastDay);

    setFinal(format(lastDay));
    setInicio(format(firstDay));
  };

  return (
    <button
      style={style}
      onClick={() => {
        setMonth(n);
      }}
    >
      {nameMonth(n)}
    </button>
  );
};

export default MonthBtn;
