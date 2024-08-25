import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import DinnerMenu from "./DinnerMenu";
import CocktailsMenu from "./CocktailsMenu";
import DrinksMenu from "./DrinksMenu";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="dinner-tabs">
        <nav className="menu-nav">
          <Link to="dinner" className="nav-button">
            Dinner Menu
          </Link>

          <Link to="cocktails" className="nav-button">
            Cocktails Menu
          </Link>

          <Link to="drinks" className="nav-button">
            Drinks Menu
          </Link>
        </nav>
      </div>
      <div className="menu-content">
        <Routes>
          <Route path="/" element={<Navigate to="dinner" />} />
          <Route path="dinner" element={<DinnerMenu />} />
          <Route path="cocktails" element={<CocktailsMenu />} />
          <Route path="drinks" element={<DrinksMenu />} />
        </Routes>
      </div>
    </div>
  );
};

export default Menu;
