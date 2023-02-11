import "./PokemonPageTypes.scss";
import pokemonTypeColors from "../../utils/helpers/pokemonTypeColors";

const PokemonPageTypes = ({ pokemon }) => {
  return (
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
  );
};

export default PokemonPageTypes;
