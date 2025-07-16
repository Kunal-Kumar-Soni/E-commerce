function ProductCardSkeleton() {
  return (
    <div className="relative bg-white dark:bg-[#1e293b] shadow-md dark:shadow-[0_4px_16px_rgba(148,163,184,0.08)] p-3 sm:p-4 border border-gray-200 dark:border-white/10 rounded-xl w-full max-w-screen-2xl animate-pulse">
      {/* Image Skeleton */}
      <div className="flex justify-center items-center bg-gray-200 dark:bg-gray-700 mb-3 sm:mb-4 rounded-md w-full h-36 sm:h-44" />

      {/* Brand Skeleton */}
      <div className="bg-gray-200 dark:bg-gray-600 mb-1 rounded w-1/3 h-3" />

      {/* Title Skeleton */}
      <div className="bg-gray-300 dark:bg-gray-500 mb-2 rounded w-2/3 h-4" />

      {/* Description Skeleton */}
      <div className="bg-gray-200 dark:bg-gray-700 mb-1 rounded w-full h-3" />
      <div className="bg-gray-200 dark:bg-gray-700 mb-2 rounded w-5/6 h-3" />

      {/* Prices Skeleton */}
      <div className="flex items-center gap-2">
        <div className="bg-gray-200 dark:bg-gray-600 rounded w-12 h-3" />
        <div className="bg-gray-300 dark:bg-gray-500 rounded w-12 h-3" />
        <div className="bg-gray-200 dark:bg-gray-600 rounded w-14 h-3" />
      </div>
    </div>
  );
}

function ProductCardSkeletonList() {
  return (
    <div className="mx-auto my-4 px-4 sm:px-6 lg:px-8 2xl:px-0 w-full max-w-screen-2xl">
      {/* Heading Skeleton */}
      <div className="flex justify-start items-center bg-white dark:bg-[#1e293b] shadow-sm dark:shadow-[0_2px_8px_rgba(148,163,184,0.06)] mb-6 px-3 border border-gray-200 dark:border-white/10 rounded-md w-44 h-8 animate-pulse">
        <div className="bg-gray-300 dark:bg-gray-500 rounded-md w-28 h-4"></div>
      </div>

      {/* ✅ Grid for Skeleton Cards */}
      <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

export default ProductCardSkeletonList;
