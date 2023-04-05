import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import CapitalOne from "@/public/assets/CapitalOne";
import Svgexport30 from "@/public/assets/Svgexport30";
import Svgexport31 from "@/public/assets/Svgexport31";
import Florida_Panthers from "@/public/images/Florida_Panthers_2016_logo.png";
import Image from "next/image";

const items = [
  {
    id: 1,
    title: "Nick McGoye / Manager of Data Science",
    des: "“I'm really proud of the way our team has democratized data for the business leaders of the Panthers organization. Our data team knows that we're providing reliable insights for driving strategic decisions because we use Prefect to ensure that our data flows are robust across a variety of data sources, integrations and APIs.”",
    img: "Florida_Panthers",
    // img: <Svgexport31 />,
  },
  {
    id: 2,
    title: " Joseph Loss / Quantitative Analyst / SpiderRock Advisors",
    des: "“Wow. I just updated my site and it was SO SIMPLE. I am blown away. You guys truly kick ass. Wow. I just updated my site and it was SO SIMPLE. I am blown away. You guys truly kick ass.”",
    img: <Svgexport31 />,
  },
  {
    id: 3,
    title: "Walt Wells / Data Engineer, EDS / Progressive",
    des: "“My entire job has changed because of Prefect! We plan to convert the rest of our scripts, along with all of our R language processes. ”",
    img: <CapitalOne />,
  },
  {
    id: 4,
    title: "Cheif Markting Officer",
    des: "“The Prefect experience for developing, testing, and introspecting flows for developers is first class. Going from an idea to a prototype to a production grade flow deployed with Prefect Cloud is incredibly intuitive.”",
    img: "Florida_Panthers",
  },
  {
    id: 5,
    title:
      "Galaxy Brain: Data Science Workflows with Prefect & Dask / Actium (formerly SymphonyRM)",
    des: "“You guy rocked on the sculpture project! Thanks so much for doing a great job! Thanks so much for doing a great job!  ”",
    img: <Svgexport30 />,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};
const responsive = [
  {
    breakpoint: 2024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
    },
  },
  {
    breakpoint: 1028,
    settings: {
      slidesToShow: 1,
      centerMode: false,
      dots: true,
    },
  },
  {
    breakpoint: 776,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
    },
  },
];

export default function ContentSlider() {
  return (
    <Slider {...settings} className="w-full lg:w-1/2 md:w-1/2 relative">
      {items.map((pd) => (
        <div className="p-2" key={pd.id}>
          <div className="p-4 card mb-7">
            {pd.img === "Florida_Panthers" ? (
              <Image src={Florida_Panthers} alt="" width={140} height={140} />
            ) : (
              <div className="card-img">{pd.img}</div>
            )}
            <p
              className="font-input italic text-[18px]"
              style={{
                letterSpacing: "0.4px",
                lineHeight: "24px",
                color: "#4F4F4F",
                fontWeight: 600,
              }}
            >
              {pd.des}
            </p>
            <h5 className="pt-8 font-input text-[18px]">{pd.title}</h5>
          </div>
          <button className="btn-2 prefect-button ml-5">
            WHAT CUSTOMES ARE SAYEING
          </button>
        </div>
      ))}
    </Slider>
  );
}
