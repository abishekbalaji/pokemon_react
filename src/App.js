import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Authentication from "./pages/Authentication/Authentication";
import Berries from "./pages/Berries/Berries";
import HeldItems from "./pages/HeldItems/HeldItems";
import Home from "./pages/Home/Home";
import Pokemons from "./pages/Pokemons/Pokemons";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="pokemons" element={<Pokemons />} />
        <Route path="berries" element={<Berries />} />
        <Route path="held-items" element={<HeldItems />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
