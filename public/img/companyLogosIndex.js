import React from "react";
import Image from "next/image";
import logo1 from "./companyLogo_4.png";
import logo2 from "./companyLogo_3.png";
import logo3 from "./companyLogo_2.png";
import logo4 from "./companyLogo_1.png";
import logo from "./tradingPointLogo.png";

export const MetaQuoteslogo = (
  <Image src={logo1} alt="logo-company-1" priority />
);
export const VerisignLogo = <Image src={logo2} alt="logo-company-2" priority />;
export const UnicefLogo = <Image src={logo3} alt="logo-company-3" priority />;
export const InvestorsLogo = (
  <Image src={logo4} alt="logo-company-4" priority />
);
export const TradingPointLogo = (
  <Image src={logo} alt="logo-tradingPoint" priority />
);
