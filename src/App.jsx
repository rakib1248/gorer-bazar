import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Approutes from "./routes/Approutes";
import API from "./utils/api";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { allProductLoad } from "./app/features/Product/ProductApiSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProductLoad());
  }, [dispatch]);
  const relodeapi = async () => {
    await API.get("/admin");
  };
  setInterval(() => {
    relodeapi();
  }, 30000);
  return (
    <>
      <Router>
        <Header />
        <Approutes />
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
