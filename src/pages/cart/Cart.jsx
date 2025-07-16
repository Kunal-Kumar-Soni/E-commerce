import { Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { convertToINR } from "../../utils/price";
import {
  decrementQuantity,
  incrementQuantity,
  removeAll,
  removeFromCart,
} from "../../features/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRef } from "react";

function Cart() {
  const navigation = useNavigate();
  const cartSlice = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const toastShowRef = useRef(false);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Removed from cart");
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    const products = cartSlice.cartItems;
    const item = products.find((product) => product.id === id);

    if (item.quantity === 1) {
      dispatch(decrementQuantity(id));
      toast.success("Removed from cart");
    } else {
      dispatch(decrementQuantity(id));
    }
  };

  const handlePlaceOrder = () => {
    if (toastShowRef.current) return;

    toastShowRef.current = true;
    toast.info("This feature is not available yet", {
      onClose: () => {
        toastShowRef.current = false;
      },
    });
  };

  const handleRemoveAll = () => {
    dispatch(removeAll());
    toast.success("All items removed from cart");
  };

  const products = cartSlice.cartItems;
  const totalAmount = cartSlice.totalPrice;
  const totalQuantity = cartSlice.totalQuantity;

  const totalOriginalPrice = products.reduce((total, product) => {
    const originalPrice = Math.round(
      product.price / (1 - product.discountPercentage / 100)
    );
    return total + originalPrice * product.quantity;
  }, 0);

  const totalDiscount = totalOriginalPrice - totalAmount;

  return (
    <div className="dark:bg-gray-900 mt-4 px-4 sm:px-6 lg:px-8 py-6">
      <div>
        {products.length === 0 ? (
          <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-900 mx-auto px-4 py-10 max-w-screen-2xl text-center">
            <img
              src="/images/cart-no-data.webp"
              alt="Empty cart"
              className="opacity-90 mb-6 h-32"
            />

            <h2 className="font-semibold text-gray-800 dark:text-white text-xl sm:text-2xl">
              Your cart is empty!
            </h2>

            <p className="mt-2 max-w-md text-gray-500 dark:text-gray-400 text-sm">
              Add items to it now.
            </p>

            <button
              onClick={() => navigation("/")}
              className="bg-[#2874f0] hover:bg-[#1f5cb8] mt-6 px-6 py-2 rounded font-medium text-white transition-colors cursor-pointer"
            >
              Shop Now
            </button>
          </div>
        ) : (
          <div className="gap-6 grid grid-cols-1 lg:grid-cols-3 mx-auto max-w-screen-xl">
            {/* Left - Cart Items */}
            <div className="space-y-4 lg:col-span-2">
              {products.length > 1 && (
                <div className="flex justify-end items-center mb-2 px-1">
                  <button
                    onClick={handleRemoveAll}
                    className="font-medium text-red-500 text-sm hover:underline cursor-pointer"
                  >
                    Remove All
                  </button>
                </div>
              )}

              {products.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="bg-white dark:bg-gray-800 shadow p-4 sm:p-6 rounded-xl"
                  >
                    <div className="flex sm:flex-row flex-col gap-4">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="bg-white rounded w-28 h-28 object-contain"
                      />

                      <div className="flex-1 space-y-2">
                        <h3 className="font-semibold text-gray-800 dark:text-white text-lg">
                          {product.title}
                        </h3>

                        <div className="flex items-center gap-4">
                          <p className="text-gray-400 dark:text-gray-500 text-sm line-through">
                            {convertToINR(
                              Math.round(
                                product.price /
                                  (1 - product.discountPercentage / 100)
                              )
                            )}
                          </p>
                          <p className="font-semibold text-gray-800 dark:text-white text-sm">
                            {convertToINR(product.price)}
                          </p>
                          <p className="font-medium text-green-600 dark:text-green-400 text-sm">
                            {Math.round(product.discountPercentage)}% Off
                          </p>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleDecrement(product.id)}
                              className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-bold text-lg cursor-pointer"
                            >
                              −
                            </button>
                            <span className="px-3 text-gray-700 text-md dark:text-white">
                              {product.quantity}
                            </span>
                            <button
                              onClick={() => handleIncrement(product.id)}
                              className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-bold text-lg cursor-pointer"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => handleRemove(product.id)}
                            className="flex items-center gap-1 text-red-500 text-sm hover:underline cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 font-semibold text-gray-800 dark:text-white text-right">
                      Subtotal: {convertToINR(product.totalPrice)}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right - Price Summary */}
            <div className="bg-white dark:bg-gray-800 shadow p-4 sm:p-6 rounded-xl h-fit">
              <h3 className="mb-4 pb-2 border-b font-bold text-gray-800 dark:text-white text-lg">
                Price Details
              </h3>

              <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <div className="flex justify-between">
                  <span>Price ({totalQuantity} items)</span>
                  <span>{convertToINR(totalOriginalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-600 dark:text-green-400">
                    − {convertToINR(totalDiscount)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-600">Free</span>
                </div>
              </div>

              <div className="flex justify-between mt-3 pt-3 border-t font-bold text-gray-800 dark:text-white">
                <span>Total Amount</span>
                <span>{convertToINR(totalAmount)}</span>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="bg-[#fb641b] hover:bg-[#d85613] mt-6 py-2 rounded w-full font-medium text-white transition-colors cursor-pointer"
              >
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
