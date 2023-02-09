import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPokemonAsync } from "../../store/pokemons/pokemonsActions";
import {
  selectPokemon,
  selectPokemonUrl,
} from "../../store/pokemons/pokemonsSelectors";

import "./Pokemon.scss";

const Pokemon = () => {
  const { pokemon: name } = useParams();
  console.log(name);
  const pokemonObj = useSelector(selectPokemon);

  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState(pokemonObj);
  const url = useSelector((state) => selectPokemonUrl(state, name));

  useEffect(() => {
    dispatch(fetchPokemonAsync(url));
  }, [dispatch, url]);

  useEffect(() => {
    setPokemon(pokemonObj);
  }, [pokemonObj]);
  return <>{pokemon && <h1>{pokemon.name}</h1>}</>;
};

export default Pokemon;
