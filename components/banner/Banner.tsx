import Image from "next/image";
import Navbar from "../navbar/Navbar";

import bgline from "../../public/assets/bgline.svg";
import bgshortline from "../../public/assets/bgshortline.svg";
import infrastructure from "../../public/assets/infrastructure.svg";
import robot from "../../public/assets/robot.svg";
import svgexport39 from "../../public/assets/svgexport-39.svg";
import workflows from "../../public/assets/workflows.svg";

export default function Banner() {
  return (
    <div className="relative">
      <div className="absolute gradient-1 object-cover w-full h-full"></div>
      <div className="absolute gradient-2 object-cover w-full h-full"></div>
      <div className="absolute object-cover w-full h-full top-30">
        <Image className="-mt-8 bgline" src={bgline} alt="bgline" />
      </div>
      <Navbar />
      <div className="z-40 mt-80 absolute object-cover right-0 h-full invisible xl:visible opacity-75">
        <Image
          className="mt-20 bgshortline"
          src={bgshortline}
          alt="bgshortline"
        />
      </div>
      <section className="z-40 text-gray-400 bg-gray-900 body-font">
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
              <button className="btn-1 btn relative prefect-button">START FREE</button>
              <button className="btn-2 relative prefect-button">DEPLOY OPEN SOURCE</button>
            </div>
          </div>
        </div>
      </section>
      <div className="container pb-10 px-[28px] flex flex-col md:flex-row lg:flex-row gap-10 text-[#ffff]">
        <div className="hidden lg:block lg:basis-1/4">
          <h2 className="font-barlow tracking-wider text-[48px] font-[700]">
            Supercharge your workflows
          </h2>
          <Image
            className="text-5xl mt-12 ml-2 group-hover:ml-2 text-white"
            src={svgexport39}
            alt="bgline"
            width={40}
            height={30}
          />
        </div>
        <div className="lg:basis-1/4 md:basis-1/3">
          <Image
            className="my-6"
            src={robot}
            alt="bgline"
            width={27}
            height={23}
          />
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
          <Image
            className="my-6"
            src={infrastructure}
            alt="bgline"
            width={27}
            height={23}
          />
          <h4 className="font-barlow tracking-wider my-4 font-bold text-2xl">
            RUN
          </h4>
          <p className="font-barlow tracking-wider ">
            Design and test your workflow with our popular open-source
            framework.
          </p>
        </div>
        <div className="lg:basis-1/4 md:basis-1/3">
          <Image
            className="my-6"
            src={workflows}
            alt="bgline"
            width={27}
            height={23}
          />
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
