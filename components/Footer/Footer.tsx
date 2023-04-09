import FooterSvg from "@/public/assets/FooterSvg";
import FooterBottm from "./FooterBottm";
import FooterMiddle from "./FooterMiddle";
import FooterTop from "./FooterTop";
import Community from "./community/Community";

export default function Footer() {
  return (
    <div className="bg-[#090422] relative  overflow-hidden">
      <div>
        <div className="absolute bottom-0 -right-14 opacity-60">
          <FooterSvg />
        </div>
        <Community />
        <div className="z-40 relative">
          <FooterTop />
          <FooterMiddle />
          <FooterBottm />
        </div>
      </div>
    </div>
  );
}
