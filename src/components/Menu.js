import React from "react";


let flipState = (func) => {
  return func(prevState => !prevState)
}

export default function Menu(props) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <div>
        <img
          className="menu-icon"
          src={require(`../images/${menuOpen ? `close.png` : `menu.png`}`)}
          alt="menu"
          onClick={() => flipState(setMenuOpen)}
        />
        <ul className={`menu-list ${menuOpen && `active`}`}>
          <li className="menu-list-items">
            {props.haveCoords && (
              <button className="menu-button" onClick={() => flipState(props.setHaveCoords)}>
                Change weather location
              </button>
            )}
          </li>
          <li className="menu-list-items">Location: {props.currentLocation}</li>
          <li className="menu-list-items">
            <p>Show Crypto Ticker</p>
            <span
              className="material-symbols-outlined unit-switch"
              onClick={() => flipState(props.setEnableTicker)}
            >
              {props.enableTicker ? "toggle_on" : "toggle_off"}
            </span>
          </li>
          <li className="menu-list-items">
            <p>Weather Unit</p>
            <div className="f-c-switch">
              C
              <span
                className="material-symbols-outlined unit-switch"
                onClick={() => flipState(props.setForC)}
              >
                {props.fOrC ? "toggle_on" : "toggle_off"}
              </span>
              F
            </div>
          </li>
          <li className="menu-list-items">
            <p>Day / Night</p>
            <span
              className="material-symbols-outlined unit-switch"
              onClick={() => flipState(props.setDayOrNight)}
            >
              {props.dayOrNight ? "toggle_on" : "toggle_off"}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
