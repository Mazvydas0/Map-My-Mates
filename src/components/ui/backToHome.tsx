import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";

export default function BackToHome() {
  return (
    <div className="left-3 top-1">
      <Link
        href={"/"}
        className="self-end mt-10 ml-3 w-20 py-2 px-2 bg  text-[#0a3d62] 
    hover:bg-[#0a3d62] bg-white hover:text-white rounded flex"
      >
        <ArrowBigLeft /> back
      </Link>
    </div>
  );
}
