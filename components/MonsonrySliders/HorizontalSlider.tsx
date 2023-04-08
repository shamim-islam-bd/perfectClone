import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { images } from "./data";

export default function HorizontalSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings} className="">
      {images?.map((pd, i) => (
        <div key={i} className="">
          <div className="clientsLogo itmes-center">{pd.img}</div>
        </div>
      ))}
    </Slider>
  );
}
