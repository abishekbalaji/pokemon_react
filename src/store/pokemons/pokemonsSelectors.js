import { createSelector } from "reselect";
const pokemonsReducer = (state) => state.pokemons;

export const selectPokemons = createSelector(
  [pokemonsReducer],
  (pokemonsSlice) => pokemonsSlice.pokemons
);

export const selectPage = createSelector(
  [pokemonsReducer],
  (pokemonsSlice) => pokemonsSlice.page
)

export const selectPokemonUrl = createSelector(
  [selectPokemons, (state, name) => name],
  (pokemonsArray, name) => {
    if (pokemonsArray.length) {
      const pokemon = pokemonsArray.find((pokemon) => pokemon.name === name);
      return pokemon.url;
    }
  }
);

export const selectIsPokemonsLoading = createSelector(
  [pokemonsReducer],
  (pokemonsSlice) => pokemonsSlice.isLoading
);

export const selectPokemon = createSelector(
  [pokemonsReducer],
  (pokemonSlice) => pokemonSlice.pokemon
);
