import Category from "./home-components/Category";
import ProductCarousel from "./home-components/ProductCarousel";
import ProductsList from "./home-components/ProductsList";
import categories from "../../data/categories.json";

function Home() {
  const randomCategoriesFn = (categories) => {
    for (let i = categories.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [categories[randomIndex], categories[i]] = [
        categories[i],
        categories[randomIndex],
      ];
    }
    return categories;
  };

  const randomCategories = randomCategoriesFn([...categories]).slice(0, 3);

  return (
    <div>
      <Category />
      <ProductCarousel />

      <>
        {randomCategories.map((curCategory, index) => {
          return <ProductsList key={index} curCategory={curCategory} />;
        })}
      </>
    </div>
  );
}

export default Home;
