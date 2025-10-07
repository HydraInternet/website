import { Link } from "react-router";
import { FooterItems } from "@/links";

export function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 pr-6">
      <aside className="w-full">
        <p>HydraNet - A permissionless internet for a censored world.</p>
      </aside>
      <nav className="w-full flex flex-row justify-end gap-4">
        {FooterItems.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noreferrer noopener" : undefined}
              className="h-6 w-6"
            >
              {item.icon}
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}
