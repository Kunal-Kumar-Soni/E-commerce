import { useNavigate, useParams } from "react-router-dom";
import ProductsByCategoryAndSearchSkeleton from "../../ui/ProductsByCategorySkeleton";
import { useEffect, useState } from "react";
import { getProductsBySearch } from "../../api/productAPI";
import { convertToINR } from "../../utils/price";

function ProductsBySearch() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { search_text } = useParams();
  const navigation = useNavigate();

  const fetchApi = async () => {
    setIsLoading(true);
    try {
      const res = await getProductsBySearch(search_text);
      const data = await res.data.products;
      setProducts(data);
    } catch (error) {
      console.error("Error fetching search products:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, [search_text]);

  const handleProductDetails = (id) => {
    navigation(`/products/${id}`);
  };

  if (isLoading) {
    return (
      <div>
        <ProductsByCategoryAndSearchSkeleton />
      </div>
    );
  }

  return (
    search_text && (
      <div className="bg-white dark:bg-gray-900 mx-auto mt-4 px-4 sm:px-6 lg:px-8 py-6 max-w-screen-2xl">
        {products.length === 0 ? (
          <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-900 mx-auto px-4 py-10 max-w-screen-2xl text-center">
            <img
              src="/images/error-no-search-results_2353c5.png"
              alt="Empty cart"
              className="opacity-90 mb-6 h-32"
            />
            <h2 className="font-semibold text-gray-800 dark:text-white text-xl sm:text-2xl">
              Sorry, no results found!
            </h2>
            <p className="mt-2 max-w-md text-gray-500 dark:text-gray-400 text-sm">
              Please check the spelling or try searching for something else
            </p>{" "}
          </div>
        ) : (
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3">
            {products.map((product) => (
              <div
                onClick={() => handleProductDetails(product.id)}
                key={product.id}
                className="bg-white dark:bg-gray-800 shadow hover:shadow-xl rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="relative bg-gray-200 dark:bg-gray-700 w-full h-56 overflow-hidden">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="p-4 w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-2 p-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white text-lg line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center pt-2">
                    <span className="font-bold text-md text-orange-600 dark:text-orange-400">
                      {convertToINR(product.price)}
                    </span>
                    <span className="font-medium text-green-600 dark:text-green-400 text-sm">
                      {product.discountPercentage}% Off
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  );
}

export default ProductsBySearch;
