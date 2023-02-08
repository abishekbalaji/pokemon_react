import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonAsync } from "../../store/pokemons/pokemonsActions";
import { selectPokemon } from "../../store/pokemons/pokemonsSelectors";

import "./Pokemon.scss";

const Pokemon = () => {
  const pokemonObj = useSelector(selectPokemon);
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState(pokemonObj);

  useEffect(() => {
    setPokemon(pokemonObj)
  }, [pokemonObj]);
};

export default Pokemon;
