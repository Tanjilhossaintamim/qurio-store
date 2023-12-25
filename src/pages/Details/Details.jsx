import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classNames from "classnames";
import { useGetSingleProductsQuery } from "../../redux/features/product/productApi";
import MyImage from "../../components/shared/Image/Image";
import { useSelector } from "react-redux";
import DetailsSkeleton from "../../components/shared/detailsSkeleton/DetailsSkeleton";
import { Helmet } from "react-helmet-async";
import { useAddToCartMutation } from "../../redux/features/cart/cartApi";
import toast from "react-hot-toast";

const Details = () => {
  const { id } = useParams();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [addToCart, { isSuccess: productAddSuccess, data: productAddInfo }] =
    useAddToCartMutation();
  const { data, isLoading, isSuccess } = useGetSingleProductsQuery(id);
  const { image, color } = useSelector((state) => state.product);

  const [currentImage, setcurrentImage] = useState({
    image: data?.payload?.variation[0]?.image || image,
    color: data?.payload?.variation[0]?.color || color,
  });
  const [currentSize, setCurrentSize] = useState(
    data?.payload?.size[0].sizeName || "xs"
  );
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  // handel image and color active
  const handelActiveImage = (color) => {
    const selectedColor = data?.payload?.variation?.find(
      (item) => item.color == color
    );
    setcurrentImage({
      image: selectedColor.image,
      color: selectedColor.color,
    });
  };

  // handel active size
  const handelSizeActive = (size) => {
    setCurrentSize(size);
  };

  // handel update quantity
  const handelIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  // handel decrease quantity
  const handelDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // add to cart Functionality
  const handelAddTocart = () => {
    if (!isLoggedIn) {
      return navigate("/login");
    }
    const cartData = {
      product: data?.payload?._id,
      quantity,
      size: currentSize,
      color: color,
    };
    addToCart(cartData);
  };

  useEffect(() => {
    if (isSuccess) {
      setcurrentImage({
        image: data?.payload?.variation[0]?.image,
        color: data?.payload?.variation[0]?.color,
      });
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (productAddSuccess) {
      toast.success(productAddInfo?.message);
    }
  }, [productAddSuccess, productAddInfo]);

  if (isLoading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <DetailsSkeleton />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto my-20 lg:my-0 h-screen lg:flex mt-40 justify-between px-4 lg:px-0">
      <Helmet>
        <title>Qrio || Details</title>
      </Helmet>
      <div className="lg:w-1/2">
        <MyImage image={currentImage} />
      </div>
      <div className="lg:w-1/2">
        <h1 className="text-color-black-1 text-3xl font-semibold">
          {data?.payload?.title}
        </h1>
        <h5 className="text-xl text-color-black-1 font-medium mt-4">
          ${data?.payload?.price}
        </h5>

        <h6 className="uppercase text-base text-gray-700 mt-3">
          COLOR : {currentImage?.color}
        </h6>
        {/* color */}
        <div className="w-full flex-none text-sm flex items-center text-gray-600 mt-5">
          <ul className="flex flex-row justify-center items-center space-x-2">
            {data?.payload?.variation?.map((v, i) => (
              <li
                className="cursor-pointer"
                key={i}
                onClick={() => handelActiveImage(v.color)}
              >
                <span className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                  <span
                    style={{ background: `${v.color}` }}
                    className="block w-3 h-3 rounded-full"
                  ></span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* size */}
        <div className="flex-1 inline-flex items-center mb-3 mt-4">
          <span className="text-secondary whitespace-nowrap mr-3 uppercase text-gray-600">
            Size
          </span>
          <div className="cursor-pointer text-gray-400 flex items-center space-x-2 justify-center">
            {data?.payload?.size.map((s, i) => (
              <span
                key={i}
                onClick={() => handelSizeActive(s.sizeName)}
                className={classNames({
                  "p-1 uppercase w-7 h-7 rounded-full border border-gray-700 flex items-center justify-center text-xs": true,
                  "bg-gray-900 text-white": s.sizeName == currentSize,
                })}
              >
                {s.sizeName}
              </span>
            ))}
          </div>
        </div>
        {/* // add to cart btn */}
        <div className="border border-gray-800 w-36 h-10 flex items-center text-color-black-1 relative overflow-hidden">
          <button className="w-12 border-none" onClick={handelDecreaseQuantity}>
            -
          </button>
          <input
            type="text"
            className="w-12 h-full border-l border-r border-gray-800 outline-none text-center"
            readOnly
            value={quantity}
          />
          <button className="w-12 border-none" onClick={handelIncreaseQuantity}>
            +
          </button>
        </div>
        <button
          onClick={handelAddTocart}
          className="bg-[#379D8A] px-8 py-2 mt-3 w-80 text-white uppercase rounded hover:bg-[#328161] transition-colors"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Details;
