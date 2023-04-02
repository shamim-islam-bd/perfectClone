import { Image } from "next/image";

export default function Navbar() {
  return <div className="">
    <div className="flex">
      <div>
        <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
      </div>
    </div>
  </div>;
}
