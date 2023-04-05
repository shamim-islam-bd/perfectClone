import Image from "next/image";
import Navbar from "../navbar/Navbar";

import Bgline from "@/public/assets/Bgline";
import Bgshortline from "@/public/assets/Bgshortline";
// import infrastructure from "../../public/assets/infrastructure.svg";
// import robot from "../../public/assets/robot.svg";
// import svgexport39 from "../../public/assets/svgexport-39.svg";
// import workflows from "../../public/assets/workflows.svg";
import Svgexport39 from "@/public/assets/Svgexport39";
import Robot from "@/public/assets/Robot";
import Infrastructure from "@/public/assets/Infrastructure";
import Workflows from "@/public/assets/Workflows";

export default function Banner() {
  return (
    <div className="relative ">
      <div className="absolute gradient-1 object-cover w-full h-full"></div>
      <div className="absolute gradient-2 object-cover w-full h-full"></div>
      <div className="absolute opacity-60 object-cover w-full h-full top-30">
        <Bgline />
      </div>
      <Navbar />
      <div className="mt-80 absolute object-cover right-0 h-full invisible lg:visible xl:visible opacity-75">
        <Bgshortline />
      </div>
      <section className="container z-40 text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full text-[#fff]">
            <h1 className="tracking-tight lg:font-[700] md:font-[700] lg:text-[80px] md:text-[80px]">
              Orchestrate
            </h1>
            <h1 className="tracking-tight lg:font-[700] md:font-[700] lg:text-[80px] md:text-[80px]">
              data science
            </h1>
            <p className="leading-relaxed text-[24px] mb-4 py-5 font-barlow tracking-wide">
              Orchestrate anything, observe everything.
            </p>
            <div className="flex justify-center gap-10">
              <button className="btn-1 btn relative prefect-button">
                START FREE
              </button>
              <button className="btn-2 btn relative prefect-button">
                DEPLOY OPEN SOURCE
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="container pb-16 px-[28px] flex flex-col md:flex-row lg:flex-row gap-10 text-[#ffff]">
        <div className="hidden lg:block lg:basis-1/4">
          <h2 className="font-barlow tracking-wider text-[48px] font-[700]">
            Supercharge your workflows
          </h2>
          <Svgexport39 />
        </div>
        <div className="lg:basis-1/4 md:basis-1/3">
          <Robot/>
          <h4 className="font-barlow tracking-wider my-4 font-bold text-2xl">
            Build
          </h4>
          <p className="font-barlow tracking-wider ">
            Design and test your workflow with our popular open-source
            framework.
          </p>
          <p className="font-input mt-8 my-3 tracking-widest">PREFECT 2.0</p>
        </div>
        <div className="lg:basis-1/4 md:basis-1/3">
          <Infrastructure/>
          <h4 className="font-barlow tracking-wider my-4 font-bold text-2xl">
            RUN
          </h4>
          <p className="font-barlow tracking-wider ">
            Design and test your workflow with our popular open-source
            framework.
          </p>
        </div>
        <div className="lg:basis-1/4 md:basis-1/3">
          <Workflows/>
          <h4 className="font-barlow tracking-wider my-4 font-bold text-2xl">
            MONITOR
          </h4>
          <p className="font-barlow tracking-wider ">
            Design and test your workflow with our popular open-source
            framework.
          </p>
          <p className="font-input mt-8 my-3 tracking-widest">PREFECT 2.0</p>
        </div>
      </div>
    </div>
  );
}
