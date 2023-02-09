import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPokemonAsync } from "../../store/pokemons/pokemonsActions";
import {
  selectPokemon,
  selectPokemonUrl,
} from "../../store/pokemons/pokemonsSelectors";

import pokemonTypeColors from "../../utils/helpers/pokemonTypeColors";

import "./Pokemon.scss";

const Pokemon = () => {
  const { pokemon: name } = useParams();
  console.log(name);
  const pokemonObj = useSelector(selectPokemon);

  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState(pokemonObj);
  const url = useSelector((state) => selectPokemonUrl(state, name));
  console.log(pokemon);

  useEffect(() => {
    dispatch(fetchPokemonAsync(url));
  }, [dispatch, url]);

  useEffect(() => {
    setPokemon(pokemonObj);
  }, [pokemonObj]);
  return (
    <div className="pokemon-details_page">
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
          <div className="pokemon-page_types-container">
            {pokemon.types.map((obj, idx) => {
              const type = obj.type.name;
              const imgUrl = require(`/src/assets/pokemonTypes/${type}.svg`);
              return (
                <div
                  key={idx}
                  className="pokemon-page_type-container"
                  style={{
                    backgroundColor: pokemonTypeColors[type],
                  }}
                >
                  <img
                    className="pokemon-page_type-img"
                    height={16}
                    width={16}
                    src={imgUrl}
                    alt={type}
                  />{" "}
                  <span className="pokemon-page_type-name" key={obj.type.slot}>
                    {type}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="pokemon-page_ability-container">
            {pokemon.abilities.map((obj, idx) => (
              <span className="pokemon-page_ability-name" key={idx}>
                {obj.ability.name}
              </span>
            ))}
          </div>
          <div className="pokemon-page_trait-container">
            <span className="pokemon-page_height">
              Height:{" "}
              <span className="pokemon-page_height-value">
                {pokemon.height / 10} m
              </span>
            </span>
            <span className="pokemon-page_weight">
              Weight:{" "}
              <span className="pokemon-page_weight-value">
                {pokemon.weight / 10} kg
              </span>
            </span>
          </div>
          <div className="pokemon-page_stats-container">
            {pokemon.stats.map((stat) => (
              <div className="pokemon-page_stats-stat-container">
                <span className="pokemon-page_stats-stat-name">
                  {stat.stat.name}
                </span>
                <span className="pokemon-page_stats-stat-value">
                  {stat.base_stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
