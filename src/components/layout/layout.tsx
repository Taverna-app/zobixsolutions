import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0 });
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
