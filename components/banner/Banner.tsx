import Navbar from "../navbar/Navbar";

import Bgline from "@/public/assets/Bgline";
import Bgshortline from "@/public/assets/Bgshortline";
import FocusCode from "../focusCode/FocusCode";
import Hero from "./Hero";
import Workflow from "./Workflow";

export default function Banner() {
  return (
    <div className="relative ">
      <div className="absolute gradient-1 object-cover w-full h-full"></div>
      <div className="absolute gradient-2 object-cover w-full h-full"></div>
      <div className="absolute opacity-60 overflow-hidden object-cover w-full h-full top-30">
        <Bgline />
      </div>
      <Navbar />
      <div className="mt-80 absolute object-cover right-0 h-full invisible lg:visible xl:visible opacity-75">
        <Bgshortline />
      </div>
      <Hero />
      <Workflow />
      <FocusCode />
    </div>
  );
}
