import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setImageAndColor } from "../../../redux/features/product/productSlice";
import { useAddToCartMutation } from "../../../redux/features/cart/cartApi";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const [addToCart, { data, isSuccess }] = useAddToCartMutation();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { title, price, variation, size, _id } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { image, color } = variation[0];

  const [activeImage, setActiveImage] = useState({
    image,
    color,
  });

  // add to Cart Functionality
  const handelAddTocart = () => {
    if (!isLoggedIn) {
      return navigate("/login");
    }
    const cartData = {
      product: _id,
      quantity: 1,
      size: size[0].sizeName,
      color: color,
    };
    addToCart(cartData);
  };

  const handelActiveImage = (color) => {
    const selectedColor = variation.find((item) => item.color == color);
    setActiveImage({
      ...activeImage,
      color: selectedColor.color,
      image: selectedColor.image,
    });
  };
  const handelSetImage = () => {
    dispatch(setImageAndColor({ image, color }));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message);
    }
  }, [isSuccess, data]);

  return (
    <div id="modal-id">
      <div className="relative flex flex-col items-center justify-center shadow-sm">
        <div className="container">
          <div className="max-w-md w-full rounded-xl p-6">
            <div className="flex flex-col ">
              <div className=" py-1">
                <div className="relative h-62 w-full mb-3">
                  <img
                    src={activeImage.image}
                    alt="Just a flower"
                    className=" w-full h-72  object-fill  "
                  />
                </div>
                <div className="flex-auto justify-evenly">
                  <div className="flex flex-wrap ">
                    <div className="flex items-center w-full justify-between min-w-0 ">
                      <h2 className="text-lg mr-auto cursor-pointer text-color-black-1 font-semibold ">
                        {title}
                      </h2>
                    </div>
                  </div>
                  <div className="text-m text-color-black-1 font-semibold mt-1">
                    $ {price}
                  </div>
                  <div className="lg:flex  py-4  text-sm text-gray-600">
                    <div className="flex-1 inline-flex items-center  mb-3">
                      <div className="w-full flex-none text-sm flex items-center text-gray-600">
                        <ul className="flex flex-row justify-center items-center space-x-2">
                          {variation.map((variaint, i) => (
                            <li
                              className="cursor-pointer"
                              key={i}
                              onClick={() => handelActiveImage(variaint.color)}
                            >
                              <span className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                                <span
                                  style={{ background: `${variaint.color}` }}
                                  className="block w-3 h-3 rounded-full"
                                ></span>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex items-center mb-3">
                      <span className="text-secondary whitespace-nowrap mr-3">
                        Size
                      </span>
                      <div className="cursor-pointer text-gray-400 ">
                        {size.map((s, i) => (
                          <span
                            key={i}
                            className="hover:text-purple-500 p-1 py-0 uppercase"
                          >
                            {s.sizeName}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 text-sm font-medium justify-start">
                    <button
                      className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-teal-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-teal-600 "
                      onClick={handelAddTocart}
                    >
                      <span>Add Cart</span>
                    </button>
                    <Link to={`/product/${_id}`}>
                      <button
                        onClick={handelSetImage}
                        className="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
