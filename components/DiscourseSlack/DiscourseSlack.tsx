import { Svgexport35Black } from "@/public/assets/Discourse";
import { Svgexport47Black } from "@/public/assets/Slack";

const data = [
  {
    id: 1,
    title: "Join Discourse",
    des: "Find all the answers to your Prefect questions in our Discourse forum.",
    img: <Svgexport35Black />,
  },
  {
    id: 2,
    title: "Join Slack",
    des: "Become a Prefectionist and experience one of the largest data communities in the world.",
    img: <Svgexport47Black />,
  },
];

export default function DiscourseSlack() {
  return (
    <div className="px-[80px] flex flex-col lg:flex-row md:flex-row justify-around">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-center content-center miter-gradient m-4 lg:p-0 md:p-2 p-4 overflow-hidden"
        >
          <div className="relative">
            <div className="hidden align-middle lg:block icon-circle-wrapper rounded-full w-60 h-[170px] -ml-24 xl:-ml-16 items-center justify-center">
              {item.img}
            </div>
            <div className="block lg:hidden opacity-50">{item.img}</div>
          </div>
          <div className="px-4">
            <span className="lg:text-2xl md:text-xl font-barlow">
              {item.title}
            </span>
            <p className="text-lg hidden md:block lg:block text-barlow">
              {item.des}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
