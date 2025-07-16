import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { getAllProducts } from "../../../api/productAPI";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import ProductCarouselSkeleton from "../../../ui/ProductCarouselSkeleton";
import { useNavigate } from "react-router-dom";
import { convertToINR } from "../../../utils/price";

function ProductCarousel() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate();

  const fetchApi = async () => {
    setIsLoading(true);
    try {
      const res = await getAllProducts();
      const data = res.data.products;

      for (let i = data.length - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [data[randomIndex], data[i]] = [data[i], data[randomIndex]];
      }

      setProducts(data.slice(0, 6));
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleProductDetails = (id) => {
    navigation(`/products/${id}`);
  };

  return (
    <div className="mx-auto mt-4 px-4 2xl:px-0 w-full max-w-screen-2xl overflow-x-hidden">
      {isLoading ? (
        <ProductCarouselSkeleton />
      ) : (
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="!pb-0"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div
                  onClick={() => handleProductDetails(product.id)}
                  className="relative flex sm:flex-row flex-col items-center gap-4 sm:gap-10 bg-gradient-to-r from-[#fef9f9] dark:from-[#1e293b] via-[#f3f6fb] dark:via-[#334155] to-[#e8f0ff] dark:to-[#475569] shadow-md dark:shadow-[0_4px_24px_rgba(148,163,184,0.1)] px-4 sm:px-10 py-6 sm:py-10 rounded-xl h-auto text-black dark:text-white transition-colors duration-300"
                >
                  {/* Top-Right Sale Tag */}
                  <div className="top-2 right-2 absolute bg-red-600 shadow-md px-2 py-1 rounded font-semibold text-white text-xs sm:text-xs">
                    GOAT SALE
                  </div>

                  {/* Product Image */}
                  <div className="w-28 sm:w-44 md:w-56">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="drop-shadow dark:drop-shadow-xl w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col items-center sm:items-start sm:text-left text-center">
                    <p className="text-gray-500 dark:text-gray-300 text-xs sm:text-sm uppercase tracking-widest">
                      {product.brand}
                    </p>
                    <h2 className="font-bold text-gray-800 dark:text-white text-lg sm:text-2xl md:text-3xl leading-tight">
                      {product.title}
                    </h2>
                    <p className="mt-1 text-gray-600 dark:text-gray-300 text-xs sm:text-sm line-clamp-2">
                      {product.description}
                    </p>
                    <p className="mt-1 font-bold text-green-500 text-sm sm:text-lg">
                      From {convertToINR(product.price)}
                    </p>
                    <div className="bg-white dark:bg-white/10 shadow-sm mt-2 px-3 py-1 rounded-md font-medium text-black dark:text-white text-xs sm:text-sm">
                      10% Instant Discount via HDFC / ICICI
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper Pagination Dots */}
          <div className="mt-4 text-center swiper-pagination" />
        </div>
      )}
    </div>
  );
}

export default ProductCarousel;
