import POKEMONS_REDUCER_TYPES from "./pokemonsTypes";

const INITIAL_POKEMONS_STATE = {
  pokemons: [],
  isLoading: false,
  error: null,
  pokemon: null,
  page: 0,
};

const pokemonsReducer = (state = INITIAL_POKEMONS_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case POKEMONS_REDUCER_TYPES.FETCH_POKEMONS_START:
      return {
        ...state,
        isLoading: true,
      };
    case POKEMONS_REDUCER_TYPES.FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemons: payload,
      };
    case POKEMONS_REDUCER_TYPES.FETCH_POKEMONS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case POKEMONS_REDUCER_TYPES.FETCH_POKEMON_START:
      return {
        ...state,
        isLoading: true,
      };
    case POKEMONS_REDUCER_TYPES.FETCH_POKEMON_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case POKEMONS_REDUCER_TYPES.FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemon: payload,
      };
    case POKEMONS_REDUCER_TYPES.SET_PAGE:
      return {
        ...state,
        page: payload,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
