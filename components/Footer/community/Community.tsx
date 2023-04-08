import DeployandCloud from "@/public/assets/DeployandCloud";
import GetStartedPrefect from "@/public/assets/GetStartedPrefect";
import GetconnectedUser from "@/public/assets/GetconnectedUser";
import Getconnectedslack from "@/public/assets/Getconnectedslack";

const data = [
  {
    id: 1,
    title: "Get started with Prefect 2.0",
    des: "The Prefect Python library includes everything you need to design, build, test, and run powerful data applications.",
    img: <GetStartedPrefect />,
    btn: "READ THE DOCS",
  },
  {
    id: 2,
    title: "Deploy and scale on Cloud",
    des: "Unlimited workflows and a free forever plan.",
    img: <DeployandCloud />,
    btn: "GET STARTED FOR FREE",
  },
  {
    id: 3,
    title: "Join the Community",
    des: "Get support, learn, build, and share with thousands of talented data engineers.",
    img: <Getconnectedslack />,
    btn: "JOIN SLACK",
  },
  {
    id: 4,
    title: "Get Answers",
    des: "Find all the answers to your Prefect questions in our Discourse forum.",
    img: <GetconnectedUser />,
    btn: "JOIN DISCOURSE",
  },
];

export default function Community() {
  return (
    <div className="grid grid-cols-4 py-28 mt-40 px-[60px] gap-4 bg-blue-1 text-[#fff]">
      {data.map((item) => (
        <div key={item.id} className="opacity-100">
          <div className="img-community">{item.img}</div>
          <h4 className="font-barlow text-2xl tracking-wider my-8 font-bold">
            {item.title}
          </h4>
          <p className="font-barlow tracking-wider ">{item.des}</p>
          <button className="py-4 gap-2 inline-flex items-center bg-gray-800 border-0 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            <span className="text-[12px] tracking-widest">{item.btn}</span>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
