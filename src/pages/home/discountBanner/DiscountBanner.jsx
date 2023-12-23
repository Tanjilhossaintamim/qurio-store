import image from "../../../assets/banner.webp";

const DiscountBanner = () => {
  return (
    <div className="relative h-80 my-4">
      <img src={image} alt="img" className="w-full h-full object-cover" />
      <div className="absolute max-w-2xl mx-auto left-40 top-1/2">
        <h1 className="text-2xl font-extrabold text-color-black-1">
          Up to <span className="text-teal-500">50% off</span>
        </h1>

        <button className="px-5 py-2 rounded-3xl bg-teal-500 text-white mt-3">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default DiscountBanner;
