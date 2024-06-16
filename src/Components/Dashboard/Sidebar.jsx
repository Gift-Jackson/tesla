import { useContext } from "react"
import { MenuContext } from "../../Context/MenuToggleProvider"
import { NavLink } from "react-router-dom"
import { sidenav } from "../../Constants/data"
import "./Styles/sidebar.css"
const Sidebar = () => {
  const {menuOpen, toggleMenu} = useContext(MenuContext)
  return (
    <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
      <div className="overlay"  onClick={toggleMenu}></div>
      <div className="close-btn" onClick={toggleMenu}>
      <span className="material-symbols-rounded">close</span>
      </div>
      <ul>
        {sidenav.map((item, index) => (
          <li key={index}>
            <NavLink className="nav-link" to={item.path}>
              <div className="icon">
                <span className="material-symbols-rounded">{item.icon}</span>
              </div>
              <span className="sidebar-label">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar