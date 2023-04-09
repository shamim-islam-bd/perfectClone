export default function FooterMiddle() {
  return (
    <div className="px-[60px]">
      <div className="relative z-40 flex flex-col lg:flex-row justify-between lg:items-center py-20 border-t-[1px] border-t-blue-1">
        <div className="flex justify-between items-center basis-1/4">
          <div className="">
            <h1 className="text-[#f8ebeb] font-barlow font-bold text-[20px] py-2">
              Stay in the flow
            </h1>
            <p className="text-[#f8ebeb] font-barlow text-sm text-[14px] py-2">
              Get updates and invitations for early access to Prefect products
            </p>
          </div>
        </div>
        <div className="lg:px-10 basis-2/3">
          <form action="" className="flex gap-5">
            <input
              type="email"
              name="email"
              className="mt-1 px-3 py-2 bg-[#3a364e] border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-2"
              placeholder="you@example.com"
            />

            <button className="btn-1 btn signUp prefect-button">SIGN UP</button>
          </form>
        </div>
      </div>
    </div>
  );
}
