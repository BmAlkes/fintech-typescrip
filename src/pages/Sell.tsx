import React from "react";
import { NavLink, useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { IVenda } from "../Context/DataContext";
import { Loading } from "../components/Loading";

type VendaWithoutDate = Omit<IVenda, "data">;

export const Sell = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<VendaWithoutDate>(
    `https://data.origamid.dev/vendas/${id}`
  );
  if (loading) return <Loading />;
  if (data === null) return null;

  return (
    <>
      <div className="flex">
        <div className="box mb">ID:{data.id}</div>
        <div className="box mb">Name:{data.nome}</div>
        <div className="box mb">
          Price:{" "}
          {data.preco.toLocaleString("us-En", {
            style: "currency",
            currency: "USD",
          })}
        </div>
        <div className="box mb">Status: {data.status}</div>
        <div className="box mb">Method: {data.pagamento}</div>
        <div className="box mb">Installments:{data.parcelas}</div>
      </div>
      <NavLink to="/sells">Back</NavLink>
    </>
  );
};
