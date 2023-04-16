import Logoo from "@/public/assets/Logoo";
import Menu from "@/public/assets/Menu";
import { useEffect, useState } from "react";
import HoverCard from "./HoverCard";
import MobileMenu from "./MobileMenu";
import TopNav from "./TopNav";

import { companyData, data } from "./CardData";
import ComminityCard from "./ComminityCard";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarFixed, setNavbarFixed] = useState(false);

  useEffect(() => {
    const bgSet = document.getElementById("bgSet");
    window.addEventListener(
      "resize",
      () =>
        window.innerWidth >= 930 &&
        (bgSet.style.backgroundColor = "transparent") &&
        setIsOpen(false)
      // close the menu if the window is resized to be larger than 960px
    );

    // navbar fixed when scroll down 100px
    const handleScroll = () => {
      // const topNav = document.getElementById("topNav");
      if (window.scrollY > 80) {
        document.getElementById("topNav").style.display = "hidden";
        document.getElementById("bgSet").style.backgroundColor = "#090628";
        setNavbarFixed(true);
      } else {
        document.getElementById("topNav").style.display = "block";
        document.getElementById("bgSet").style.backgroundColor = "transparent";
        setNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  // toggle menu on mobile view
  const toggle = () => {
    setIsOpen(!isOpen);
    const bgSet = document.getElementById("bgSet");
    if (isOpen) {
      bgSet.style.backgroundColor = "transparent";
    } else {
      // bgSet.style.backgroundColor = "#0A082E";
      document.getElementById("bgSet").style.backgroundColor = "transparent";
    }
  };

  return (
    <div className="relative">
      <div id="topNav" className="scroll-smooth ">
        <TopNav />
      </div>
      <div
        id="navbar"
        className={`navbar ${
          navbarFixed ? "fixed" : " "
        } z-50 lg:pb-0 pb-14 top-0 w-full items-center lg:h-auto font-inputSans tracking-wide`}
      >
        <div className="text-[#fff] color">
          <header
            id="bgSet"
            className="relative z-30 w-full flex flex-col lg:flex-row tracking-widest text-gray-400 py-6 px-8 text-center items-center justify-between"
          >
            <div className="basis-1/4 w-full lg:w-[0] flex justify-between font-medium text-white">
              <a href="#">
                <Logoo />
              </a>
              <div className="lg:hidden">
                {isOpen ? null : (
                  <button onClick={toggle}>
                    <Menu />
                  </button>
                )}
              </div>
            </div>
            <nav className="lg:flex relative hidden z-10 basis-3/4 uppercase text-sm items-center justify-end">
              <div className="mx-4 productMain">
                <a href="#" className="hover:text-[#fff]">
                  PRODUCT
                </a>
                <div className="hidden product relative">hover me</div>
              </div>
              <div className="mx-4 companyMain">
                <a href="#" className="hover:text-[#fff]">
                  COMPANY
                </a>
                <div className="hidden company relative">
                  <HoverCard data={companyData} />
                </div>
              </div>
              <div className="mx-4 communityMain">
                <a href="#" className="hover:text-[#fff]">
                  COMMUNITY
                </a>
                <div className="hidden community relative">
                  <ComminityCard />
                </div>
              </div>
              <div className="mx-4 resourceMain">
                <a href="#" className="hover:text-[#fff]">
                  RESOURCES
                </a>
                <div className="hidden resource relative">
                  <HoverCard data={data} />
                </div>
              </div>
              <div className="mx-4 pricingMain">
                <a href="#" className="hover:text-[#fff]">
                  RRICING
                </a>
                <div className="hidden pricing relative">hover me</div>
              </div>
              <button className="btn-2 relative prefect-button mx-4">
                GET STARTED
              </button>

              <button className="relative login inline-flex items-center bg-gray-800 border-0 py-1 pr-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                <span className="mx-4 text-sm ">
                  LOG IN<span className="arrow ml-2 absolute"> → </span>
                </span>
              </button>
            </nav>

            {isOpen ? (
              <div
                className="h-screen"
                style={{
                  height: "100vh",
                  width: "100vw",
                  position: "relative",
                  top: "-55px",
                  overflow: "auto",
                  marginLeft: "18px",
                }}
              >
                <MobileMenu toggle={toggle} isOpen={isOpen} />
              </div>
            ) : null}
          </header>
        </div>
      </div>
    </div>
  );
}