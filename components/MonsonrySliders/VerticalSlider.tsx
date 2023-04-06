import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { verticalImages } from "./data";

export default function VerticalSlider() {
  const settings = {
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings} className="w-full">
      {verticalImages?.map((pd, i) => (
        <div key={i} className="">
          <div className="clientsLogo w-50 h-50 itmes-center">{pd.img}</div>
        </div>
      ))}
    </Slider>
  );
}
