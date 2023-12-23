import Heading from "../../../components/shared/Heading/Heading";
import ProductCard from "../../../components/shared/ProductCard/ProductCard";
import { useGetAllProductsQuery } from "../../../redux/features/product/productApi";

const Product = () => {
  const { data } = useGetAllProductsQuery();

  return (
    <div className="max-w-7xl mx-auto py-10">
      <Heading />
      <div className="grid grid-cols-1 place-content-center md:grid-cols-2 lg:grid-cols-3 gap-6 py-16">
        {data?.payload.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
