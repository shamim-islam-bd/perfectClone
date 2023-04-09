export default function Hero() {
  return (
    <div>
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
    </div>
  );
}