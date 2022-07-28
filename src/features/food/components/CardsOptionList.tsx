import React from "react";
import { options } from "../../../data/options";
import { CardOption } from "./CardOption";
import "../styles/components/CardsOptionList.scss"
interface option {
  icon: "sring";
  desc: "string";
}

export const CardsOptionList = () => {
  return (
    <div className="cardoptiolist">
      {options.map((option, i) => (
        <CardOption 
          key={i} 
          img={option.icon} 
          desc={option.desc} />
      ))}
    </div>
  );
};
