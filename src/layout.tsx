import { Outlet } from "react-router";

import { NavBar } from "@/ui/nav";
import { Footer } from "@/ui/footer";

export default function PageLayout() {
  return (
    <>
      <NavBar />
      <main className="grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
