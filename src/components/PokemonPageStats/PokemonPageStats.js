import "./PokemonPageStats.scss";

const PokemonPageStats = ({ pokemon }) => {
  return (
    <div className="pokemon-page_stats-container">
      {pokemon.stats.map((stat) => (
        <div className="pokemon-page_stats-stat-container">
          <span className="pokemon-page_stats-stat-name">{stat.stat.name}</span>
          <span className="pokemon-page_stats-stat-value">
            {stat.base_stat}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PokemonPageStats;
