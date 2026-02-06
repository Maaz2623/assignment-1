import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const Footer = () => {
  const links = [
    { name: "Service Agreement", url: "/service-agreement" },
    { name: "Privacy and Security", url: "/privacy-and-security" },
  ];

  return (
    <div className="bg-white text-black z-10 min-h-[2rem] w-full flex flex-wrap justify-center md:justify-end border-t py-2 md:py-1 items-center gap-x-2 gap-y-1 px-2">
      {links.map((link, i) => (
        <Link
          href={link.url}
          key={link.url}
          className={`${
            poppins.className
          } text-xs sm:text-sm text-neutral-700 mr-2 sm:mr-3 pr-2 ${
            i !== links.length - 1 ? "md:border-r md:border-r-emerald-400" : ""
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Footer;
