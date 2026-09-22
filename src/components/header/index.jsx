import { useEffect, useRef, useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import { NavLink, useLocation } from "react-router-dom";

import { Styled } from "./styled";

const navigationLinks = [
    {
        label: "Home",
        to: "/",
    },
    {
        label: "About",
        to: "/about",
    },
    {
        label: "Classes",
        to: "/classes",
    },
    {
        label: "Instructors",
        to: "/instructors",
    },
    {
        label: "Blog",
        to: "/blog",
    },
    {
        label: "Contact",
        to: "/contact",
    },
];

const Header = () => {
    const location = useLocation();

    const lastScrollPosition = useRef(0);

    const [isHidden, setIsHidden] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;

            if (currentScrollPosition <= 20) {
                setIsHidden(false);
            } else if (
                currentScrollPosition > lastScrollPosition.current &&
                currentScrollPosition > 110
            ) {
                setIsHidden(true);
                setIsMenuOpen(false);
            } else if (currentScrollPosition < lastScrollPosition.current) {
                setIsHidden(false);
            }

            lastScrollPosition.current = currentScrollPosition;
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const handleMenuToggle = () => {
        setIsMenuOpen((current) => !current);
        setIsHidden(false);
    };

    return (
        <Styled.Wrapper $hidden={isHidden}>
            <Styled.Container>
                <Styled.Brand to="/" aria-label="Yoga Heal Hub home">
                    <Styled.Logo
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        alt="Yoga Heal Hub logo"
                    />

                    <Styled.BrandText>
                        <Styled.BrandName>Yoga Heal Hub</Styled.BrandName>

                        <Styled.BrandLabel>Mindful living</Styled.BrandLabel>
                    </Styled.BrandText>
                </Styled.Brand>

                <Styled.Navigation aria-label="Main navigation">
                    {navigationLinks.map((link) => (
                        <Styled.NavItem
                            key={link.to}
                            to={link.to}
                            end={link.to === "/"}
                        >
                            {link.label}
                        </Styled.NavItem>
                    ))}
                </Styled.Navigation>

                <Styled.MenuButton
                    type="button"
                    onClick={handleMenuToggle}
                    aria-label={
                        isMenuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    title={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? (
                        <FaTimes aria-hidden="true" />
                    ) : (
                        <FaBars aria-hidden="true" />
                    )}
                </Styled.MenuButton>
            </Styled.Container>

            {isMenuOpen && (
                <Styled.MobileNavigation
                    id="mobile-navigation"
                    aria-label="Mobile navigation"
                >
                    <Styled.MobileInner>
                        {navigationLinks.map((link) => (
                            <Styled.MobileNavItem
                                key={link.to}
                                to={link.to}
                                end={link.to === "/"}
                            >
                                {link.label}
                            </Styled.MobileNavItem>
                        ))}
                    </Styled.MobileInner>
                </Styled.MobileNavigation>
            )}
        </Styled.Wrapper>
    );
};

export default Header;
