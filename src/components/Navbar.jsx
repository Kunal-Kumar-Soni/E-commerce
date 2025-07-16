import { CircleUserRound, Menu, ShoppingCart } from "lucide-react";
import { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar({ setIsOpenSidebar, modes, setModes }) {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigate();
  const totalQuantity = useSelector((state) => state.cartReducer.totalQuantity);
  const toastShowRef = useRef(false);

  const handleDarkMode = () => {
    setModes((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigation(`/products/search/${searchText}`);
    setTimeout(() => {
      document.activeElement.blur();
    }, 0);
  };

  const handleCart = () => {
    navigation("/cart");
  };

  const handleLogin = () => {
    if (toastShowRef.current) return;

    toastShowRef.current = true;
    toast.info("This feature is not available yet", {
      onClose: () => {
        toastShowRef.current = false;
      },
    });
  };

  return (
    <header className="bg-white dark:bg-gray-900 w-full text-black dark:text-white">
      <div className="shadow-[0_1px_1px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_4px_rgba(255,255,255,0.05)] mx-auto px-4 w-full max-w-screen-2xl">
        {/* Top-bar */}
        <div className="flex justify-between items-center bg-white dark:bg-gray-900 shadow-[0_1px_1px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_1px_rgba(255,255,255,0.05)] mb-2 py-2 text-md">
          {/* Left Section */}
          <div className="flex sm:flex-row flex-col items-center sm:divide-x divide-y sm:divide-y-0 divide-black/20 dark:divide-gray-600">
            <Menu
              onClick={() => setIsOpenSidebar(true)}
              className="w-7 h-7 text-black dark:text-gray-200 cursor-pointer"
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center divide-x divide-black/20 dark:divide-gray-600">
            <button
              onClick={handleLogin}
              className="flex gap-1 pr-2 cursor-pointer"
            >
              <CircleUserRound /> Login
            </button>
            <button
              onClick={handleDarkMode}
              className="px-4 text-xl cursor-pointer"
            >
              {modes === "dark" ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </div>
        </div>

        {/* Middle Navbar */}
        <div className="flex justify-between items-center bg-white dark:bg-gray-900 py-3">
          {/* Left Logo */}

          <div
            onClick={() => navigation("/")}
            className="flex items-center gap-0.5 cursor-pointer"
          >
            <img
              src="/images/shopping-bag-logo.png"
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="font-bold text-black dark:text-gray-200 text-2xl">
              ShopKaro
            </span>
          </div>

          {/* Center - Search Bar */}
          <form
            onSubmit={handleSearch}
            className="hidden md:block flex-1 mx-4 max-w-6xl"
          >
            <div className="relative">
              <button
                onClick={handleSearch}
                className="top-1/2 right-3 absolute hover:bg-sky-100 dark:hover:bg-gray-700 p-1 rounded-full text-gray-400 hover:text-yellow-500 dark:hover:text-white transition-all -translate-y-1/2 duration-200 cursor-pointer"
              >
                <IoSearch size={20} />
              </button>
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search for products, brand and more"
                className="bg-white dark:bg-gray-800 py-3 pr-10 pl-4 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none w-full text-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
          </form>

          {/* Right - Cart Icon */}
          <button onClick={handleCart} className="relative mr-2 cursor-pointer">
            <ShoppingCart className="w-6 h-6 text-black dark:text-gray-200" />
            <span className="-top-2 -right-2 absolute flex justify-center items-center bg-yellow-500 rounded-full w-5 h-5 font-bold text-white dark:text-gray-900 text-xs">
              {totalQuantity}
            </span>
          </button>
        </div>

        {/* Center - Search Bar */}
        <form onSubmit={handleSearch} className="md:hidden pb-3">
          <div className="relative">
            <button
              onClick={handleSearch}
              className="top-1/2 right-3 absolute p-1 rounded-full text-gray-400 transition-all -translate-y-1/2 duration-200 cursor-pointer"
            >
              <IoSearch size={20} />
            </button>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search for products, brand and more"
              className="bg-white dark:bg-gray-800 py-2 pr-10 pl-4 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none w-full text-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
        </form>
      </div>
    </header>
  );
}

export default Navbar;
