import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Classes = lazy(() => import("./pages/classes"));
const Instructors = lazy(() => import("./pages/instructors"));
const Blog = lazy(() => import("./pages/blog"));
const BlogPost = lazy(() => import("./pages/blogPost"));
const Contact = lazy(() => import("./pages/contact"));
const NotFound = lazy(() => import("./pages/placeholder"));

function PageLoader() {
    return (
        <div className="pageLoader" role="status" aria-live="polite">
            <span>Loading page...</span>
        </div>
    );
}

export default function AppRoutes() {
    const location = useLocation();

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/classes" element={<Classes />} />
                <Route path="/instructors" element={<Instructors />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}
