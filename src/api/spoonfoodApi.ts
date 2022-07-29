import axios from "axios";
const APIKEY = "d803579fd8f547c981e2a956825d841d";
const URL = "https://api.spoonacular.com";

export const recipesApi = axios.create({
  baseURL: URL,
  params: {
    apiKey: APIKEY,
  },
  headers: {
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
});
