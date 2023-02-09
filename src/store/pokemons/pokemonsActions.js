import Pokedex from "pokedex-promise-v2";

import createAction from "../../utils/helpers/createAction";
import POKEMONS_REDUCER_TYPES from "./pokemonsTypes";

export const fetchPokemonsStart = () =>
  createAction(POKEMONS_REDUCER_TYPES.FETCH_POKEMONS_START);

export const fetchPokemonsFailed = (error) =>
  createAction(POKEMONS_REDUCER_TYPES.FETCH_POKEMONS_FAILED, error);

export const fetchPokemonsSuccess = (pokemons) =>
  createAction(POKEMONS_REDUCER_TYPES.FETCH_POKEMONS_SUCCESS, pokemons);

export const fetchPokemonsAsync = (interval) => async (dispatch) => {
  dispatch(fetchPokemonsStart());
  try {
    const P = new Pokedex();
    const pokemons = await P.getPokemonsList(interval);
    // const pokemonsData = pokemons.result;
    dispatch(fetchPokemonsSuccess(pokemons.results));
  } catch (error) {
    fetchPokemonsFailed(error);
  }
};

export const fetchPokemonStart = () =>
  createAction(POKEMONS_REDUCER_TYPES.FETCH_POKEMON_START);

export const fetchPokemonSuccess = (pokemon) =>
  createAction(POKEMONS_REDUCER_TYPES.FETCH_POKEMON_SUCCESS, pokemon);

export const fetchPokemonFailed = (error) =>
  createAction(POKEMONS_REDUCER_TYPES.FETCH_POKEMON_FAILED, error);

export const fetchPokemonAsync = (url) => async (dispatch) => {
  dispatch(fetchPokemonStart());
  try {
    const pokemon = await fetch(url);
    const pokemonObj = await pokemon.json();
    console.log(pokemonObj);
    dispatch(fetchPokemonSuccess(pokemonObj));
  } catch (error) {
    dispatch(fetchPokemonFailed(error));
  }
};

export const setPage = (page) =>
  createAction(POKEMONS_REDUCER_TYPES.SET_PAGE, page);
