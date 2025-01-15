import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Notfound from "../pages/Notfound/Notfound";
import { useSelector } from "react-redux";
import LogineRagister from "../pages/LogineRegister/LogineRagister";
import AddToCartPage from "../pages/AddToCard/AddToCartPage ";
import Cashout from "../pages/CashOut";
import Dashboard from "../pages/AdminDashboard/AdminDashboard";
import LoginPage from "../pages/LogineRegister/AdminLogine";

const Approutes = () => {
  const { isAuthenticated } = useSelector((state) => state.Auth);
  const { adminAuthenticated } = useSelector((state) => state.Admin);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/logine"
          element={isAuthenticated ? <Navigate to={"/"} /> : <LogineRagister />}
        />
        <Route
          path="/admin-logine"
          element={
            adminAuthenticated ? <Navigate to={"/dashboard"} /> : <LoginPage />
          }
        />
        <Route
          path="/card"
          element={
            isAuthenticated ? <AddToCartPage /> : <Navigate to={"/logine"} />
          }
        />
        <Route
          path="/cashout"
          element={isAuthenticated ? <Cashout /> : <Navigate to={"/logine"} />}
        />
        <Route path="*" element={<Notfound />} />
        <Route
          path="/dashboard"
          element={
            adminAuthenticated ? (
              <Dashboard />
            ) : (
              <Navigate to={"/admin-logine"} />
            )
          }
        />
      </Routes>
    </>
  );
};

export default Approutes;
