import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="header-section">
        <h2 className="wellcomeText">wellcome to</h2>
        <h1 className="headerText">
          <span className="orange-text-color">DELICIOUS </span>
          FOOD
        </h1>
        <button className="orange-back-color orderFoodButton">
          ORDER FOOD
        </button>
      </div>
    </header>
  );
};

export default Header;
