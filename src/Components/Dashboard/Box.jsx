import PropTypes from "prop-types"
import "./Styles/box.css"
const Box = ({children, title, subtitle}) => {
  return (
      <div className="main-box">
          <div className="main-box-heading">
              <h3>{title} </h3>
              <p>{subtitle} </p>
          </div>
          <div className="main-box-content">
              {children}
          </div>
    </div>
  )
  
}

Box.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}
    

export default Box