import { useContext } from "react";
import { MenuContext } from "../../Context/MenuToggleProvider";
import Brand from "../Global/Brand";
import "./Styles/header.css"
const Header = () => {
  const {toggleMenu}= useContext(MenuContext)
  return (
    <header>
      <Brand size={25} />

      <div className="header-right">
        {/* <div className="theme header-btn">
          <span className="material-symbols-rounded">light_mode</span>
        </div> */}
        <div className="profile">
          <div className="initial header-btn">G</div>
          <p className="name">Gift Jackson</p>
        </div>
        <div className="menu header-btn" onClick={toggleMenu}>
          <span className="material-symbols-rounded">menu</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
