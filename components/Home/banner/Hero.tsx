export default function Hero() {
  return (
    <section className="contain pt-20 pb-40 relative text-gray-400 bg-gray-900 body-font">
      <div className="mx-auto flex px-5 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full text-[#fff]">
          <h1 className="tracking-tight lg:font-[700] md:font-[700] lg:text-[80px] text-[60px]">
            Orchestrate
          </h1>
          <h1 className="tracking-tight lg:font-[700] md:font-[700] lg:text-[80px] text-[60px]">
            data science
          </h1>
          <p className="leading-relaxed lg:text-[24px] mb-4 py-5 font-barlow tracking-wide">
            Orchestrate anything, observe everything.
          </p>
          <div className="flex justify-center gap-16">
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
  );
}
