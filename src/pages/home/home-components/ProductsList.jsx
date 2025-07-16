import { useEffect, useState } from "react";
import { getProductsByCategory } from "../../../api/productAPI";
import ProductCard from "../../../ui/ProductCard";
import ProductCardSkeletonList from "../../../ui/ProductCardSkeletonList";

function ProductsList({ curCategory }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchApi = async () => {
    setIsLoading(true);
    try {
      const res = await getProductsByCategory(curCategory);
      const data = res.data.products;
      setProducts(data.slice(0, 10));
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      {isLoading ? (
        <ProductCardSkeletonList />
      ) : (
        <section className="mx-auto px-4 sm:px-6 lg:px-8 2xl:px-0 py-8 border-gray-400 dark:border-gray-200 border-b max-w-screen-2xl">
          {/* Section Title */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-500 rounded-sm w-1.5 h-6"></div>
            <h2 className="font-bold text-gray-800 dark:text-white text-xl sm:text-2xl">
              {curCategory.split("-").join(" ").toUpperCase()}
            </h2>
          </div>

          {/* Product Grid */}
          <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default ProductsList;
