import Image from "next/image";
import Abbvie from "../../public/assets/svgexport-1.svg";

export default function Navbar() {
  return (
    <div className="w-2xl font-input tracking-wide ">
      <div className="text-[#ffff]">
        <header className="text-gray-400 bg-gray-900 body-font">
          <div className="container flex justify-between p-5 flex-col  items-center">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <Image
                className=""
                src={Abbvie}
                alt="logo"
                width={100}
                height={100}
              />
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:text-white">First Link</a>
              <a className="mr-5 hover:text-white">Second Link</a>
              <a className="mr-5 hover:text-white">Third Link</a>
              <a className="mr-5 hover:text-white">Fourth Link</a>
              <button className="btn-2 relative prefect-button mr-5">
                GET STARTED
              </button>
              <button className="mr-6 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                Login
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
          </div>
        </header>
      </div>
    </div>
  );
}
