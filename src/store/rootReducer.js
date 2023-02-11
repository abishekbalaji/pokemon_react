import { combineReducers } from "redux";
import pokemonsReducer from "./pokemons/pokemonsReducer";
import signInOrUpReducer from "./signInOrUp/signInOrUpReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  signInOrUp: signInOrUpReducer,
  pokemons: pokemonsReducer,
  user: userReducer,
});

export default rootReducer;
