import logo from "/logo.svg";

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
          <li>
            <a>Link</a>
          </li>
          <li>
            <a>Link</a>
          </li>
          <li>
            <a>Link</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
