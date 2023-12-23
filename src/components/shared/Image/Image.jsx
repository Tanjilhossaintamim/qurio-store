import { LazyLoadImage } from "react-lazy-load-image-component";

const MyImage = ({ image }) => {
  if (!image.image) return;
  return (
    <div>
      <LazyLoadImage
        alt={"image"}
        height={500}
        src={image.image} // use normal <img> attributes as props
        width={500}
      />
    </div>
  );
};

export default MyImage;
