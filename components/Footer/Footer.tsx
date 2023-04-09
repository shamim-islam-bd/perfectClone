import FooterSvg from "@/public/assets/FooterSvg";
import FooterBottm from "./FooterBottm";
import FooterMiddle from "./FooterMiddle";
import FooterTop from "./FooterTop";
import Community from "./community/Community";

export default function Footer() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute z-10 bottom-0 -right-14 opacity-60">
        <FooterSvg />
      </div>
      <Community />
      <div className="bg-[#090422]">
        <FooterTop />
        <FooterMiddle />
        <FooterBottm />
      </div>
    </div>
  );
}
