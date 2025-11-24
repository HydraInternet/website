import { useMemo } from "react";
import { Menu, SquareArrowOutUpRight } from "lucide-react";

import logo from "/logo.svg";
import { NavItems } from "@/links";
import type { ILinkItem } from "@/links";
import { Link } from "react-router";

export function NavBarLink({
  item,
  onClick,
  size = "md",
  showIcon = false,
  className = "",
  wrapContent = true,
}: {
  item: ILinkItem;
  onClick?: () => void;
  size?: "sm" | "md";
  showIcon?: boolean;
  className?: string;
  wrapContent?: boolean;
}) {
  const arrowSize = size === "sm" ? 14 : 16;

  const contentClass = useMemo(
    () =>
      [
        "flex flex-row items-center gap-1",
        size === "sm" ? "text-sm" : "text-base",
      ].join(" "),
    [size],
  );

  const linkProps = {
    to: item.href,
    target: item.external ? "_blank" : "_self",
    rel: item.external ? "noopener noreferrer" : undefined,
    onClick,
    className,
  };

  const content = (
    <>
      {showIcon && item.icon}
      <span>{item.label}</span>
      {item.external && <SquareArrowOutUpRight height={arrowSize} />}
    </>
  );

  return (
    <Link {...linkProps}>
      {wrapContent ? (
        <span className={contentClass}>{content}</span>
      ) : (
        <>{content}</>
      )}
    </Link>
  );
}

export function NavBar() {
  return (
    <div className="navbar bg-primary text-primary-content shadow-sm">
      <div className="flex items-center flex-1">
        <Link to="/" className="flex flex-row items-center text-xl px-2 gap-2">
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
              <NavBarLink
                item={item}
                size="md"
                wrapContent={false}
                className="gap-0"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile hamburger */}
      <div className="sm:hidden flex-none">
        <details className="dropdown dropdown-end">
          <summary className="btn btn-ghost" aria-label="Toggle navigation">
            <Menu />
          </summary>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
            {NavItems.map((item) => (
              <li key={item.href}>
                <NavBarLink item={item} size="sm" />
              </li>
            ))}
          </ul>
        </details>
      </div>
    </div>
  );
}
