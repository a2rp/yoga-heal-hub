import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

export default function Blog() {
    const fallbackImg =
        "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1400&q=80";

    const onImgError = useCallback(
        (e) => {
            e.currentTarget.src = fallbackImg;
        },
        [fallbackImg]
    );

    const posts = [
        {
            title: "Morning Yoga for Energy",
            date: "Jan 12, 2025",
            img: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=1200&q=80",
            excerpt:
                "Start your day with sun salutations and grounding breathwork to boost clarity and energy.",
            slug: "morning-yoga-for-energy",
        },
        {
            title: "Inner Calm Through Breath",
            date: "Jan 10, 2025",
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
            excerpt:
                "A simple guided breathing pattern to help release stress and reconnect with your body.",
            slug: "inner-calm-through-breath",
        },
        {
            title: "Flexibility Made Easy",
            date: "Jan 7, 2025",
            img: "https://images.unsplash.com/photo-1599058917212-d750089bc07f?auto=format&fit=crop&w=1200&q=80",
            excerpt:
                "Gentle asanas that improve mobility and reduce stiffness — perfect for beginners.",
            slug: "flexibility-made-easy",
        },
    ];

    return (
        <Styled.Wrapper>
            <h2>Blog</h2>

            <Styled.List>
                {posts.map((p, n) => (
                    <li key={n} className="item">
                        <NavLink
                            to={`/blog/${p.slug}`}
                            className="cardLink"
                        >
                            <img src={p.img} onError={onImgError} alt={p.title} />

                            <div className="textBlock">
                                <h3>{p.title}</h3>
                                <span>{p.date}</span>
                                <p>{p.excerpt}</p>
                            </div>
                        </NavLink>
                    </li>
                ))}
            </Styled.List>
        </Styled.Wrapper>
    );
}
