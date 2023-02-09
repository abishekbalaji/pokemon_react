import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchPokemonsAsync } from "../../store/pokemons/pokemonsActions";

import PokemonsPreview from "../../pages/PokemonsPreview/PokemonsPreview";
import Pokemon from "../../pages/Pokemon/Pokemon";

import "./Pokemons.scss";

const Pokemons = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = {
      limit: 20,
      offset: 0,
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
