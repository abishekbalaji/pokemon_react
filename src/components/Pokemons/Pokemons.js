import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchPokemonsAsync } from "../../store/pokemons/pokemonsActions";

import PokemonsPreview from "../../pages/PokemonsPreview/PokemonsPreview";
import Pokemon from "../../pages/Pokemon/Pokemon";

import "./Pokemons.scss";
// import { selectPage } from "../../store/pokemons/pokemonsSelectors";

const Pokemons = () => {
  const dispatch = useDispatch();
  // const page = useSelector(selectPage);
  useEffect(() => {
    const interval = {
      limit: 1271,
      offset: 0 * 1000,
    };
    dispatch(fetchPokemonsAsync(interval));
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<PokemonsPreview />} />
      <Route path=":pokemon" element={<Pokemon />} />
    </Routes>
  );
};

export default Pokemons;
