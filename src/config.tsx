import type { ReactElement } from "react";

import GithubIcon from "@/_assets/github.svg";
import YouTubeIcon from "@/_assets/youtube.svg";

type ILinkItem = {
  label: string;
  icon: ReactElement;
  href: string;
  external?: boolean;
};

// ----------- //
// -- Links -- //
// ----------- //

const AboutPage: ILinkItem = {
  label: "About",
  icon: <span className="sr-only">About</span>,
  href: "/about",
  external: false,
};

const YouTube: ILinkItem = {
  label: "YouTube",
  icon: <img src={YouTubeIcon} alt="YouTube" className="invert" />,
  href: "https://www.youtube.com/@HydraInternet",
  external: true,
};

const Github: ILinkItem = {
  label: "GitHub",
  icon: <img src={GithubIcon} alt="GitHub" className="invert" />,
  href: "https://github.com/HydraInternet",
  external: true,
};

// ------------- //
// -- Exports -- //
// ------------- //

export const NavItems: Array<ILinkItem> = [AboutPage, Github];
export const FooterItems: Array<ILinkItem> = [Github, YouTube];
