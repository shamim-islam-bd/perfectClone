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
  {
    iconsTitle: [
      {
        title: "The guide",
        icon: (
          <svg
            data-v-03a6c5a2=""
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-5 inline-block"
          >
            <path
              data-v-03a6c5a2=""
              d="M1 17V14.6642L12.9571 2.70711L14.25 1.41421L16.5858 3.75L15.2929 5.04289L3.33579 17H1Z"
              stroke="#090422"
              strokeWidth="2"
            ></path>
          </svg>
        ),
        link: "#",
        arrow: "→",
      },
      {
        title: "Case Studies",
        icon: (
          <svg
            data-v-03a6c5a2=""
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-4 inline-block"
          >
            <path
              data-v-03a6c5a2=""
              d="M7 2L1.06838 3.97721C1.02754 3.99082 1 4.02903 1 4.07208V18.8613C1 18.9295 1.06687 18.9777 1.13162 18.9561L7 17V2ZM7 2L13 4M13 4L18.8684 2.04387C18.9331 2.02229 19 2.07049 19 2.13874V9M13 4V7"
              stroke="#090422"
              strokeWidth="2"
            ></path>
            <path
              data-v-03a6c5a2=""
              d="M16.8853 16.8853L21 21M18.0667 14.0333C18.0667 16.2609 16.2609 18.0667 14.0333 18.0667C11.8058 18.0667 10 16.2609 10 14.0333C10 11.8058 11.8058 10 14.0333 10C16.2609 10 18.0667 11.8058 18.0667 14.0333Z"
              stroke="#090422"
              strokeWidth="2"
            ></path>
          </svg>
        ),
        link: "#",
        arrow: "→",
      },
      {
        title: "Docs",
        icon: (
          <svg
            data-v-03a6c5a2=""
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-5 inline-block"
          >
            <path
              data-v-03a6c5a2=""
              d="M11 2.64598C12.765 1.59914 14.8143 1 17 1C18.4025 1 19.7489 1.2467 21 1.70009V16.0541C19.7489 15.6007 18.4025 15.354 17 15.354C14.8143 15.354 12.765 15.9532 11 17M11 2.64598V17M11 2.64598C9.23496 1.59914 7.18572 1 5 1C3.59746 1 2.25112 1.2467 1 1.70009V16.0541C2.25112 15.6007 3.59746 15.354 5 15.354C7.18572 15.354 9.23496 15.9532 11 17"
              stroke="#090422"
              strokeWidth="2"
            ></path>
            <path
              data-v-03a6c5a2=""
              d="M13.265 6.46424C15.4212 5.87169 16.6005 5.75943 18.8981 5.99478L19.1019 4.00519C16.5523 3.74403 15.1244 3.87913 12.735 4.53573L13.265 6.46424ZM13.2728 9.96207C15.4846 9.33499 16.6734 9.23161 18.8825 9.49306L19.1175 7.50692C16.634 7.21299 15.18 7.34251 12.7272 8.03791L13.2728 9.96207Z"
              fill="#090422"
            ></path>
            <path
              data-v-03a6c5a2=""
              d="M8.73502 6.46424C6.57876 5.87169 5.39953 5.75943 3.1019 5.99478L2.8981 4.00519C5.44772 3.74403 6.87563 3.87913 9.26498 4.53573L8.73502 6.46424ZM12.7272 11.5379C15.18 10.8425 16.634 10.713 19.1175 11.0069L18.8825 12.9931C16.6734 12.7316 15.4846 12.835 13.2728 13.4621L12.7272 11.5379ZM8.72724 9.96207C6.51544 9.33499 5.32659 9.23161 3.11753 9.49306L2.88247 7.50692C5.366 7.21299 6.82002 7.34251 9.27277 8.03791L8.72724 9.96207ZM8.72723 13.4621C6.51543 12.835 5.32659 12.7316 3.11753 12.9931L2.88247 11.0069C5.36599 10.713 6.82002 10.8425 9.27277 11.5379L8.72723 13.4621Z"
              fill="#090422"
            ></path>
          </svg>
        ),
        link: "#",
        arrow: "→",
      },
    ],
  },
];

export default function ComminityCard() {
  return (
    <div
      className="absolute"
      style={{
        top: 42,
      }}
    >
      <div className="text-dark absolute flex flex-row">
        {data.map((item) => (
          <div key={item.id} className="flex justify-between p-4 bg-[#ebeef7]">
            <div className="">
              <div className="comminityicons">{item.img}</div>
            </div>
            <div className="p-4 text-start">
              <h6 className="font-barlow text-[10px]">{item.title}</h6>
              <p className="text-[11px] py-3">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex text-dark justify-between p-4 bg-[#ebeef7]">
          {data[1]?.iconsTitle?.map((item, i) => (
            <div key={i} className="py-3">
              <a href={item.link}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
                <span className="">{item.arrow}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
