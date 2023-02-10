import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import pokeball from "../../assets/pokeball.png";
import pokedex from "../../assets/pokedex.png";

import CustomButton from "../CustomButton/CustomButton";

import "./Navigation.scss";

const Navigation = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownVisibleClick = () => {
    setDropdownVisible(true);
  };

  const handleDropdownInvisibleClick = () => {
    setDropdownVisible(false);
  };

  return (
    <>
      <div className="navigation_container">
        <Link style={{ margin: 0 }} className="nav_links" to="/">
          <img height={30} width={30} src={pokedex} alt="logo" />
        </Link>
        <CustomButton
          onClick={handleDropdownVisibleClick}
          classes={`navigation_nav-links-dropdown-open-btn ${
            dropdownVisible ? "invisible" : "visible"
          }`}
        >
          <img width={25} height={25} src={pokeball} alt="pokeball" />
        </CustomButton>
        <div
          className={`navigation_navlinks-container ${
            dropdownVisible ? "visible" : "invisible"
          }`}
        >
          <Link
            onClick={() => setDropdownVisible(false)}
            className="nav_links"
            to="/"
          >
            Home
          </Link>
          <div className="navigation_center-container">
            <Link
              onClick={() => setDropdownVisible(false)}
              className="nav_links"
              to="/pokemons"
            >
              Pokemons
            </Link>
            <Link
              onClick={() => setDropdownVisible(false)}
              className="nav_links"
              to="/berries"
            >
              Berries
            </Link>
            <Link
              onClick={() => setDropdownVisible(false)}
              className="nav_links"
              to="/held-items"
            >
              Held Items
            </Link>
          </div>
          <Link
            onClick={() => setDropdownVisible(false)}
            className="nav_links"
            to="/auth"
          >
            Sign In
          </Link>
          <CustomButton
            onClick={handleDropdownInvisibleClick}
            classes={`navigation_nav-links-dropdown-close-btn ${
              dropdownVisible ? "visible" : "invisible"
            }`}
          >
            X
          </CustomButton>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
