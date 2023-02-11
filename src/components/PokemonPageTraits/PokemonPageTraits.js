import "./PokemonPageTraits.scss";

const PokemonPageTraits = ({ pokemon }) => {
  return (
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
  );
};

export default PokemonPageTraits;
