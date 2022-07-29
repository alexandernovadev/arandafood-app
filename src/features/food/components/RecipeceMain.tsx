import { useEffect } from "react";
import "../styles/components/RecipeceMain.scss";
import { CardProduct } from "./CardProduct";
import img from "../../../assets/Ojingeo-muchim-1.png";

import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../store/recipeThunk";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";

interface recipe {
  id: string;
  imgmain: string;
  title: string;
  type: string;
  rank: string;
  portion: string;
  timecook: string;
  difficulty: string;
}

export const RecipeceMain = () => {
  const dispatch = useAppDispatch();
  const { recipes, isLoading } = useSelector((state: any) => state.foods);
  console.log(recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, []);


  const cards = ()=> {
    return (
      recipes.map((recipe: recipe) => (
        <CardProduct
          key={recipe.id}
          imgmain={recipe.imgmain}
          title={recipe.title}
          type={recipe.type}
          rank={recipe.rank}
          portion={recipe.portion}
          timecook={recipe.timecook}
          difficulty={recipe.difficulty}
        />
      ))
    )
  }

  return (
    <section className="recipes">
      <h2>Nuevas Recetas</h2>
      {/* <button onClick={() => dispatch(getRecipes())}>ACTION</button> */}
      <div className="recipes__cards">

        {isLoading 
        ? "Cargando" 
        : cards()
      }
      </div>
    </section>
  );
};
