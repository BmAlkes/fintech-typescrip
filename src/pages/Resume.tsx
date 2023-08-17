import React from "react";
import { useData } from "../Context/DataContext";
import { GraphicSell } from "../components/graphicSell";

export const Resume = () => {
  const { data } = useData();
  if (data === null) return null;
  return (
    <section>
      <div className="flex mb resumo">
        <div className="box">
          <h2>Sells</h2>
          <span>
            {data
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("us-En", { style: "currency", currency: "USD" })}
          </span>
        </div>
        <div className="box">
          <h2>Received</h2>
          <span>
            {data
              .filter((i) => i.status === "pago")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("us-En", { style: "currency", currency: "USD" })}
          </span>
        </div>
        <div className="box">
          <h2>Processing</h2>
          <span>
            {data
              .filter((i) => i.status === "processando")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("us-En", { style: "currency", currency: "USD" })}
          </span>
        </div>
      </div>
      <div className="box mb">
        <GraphicSell data={data} />
      </div>
    </section>
  );
};
