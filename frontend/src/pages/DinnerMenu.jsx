import "./DinnerMenu.css";

const DinnerMenu = () => {
  return (
    <div className="dinner-menu-container">
      <div className="menu-section menu-starters">
        <h2 className="menu-section-title">Starters</h2>
        <ul className="menu-items-list">
          <li className="menu-item">
            <h3 className="menu-item-name">Charred Brussels Sprouts</h3>
            <p className="menu-item-description">
              Lightly charred Brussels sprouts with honey-balsamic glaze,
              toasted almonds, and a sprinkle of shaved Parmesan.
            </p>
            <span className="menu-item-price">$8</span>
          </li>
          <li className="menu-item">
            <h3 className="menu-item-name">Avocado Smash on Sourdough</h3>
            <p className="menu-item-description">
              Creamy avocado spread on toasted sourdough with radish,
              microgreens, and a drizzle of lemon-chili oil.
            </p>
            <span className="menu-item-price">$9</span>
          </li>
          <li className="menu-item">
            <h3 className="menu-item-name">Crispy Calamari</h3>
            <p className="menu-item-description">
              Tender calamari rings in a light tempura batter served with
              house-made garlic aioli and a tangy marinara dipping sauce.
            </p>
            <span className="menu-item-price">$11</span>
          </li>
        </ul>
      </div>
      <div className="menu-section menu-mains">
        <h2 className="menu-section-title">Mains</h2>
        <ul className="menu-items-list">
          <li className="menu-item">
            <h3 className="menu-item-name">Herb-Crusted Chicken Breast</h3>
            <p className="menu-item-description">
              Juicy chicken breast with a fresh herb crust, served on a bed of
              creamy mashed potatoes, roasted heirloom carrots, and a
              thyme-infused jus.
            </p>
            <span className="menu-item-price">$16</span>
          </li>
          <li className="menu-item">
            <h3 className="menu-item-name">Seared Atlantic Salmon</h3>
            <p className="menu-item-description">
              Pan-seared salmon filet with a citrus beurre blanc, served with
              garlic-sautéed spinach and wild rice pilaf.
            </p>
            <span className="menu-item-price">$18</span>
          </li>
          <li className="menu-item">
            <h3 className="menu-item-name">Truffle Mushroom Risotto</h3>
            <p className="menu-item-description">
              Arborio rice slow-cooked with cremini and shiitake mushrooms,
              white truffle oil, and finished with Parmesan and a hint of black
              pepper.
            </p>
            <span className="menu-item-price">$15</span>
          </li>
          <li className="menu-item">
            <h3 className="menu-item-name">Bistro Burger</h3>
            <p className="menu-item-description">
              House-ground beef patty topped with smoked gouda, caramelized
              onions, tomato, arugula, and garlic aioli on a toasted brioche
              bun. Served with hand-cut truffle fries.
            </p>
            <span className="menu-item-price">$14</span>
          </li>
        </ul>
      </div>
      <div className="menu-section menu-desserts">
        <h2 className="menu-section-title">Desserts</h2>
        <ul className="menu-items-list">
          <li className="menu-item">
            <h3 className="menu-item-name">Lemon Curd Tart</h3>
            <p className="menu-item-description">
              Buttery shortcrust pastry filled with zesty lemon curd and topped
              with a dollop of torched meringue.
            </p>
            <span className="menu-item-price">$7</span>
          </li>
          <li className="menu-item">
            <h3 className="menu-item-name">Chocolate Fondant</h3>
            <p className="menu-item-description">
              Rich, warm chocolate cake with a molten center, served with a
              scoop of vanilla bean gelato and a raspberry coulis drizzle.
            </p>
            <span className="menu-item-price">$8</span>
          </li>
          <li className="menu-item">
            <h3 className="menu-item-name">Affogato</h3>
            <p className="menu-item-description">
              A scoop of creamy vanilla gelato "drowned" in a shot of freshly
              brewed espresso, garnished with crushed hazelnuts.
            </p>
            <span className="menu-item-price">$6</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DinnerMenu;
