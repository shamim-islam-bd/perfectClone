import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface Item {
  id: number;
  title: string;
  des: string;
  link: string;
}

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <span
      className={className}
      style={{
        ...style,
        right: "-8px",
        cursor: "pointer",
        display: "block",
        color: "#07e798",
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
        cursor: "pointer",
        display: "block",
        color: "#07e798",
        fontSize: "45px",
      }}
      onClick={onClick}
    >
      {/* ← */}
    </span>
  );
}

const items: Item[] = [
  {
    id: 1,
    title: "2.10 is live!",
    des: "New ways to manage code execution, projects to organize your flows, variables, events and artifacts are live in this monster release!",
    link: "https://github.com/PrefectHQ/prefect/blob/main/RELEASE-NOTES.md#release-2100",
  },
  {
    id: 2,
    title: "New: Virtual Certification",
    des: "Join us on May 16th to get certified as a Prefect Practitioner!",
    link: "https://github.com/PrefectHQ/prefect/blob/main/RELEASE-NOTES.md#release-2100",
  },
  {
    id: 3,
    title: "New!",
    des: "Configure actions that Prefect Cloud executes with Automations.",
    link: "https://github.com/PrefectHQ/prefect/blob/main/RELEASE-NOTES.md#release-2100",
  },
  {
    id: 4,
    title: "Updated Privacy Policy and Prefect Cloud Terms and Conditions",
    des: "Check out our Legal page for additional detail!",
    link: "https://www.eventbrite.com/e/prefect-practitioner-certification-course-live-online-may-16-2023-tickets-579534351847",
  },
  {
    id: 5,
    title: "2022 Year in Review!",
    des: "Click to read our 2022 Growth Report.",
    link: "https://www.eventbrite.com/e/prefect-practitioner-certification-course-live-online-may-16-2023-tickets-579534351847",
  },
  {
    id: 6,
    title: "See it live!",
    des: "Join our bi-weekly demo of Prefect.",
    link: "https://www.addevent.com/calendar/Ot516860",
  },
  {
    id: 7,
    title: "Prefect Calendar",
    des: "Stay in the loop with all of our virtual and IRL events!.",
    link: "https://www.addevent.com/calendar/Ot516860",
  },
];

const settings = {
  className: "center",
  infinite: true,
  slidesToShow: 1,
  dots: true,
  speed: 500,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export default function TopNav() {
  return (
    <div className="bg-[#090422] text-[#fff] px-[60px] py-1">
      <Slider {...settings}>
        {items.map((item) => (
          <div
            key={item.id}
            className="flex text-center flex-row tracking-widest font-barlow text-[12px]"
          >
            <a href={item?.link} target="_blank">
              {" "}
              <span className="px-1 text-[#07E094]">{item.title}</span>
              <span className="px-1">
                {item.des} <small className="text-[#07E094]">→</small>
              </span>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
