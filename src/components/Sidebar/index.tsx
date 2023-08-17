import React from "react";
import fintech from "../../assets/fintech.svg";
import resumo from "../../assets/icons/resumo.svg";
import vendas from "../../assets/icons/vendas.svg";
import webhooks from "../../assets/icons/webhooks.svg";
import configuracoes from "../../assets/icons/configuracoes.svg";
import contato from "../../assets/icons/contato.svg";
import sair from "../../assets/icons/sair.svg";

export const Sidebar = () => {
  return (
    <nav className="sidenav box bg-3">
      <img src={fintech} alt="fintech logo" />
      <ul>
        <li>
          <span>
            <img src={resumo} alt="" />
          </span>
          <a href="">Resume</a>
        </li>
        <li>
          <span>
            <img src={vendas} alt="" />
          </span>
          <a href="">Sell</a>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
          <a href="">Webhook</a>
        </li>
        <li>
          <span>
            <img src={configuracoes} alt="" />
          </span>
          <a href="">Config</a>
        </li>
        <li>
          <span>
            <img src={contato} alt="" />
          </span>
          <a href="">Contact</a>
        </li>
        <li>
          <span>
            <img src={sair} alt="" />
          </span>
          <a href="">Logout</a>
        </li>
      </ul>
    </nav>
  );
};
