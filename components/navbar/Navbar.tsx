import Logoo from "@/public/assets/Logoo";

export default function Navbar() {
  return (
    <div className="w-2xl font-input tracking-wide">
      <div className="text-[#ffff]">
        <header className="tracking-widest text-gray-400 py-6 px-8 bg-gray-900 body-font flex items-center justify-between">
          <div className="font-medium items-center text-white mb-4 md:mb-0">
            <Logoo />
          </div>
          <nav
            className="uppercase text-sm gap-4 flex flex-wrap items-center justify-end"
            style={{
              opacity: 0.85,
            }}
          >
            <a className="mr-5 hover:text-white">PRODUCT</a>
            <a className="mr-5 hover:text-white">COMPANY</a>
            <a className="mr-5 hover:text-white">COMMUNITY</a>
            <a className="mr-5 hover:text-white">RESOURCES</a>
            <a className="mr-5 hover:text-white">RRICING</a>
            <button className="btn-2 relative prefect-button mr-5">
              GET STARTED
            </button>
            <div className="mr-5">
              <button className="mr-6 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                <span className="mr-4 text-sm"> LOG IN</span>
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
          </nav>
        </header>
      </div>
    </div>
  );
}
