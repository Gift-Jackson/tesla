import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Components/Global/Loader";
import MenuToggleProvider from "./Context/MenuToggleProvider";

// Lazy import components
const Login = lazy(() => import("./Components/Auth/Login"));
const Register = lazy(() => import("./Components/Auth/Register"));
const DashboardLayout = lazy(() => import("./Components/Dashboard/Layout"));
const Dashboard = lazy(() =>
  import("./Components/Dashboard/Screens/Dashboard")
);

const App = () => {
  return (
    <MenuToggleProvider>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="overview" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<h2>Page not ready, I still dey cook!</h2>}  />
        </Routes>
      </Suspense>
    </MenuToggleProvider>
  );
};

export default App;
