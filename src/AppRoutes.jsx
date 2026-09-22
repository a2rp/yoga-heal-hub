import { lazy, Suspense, useEffect } from "react";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Styled } from "./App.styled";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Classes = lazy(() => import("./pages/classes"));
const Instructors = lazy(() => import("./pages/instructors"));
const Blog = lazy(() => import("./pages/blog"));
const BlogPost = lazy(() => import("./pages/blogPost"));
const Contact = lazy(() => import("./pages/contact"));
const NotFound = lazy(() => import("./pages/notFound"));

const RouteScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        });
    }, [pathname]);

    return null;
};

const AppRoutes = () => {
    const location = useLocation();

    return (
        <>
            <RouteScrollToTop />

            <Suspense
                key={location.pathname}
                fallback={
                    <Styled.RouteLoader role="status" aria-live="polite">
                        Loading page...
                    </Styled.RouteLoader>
                }
            >
                <Routes location={location}>
                    <Route path="/" element={<Home />} />

                    <Route path="/home" element={<Navigate to="/" replace />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/classes" element={<Classes />} />

                    <Route path="/instructors" element={<Instructors />} />

                    <Route path="/blog" element={<Blog />} />

                    <Route path="/blog/:slug" element={<BlogPost />} />

                    <Route path="/contact" element={<Contact />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default AppRoutes;
