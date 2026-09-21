import React from "react";
import { NavLink } from "react-router-dom";
import { TbArrowUpRight } from "react-icons/tb";
import { assetPath } from "../../utils/assets";
import { Styled } from "./styled";

const posts = [
    {
        title: "Morning Yoga for Energy",
        date: "Jan 12, 2025",
        image: "yoga-morning.jpg",
        excerpt: "Start your day with sun salutations and grounding breathwork to boost clarity and energy.",
        slug: "morning-yoga-for-energy",
    },
    {
        title: "Inner Calm Through Breath",
        date: "Jan 10, 2025",
        image: "yoga-hero.jpg",
        excerpt: "A simple guided breathing pattern to help release stress and reconnect with your body.",
        slug: "inner-calm-through-breath",
    },
    {
        title: "Flexibility Made Easy",
        date: "Jan 7, 2025",
        image: "yoga-flexibility.jpg",
        excerpt: "Gentle asanas that improve mobility and reduce stiffness, perfect for beginners.",
        slug: "flexibility-made-easy",
    },
];

export default function Blog() {
    return (
        <Styled.Wrapper>
            <span className="eyebrow">Practical wellness notes</span>
            <h2>Blog</h2>

            <Styled.List>
                {posts.map((post) => (
                    <li key={post.slug} className="item">
                        <NavLink to={`/blog/${post.slug}`} className="cardLink">
                            <img
                                src={assetPath(`images/${post.image}`)}
                                alt={post.title}
                                loading="lazy"
                            />
                            <div className="textBlock">
                                <h3>{post.title}</h3>
                                <span>{post.date}</span>
                                <p>{post.excerpt}</p>
                                <strong>Read article <TbArrowUpRight aria-hidden="true" /></strong>
                            </div>
                        </NavLink>
                    </li>
                ))}
            </Styled.List>
        </Styled.Wrapper>
    );
}
