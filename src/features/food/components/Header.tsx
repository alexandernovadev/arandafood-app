import React from "react";
import "../styles/components/Header.scss";

export const Header = () => {
  return (
    <section className="header">

      <div className="header__title">
        <span className="one">Recipe</span>
          <span className="two">App</span>
      </div>

      <div className="header__menu">
        <ul>
          <li className="selected">Home</li>
          <li>Vegetarianos</li>
          <li>Platos Principales</li>
          <li>Tortas</li>
          <li>Comida R&aacute;pida</li>
          <li>Men&uacute; Ni&ntilde;os</li>
          <li>Sopas</li>
        </ul>
      </div>
      <div className="header__iconhome"></div>

    </section>
  );
};
