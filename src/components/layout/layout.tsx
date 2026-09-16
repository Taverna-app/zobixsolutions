import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }

    // The target section may not be in the DOM yet (route is lazy-loaded),
    // so poll briefly instead of relying on the browser's one-shot,
    // load-time hash scroll.
    const id = hash.slice(1);
    let attempts = 0;
    const interval = window.setInterval(() => {
      const el = document.getElementById(id);
      attempts += 1;
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.clearInterval(interval);
      } else if (attempts >= 60) {
        window.clearInterval(interval);
      }
    }, 50);

    return () => window.clearInterval(interval);
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export { Layout };
