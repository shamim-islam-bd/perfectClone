import Navbar from "@/components/navbar/Navbar";
import Aboutusillustration from "@/public/assets/Aboutusillustration";
import Prefectteammapped from "@/public/assets/Prefectteammapped";
export default function Company() {
  return (
    <>
      <div>
        <div className="company">
          <Navbar />
        </div>
        <div className="flex justify-between contain py-20">
          <div className="basis-1/2">
            <h2 className="text-3xl font-bold">
              Prefect is the new standard in dataflow automation
            </h2>
            <p className="py-8 text-barlow">
              Our company is dedicated to empowering our users. We create
              frameworks that govern automation and deliver confidence, and we
              focus on design because we know that sophisticated products can
              still be easy to use.
            </p>
          </div>
          <div className="basis-1/2">
            <p className="text-barlow">
              Many Prefectionists are reformed data scientists and engineers,
              finally given the agency to create the tools we wished we had.
              We're united by a love of building beautiful products with new
              technologies. 2018 Prefect founded SERIES B $32.0 m Tiger Global
              Bessemer Venture Partners SERIES A $11.5 m Positive Sum Valor
              Equity Partners Atreides Operator Partners SERIES SEED $3.1 m
              Prefect is a remote-first company, anchored by Prefectionists in
              Washington, DC, Silicon Valley, and Chicago. Prefect is a
              remote-first company, anchored by Prefectionists in Washington,
              DC, Silicon Valley, and Chicago.
            </p>
          </div>
        </div>

        <div className="lg:flex lg:justify-between  text-[#fff] relative mt-20">
          <div className="">
            <div className="bg-[#024CF9] p-6 m-4 w-[280px] rounded pt-28">
              <h2 className="font-bold font-barlow text-[60px]">2018</h2>
              <p className="text-[22px] ">Prefect founded</p>
            </div>
            <div className="bg-[#024CF9] p-6 m-4 w-[280px] rounded about-us-stats">
              <div className="tall-wraper pl-10">
                <div className="prefect-funding a mb-36 mt-10">
                  <h4 className="text-[12px] text-[#79D0FB] font-barlow">
                    SERIES B
                  </h4>
                  <p className="font-bold text-[30px] py-5">$32.0 m</p>
                  <a href="#" className="font-input inline-block py-2">
                    Tiger Global
                  </a>
                  <a href="#" className="font-input inline-block py-2">
                    Bessemer Venture Partners
                  </a>
                </div>
                <div className="prefect-funding b my-30">
                  <h4 className="text-[12px] text-[#79D0FB] font-barlow">
                    SERIES A
                  </h4>
                  <h4 className="font-bold text-[30px] py-5 inline-block">
                    $32.0 m
                  </h4>
                  <br />
                  <a href="#" className="font-input inline-block py-2">
                    {" "}
                    Positive Sum
                  </a>
                  <a href="#" className="font-input inline-block py-2">
                    Valor Equity Partners
                  </a>
                  <a href="#" className="font-input inline-block py-2">
                    Atreides
                  </a>
                  <a href="#" className="font-input inline-block py-2">
                    Operator Partners
                  </a>
                </div>
                <div className="prefect-funding c mt-36 mb-20">
                  <span className="text-[12px] text-[#79D0FB] font-barlow">
                    SERIES SEED
                  </span>
                  <p className="font-bold text-[30px] py-5">$32.0 m</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-between ">
              <div className="bg-[#024CF9] p-6 m-4 relative">
                <div className="">
                  <Prefectteammapped />
                </div>
                <p className="absolute top-28 text-barlow text-[20px]">
                  Prefect is a remote-first company, anchored by Prefectionists
                  in Washington, DC, Silicon Valley, and Chicago. Prefect is a
                  remote-first company, anchored by Prefectionists in
                  Washington, DC, Silicon Valley, and Chicago.
                </p>
              </div>
              <div className="bg-[#024CF9] p-6 m-4 prefect-blog-post absolute right-0">
                <div className="pb-20 pt-60">
                  <span className="text-[12px] text-[#79D0FB] font-barlow">
                    BLOG
                  </span>
                  <h2 className="font-bold text-[30px] py-5">
                    Positive and Negative Engineering
                  </h2>
                  <p className="text">
                    Learn more about our mission from our very first blog post.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Aboutusillustration />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
