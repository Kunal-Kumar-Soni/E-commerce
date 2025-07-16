function ProductsByCategoryAndSearchSkeleton() {
  const skeletonArray = new Array(8).fill(null);

  return (
    <div className="bg-white dark:bg-gray-900 mx-auto mt-4 px-4 sm:px-6 lg:px-8 py-6 max-w-screen-2xl min-h-screen">
      <h2 className="mb-6 font-bold text-gray-900 dark:text-white text-2xl sm:text-3xl text-center animate-pulse">
        Loading Category...
      </h2>

      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3">
        {skeletonArray.map((_, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 shadow rounded-xl overflow-hidden animate-pulse"
          >
            <div className="bg-gray-300 dark:bg-gray-700 w-full h-48" />

            <div className="space-y-3 p-4">
              <div className="bg-gray-300 dark:bg-gray-600 rounded w-3/4 h-5" />
              <div className="bg-gray-300 dark:bg-gray-600 rounded w-full h-4" />
              <div className="bg-gray-300 dark:bg-gray-600 rounded w-5/6 h-4" />

              <div className="flex justify-between mt-2">
                <div className="bg-gray-300 dark:bg-gray-600 rounded w-16 h-5" />
                <div className="bg-gray-300 dark:bg-gray-600 rounded w-14 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsByCategoryAndSearchSkeleton;
