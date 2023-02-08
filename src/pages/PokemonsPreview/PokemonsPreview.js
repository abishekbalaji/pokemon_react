import { useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";
import "./PokemonsPreview.scss";
import {
  fetchPokemonAsync,
  fetchPokemonsAsync,
} from "../../store/pokemons/pokemonsActions";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsPokemonsLoading,
  selectPokemons,
} from "../../store/pokemons/pokemonsSelectors";
import Spinner from "../../components/Spinner/Spinner";

const Pokemons = () => {
  const dispatch = useDispatch();
  const pokemonsArray = useSelector(selectPokemons);
  const isLoading = useSelector(selectIsPokemonsLoading);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(pokemonsArray);
  }, [pokemonsArray]);

  useEffect(() => {
    const interval = {
      limit: 20,
      offset: 0,
    };
    dispatch(fetchPokemonsAsync(interval));
  }, [dispatch]);

  // const handleInfoClick = (url) => {};
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="pokemons_page">
          {pokemons.length &&
            pokemons.map((pokemon) => (
              <div className="pokemons-page_pokemon-container">
                <span className="pokemons-page_pokemon-page">
                  {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                </span>
                <span
                  className="pokemons_page_info-span"
                  onClick={() => dispatch(fetchPokemonAsync(pokemon.url))}
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
