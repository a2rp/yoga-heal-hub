import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";
import { TbMenu2, TbX, TbChevronDown } from "react-icons/tb";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileClassesOpen, setMobileClassesOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileOpen(false);
        setMobileClassesOpen(false);
    }, [location.pathname]);

    const navItems = [
        { to: "/home", label: "Home" },
        { to: "/about", label: "About" },
        // Classes is special (has dropdown)
        {
            label: "Classes",
            children: [
                { to: "/classes", label: "Class Schedule" },
                { to: "/instructors", label: "Instructors" },
            ],
        },
        { to: "/contact", label: "Contact" },
        { to: "/blog", label: "Blog" },
    ];

    return (
        <>
            <Styled.HeaderBar>
                <Styled.Inner>
                    <Styled.Brand>
                        <NavLink to="/home" className="brandLink">
                            <span className="title">Yoga-Heal-Hub</span>
                            <span className="tagline">Holistic Yoga in Jamshedpur</span>
                        </NavLink>
                    </Styled.Brand>

                    {/* Desktop nav */}
                    <Styled.Nav>
                        <ul>
                            {navItems.map((item) =>
                                item.children ? (
                                    <li key={item.label} className="hasSub">
                                        <button type="button" className="parentBtn">
                                            <span>{item.label}</span>
                                            <TbChevronDown size={16} />
                                        </button>
                                        <div className="dropdown">
                                            {item.children.map((child) => (
                                                <NavLink
                                                    key={child.to}
                                                    to={child.to}
                                                    className={({ isActive }) =>
                                                        isActive ? "link active" : "link"
                                                    }
                                                >
                                                    {child.label}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </li>
                                ) : (
                                    <li key={item.to}>
                                        <NavLink
                                            to={item.to}
                                            className={({ isActive }) =>
                                                isActive ? "link active" : "link"
                                            }
                                        >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                )
                            )}
                        </ul>
                    </Styled.Nav>

                    {/* Mobile toggle */}
                    <Styled.MobileToggle>
                        <button
                            type="button"
                            aria-label="Toggle navigation"
                            onClick={() => setMobileOpen((v) => !v)}
                        >
                            {mobileOpen ? <TbX size={22} /> : <TbMenu2 size={22} />}
                        </button>
                    </Styled.MobileToggle>
                </Styled.Inner>
            </Styled.HeaderBar>

            {/* Mobile full-screen menu */}
            {mobileOpen && (
                <Styled.MobileMenu>
                    <div className="topRow">
                        <span className="mobileTitle">Menu</span>
                        <button
                            type="button"
                            aria-label="Close navigation"
                            onClick={() => setMobileOpen(false)}
                        >
                            <TbX size={22} />
                        </button>
                    </div>

                    <ul className="navList">
                        {navItems.map((item) =>
                            item.children ? (
                                <li key={item.label} className="mobileHasSub">
                                    <button
                                        type="button"
                                        className="mobileParent"
                                        onClick={() =>
                                            setMobileClassesOpen((v) => !v)
                                        }
                                    >
                                        <span>{item.label}</span>
                                        <TbChevronDown
                                            size={18}
                                            className={
                                                mobileClassesOpen ? "chevron open" : "chevron"
                                            }
                                        />
                                    </button>

                                    {mobileClassesOpen && (
                                        <ul className="mobileSubList">
                                            {item.children.map((child) => (
                                                <li key={child.to}>
                                                    <NavLink
                                                        to={child.to}
                                                        className={({ isActive }) =>
                                                            isActive
                                                                ? "subLink active"
                                                                : "subLink"
                                                        }
                                                    >
                                                        {child.label}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ) : (
                                <li key={item.to}>
                                    <NavLink
                                        to={item.to}
                                        className={({ isActive }) =>
                                            isActive ? "mobileLink active" : "mobileLink"
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            )
                        )}
                    </ul>
                </Styled.MobileMenu>
            )}
        </>
    );
}
