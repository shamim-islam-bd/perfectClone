import Image from "next/image";
import { CopyBlock, dracula } from "react-code-blocks";
import Copy from "@/public/assets/Copy";
import { useState } from "react";
import perfect from "../../../public/images/prefect-2.0-logo-light.png";

export default function FocusCode() {
  const text = `from prefect import flow, task
@task

def say_hello():
    print("Hello, World! I'm Marvin!")


 @flow(name="Prefect 2.0 Flow")
def marvin_flow():
   say_hello()


 marvin_flow()    # "Hello, World! I'm Marvin!"
`;

  const [hover, setHover] = useState(true);
  const [copyText, setCopyText] = useState("COPY");

  const copiedSlipboard = (e: any) => {
    setHover(false);
    navigator.clipboard.writeText(e);
    setCopyText("COPIED");
  };

  const hoverOver = () => {
    if (copyText === "COPIED") {
      setCopyText("COPY");
    }
    setHover(false);
  };

  const onMouseLeave = () => {
    setHover(true);
  };

  return (
    <div className="bg-[#090422] text-[#fff] pt-40 pb-10">
      <div className="contain gap-10 flex flex-col lg:flex-row justify-between">
        <div className="basis-1/3">
          <Image
            className="my-4"
            src={perfect}
            alt="hero"
            width={200}
            height={200}
          />
          <small
            className="mb-4"
            style={{
              opacity: 0.5,
            }}
          >
            OPEN-SOURCE WORKFLOW MANAGEMENT
          </small>

          <h1 className="my-8 text-[64px] font-bold font-barlow">
            Focus on your code
          </h1>
          <p className="my-9 tracking-wider font-barlow">
            Use a flexible Python framework to easily combine tasks into
            workflows, then deploy, schedule, and monitor their execution
            through the Prefect UI or API.
          </p>

          <div className="flex gap-6">
            <button className="btn-2 btn relative prefect-button">
              GET THE CODE
            </button>
            <button className="mr-4 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              <span className="text-[12px] tracking-widest">READ THE DOC</span>
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
        <div className="basis-2/3">
          <CopyBlock
            className=""
            text={text}
            language="python"
            showLineNumbers={true}
            theme={dracula}
            codeBlock={true}
            customStyle={{
              backgroundColor: "#1D1834",
              color: "#fff",
              padding: "40px",
              fontFamily: "input",
              wordSpacing: "6px",
              fontSize: "15px",
              letterSpacing: "0.8px",
              //   fontStyle: "italic",
            }}
          />
          <div className="w-full relative z-20 h-12 bg-[#282a36] rounded-b group">
            <span
              onClick={() => copiedSlipboard(text)}
              onMouseOver={() => hoverOver()}
              onMouseLeave={() => onMouseLeave()}
              className="ml-auto w-24 px-4 bg-blue-1 text-white h-full flex items-center justify-center cursor-pointer rounded-br active:bg-blue-900 hover:bg-blue-700"
            >
              {hover ? (
                <Copy />
              ) : (
                <div>
                  {copyText === "COPIED" ? (
                    <span className="text-[12px] tracking-widest cursor-copy">
                      COPIED
                    </span>
                  ) : (
                    <span className="text-[12px] tracking-widest cursor-copy">
                      COPY
                    </span>
                  )}
                </div>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="contain py-10 text-end hidden lg:block">
        <h1 className="text-[#1F97FA] text-[48px] font-barlow">11,639</h1>
        <p
          className="tracking-widest"
          style={{
            letterSpacing: "4px",
          }}
        >
          Github Stars
        </p>
      </div>
    </div>
  );
}
