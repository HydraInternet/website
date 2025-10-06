import type { ReactElement } from "react";

import GithubIcon from "@/_assets/github.svg";
import YouTubeIcon from "@/_assets/youtube.svg";

type ILinkItem = {
  label: string;
  icon: ReactElement;
  href: string;
};

// ----------- //
// -- Links -- //
// ----------- //

const YouTube: ILinkItem = {
  label: "YouTube",
  icon: <img src={YouTubeIcon} alt="YouTube" className="invert" />,
  href: "https://www.youtube.com/@HydraInternet",
};

const Github: ILinkItem = {
  label: "GitHub",
  icon: <img src={GithubIcon} alt="GitHub" className="invert" />,
  href: "https://github.com/HydraInternet",
};

// ------------- //
// -- Exports -- //
// ------------- //

export const NavItems: Array<ILinkItem> = []; // TODO
export const FooterItems: Array<ILinkItem> = [Github, YouTube];
