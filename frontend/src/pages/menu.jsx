import React, { useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import DinnerMenu from "./DinnerMenu";
import CocktailsMenu from "./CocktailsMenu";
import DrinksMenu from "./DrinksMenu";
import "./Menu.css";

const Menu = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("dinner");

  // List of tabs with label and link
  const tabLabel = [
    {
      index: 1,
      label: "Dinner",
      link: "dinner",
    },
    {
      index: 2,
      label: "Cocktails",
      link: "cocktails",
    },
    {
      index: 3,
      label: "Drinks",
      link: "drinks",
    },
  ];

  return (
    <div className="menu-container">
      <div className="dinner-tabs">
        <nav className="menu-tabs-nav">
          {tabLabel.map((tab) => (
            <Link
              to={tab.link}
              key={tab.index}
              className={`menu-nav-button ${
                activeTab === tab.link ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.link)} // Set active tab on click
            >
              {tab.label}
            </Link>
          ))}
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
