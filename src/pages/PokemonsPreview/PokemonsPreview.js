import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsPokemonsLoading,
  selectPage,
  selectPokemons,
} from "../../store/pokemons/pokemonsSelectors";

import Spinner from "../../components/Spinner/Spinner";

import "./PokemonsPreview.scss";
import CustomButton from "../../components/CustomButton/CustomButton";
import { setPage } from "../../store/pokemons/pokemonsActions";

const Pokemons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pokemonsArray = useSelector(selectPokemons);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsPokemonsLoading);
  const [pokemons, setPokemons] = useState(pokemonsArray);
  console.log(pokemons)

  useEffect(() => {
    setPokemons(pokemonsArray);
  }, [pokemonsArray]);

  const handleInfoClick = (name) => {
    navigate(`${name}`);
  };

  const handleNextClick = () => {
    dispatch(setPage(page + 1));
  };

  const handlePrevClick = () => {
    dispatch(setPage(page - 1));
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="pokemons_page">
          <div className="pokemons_page_container">
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
          <div className="next-prev_container">
            <CustomButton
              disabled={page === 0}
              onClick={handlePrevClick}
              classes="prev-next-btn"
            >
              &lt; Prev
            </CustomButton>
            <CustomButton
              disabled={pokemons.length < 20}
              onClick={handleNextClick}
              classes="prev-next-btn"
            >
              Next &gt;
            </CustomButton>
          </div>
        </div>
      )}
    </>
  );
};

export default Pokemons;
