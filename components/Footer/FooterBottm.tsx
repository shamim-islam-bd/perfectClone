import Image from "next/image";

import Laila from "../../public/images/laila.png";

export default function FooterBottm() {
  return (
    <div className="text-[#fff] ">
      <div className="flex font-input px-[60px] text-sm p-6 bg-blue-1 mb-4 flex-col lg:flex-row justify-between ">
        <ul className="flex gap-5">
          <li>CLOUD STATUS</li>
          <li>PRIVACY & TERMS</li>
          <li>SECURITY</li>
          <li>CONTACT US</li>
        </ul>
        <ul className="flex gap-5">
          <li>icon</li>
          <li>icon</li>
          <li>icon</li>
          <li>icon</li>
        </ul>
      </div>
      <div className="flex py-6 text-sm font-input justify-between px-[60px] items-center">
        <p>© Copyright 2023 Prefect Technologies, Inc. All rights reserved.</p>
        <Image src={Laila} width={90} height={90} alt="" />
      </div>
    </div>
  );
}
