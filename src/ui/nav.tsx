import { useState, useCallback } from "react";
import { SquareArrowOutUpRight, Menu } from "lucide-react";

import logo from "/logo.svg";
import { NavItems } from "@/links";
import { Link } from "react-router";

export function NavBar() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((o) => !o), []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <div className="navbar bg-primary text-primary-content shadow-sm">
      <div className="flex items-center flex-1">
        <Link
          to="/"
          className="flex flex-row items-center text-xl px-2 gap-2"
          onClick={close}
        >
          <img
            src={logo}
            className="h-[32px] w-[32px]"
            width={32}
            alt="HydraNet logo"
          />
          HydraNet
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="flex-none hidden sm:flex">
        <ul className="menu menu-horizontal px-1">
          {NavItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className="gap-0"
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.label}
                {item.external && <SquareArrowOutUpRight height={16} />}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile hamburger */}
      <div className="sm:hidden flex-none">
        <div className={"dropdown dropdown-end"}>
          <button
            type="button"
            aria-label="Open navigation menu"
            className="btn btn-ghost"
            onClick={toggle}
          >
            <Menu />
          </button>
          <ul
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52 ${
              open ? "block" : "hidden"
            }`}
            role="menu"
          >
            {NavItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={close}
                >
                  <span className="flex flex-row items-center gap-1">
                    {item.label}
                    {item.external && <SquareArrowOutUpRight height={14} />}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
