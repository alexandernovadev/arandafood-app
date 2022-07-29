import { startLoadindRecipes, setRecipes } from "../store/foodSlice";
import { recipesApi } from "../../../api/spoonfoodApi";
import { AppDispatch } from '../../../app/store';
import { recipes } from "../../../data/recipes";

export const getRecipes = () => {

  return async (dispatch: AppDispatch) => {
    dispatch(startLoadindRecipes());

    /** Coors blocked because iam in localhost, then i can't speak with the backend :'(  */
    // const { recipes } = await recipesApi.get(`/random?number=25`);
    // console.log("Vamos a ver si sirve ", recipes);

    // console.log(recipes);

    let dataFormat = recipes.map((recipe: any) => {

      let splicetotitle = recipe.title.split(" ")
      let typeDificulty = "facil"


      if (recipe.analyzedInstructions.length > 0) {
        let steps = recipe.analyzedInstructions[0].steps.length
        typeDificulty = steps < 5 ? "Intermedio" : "Dificil"
      }

      return {
        id: recipe.id,
        imgmain: recipe.image,
        title: splicetotitle[0],
        type: splicetotitle[1],
        rank: recipe.pricePerServing,
        portion: recipe.servings,
        timecook: recipe.readyInMinutes,
        difficulty: typeDificulty

      }
    })


    dispatch(setRecipes(dataFormat));
  };
};
