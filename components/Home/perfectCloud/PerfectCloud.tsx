import Bgshortline from "@/public/assets/Bgshortline";
import Image from "next/image";
import HeroDark1 from "../../../public/images/HeroDark1.1__2_.png";
import PrefectCloud from "../../../public/images/Prefect-Cloud_Logo.png";

export default function PerfectCloud() {
  return (
    <div className="bg-[#ffff] text-dark pt-16">
      <div className="mt-60 absolute object-cover right-0 h-full invisible lg:visible xl:visible opacity-75">
        <Bgshortline />
      </div>
      <div className="contain relative gap-10 flex flex-col lg:flex-row items-center justify-between">
        <div className="basis-1/2 z-30 lg:order-first order-last">
          <div
            className="mx-auto p-2 shadow-lg bg-[#fff] rounded-lg radius-10"
            style={{
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
              className="my-4"
              src={HeroDark1}
              alt="hero"
              width={616}
              height={443}
            />
          </div>
        </div>
        <div className="basis-1/2">
          <Image
            className="my-4 lg:m-0 mx-auto"
            src={PrefectCloud}
            alt="hero"
            width={300}
            height={300}
          />
          <small
            className="mb-4 text-center lg:text-start text-blue-1 text-[14px] font-input md:block md:center"
            style={{
              opacity: 0.7,
              letterSpacing: "1.5px",
              //   textAlign: "start",
            }}
          >
            DATAFLOW AUTOMATION PLATFORM
          </small>

          <h1
            className="my-8 text-center lg:text-start text-[64px] font-semibold font-barlow"
            style={{
              lineHeight: "64px",
            }}
          >
            Create powerful data pipelines
          </h1>
          <p
            className="my-9 text-center lg:text-start tracking-wider font-barlow"
            style={{
              opacity: 0.8,
            }}
          >
            Let Prefect take care of scheduling, infrastructure, error handling,
            retries, logs, triggers, data serialization, parameterization,
            dynamic mapping, caching, concurrency, and more.
          </p>

          <div className="flex justify-center lg:justify-start gap-6">
            <button className="btn-2 btn relative prefect-button">
              START FREE
            </button>
            <button className="mr-4 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              <span className="text-[12px] tracking-widest">CONTACT SALES</span>
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
        </div>
      </div>
      <div className=" process-task-runs-wrapper text-start hidden md:block lg:block">
        <div className="process-task-runs z-10 hidden md:block lg:block">
          <div className="contain pt-14">
            <h1 className="text-[#2ccffe] text-[48px] font-barlow pt-8 lg:pt-8">
              150,000,000 +
            </h1>
            <p
              className="tracking-widest"
              style={{
                letterSpacing: "4px",
              }}
            >
              Successful runs every month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
