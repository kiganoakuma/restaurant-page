import "./CocktailMenu.css";

const CocktailsMenu = () => {
  return (
    <div className="cocktail-menu-wrapper">
      <div className="cocktail-menu-section cocktail-specials">
        <h2 className="cocktail-section-title">Cocktail Specials</h2>
        <ul className="cocktail-items-list">
          <li className="cocktail-item">
            <h3 className="cocktail-item-name">Mango Mojito</h3>
            <p className="cocktail-item-description">
              Fresh mint, lime juice, mango puree, white rum, and soda water
              served over crushed ice.
            </p>
            <span className="cocktail-item-price">$10</span>
          </li>
          <li className="cocktail-item">
            <h3 className="cocktail-item-name">Classic Margarita</h3>
            <p className="cocktail-item-description">
              Tequila, triple sec, fresh lime juice, and a salted rim, served on
              the rocks.
            </p>
            <span className="cocktail-item-price">$12</span>
          </li>
          <li className="cocktail-item">
            <h3 className="cocktail-item-name">Espresso Martini</h3>
            <p className="cocktail-item-description">
              Vodka, coffee liqueur, fresh espresso, and a touch of vanilla
              syrup, shaken to perfection.
            </p>
            <span className="cocktail-item-price">$13</span>
          </li>
        </ul>
      </div>
      <div className="cocktail-menu-section cocktail-classics">
        <h2 className="cocktail-section-title">Classic Cocktails</h2>
        <ul className="cocktail-items-list">
          <li className="cocktail-item">
            <h3 className="cocktail-item-name">Old Fashioned</h3>
            <p className="cocktail-item-description">
              Bourbon, sugar, Angostura bitters, and a twist of orange peel.
            </p>
            <span className="cocktail-item-price">$14</span>
          </li>
          <li className="cocktail-item">
            <h3 className="cocktail-item-name">Negroni</h3>
            <p className="cocktail-item-description">
              Gin, Campari, and sweet vermouth, garnished with an orange peel.
            </p>
            <span className="cocktail-item-price">$15</span>
          </li>
          <li className="cocktail-item">
            <h3 className="cocktail-item-name">Whiskey Sour</h3>
            <p className="cocktail-item-description">
              Whiskey, fresh lemon juice, simple syrup, and a dash of bitters,
              garnished with a cherry.
            </p>
            <span className="cocktail-item-price">$13</span>
          </li>
          <li className="cocktail-item">
            <h3 className="cocktail-item-name">Moscow Mule</h3>
            <p className="cocktail-item-description">
              Vodka, ginger beer, and fresh lime juice served in a copper mug.
            </p>
            <span className="cocktail-item-price">$12</span>
          </li>
        </ul>
      </div>
      <div className="cocktail-menu-section cocktail-desserts">
        <h2 className="cocktail-section-title">Dessert Cocktails</h2>
        <ul className="cocktail-items-list">
          <li className="cocktail-item">
            <h3 className="cocktail-item-name">Chocolate Martini</h3>
            <p className="cocktail-item-description">
              Vodka, chocolate liqueur, and cream, shaken and garnished with
              chocolate shavings.
            </p>
            <span className="cocktail-item-price">$11</span>
          </li>
          <li className="cocktail-item">
            <h3 className="cocktail-item-name">Baileys Irish Coffee</h3>
            <p className="cocktail-item-description">
              Freshly brewed coffee, Baileys Irish Cream, and whipped cream.
            </p>
            <span className="cocktail-item-price">$9</span>
          </li>
          <li className="cocktail-item">
            <h3 className="cocktail-item-name">Tiramisu Martini</h3>
            <p className="cocktail-item-description">
              Coffee liqueur, vodka, and mascarpone syrup, topped with cocoa
              powder.
            </p>
            <span className="cocktail-item-price">$12</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CocktailsMenu;
