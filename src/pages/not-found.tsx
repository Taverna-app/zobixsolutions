import { Seo } from "@/components/seo/seo";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-24 text-center">
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist or may have moved." path="/404" />

      <span className="bg-gradient-to-br from-accent to-accent-2 bg-clip-text font-mono text-7xl font-semibold text-transparent sm:text-8xl">
        404
      </span>
      <h1 className="mt-4 text-2xl font-semibold text-foreground">Page Not Found</h1>
      <p className="mt-3 max-w-sm text-muted-foreground">
        The page you're looking for doesn't exist or may have moved.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild variant="accent">
          <Link to="/">
            <Home className="size-4" />
            Back Home
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/projects">
            View Projects
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export { NotFound };
