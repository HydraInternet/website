import { NavBar } from "./_ui/nav";
import { Hero } from "./_ui/hero";
import { CallToAction } from "./_ui/cta";
import { Footer } from "./_ui/footer";

function RootPage() {
  return (
    <>
      <NavBar />
      <main className="grow">
        <Hero />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default RootPage;
