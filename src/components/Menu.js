import React from "react";

export default function Menu(props) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const openMenu = () => setMenuOpen((prevState) => !prevState);

  const menuButton = () => props.setHaveCoords((prevState) => !prevState);

  return (
    <>
      <div>
        <img
          className="menu-icon"
          src={require(`../images/${menuOpen ? `close.png` : `menu.png`}`)}
          alt="menu"
          onClick={openMenu}
        />
        <ul className={`menu-list ${menuOpen ? `active` : null}`}>
          <li className="menu-list-items">
            <button className="menu-button" onClick={menuButton}>
              Change weather location
            </button>
          </li>
          <li className="menu-list-items">Location: {props.currentLocation}</li>
        </ul>
      </div>
    </>
  );
}
