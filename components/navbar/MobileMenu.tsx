import Logoo from "@/public/assets/Logoo";
import MenuClose from "@/public/assets/MenuClose";

const data = [
  {
    id: 1,
    title: "Products",
    items: [
      {
        title: "Why Perfect",
        link: "/about-us",
      },
      {
        title: "Open Source",
        link: "/our-team",
      },
      {
        title: "Cloud Platform",
        link: "/our-mission",
      },
      {
        title: "Documentation",
        link: "/our-vision",
      },
      {
        title: "Pricing",
        link: "/our-vision",
      },
    ],
  },
  {
    id: 2,
    title: "Company",
    items: [
      {
        title: "About Us",
        link: "/web-development",
      },
      {
        title: "Customers",
        link: "/mobile-development",
      },
      {
        title: "Partners",
        link: "/mobile-development",
      },
      {
        title: "Advisory Board",
        link: "/mobile-development",
      },
      {
        title: "Newsroom",
        link: "/mobile-development",
      },
    ],
  },
  {
    id: 3,
    title: "Community",
    items: [
      {
        title: "About Community",
        link: "/contact-us",
      },
      {
        title: "Clud 42",
        link: "/contact-us",
      },
      {
        title: "Community Updates",
        link: "/contact-us",
      },
      {
        title: "Slack Community",
        link: "/contact-us",
      },
      {
        title: "Discord Communit",
        link: "/contact-us",
      },
      {
        title: "Top Contributors",
        link: "/contact-us",
      },
    ],
  },
  {
    id: 4,
    title: "Resources",
    items: [
      {
        title: "Support",
        link: "/contact-us",
      },
      {
        title: "The guide",
        link: "/contact-us",
      },
      {
        title: "Case Studies",
        link: "/contact-us",
      },
      {
        title: "Blog",
        link: "/contact-us",
      },
      {
        title: "Tuitions",
        link: "/contact-us",
      },
      {
        title: "FAQs",
        link: "/contact-us",
      },
      {
        title: "Cookies Settings",
        link: "/contact-us",
      },
      {
        title: "Contact Us",
        link: "/contact-us",
      },
    ],
  },
];

export default function MobileMenu({ isOpen, toggle }) {
  return (
    <div className="font-barlow bg-[#0A082E] text-[#f8ebeb] px-[60px] text-center p-10 pb-40">
      <div className="gap-4 ">
        <div className="mobile flex justify-between">
          <div></div> <Logoo />
          <span className="text-end cursor-pointer" onClick={toggle}>
            <MenuClose />
          </span>
        </div>
        {data.map((item, index) => (
          <ul key={item.id} className="py-3">
            <li className="font-bold text-[#0052ff]">{item.title}</li>
            {item?.items?.map((item, index) => (
              <li key={index} className="py-2">
                <a href="#" target="">
                  {" "}
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        ))}
        <div className="py-4 text-center">
          <button className="btn-2 btn relative prefect-button">
            GET PERFECT
          </button>
          <p className="pt-4 pb-2">
            <button className="btn-1 btn relative prefect-button">
              LOG IN
            </button>
          </p>
          <span className="text-[12px]">Looking for 1.0?</span>
        </div>
      </div>
    </div>
  );
}
