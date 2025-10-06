import Github from "@/_assets/github.svg";
import YouTube from "@/_assets/youtube.svg";

export function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 pr-6">
      <aside className="w-full">
        <p>HydraNet</p>
      </aside>
      <nav className="w-full flex flex-row justify-end gap-4">
        <a className="cursor-not-allowed">
          <img src={Github} alt="GitHub" className="h-6 w-6 invert" />
        </a>
        <a className="cursor-not-allowed">
          <img src={YouTube} alt="YouTube" className="h-6 w-6 invert" />
        </a>
      </nav>
    </footer>
  );
}
