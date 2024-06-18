import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Components/Global/Loader";
import MenuToggleProvider from "./Context/MenuToggleProvider";

// Lazy import components
const Login = lazy(() => import("./Components/Auth/Login"));
const Register = lazy(() => import("./Components/Auth/Register"));
const DashboardLayout = lazy(() => import("./Components/Dashboard/Layout"));
const Dashboard = lazy(() => import("./Components/Dashboard/Screens/Dashboard"));
const Packages = lazy(() => import("./Components/Dashboard/Screens/Packages"));
const Transactions = lazy(() => import("./Components/Dashboard/Screens/TransactionsPage"))
const Referrals = lazy(() => import("./Components/Dashboard/Screens/Referrals"))
const Settings = lazy(() => import("./Components/Dashboard/Screens/Settings"));

const App = () => {
  return (
    <MenuToggleProvider>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="overview" element={<Dashboard />} />
            <Route path="packages" element={<Packages />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="referrals" element={<Referrals />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<h2>Page not ready, I still dey cook!</h2>}  />
        </Routes>
      </Suspense>
    </MenuToggleProvider>
  );
};

export default App;
