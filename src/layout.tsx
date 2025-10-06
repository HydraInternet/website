import { Outlet } from "react-router";

import { NavBar } from "@/_ui/nav";
import { Footer } from "@/_ui/footer";

export default function PageLayout() {
  return (
    <>
      <NavBar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
