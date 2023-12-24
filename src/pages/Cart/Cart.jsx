import { useAllCartItemsQuery } from "../../redux/features/cart/cartApi";
import CartCard from "./CartCard";
import "./cart.css";
import emptyimage from "../../assets/empty.jpg";

const Cart = () => {
  const { data } = useAllCartItemsQuery();

  let content = null;
  if (data?.payload?.results?.products?.length > 0) {
    content = data?.payload?.results?.products?.map((product, i) => (
      <CartCard product={product} key={i} />
    ));
  }
  if (data?.payload?.results?.products?.length == 0) {
    content = <img src={emptyimage} alt="img" width={300} height={300} />;
  }

  return (
    <div className="min-h-[100vh] py-10 bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">{content}</div>
        {/* <!-- Sub total --> */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${data?.payload?.subtotal}</p>
          </div>

          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">
                ${data?.payload?.subtotal} USD
              </p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
