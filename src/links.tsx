import type { ReactElement } from "react";

import GithubIcon from "@/assets/github.svg";
import YouTubeIcon from "@/assets/youtube.svg";
import DiscordIcon from "@/assets/discord.svg";

export type ILinkItem = {
  label: string;
  icon: ReactElement;
  href: string;
  external?: boolean;
};

// ----------- //
// -- Links -- //
// ----------- //

// @ts-ignore
const HomePage: ILinkItem = {
  label: "Home",
  icon: <span className="sr-only">Home</span>,
  href: "/",
  external: false,
};

const AboutPage: ILinkItem = {
  label: "About",
  icon: <span className="sr-only">About</span>,
  href: "/about",
  external: false,
};

export const Discord: ILinkItem = {
  label: "Discord",
  icon: <img src={DiscordIcon} alt="Discord" className="invert" />,
  href: "https://discord.gg/RjrSMgBj87",
  external: true,
};

export const YouTube: ILinkItem = {
  label: "YouTube",
  icon: <img src={YouTubeIcon} alt="YouTube" className="invert" />,
  href: "https://www.youtube.com/@HydraInternet",
  external: true,
};

export const Github: ILinkItem = {
  label: "GitHub",
  icon: <img src={GithubIcon} alt="GitHub" className="invert" />,
  href: "https://github.com/HydraInternet",
  external: true,
};

// ------------- //
// -- Exports -- //
// ------------- //

export const NavItems: Array<ILinkItem> = [AboutPage, Github, Discord, YouTube];
export const FooterItems: Array<ILinkItem> = [Github, Discord, YouTube];
