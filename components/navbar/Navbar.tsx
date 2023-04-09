import Logoo from "@/public/assets/Logoo";
import Menu from "@/public/assets/Menu";
import MenuClose from "@/public/assets/MenuClose";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // let bgSet = document.getElementById("bgSet");

  useEffect(() => {
    const bgSet = document.getElementById("bgSet");
    window.addEventListener(
      "resize",
      () =>
        window.innerWidth >= 960 &&
        (bgSet.style.backgroundColor = "transparent") &&
        setIsOpen(false)
      // close the menu if the window is resized to be larger than 960px
    );
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
    const bgSet = document.getElementById("bgSet");
    if (isOpen) {
      bgSet.style.backgroundColor = "transparent";
    } else {
      bgSet.style.backgroundColor = "#0A082E";
    }
  };

  return (
    <div className="relative lg:pb-0 pb-14 w-full overflow-auto items-center h-screen lg:h-auto font-input tracking-wide">
      <div id="bgSet" className="text-[#ffff]">
        <header className="w-full flex flex-col lg:flex-row tracking-widest text-gray-400 py-6 px-8 bg-gray-900 text-center items-center justify-between">
          <div className="basis-1/4 w-full lg:w-[0] flex justify-between font-medium text-white">
            <a href="#">
              <Logoo />
            </a>
            <div className="lg:hidden">
              {isOpen ? (
                <button onClick={toggle}>
                  <MenuClose />
                </button>
              ) : (
                <button onClick={toggle}>
                  <Menu />
                </button>
              )}
            </div>
          </div>
          <nav className="lg:block relative z-10 basis-3/4 uppercase text-sm gap-4 hidden items-center justify-end">
            <a href="#" className="mr-5 hover:text-[#fff]">
              PRODUCT
            </a>
            <a href="#" className="mr-5 hover:text-[#fff]">
              COMPANY
            </a>
            <a href="#" className="mr-5 hover:text-[#fff]">
              COMMUNITY
            </a>
            <a href="#" className="mr-5 hover:text-[#fff]">
              RESOURCES
            </a>
            <a href="#" className="mr-5 hover:text-[#fff]">
              RRICING
            </a>
            <button className="btn-2 relative prefect-button mr-4">
              GET STARTED
            </button>

            <button className="inline-flex items-center bg-gray-800 border-0 py-1 pr-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              <span className="mr-3 text-sm"> LOG IN</span>
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
          </nav>

          {isOpen ? (
            <div className="">
              <MobileMenu />
            </div>
          ) : null}
        </header>
      </div>
    </div>
  );
}
