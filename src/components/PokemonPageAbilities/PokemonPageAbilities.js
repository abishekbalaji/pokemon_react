import "./PokemonPageAbilities.scss";

const PokemonPageAbilities = ({ pokemon }) => {
  return (
    <div className="pokemon-page_abilities-container">
      {pokemon.abilities.map((obj, idx) => (
        <div key={idx} className="pokemon-page_ability-container">
          <span className="pokemon-page_ability-name">{obj.ability.name}</span>
        </div>
      ))}
    </div>
  );
};

export default PokemonPageAbilities;
