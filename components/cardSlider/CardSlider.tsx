import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import CapitalOne from "@/public/assets/CapitalOne";
import SlateData from "@/public/assets/SlateData";
import Svgexport30 from "@/public/assets/Svgexport30";
import Svgexport31 from "@/public/assets/Svgexport31";
import dyvenialogodark from "@/public/images/dyvenia-logo-dark.png";
import quiltailogonavy from "@/public/images/quilt.ai_logo_navy.png";
import Image from "next/image";

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <span
      className={className}
      style={{
        ...style,
        color: "black",
        right: "-8px",
        coursure: "pointer",
        fontSize: "45px",
      }}
      onClick={onClick}
    >
      {/* → */}
    </span>
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <span
      className={className}
      style={{
        ...style,
        // marginLeft: "-40px",
        coursure: "pointer",
        color: "black",
        fontSize: "45px",
      }}
      onClick={onClick}
    >
      {/* ← */}
    </span>
  );
}

const items = [
  {
    id: 1,
    title: "Get Paid (With Confidence): Prefect + Paidy",
    des: "Given the scale at which Anaconda needs to build and deploy packages and the number of users who rely on us, we saw significant business value in a build pipeline, powered by Prefect, tailored to our needs.",
    img: "dyvenialogodark",
    // img: <Svgexport31 />,
  },
  {
    id: 2,
    title: " Joseph Loss / Quantitative Analyst / SpiderRock Advisors",
    des: "Paidy ditches their manual debugging practices and operationalizes their data practices with Prefect.",
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
    img: "dyvenialogodark",
  },
  {
    id: 5,
    title: "Data Science Workflows with Prefect",
    des: "By automating a wide range of data processes, the team can devote more time to business-critical objectives: improving the performance of their players and setting a course for team..",
    img: <SlateData />,
  },
  {
    id: 6,
    title: "Inside Baseball: How The Nationals Win With Analytics",
    des: "Slate Data provides data engineering services to reinvigorate data-driven business decisions by modernizing data tech stacks and empowering industry-specific data scientists.",
    img: <Svgexport30 />,
  },
  {
    id: 7,
    title: "Inside Baseball: How The Nationals Win With Analytics",
    des: "Slate Data provides data engineering services to reinvigorate data-driven business decisions by modernizing data tech stacks and empowering industry-specific data scientists.",
    img: "quiltailogonavy",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SampleNextArrow />,
};

const responsive = [
  {
    breakpoint: 2024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 4,
      infinite: true,
      dots: true,
    },
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: true,
    },
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
    },
  },
];

// ←

// →

export default function CardSlider() {
  return (
    <div className="relative py-40">
      <div className="cardSlic">
        <div className="lg:px-16 px-8 absolute inset-x-0 -top-20">
          <Slider {...settings} responsive={responsive} className="w-full">
            {items.map((pd) => (
              <div className="card" key={pd.id}>
                <div className="cardwrapper m-4">
                  <div className="wrapper p-3 m-6 mb-6">
                    <div className="mb-4">
                      {pd.img === "dyvenialogodark" ? (
                        <div className="cardPng flex items-center">
                          <Image src={dyvenialogodark} alt="dyvenial" />
                        </div>
                      ) : pd.img === "quiltailogonavy" ? (
                        <div className="cardPng flex items-center">
                          <Image src={quiltailogonavy} alt="quiltail" />
                        </div>
                      ) : (
                        <div className="cardslider">{pd.img}</div>
                      )}
                      <h5 className="pt-8 font-barlow font-[500] text-[18px] lg:text-[24px]">
                        {pd.title}
                      </h5>
                      <p
                        className="font-barlow tracking-widest lg:text-[18px] py-2"
                        style={{
                          letterSpacing: "0.4px",
                        }}
                      >
                        {pd.des}
                      </p>
                    </div>

                    <button className="ml-6 pl-3 tracking-widest text-[13px]">
                      READ THE STORY
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
