import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const MenuContext = createContext();

const MenuToggleProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <MenuContext.Provider value={{ menuOpen, setMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

MenuToggleProvider.propTypes = {
  children: PropTypes.node,
};

export default MenuToggleProvider;
