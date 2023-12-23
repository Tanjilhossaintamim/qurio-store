import { useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";

const product = {
  _id: "1",
  title: "T-shirt",
  variation: [
    {
      color: "red",
      image:
        "https://png.pngtree.com/element_our/png/20180828/yellow-t-shirt-mockup-png_72954.jpg",
    },
    {
      color: "blue",
      image:
        "https://seanese.com/cdn/shop/products/mockup-084fa717_2048x.jpg?v=1500319426",
    },
    {
      color: "green",
      image:
        "https://png.pngtree.com/element_our/png/20180828/yellow-t-shirt-mockup-png_72954.jpg",
    },
  ],
  price: 520,
  size: [{ sizeName: "xs" }, { sizeName: "lg" }, { sizeName: "m" }],
};

const Details = () => {
  const { id } = useParams();

  const [currentImage, setcurrentImage] = useState({
    image: product.variation[0].image,
    color: product.variation[0].color,
  });
  const [currentSize, setCurrentSize] = useState(product.size[0].sizeName);
  const [quantity, setQuantity] = useState(1);

  // handel image and color active
  const handelActiveImage = (color) => {
    const selectedColor = product.variation.find((item) => item.color == color);
    setcurrentImage({
      ...currentImage,
      color: selectedColor.color,
      image: selectedColor.image,
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

  return (
    <div className="max-w-6xl mx-auto h-screen lg:flex mt-40 justify-between">
      <div className="lg:w-1/2">
        <img src={currentImage.image} alt="image" />
      </div>
      <div className="lg:w-1/2">
        <h1 className="text-color-black-1 text-3xl font-semibold">
          {product.title}
        </h1>
        <h5 className="text-xl text-color-black-1 font-medium mt-4">
          ${product.price}
        </h5>

        <h6 className="uppercase text-base text-gray-700 mt-3">
          COLOR : {currentImage.color}
        </h6>
        {/* color */}
        <div className="w-full flex-none text-sm flex items-center text-gray-600 mt-5">
          <ul className="flex flex-row justify-center items-center space-x-2">
            {product.variation.map((variaint, i) => (
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
        {/* size */}
        <div className="flex-1 inline-flex items-center mb-3 mt-4">
          <span className="text-secondary whitespace-nowrap mr-3 uppercase text-gray-600">
            Size
          </span>
          <div className="cursor-pointer text-gray-400 flex items-center space-x-2 justify-center">
            {product.size.map((s, i) => (
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
        <div className="border border-gray-800 w-36 flex items-center text-color-black-1">
          <button className="w-12" onClick={handelDecreaseQuantity}>
            -
          </button>
          <input
            type="text"
            className="w-12 border-l border-r border-gray-800 outline-none text-center"
            readOnly
            value={quantity}
          />
          <button className="w-12" onClick={handelIncreaseQuantity}>
            +
          </button>
        </div>
        <button className="bg-[#379D8A] px-8 py-2 mt-3 w-80 text-white uppercase rounded hover:bg-[#328161] transition-colors">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Details;
