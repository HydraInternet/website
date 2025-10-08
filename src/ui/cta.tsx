import { Link } from "react-router";
import { SquareArrowOutUpRight } from "lucide-react";

import { Github } from "@/links";

// ----------------- //
// -- Generic CTA -- //
// ----------------- //

function CTA({
  title,
  content,
  link,
  external = false,
  disabled = false,
}: {
  title: string;
  content: string;
  link: string;
  external?: boolean;
  disabled?: boolean;
}) {
  return (
    <div className="card basis-0 grow bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">
          <Link
            className={`
              flex flex-row gap-2 items-center justify-between
              ${disabled ? "cursor-not-allowed opacity-50" : "hover:link"}
            `}
            to={link}
            target={external ? "_blank" : "_self"}
            rel={external ? "noopener noreferrer" : undefined}
          >
            {title}
            {external && <SquareArrowOutUpRight height={16} width={16} />}
          </Link>
        </h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

// -------------------- //
// -- CTA Collection -- //
// -------------------- //

export function CallToAction() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 mx-8 my-4">
      <CTA
        title="Donate"
        content="Support our mission by donating."
        link="#"
        external
        disabled
      />
      <CTA
        title="Contribute"
        content="Join our community and contribute to a free internet."
        link={Github.href}
        external
      />
      <CTA
        title="Use"
        content="Try out our tools and experience a permissionless internet."
        link={Github.href}
        external
      />
    </div>
  );
}
