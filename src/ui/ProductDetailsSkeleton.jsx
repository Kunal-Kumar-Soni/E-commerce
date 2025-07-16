function ProductDetailsSkeleton() {
  return (
    <div className="mx-auto px-4 py-10 max-w-6xl animate-pulse">
      <div className="gap-10 grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg">
        {/* Image Skeleton */}
        <div className="flex justify-center items-center">
          <div className="bg-gray-300 dark:bg-gray-700 rounded-xl w-full max-w-sm h-96"></div>
        </div>

        {/* Text Skeleton */}
        <div className="space-y-4">
          <div className="bg-gray-300 dark:bg-gray-700 rounded w-3/4 h-6"></div>
          <div className="bg-gray-300 dark:bg-gray-700 rounded w-1/2 h-4"></div>
          <div className="bg-gray-300 dark:bg-gray-700 rounded w-1/3 h-4"></div>

          <div className="bg-gray-300 dark:bg-gray-700 mt-4 rounded w-1/2 h-6"></div>
          <div className="bg-gray-300 dark:bg-gray-700 rounded w-1/3 h-4"></div>

          <div className="bg-gray-300 dark:bg-gray-700 mt-4 rounded w-full h-20"></div>
          <div className="bg-gray-300 dark:bg-gray-700 rounded w-2/3 h-4"></div>
          <div className="bg-gray-300 dark:bg-gray-700 rounded w-1/3 h-4"></div>
          <div className="bg-gray-300 dark:bg-gray-700 rounded w-1/4 h-4"></div>

          <div className="flex gap-4 mt-6">
            <div className="bg-gray-300 dark:bg-gray-700 rounded-md w-28 h-10"></div>
            <div className="bg-gray-300 dark:bg-gray-700 rounded-md w-28 h-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsSkeleton;
