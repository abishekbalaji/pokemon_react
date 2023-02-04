import { Link, Outlet } from "react-router-dom";

import "./Navigation.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation_container">
        <Link className="nav_links" to="/">
          Pokemon
        </Link>
        <div className="navigation_center-container">
          <Link className="nav_links" to="/pokemons">
            Pokemons
          </Link>
          <Link className="nav_links" to="/berries">
            Berries
          </Link>
          <Link className="nav_links" to="/held-items">
            Held Items
          </Link>
        </div>
        <Link className="nav_links" to="/auth">
          Sign In
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
