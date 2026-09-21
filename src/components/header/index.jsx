import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { TbChevronDown, TbMenu2, TbX } from "react-icons/tb";
import { Styled } from "./styled";

const navItems = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About" },
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

const logoPath = `${import.meta.env.BASE_URL}logo.png`;

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileClassesOpen, setMobileClassesOpen] = useState(false);
    const [classesOpen, setClassesOpen] = useState(false);
    const location = useLocation();
    const classesRef = useRef(null);

    useEffect(() => {
        setMobileOpen(false);
        setMobileClassesOpen(false);
        setClassesOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!classesRef.current?.contains(event.target)) {
                setClassesOpen(false);
            }
        };

        document.addEventListener("pointerdown", handleOutsideClick);
        return () => document.removeEventListener("pointerdown", handleOutsideClick);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    const linkClass = ({ isActive }) => (isActive ? "link active" : "link");

    return (
        <>
            <Styled.HeaderBar>
                <Styled.Inner>
                    <Styled.Brand>
                        <NavLink to="/home" className="brandLink" aria-label="Yoga-Heal-Hub home">
                            <img src={logoPath} alt="Yoga-Heal-Hub logo" />
                            <span>
                                <span className="title">Yoga-Heal-Hub</span>
                                <span className="tagline">Holistic yoga in Jamshedpur</span>
                            </span>
                        </NavLink>
                    </Styled.Brand>

                    <Styled.Nav aria-label="Primary navigation">
                        <ul>
                            {navItems.map((item) =>
                                item.children ? (
                                    <li key={item.label} className="hasSub" ref={classesRef}>
                                        <button
                                            type="button"
                                            className="parentBtn"
                                            aria-expanded={classesOpen}
                                            aria-haspopup="true"
                                            onClick={() => setClassesOpen((value) => !value)}
                                        >
                                            <span>{item.label}</span>
                                            <TbChevronDown size={16} aria-hidden="true" />
                                        </button>
                                        <div className="dropdown" data-open={classesOpen}>
                                            {item.children.map((child) => (
                                                <NavLink key={child.to} to={child.to} className={linkClass}>
                                                    {child.label}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </li>
                                ) : (
                                    <li key={item.to}>
                                        <NavLink to={item.to} className={linkClass}>
                                            {item.label}
                                        </NavLink>
                                    </li>
                                )
                            )}
                        </ul>
                    </Styled.Nav>

                    <Styled.MobileToggle>
                        <button
                            type="button"
                            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
                            aria-expanded={mobileOpen}
                            onClick={() => setMobileOpen((value) => !value)}
                        >
                            {mobileOpen ? <TbX size={24} /> : <TbMenu2 size={24} />}
                        </button>
                    </Styled.MobileToggle>
                </Styled.Inner>
            </Styled.HeaderBar>

            {mobileOpen && (
                <Styled.MobileMenu aria-label="Mobile navigation">
                    <div className="topRow">
                        <span className="mobileTitle">Menu</span>
                        <button type="button" aria-label="Close navigation" onClick={() => setMobileOpen(false)}>
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
                                        aria-expanded={mobileClassesOpen}
                                        onClick={() => setMobileClassesOpen((value) => !value)}
                                    >
                                        <span>{item.label}</span>
                                        <TbChevronDown size={18} aria-hidden="true" />
                                    </button>
                                    {mobileClassesOpen && (
                                        <ul className="mobileSubList">
                                            {item.children.map((child) => (
                                                <li key={child.to}>
                                                    <NavLink to={child.to} className={linkClass}>
                                                        {child.label}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ) : (
                                <li key={item.to}>
                                    <NavLink to={item.to} className="mobileLink">
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
