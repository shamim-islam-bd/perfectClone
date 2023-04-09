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
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-28 mt-40 px-[60px] gap-4 bg-blue-1 text-[#fff]">
      {data.map((item) => (
        <div key={item.id} className="opacity-100">
          <div className="img-community">{item.img}</div>
          <h4 className="font-barlow text-2xl tracking-wider my-8 font-bold">
            {item.title}
          </h4>
          <p className="font-barlow tracking-wider ">{item.des}</p>
          <button className="py-4 gap-2 inline-flex items-center bg-gray-800 border-0 rounded text-base mt-4 md:mt-0">
            <span className="text-[12px] tracking-widest">{item.btn}</span>
            <svg
              width="19"
              height="8"
              viewBox="0 0 19 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3536 4.35355C18.5488 4.15829 18.5488 3.84171 18.3536 3.64645L15.1716 0.464466C14.9763 0.269204 14.6597 0.269204 14.4645 0.464466C14.2692 0.659728 14.2692 0.976311 14.4645 1.17157L17.2929 4L14.4645 6.82843C14.2692 7.02369 14.2692 7.34027 14.4645 7.53553C14.6597 7.7308 14.9763 7.7308 15.1716 7.53553L18.3536 4.35355ZM0 4.5L18 4.5V3.5L0 3.5L0 4.5Z"
                fill="white"
              ></path>
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
