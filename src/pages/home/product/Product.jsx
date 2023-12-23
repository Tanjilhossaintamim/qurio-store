import Heading from "../../../components/shared/Heading/Heading";
import ProductCard from "../../../components/shared/ProductCard/ProductCard";
import products from "../../../utils/productData";

const Product = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <Heading />
      <div className="grid grid-cols-1 place-content-center md:grid-cols-2 lg:grid-cols-3 gap-6 py-16">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
