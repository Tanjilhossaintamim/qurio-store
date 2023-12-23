import { Carousel, IconButton } from "@material-tailwind/react";
import slide1 from "../../../assets/slide1.webp";
import slide2 from "../../../assets/slide2.webp";
import slide3 from "../../../assets/slide3.webp";
const Banner = () => {
  return (
    <Carousel
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="blue"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="blue"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="blue"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <div className="relative">
        <img
          src={slide2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-10 lg:top-1/2 left-28 lg:left-60">
          <h1 className="text-[#666666] leading-relaxed tracking-widest text-sm lg:text-xl font-extrabold">
            ELESSI STORE
          </h1>

          <h1 className="text-3xl lg:text-5xl text-[#333333] font-extrabold lg:my-6">
            Exclusive
          </h1>
          <h3 className="text-3xl lg:text-5xl text-[#333333] font-extrabold ">
            T Shirt <span className="text-red-600">Design</span>
          </h3>
        </div>
      </div>
      <div className="relative">
        <img
          src={slide1}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-10 lg:top-1/2 left-28 lg:left-60">
          <h1 className="text-[#666666] leading-relaxed tracking-widest text-sm lg:text-xl font-extrabold">
            Limited Offer
          </h1>

          <h1 className="text-3xl lg:text-5xl text-[#333333] font-extrabold lg:my-6">
            30% OFF
          </h1>
          <h3 className="text-3xl lg:text-5xl text-[#333333] font-extrabold ">
            With <span className="text-teal-400">Promo Code</span>
          </h3>
        </div>
      </div>
      <div className="relative">
        <img
          src={slide3}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-10 lg:top-1/2 left-28 lg:left-60">
          <h1 className="text-[#666666] leading-relaxed tracking-widest text-sm lg:text-xl font-extrabold">
            ELESSI STORE
          </h1>

          <h1 className="text-3xl lg:text-5xl text-[#333333] font-extrabold lg:my-6">
            Looking For
          </h1>
          <h3 className="text-3xl lg:text-5xl text-[#333333] font-extrabold ">
            The <span className="text-pink-600">Best Price</span> 
          </h3>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
