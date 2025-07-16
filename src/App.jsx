import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import ProductsByCategory from "./pages/Products/ProductsByCategory";
import ScrollToTop from "./components/ScrollToTop";
import ProductDetails from "./pages/products/ProductDetails";
import ProductsBySearch from "./pages/products/ProductsBySearch";
import { ToastContainer } from "react-toastify";

function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [modes, setModes] = useState(localStorage.getItem("Mode") || "light");

  useEffect(() => {
    if (modes === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    localStorage.setItem("Mode", modes);
  }, [modes]);

  return (
    <div className="bg-slate-200 dark:bg-gray-900">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar
          setIsOpenSidebar={setIsOpenSidebar}
          modes={modes}
          setModes={setModes}
        />
        <Sidebar
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path={"/products/category/:category_name"}
            element={<ProductsByCategory />}
          />
          <Route
            path={"/products/search/:search_text"}
            element={<ProductsBySearch />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      </BrowserRouter>
    </div>
  );
}

export default App;
