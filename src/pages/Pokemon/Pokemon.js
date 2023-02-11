import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import PokemonPageAbilities from "../../components/PokemonPageAbilities/PokemonPageAbilities";
import PokemonPageStats from "../../components/PokemonPageStats/PokemonPageStats";
import PokemonPageTraits from "../../components/PokemonPageTraits/PokemonPageTraits";
import PokemonPageTypes from "../../components/PokemonPageTypes/PokemonPageTypes";
import { fetchPokemonAsync } from "../../store/pokemons/pokemonsActions";
import {
  selectPokemon,
  selectPokemonUrl,
} from "../../store/pokemons/pokemonsSelectors";

import "./Pokemon.scss";

const Pokemon = () => {
  const { pokemon: name } = useParams();
  const location = useLocation();
  const offset = location.state.itemOffset;
  const pokemonObj = useSelector(selectPokemon);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(pokemonObj);
  const url = useSelector((state) => selectPokemonUrl(state, name));

  useEffect(() => {
    dispatch(fetchPokemonAsync(url));
  }, [dispatch, url]);

  useEffect(() => {
    setPokemon(pokemonObj);
  }, [pokemonObj]);

  const handleBackClick = () => {
    navigate("/pokemons", {
      state: {
        itemOffset: offset,
      },
    });
  };

  return (
    <div className="pokemon-details_page">
      <CustomButton classes='pokemon-page_back-btn' onClick={handleBackClick}>Back</CustomButton>
      {pokemon && (
        <div className="pokemon_card">
          <img
            className="pokemon-page_sprite"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <span className="pokemon-page_name">
            {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
          </span>
          <PokemonPageTypes pokemon={pokemon} />
          <PokemonPageAbilities pokemon={pokemon} />
          <PokemonPageTraits pokemon={pokemon} />
          <PokemonPageStats pokemon={pokemon} />
        </div>
      )}
    </div>
  );
};

export default Pokemon;
