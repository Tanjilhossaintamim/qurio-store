import Heading from "../../../components/shared/Heading/Heading";
import ProductCard from "../../../components/shared/ProductCard/ProductCard";
import LoadingSkeleton from "../../../components/shared/Skeleton/Skeleton";

import { useGetAllProductsQuery } from "../../../redux/features/product/productApi";

const Product = () => {
  const { data, isLoading } = useGetAllProductsQuery();

  let content = null;
  if (isLoading) {
    content = (
      <>
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
      </>
    );
  }
  if (data?.payload?.length > 0) {
    content = data?.payload.map((product) => (
      <ProductCard key={product._id} product={product} />
    ));
  }

  return (
    <div className="max-w-7xl mx-auto py-10">
      <Heading />
      <div className="grid grid-cols-1 place-content-center md:grid-cols-2 lg:grid-cols-3 gap-6 py-16">
        {content}
      </div>
    </div>
  );
};

export default Product;
