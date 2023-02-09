import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectIsPokemonsLoading,
  selectPokemons,
} from "../../store/pokemons/pokemonsSelectors";
import Spinner from "../../components/Spinner/Spinner";

import "./PokemonsPreview.scss";

const Pokemons = () => {
  const navigate = useNavigate();
  const pokemonsArray = useSelector(selectPokemons);
  const isLoading = useSelector(selectIsPokemonsLoading);
  const [pokemons, setPokemons] = useState(pokemonsArray);

  useEffect(() => {
    setPokemons(pokemonsArray);
  }, [pokemonsArray]);

  const handleInfoClick = (name) => {
    navigate(`${name}`);
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="pokemons_page">
          {pokemons &&
            pokemons.map((pokemon) => (
              <div className="pokemons-page_pokemon-container">
                <span className="pokemons-page_pokemon-page">
                  {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                </span>
                <span
                  className="pokemons_page_info-span"
                  onClick={() => handleInfoClick(pokemon.name)}
                >
                  Info
                </span>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Pokemons;
