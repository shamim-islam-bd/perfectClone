import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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
      →
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
        marginLeft: "-40px",
        coursure: "pointer",
        color: "black",
        fontSize: "45px",
      }}
      onClick={onClick}
    >
      ←
    </span>
  );
}

const items = [
  {
    id: 1,
    title: "2.10 is live!",
    des: "New ways to manage code execution, projects to organize your flows, variables, events and artifacts are live in this monster release!",
  },
  {
    id: 2,
    title: "New: Virtual Certification",
    des: "Join us on May 16th to get certified as a Prefect Practitioner!",
  },
  {
    id: 3,
    title: "New!",
    des: "Configure actions that Prefect Cloud executes with Automations.",
  },
  {
    id: 4,
    title: "Updated Privacy Policy and Prefect Cloud Terms and Conditions",
    des: "Check out our Legal page for additional detail!",
  },
  {
    id: 5,
    title: "2022 Year in Review!",
    des: "Click to read our 2022 Growth Report.",
  },
  {
    id: 6,
    title: "See it live!",
    des: "Join our bi-weekly demo of Prefect.",
  },
  {
    id: 7,
    title: "Prefect Calendar",
    des: "Stay in the loop with all of our virtual and IRL events!.",
  },
];

const settings = {
  className: "center",
  // centerMode: true,
  infinite: true,
  // centerPadding: "60px",
  slidesToShow: 1,
  dots: true,
  // centerMode: true, // important for responsive
  speed: 500,
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SampleNextArrow />,
};


export default function TopNav() {
  return (
    <div className="bg-[#090422] text-[#fff] px-[60px] py-4">
      <Slider {...settings}>
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-row font-barlow tracking-widest text-[12px]"
          >
            <span className="px-1 text-[#07E094]">{item.title}</span>
            <span className="px-1">{item.des}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
}
