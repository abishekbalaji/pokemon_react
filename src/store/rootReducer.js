import { combineReducers } from "redux";
import pokemonsReducer from "./pokemons/pokemonsReducer";
import signInOrUpReducer from "./signInOrUp/signInOrUpReducer";

const rootReducer = combineReducers({
  signInOrUp: signInOrUpReducer,
  pokemons: pokemonsReducer,
});

export default rootReducer;
