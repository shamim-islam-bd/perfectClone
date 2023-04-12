import Infrastructure from "@/public/assets/Infrastructure";
import Robot from "@/public/assets/Robot";
import Workflows from "@/public/assets/Workflows";

export default function Workflow() {
  return (
    <div>
      <div className="contain relative pb-16 flex flex-col md:flex-row lg:flex-row gap-10 text-[#ffff]">
        <div className="hidden lg:block lg:basis-1/4">
          <h2 className="font-barlow tracking-wider text-[48px] font-[700]">
            Supercharge your workflows
          </h2>
          <p className="text-5xl mt-4 text-white">→</p>
        </div>
        <div className="lg:basis-1/4 md:basis-1/3">
          <Robot />
          <h4 className="font-barlow tracking-wider my-4 font-bold text-2xl">
            Build
          </h4>
          <p className="font-barlow tracking-wider mb-8">
            Design and test your workflow with our popular open-source
            framework.
          </p>
          <a href="#" className="perfectbtn font-input my-3 tracking-widest">
            PREFECT 2.0 <span className="arrow">→</span>
          </a>
        </div>
        <div className="lg:basis-1/4 md:basis-1/3">
          <Infrastructure />
          <h4 className="font-barlow tracking-wider my-4 font-bold text-2xl">
            RUN
          </h4>
          <p className="font-barlow tracking-wider ">
            Design and test your workflow with our popular open-source
            framework.
          </p>
        </div>
        <div className="lg:basis-1/4 md:basis-1/3">
          <Workflows />
          <h4 className="font-barlow tracking-wider my-4 font-bold text-2xl">
            MONITOR
          </h4>
          <p className="font-barlow tracking-wider mb-8">
            Design and test your workflow with our popular open-source
            framework.
          </p>
          <a href="#" className="perfectbtn font-input my-3 tracking-widest">
            {" "}
            PREFECT 2.0 <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
