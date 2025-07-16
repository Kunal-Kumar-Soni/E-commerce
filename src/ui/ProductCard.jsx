import { useNavigate } from "react-router-dom";
import { convertToINR } from "../utils/price";

function ProductCard({ product }) {
  const navigation = useNavigate();

  const originalPrice = Math.round(
    product.price / (1 - product.discountPercentage / 100)
  );

  const handleProductDetails = (id) => {
    navigation(`/products/${id}`);
  };

  return (
    <div
      onClick={() => handleProductDetails(product.id)}
      className="relative bg-white dark:bg-gradient-to-br dark:from-[#1e293b] dark:via-[#334155] dark:to-[#475569] shadow-md hover:shadow-lg dark:hover:shadow-[0_6px_28px_rgba(148,163,184,0.25)] dark:shadow-[0_4px_24px_rgba(148,163,184,0.1)] backdrop-blur-sm p-4 sm:p-5 border dark:border-white/10 border-transparent rounded-2xl w-full transition-all"
    >
      {/* Product Image */}
      <div className="flex justify-center items-center mb-4 sm:mb-5 w-full h-44 sm:h-52">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="drop-shadow dark:drop-shadow-lg h-full object-contain"
        />
      </div>

      {/* Brand */}
      <p className="mb-1 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
        Brand:{" "}
        <span className="font-semibold dark:text-white">{product.brand}</span>
      </p>

      {/* Title */}
      <h3 className="mb-1 font-semibold text-gray-800 dark:text-white text-base sm:text-lg line-clamp-1">
        {product.title}
      </h3>

      {/* Description */}
      <p className="mb-3 text-gray-500 dark:text-gray-300 text-sm sm:text-base line-clamp-2">
        {product.description}
      </p>

      {/* Prices */}
      <div className="flex items-center gap-3 text-sm sm:text-base">
        <span className="text-gray-400 dark:text-gray-300 line-through">
          {convertToINR(originalPrice)}
        </span>
        <span className="font-semibold text-gray-800 dark:text-white">
          {convertToINR(product.price)}
        </span>
        <span className="font-semibold text-red-600 dark:text-red-400">
          ({Math.round(product.discountPercentage)}% Off)
        </span>
      </div>

      {/* Sale Tag */}
      <div className="top-2 right-2 absolute bg-red-600 dark:bg-red-500 px-2 py-1 rounded font-bold text-[11px] text-white sm:text-xs uppercase tracking-wide">
        Sale
      </div>
    </div>
  );
}

export default ProductCard;
