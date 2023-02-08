import { createSelector } from "reselect";
const pokemonsReducer = (state) => state.pokemons;

export const selectPokemons = createSelector(
  [pokemonsReducer],
  (pokemonsSlice) => pokemonsSlice.pokemons
);

export const selectIsPokemonsLoading = createSelector(
  [pokemonsReducer],
  (pokemonsSlice) => pokemonsSlice.isLoading
);

export const selectPokemon = createSelector(
  [pokemonsReducer],
  (pokemonSlice) => pokemonSlice.pokemon
);
