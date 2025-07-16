import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsById } from "../../api/productAPI";
import ProductDetailsSkeleton from "../../ui/ProductDetailsSkeleton";
import { convertToINR } from "../../utils/price";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { toast } from "react-toastify";

function ProductDetails() {
  const [productDetails, setProductsDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const toastShowRef = useRef(false);

  const fetchApi = async () => {
    setIsLoading(true);
    try {
      const res = await getProductsById(id);
      setProductsDetails(res.data);
    } catch (error) {
      console.error("Failed to fetch product:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, [id]);

  const product = productDetails;

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to cart");
    navigation("/cart");
  };

  const handleBuyNow = () => {
    if (toastShowRef.current) return;

    toastShowRef.current = true;

    toast.info("This feature is not available yet", {
      onClose: () => {
        toastShowRef.current = false;
      },
    });
  };

  if (isLoading) {
    return (
      <div className="py-10 text-gray-600 dark:text-gray-300 text-center">
        <ProductDetailsSkeleton />
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 py-10 max-w-6xl">
      <div className="gap-10 grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-xl w-full max-w-sm object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4 text-gray-800 dark:text-white">
          <h1 className="font-bold text-3xl">{product.title}</h1>

          <p className="text-gray-400 text-sm">
            Brand:{" "}
            <span className="font-medium text-white">{product.brand}</span>
          </p>
          <p className="text-gray-400 text-sm">
            Category:{" "}
            <span className="font-medium text-white capitalize">
              {product.category}
            </span>
          </p>

          <p className="font-bold text-green-500 text-xl">
            {convertToINR(product.price)}
            <span className="ml-2 font-medium text-gray-400 text-sm line-through">
              {convertToINR(
                Math.round(
                  product.price +
                    (product.price * product.discountPercentage) / 100
                )
              )}
            </span>{" "}
            <span className="font-semibold text-red-500 text-sm">
              ({Math.round(product.discountPercentage)}% OFF)
            </span>
          </p>

          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-lg">⭐ {product.rating}</span>
            <span className="text-gray-500 dark:text-gray-300 text-sm">
              ({product.stock} units available)
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-sm">
            {product.description}
          </p>

          <div className="space-y-1 mt-4 text-sm">
            <p className="font-semibold">🚚 Delivery:</p>
            <p className="text-gray-600 dark:text-gray-400">
              Usually delivered in 3-5 business days.
            </p>

            <p className="mt-2 font-semibold">🛡 Warranty:</p>
            <p className="text-gray-600 dark:text-gray-400">
              1 year manufacturer warranty for device and 6 months for
              accessories.
            </p>

            <p className="mt-2 font-semibold">🔁 Return Policy:</p>
            <p className="text-gray-600 dark:text-gray-400">
              7 days return or replacement{" "}
              <span className="font-medium text-red-500">
                (except groceries)
              </span>
              . Conditions apply.
            </p>
          </div>

          <p className="font-medium">
            Status:{" "}
            <span
              className={product.stock > 0 ? "text-green-600" : "text-red-500"}
            >
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </p>

          {/* Action Buttons */}
          <div className="flex sm:flex-row flex-col gap-4 mt-6">
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-sky-600 hover:bg-sky-700 shadow px-6 py-2 rounded-lg text-white cursor-pointer"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-green-600 hover:bg-green-700 shadow px-6 py-2 rounded-lg text-white cursor-pointer"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
