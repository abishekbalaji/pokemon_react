import { Route, Routes } from "react-router-dom";
import PokemonsPreview from "../../pages/PokemonsPreview/PokemonsPreview";
import Pokemon from "../../pages/Pokemon/Pokemon";

import "./Pokemons.scss";

const Pokemons = () => {
  return (
    <Routes>
      <Route index element={<PokemonsPreview />} />
      <Route path=":pokemon" element={<Pokemon />} />
    </Routes>
  );
};

export default Pokemons;
