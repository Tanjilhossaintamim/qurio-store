import Banner from "./banner/Banner";
import DiscountBanner from "./discountBanner/DiscountBanner";
import Product from "./product/Product";

const Home = () => {
  return (
    <div>
      <Banner />
      <Product />
      <DiscountBanner />
    </div>
  );
};

export default Home;
