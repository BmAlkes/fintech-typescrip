import React from "react";
import { IVenda } from "../../Context/DataContext";

export const SellItem = ({ venda }: { venda: IVenda }) => {
  return (
    <div className="box venda">
      <a href="" style={{ fontFamily: "monospace" }}>
        {venda.id}
      </a>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString("en-Us", {
          style: "currency",
          currency: "usd",
        })}
      </div>
    </div>
  );
};
