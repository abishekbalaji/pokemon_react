import { useNavigate } from "react-router-dom";
import "./PokemonsPreviewContent.scss";

const PokemonsPreviewContent = ({ pokemons, page }) => {
  const navigate = useNavigate();
  const handleInfoClick = (name) => {
    navigate(`${name}`, { state: { itemOffset: page } });
  };
  return (
    <div className="pokemons_page">
      <div className="pokemons_page_container">
        {pokemons &&
          pokemons.map((pokemon) => (
            <div className="pokemons-page_pokemon-container">
              <span className="pokemons-page_pokemon-name">
                {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
              </span>
              <span
                title={`Pokedex info on ${
                  pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
                }`}
                className="pokemons_page_info-span"
                onClick={() => handleInfoClick(pokemon.name)}
              >
                Info
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PokemonsPreviewContent;
