import { GlobeIcon } from "lucide-react";
import { Bebas_Neue, Poppins } from "next/font/google";
import { Changa_One } from "next/font/google";
import LoginForm from "./form";
import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "Contact Us", url: "/contact-us" },
  { name: "Exchange Rates", url: "/exchange-rates" },
  { name: "Service Agreement", url: "/service-agreement" },
  {
    name: "Organizational Service Agreement",
    url: "/organizational-service-agreement",
  },
  { name: "Privacy and Security", url: "/privacy-and-security" },
];

const changaOne = Changa_One({ subsets: ["latin"], weight: ["400"] });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const SignInPage = () => {
  return (
    <div className="min-h-screen w-full text-white flex flex-col relative">
      <Image
        src="/bg.png"
        alt="background"
        className="absolute -z-10 object-cover"
        fill
      />

      <div className="px-4 sm:px-10 py-3 flex flex-col md:flex-row flex-1 gap-10">
        <div className="w-full flex justify-center md:justify-start">
          <CommunityBankLogo />
        </div>

        <div className="w-full flex items-center justify-center">
          <LoginForm />
        </div>
      </div>

      <div className="bg-white text-black z-10 min-h-[2rem] w-full flex flex-wrap justify-center md:justify-end px-4 md:pr-20 items-center gap-y-1">
        {links.map((link, i) => (
          <Link
            href={link.url}
            key={link.url}
            className={`${
              poppins.className
            } text-xs sm:text-sm text-neutral-700 mr-3 pr-2 ${
              i !== links.length - 1
                ? "md:border-r md:border-r-emerald-400"
                : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SignInPage;

export const CommunityBankLogo = () => {
  return (
    <div className="w-fit text-center md:text-left">
      <h1
        className={`${changaOne.className} tracking-normal text-2xl sm:text-3xl`}
      >
        CommunityBank
      </h1>
      <div className="flex justify-center md:justify-between items-center gap-2">
        <p className="text-[10px] tracking-tight -mt-1">Operated by</p>
        <div className="flex items-center gap-x-0.5">
          <GlobeIcon className="w-4 -mt-1" />
          <p className={bebas.className}>NAVY FEDERAL CREDIT UNION.</p>
        </div>
      </div>
    </div>
  );
};
