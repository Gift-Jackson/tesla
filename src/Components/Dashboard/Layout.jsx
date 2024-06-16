import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import "./Styles/main.css"

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="body-container">
        <Outlet/>
      </div>
    </div>
  )
}

export default DashboardLayout