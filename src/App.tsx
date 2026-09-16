import { Layout } from "@/components/layout/layout";
import { lazy, Suspense, type ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("@/pages/home").then((m) => ({ default: m.Home })));
const Projects = lazy(() => import("@/pages/projects").then((m) => ({ default: m.Projects })));
const ProjectDetails = lazy(() =>
  import("@/pages/project-details").then((m) => ({ default: m.ProjectDetails })),
);
const AboutPage = lazy(() => import("@/pages/about").then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import("@/pages/contact").then((m) => ({ default: m.ContactPage })));
const NotFound = lazy(() => import("@/pages/not-found").then((m) => ({ default: m.NotFound })));

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<PageFallback><Home /></PageFallback>} />
        <Route path="projects" element={<PageFallback><Projects /></PageFallback>} />
        <Route path="projects/:slug" element={<PageFallback><ProjectDetails /></PageFallback>} />
        <Route path="about" element={<PageFallback><AboutPage /></PageFallback>} />
        <Route path="contact" element={<PageFallback><ContactPage /></PageFallback>} />
        <Route path="*" element={<PageFallback><NotFound /></PageFallback>} />
      </Route>
    </Routes>
  );
}

function PageFallback({ children }: { children: ReactNode }) {
  return <Suspense fallback={<div className="min-h-screen" />}>{children}</Suspense>;
}

export default App;
