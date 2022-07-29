import React from "react";
import "../styles/components/RecipeceMain.scss";
import { CardProduct } from "./CardProduct";
import img from "../../../assets/Ojingeo-muchim-1.png";

export const RecipeceMain = () => {
  return (
    <section className="recipes">
      <h2>Nuevas Recetas</h2>
      <div className="recipes__cards">
        <CardProduct
          imgmain={img}
          title="Ojiuend"
          type="Muchin"
          rank="5.0"
          portion="4"
          timecook="10"
          difficulty="facil"
        />

        <CardProduct
          imgmain={img}
          title="Mariscon"
          type="Barricnul"
          rank="4.2"
          portion="3"
          timecook="25"
          difficulty="intermedio"
        />
      </div>
      <br />
      <br />
    
    </section>
  );
};
