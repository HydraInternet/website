import { SquareArrowOutUpRight } from "lucide-react";

import logo from "/logo.svg";
import { NavItems } from "@/config";

export function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between">
      <div className="flex items-center">
        <a href="/" className="flex flex-row text-xl px-2 gap-2">
          <img src={logo} className="h-[32px] w-[32px]" width={32} />
          HydraNet
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {NavItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="gap-0"
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.label}
                {item.external && <SquareArrowOutUpRight height={16} />}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
