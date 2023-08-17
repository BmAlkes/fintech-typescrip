import React from "react";
import { IVenda } from "../../Context/DataContext";
import { NavLink } from "react-router-dom";

export const SellItem = ({ venda }: { venda: IVenda }) => {
  return (
    <div className="box venda">
      <NavLink to={`/sells/${venda.id}`} style={{ fontFamily: "monospace" }}>
        {venda.id}
      </NavLink>
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
