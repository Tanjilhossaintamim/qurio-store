import { Helmet } from "react-helmet-async";
import Banner from "./banner/Banner";
import DiscountBanner from "./discountBanner/DiscountBanner";
import Product from "./product/Product";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Qrio || Home</title>
      </Helmet>
      <Banner />
      <Product />
      <DiscountBanner />
    </div>
  );
};

export default Home;
