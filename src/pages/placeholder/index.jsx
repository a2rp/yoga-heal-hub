import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Styled } from "./styled";
import { FaRegCompass } from "react-icons/fa";

const routeTitleMap = {
    "/home": "Home",
    "/about": "About",
    "/classes": "Classes",
    "/instructors": "Instructors",
    "/blog": "Blog",
    "/contact": "Contact",
};

const PlaceholderPage = () => {
    const location = useLocation();

    const pageTitle = useMemo(() => {
        if (routeTitleMap[location.pathname]) {
            return routeTitleMap[location.pathname];
        }

        // handle blog post like /blog/some-post
        if (location.pathname.startsWith("/blog/")) {
            return "Blog Post";
        }

        return "Page";
    }, [location.pathname]);

    return (
        <Styled.PageWrapper>
            <Styled.InnerCard>
                <Styled.IconBadge>
                    <FaRegCompass />
                </Styled.IconBadge>

                <Styled.StatusBadge>Work in progress</Styled.StatusBadge>

                <Styled.MainTitle>{pageTitle} page</Styled.MainTitle>

                <Styled.SubTitle>
                    This section is not ready yet. The layout and content for this
                    page will be added soon.
                </Styled.SubTitle>

                <Styled.RouteInfo>
                    Current route: <code>{location.pathname}</code>
                </Styled.RouteInfo>

                <Styled.HelperText>
                    Start with the original yoga template design and gradually
                    replace this placeholder with the real content in React +
                    styled-components.
                </Styled.HelperText>
            </Styled.InnerCard>
        </Styled.PageWrapper>
    );
};

export default PlaceholderPage;
