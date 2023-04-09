import Image from "next/image";

import Github from "@/public/assets/Github";
import Linkdin from "@/public/assets/Linkdin";
import Twiteer from "@/public/assets/Twiteer";
import Youtube from "@/public/assets/Youtube";
import Laila from "../../public/images/laila.png";

export default function FooterBottm() {
  return (
    <div className="text-[#fff] opacity-90">
      <div className="flex font-input px-[60px] text-sm p-6 bg-[#073FF9] mb-4 flex-col lg:flex-row justify-between ">
        <ul className="flex gap-8">
          <li><a href="#">CLOUD STATUS</a></li>
          <li><a href="#">PRIVACY & TERMS</a></li>
          <li><a href="#">SECURITY</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>
        <ul className="flex gap-4">
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              {" "}
              <Github />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              {" "}
              <Twiteer />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              {" "}
              <Linkdin />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              {" "}
              <Youtube />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex py-6 text-sm font-input justify-between px-[60px] items-center">
        <p>© Copyright 2023 Prefect Technologies, Inc. All rights reserved.</p>
        <Image src={Laila} width={90} height={90} alt="" />
      </div>
    </div>
  );
}
