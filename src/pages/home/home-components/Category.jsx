import { useNavigate } from "react-router-dom";
import categoriesObj from "../../../data/categoriesObj.json";

function Category() {
  const navigation = useNavigate();

  const handleProductsPage = (categoryName) => {
    navigation(`/products/category/${categoryName}`);
  };

  return (
    <div className="px-4 2xl:px-0">
      {/* Bottom Category Bar */}
      <div className="bg-white dark:bg-gradient-to-r dark:from-[#1e293b] dark:via-[#334155] dark:to-[#475569] shadow-sm dark:shadow-[0_2px_12px_rgba(148,163,184,0.15)] mx-auto my-2 px-4 py-3 rounded w-full max-w-screen-2xl overflow-x-auto transition-colors duration-300">
        <div className="scrollbar-hidden-always flex justify-between gap-6 sm:gap-8 md:gap-10 lg:px-30 overflow-x-auto font-medium text-sm whitespace-nowrap">
          {categoriesObj.map((curCategory) => (
            <div
              onClick={() => handleProductsPage(curCategory.category)}
              key={curCategory.id}
              className="flex flex-col flex-shrink-0 items-center w-[70px] sm:w-[80px] md:w-[90px] transition-all cursor-pointer"
            >
              <img
                src={curCategory.image}
                alt={curCategory.name}
                className="bg-gradient-to-b from-pink-200 to-white drop-shadow mb-1 p-2 border border-gray-300 dark:border-white/20 rounded-md w-10 sm:w-11 lg:w-15 h-10 sm:h-11 lg:h-15 object-contain"
              />
              <span className="mt-1 lg:mt-2 text-black lg:text-[16px] dark:text-white text-xs sm:text-sm text-center">
                {curCategory.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
