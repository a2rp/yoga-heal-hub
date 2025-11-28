// src/AppRoutes.jsx
import { Box, CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

// For now, all pages use the same placeholder component
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Classes = lazy(() => import("./pages/classes"));
const Instructors = lazy(() => import("./pages/instructors"));
const Blog = lazy(() => import("./pages/blog"));
const BlogPost = lazy(() => import("./pages/blogPost"));

const Contact = lazy(() => import("./pages/contact"));
const NotFound = lazy(() => import("./pages/placeholder"));

export default function AppRoutes() {
    const location = useLocation();

    return (
        <Suspense
            fallback={
                <Box
                    sx={{
                        width: "100vw",
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "var(--color-bg)",
                    }}
                >
                    <CircularProgress sx={{ color: "var(--color-heading)" }} />
                </Box>
            }
        >
            <Routes location={location} key={location.pathname}>
                {/* Redirect root to /home for now */}
                <Route path="/" element={<Navigate to="/home" replace />} />

                {/* Main pages matching original template structure */}
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/classes" element={<Classes />} />
                <Route path="/instructors" element={<Instructors />} />
                <Route path="/blog" element={<Blog />} />

                {/* Single blog post – later we’ll use slug/id, abhi placeholder */}
                <Route path="/blog/:slug" element={<BlogPost />} />

                <Route path="/contact" element={<Contact />} />

                {/* Catch-all */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}
