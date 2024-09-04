import "./DrinksMenu.css";

const DrinksMenu = () => {
  return (
    <div className="drinks-menu-wrapper">
      <div className="drinks-menu-section drinks-beers-wines">
        <h2 className="drinks-section-title">Beers & Wines</h2>
        <ul className="drinks-items-list">
          <li className="drinks-item">
            <h3 className="drinks-item-name">Local Craft Beer</h3>
            <p className="drinks-item-description">
              A rotating selection of locally brewed craft beers, from IPAs to
              stouts.
            </p>
            <span className="drinks-item-price">$6</span>
          </li>
          <li className="drinks-item">
            <h3 className="drinks-item-name">Chardonnay</h3>
            <p className="drinks-item-description">
              A crisp, dry white wine with notes of apple and citrus.
            </p>
            <span className="drinks-item-price">$8</span>
          </li>
          <li className="drinks-item">
            <h3 className="drinks-item-name">Pinot Noir</h3>
            <p className="drinks-item-description">
              A light-bodied red wine with flavors of cherry and raspberry.
            </p>
            <span className="drinks-item-price">$9</span>
          </li>
        </ul>
      </div>
      <div className="drinks-menu-section drinks-liquors">
        <h2 className="drinks-section-title">Liquors</h2>
        <ul className="drinks-items-list">
          <li className="drinks-item">
            <h3 className="drinks-item-name">Single Malt Scotch</h3>
            <p className="drinks-item-description">
              Aged 12 years, with a smooth finish and hints of oak and vanilla.
            </p>
            <span className="drinks-item-price">$15</span>
          </li>
          <li className="drinks-item">
            <h3 className="drinks-item-name">Premium Tequila</h3>
            <p className="drinks-item-description">
              100% agave, reposado tequila with notes of caramel and vanilla.
            </p>
            <span className="drinks-item-price">$14</span>
          </li>
          <li className="drinks-item">
            <h3 className="drinks-item-name">Bourbon Whiskey</h3>
            <p className="drinks-item-description">
              Aged bourbon with a rich, deep flavor and hints of toffee and
              cinnamon.
            </p>
            <span className="drinks-item-price">$12</span>
          </li>
          <li className="drinks-item">
            <h3 className="drinks-item-name">Gin & Tonic</h3>
            <p className="drinks-item-description">
              Premium gin served with tonic water and a slice of lime.
            </p>
            <span className="drinks-item-price">$10</span>
          </li>
        </ul>
      </div>
      <div className="drinks-menu-section drinks-non-alcoholic">
        <h2 className="drinks-section-title">Non-Alcoholic Beverages</h2>
        <ul className="drinks-items-list">
          <li className="drinks-item">
            <h3 className="drinks-item-name">Fresh Lemonade</h3>
            <p className="drinks-item-description">
              House-made lemonade with a hint of mint and a splash of sparkling
              water.
            </p>
            <span className="drinks-item-price">$5</span>
          </li>
          <li className="drinks-item">
            <h3 className="drinks-item-name">Sparkling Water</h3>
            <p className="drinks-item-description">
              Chilled sparkling water with a choice of lemon or lime.
            </p>
            <span className="drinks-item-price">$4</span>
          </li>
          <li className="drinks-item">
            <h3 className="drinks-item-name">Iced Tea</h3>
            <p className="drinks-item-description">
              Refreshing black tea served over ice with a slice of lemon.
            </p>
            <span className="drinks-item-price">$3</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DrinksMenu;
