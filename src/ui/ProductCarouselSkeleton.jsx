import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function ProductCarouselSkeleton() {
  return (
    <div className="relative mx-auto mt-4 px-4 2xl:px-0 w-full max-w-screen-2xl overflow-x-hidden">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="!pb-0 rounded-xl"
      >
        {Array.from({ length: 2 }).map((_, i) => (
          <SwiperSlide key={i}>
            <div className="relative flex sm:flex-row flex-col items-center gap-4 sm:gap-10 bg-gray-100 dark:bg-[#1e293b] shadow-md dark:shadow-[0_4px_16px_rgba(148,163,184,0.08)] px-4 sm:px-10 py-6 sm:py-10 border border-gray-200 dark:border-white/10 rounded-xl h-auto text-black dark:text-white animate-pulse">
              {/* Top-Right Sale Tag Skeleton */}
              <div className="top-2 right-2 absolute bg-gray-300 dark:bg-gray-600 px-4 py-2 rounded w-16 h-5" />

              {/* Image Skeleton */}
              <div className="bg-gray-300 dark:bg-gray-600 rounded w-28 sm:w-44 md:w-56 h-32 sm:h-44" />

              {/* Text Content Skeleton */}
              <div className="flex flex-col items-center sm:items-start w-full sm:text-left text-center">
                <div className="bg-gray-300 dark:bg-gray-600 mb-2 rounded w-24 h-3" />
                <div className="bg-gray-400 dark:bg-gray-500 mb-2 rounded w-48 sm:w-64 h-5 sm:h-7" />
                <div className="bg-gray-300 dark:bg-gray-600 mb-1 rounded w-64 sm:w-80 h-3" />
                <div className="bg-gray-300 dark:bg-gray-600 mb-2 rounded w-52 sm:w-72 h-3" />
                <div className="bg-gray-400 dark:bg-gray-500 mb-3 rounded w-32 sm:w-40 h-4" />
                <div className="bg-gray-200 dark:bg-gray-700 rounded-md w-56 h-6" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Placement */}
      <div className="mt-4 text-center swiper-pagination" />
    </div>
  );
}

export default ProductCarouselSkeleton;
