import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import ProductsByCategory from "./pages/products/ProductsByCategory";
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
        {/* Toast notifications */}
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          pauseOnFocusLoss
          closeButton={false}
          toastClassName={() =>
            "relative min-h-[38px] h-auto mb-4 mt-3 px-3 py-3 flex items-center rounded-md text-sm font-medium shadow-lg bg-white text-black border border-slate-200 dark:bg-[#1e293b] dark:text-sky-100 dark:border-slate-700 overflow-hidden"
          }
          progressClassName="bg-sky-500 dark:bg-sky-400 h-1 rounded-full absolute bottom-0 left-2 right-2"
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
