import { motion, AnimatePresence } from "framer-motion";
import categories from "../data/categories.json";
import { NavLink } from "react-router-dom";

function Sidebar({ isOpenSidebar, setIsOpenSidebar }) {
  return (
    <AnimatePresence>
      {isOpenSidebar && (
        <>
          {/* Overlay with backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpenSidebar(false)}
            className="z-40 fixed inset-0 bg-black/30 backdrop-blur-sm"
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="top-0 left-0 z-50 fixed bg-white/80 dark:bg-gradient-to-b dark:from-[#1e293b]/80 dark:to-[#334155]/90 shadow-[0_3px_8px_rgba(0,0,0,0.24)] dark:shadow-[0_2px_10px_rgba(148,163,184,0.15)] backdrop-blur-md w-64 md:w-72 h-full overflow-y-auto transition-colors duration-300"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-4 border-gray-200 dark:border-slate-700 border-b">
              <h2 className="font-bold text-black dark:text-white text-lg">
                ALL CATEGORIES
              </h2>
              <button
                onClick={() => setIsOpenSidebar(false)}
                className="font-bold text-gray-600 hover:text-red-500 dark:hover:text-red-400 dark:text-slate-300 text-2xl cursor-pointer"
              >
                ×
              </button>
            </div>

            {/* Category List */}
            <ul className="flex flex-col px-4 py-2 font-medium text-gray-800 text-md dark:text-slate-200">
              {categories.map((category, index) => (
                <NavLink
                  key={index}
                  to={`/products/category/${category}`}
                  onClick={() => setIsOpenSidebar(false)}
                  className={({ isActive }) =>
                    `cursor-pointer py-2 border-b border-gray-100 dark:border-slate-600 transition-all ${
                      isActive
                        ? "text-sky-500  font-semibold"
                        : "hover:text-sky-500 "
                    }`
                  }
                >
                  {category.split("-").join(" ").toUpperCase()}
                </NavLink>
              ))}
            </ul>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
