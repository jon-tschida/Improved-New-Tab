import React from "react";

export default function Menu(props) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const openMenu = () => setMenuOpen((prevState) => !prevState);

  const menuButton = () => props.setHaveCoords((prevState) => !prevState);

  const showCryptoTickerButton = () =>
    props.setEnableTicker((prevState) => !prevState);

  return (
    <>
      <div>
        <img
          className="menu-icon"
          src={require(`../images/${menuOpen ? `close.png` : `menu.png`}`)}
          alt="menu"
          onClick={openMenu}
        />
        <ul className={`menu-list ${menuOpen && `active`}`}>
          <li className="menu-list-items">
            {props.haveCoords && (
              <button className="menu-button" onClick={menuButton}>
                Change weather location
              </button>
            )}
          </li>
          <li className="menu-list-items">Location: {props.currentLocation}</li>
          <li className="menu-list-items">
            <p>Show Crypto Ticker</p>
            <span
              className="material-symbols-outlined unit-switch"
              onClick={showCryptoTickerButton}
            >
              {props.enableTicker ? "toggle_on" : "toggle_off"}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
