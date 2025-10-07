import { Link } from "react-router";
import { SquareArrowOutUpRight } from "lucide-react";

// ----------------- //
// -- Generic CTA -- //
// ----------------- //

function CTA({
  title,
  content,
  link,
}: {
  title: string;
  content: string;
  link: string;
}) {
  return (
    <div className="card basis-0 grow bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">
          <Link
            className="flex flex-row gap-2 items-center justify-between"
            to={link}
          >
            {title}
            <SquareArrowOutUpRight height={16} width={16} />
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
        content="Support our mission by donating. Support our mission by donating. Support our mission by donating."
        link="/donate"
      />
      <CTA
        title="Contribute"
        content="Join our community and contribute."
        link="/contribute"
      />
      <CTA title="Use" content="Utilize our resources and tools." link="/use" />
    </div>
  );
}
