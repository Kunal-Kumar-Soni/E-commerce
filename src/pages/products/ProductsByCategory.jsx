import { useEffect, useState } from "react";
import { getProductsByCategory } from "../../api/productAPI";
import ProductsByCategorySkeleton from "../../ui/ProductsByCategorySkeleton";
import { useNavigate, useParams } from "react-router-dom";
import { convertToINR } from "../../utils/price";

function ProductsByCategory() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { category_name } = useParams();
  const navigation = useNavigate();

  const fetchApi = async () => {
    setIsLoading(true);
    try {
      const res = await getProductsByCategory(category_name);
      const data = await res.data.products;
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [category_name]);

  const handleProductDetails = (id) => {
    navigation(`/products/${id}`);
  };

  if (isLoading) {
    return <ProductsByCategorySkeleton />;
  }

  return (
    category_name && (
      <div className="bg-white dark:bg-gray-900 mx-auto mt-4 px-4 sm:px-6 lg:px-8 py-6 max-w-screen-2xl min-h-screen">
        <h2 className="drop-shadow-sm mb-6 font-extrabold text-gray-800 dark:text-white text-2xl sm:text-3xl text-center decoration-[3px] decoration-orange-500 dark:decoration-yellow-400 underline underline-offset-[6px] uppercase tracking-wide">
          {category_name.split("-").join(" ").toUpperCase()}
        </h2>

        {products.length === 0 ? (
          <div className="flex flex-col justify-center items-center min-h-[60vh] text-gray-500 dark:text-gray-300 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png" // You can change icon
              alt="No results"
              className="opacity-70 mb-4 w-24 h-24"
            />
            <h3 className="font-semibold text-xl">No products found</h3>
            <p className="mt-2 max-w-md text-gray-400 dark:text-gray-500 text-sm">
              We couldn’t find any products matching your search. Try different
              keywords or check your spelling.
            </p>
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

export default ProductsByCategory;
