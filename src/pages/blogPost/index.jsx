import React, { useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import { TbArrowLeft } from "react-icons/tb";
import { assetPath } from "../../utils/assets";
import { Styled } from "./styled";

export default function BlogPost() {
    const { slug } = useParams();
    const posts = useMemo(
        () => [
            {
                slug: "morning-yoga-for-energy",
                title: "Morning Yoga for Energy",
                date: "Jan 12, 2025",
                cover: "yoga-morning.jpg",
                readTime: "5 min read",
                sections: [
                    ["Why Mornings Matter", "Practicing yoga in the morning helps reset your breath, posture, and focus before the day becomes busy. A gentle sequence of sun salutations, forward folds, and twists can wake up your spine and improve circulation."],
                    ["Simple Morning Flow", "Start with 5 slow breaths in a comfortable seated position. Move into a few rounds of Cat-Cow, followed by Sun Salutation A at your own pace. Finish with a short seated twist and a minute of stillness."],
                    ["Tips to Stay Consistent", "Keep your mat visible, sleep a little earlier, and treat your practice like a meeting with yourself. Even 10 minutes daily is more powerful than one long session in a week."],
                ],
            },
            {
                slug: "inner-calm-through-breath",
                title: "Inner Calm Through Breath",
                date: "Jan 10, 2025",
                cover: "yoga-hero.jpg",
                readTime: "4 min read",
                sections: [
                    ["Breath as a Reset Button", "The way we breathe directly affects our nervous system. Slow, deep breathing signals the body that it is safe, helping to reduce stress, anxiety, and restlessness."],
                    ["Try This Simple Pattern", "Inhale through the nose for 4 counts, hold for 2 counts, and exhale gently through the nose for 6 counts. Repeat this cycle 8 to 10 times while sitting upright and relaxed."],
                    ["Bringing Calm into Daily Life", "Use this breath pattern before meetings, while travelling, or whenever the mind feels scattered. Over time, the body learns to return to calm more easily."],
                ],
            },
            {
                slug: "flexibility-made-easy",
                title: "Flexibility Made Easy",
                date: "Jan 7, 2025",
                cover: "yoga-flexibility.jpg",
                readTime: "6 min read",
                sections: [
                    ["Stretching Without Forcing", "Flexibility improves when we move with patience instead of forcing the body. Staying in a posture with steady breath allows muscles and fascia to gradually release tension."],
                    ["Areas to Focus On", "Hamstrings, hips, and shoulders usually hold a lot of stiffness. Simple forward folds, low lunges, and shoulder openers can create a big difference when practiced regularly."],
                    ["Create a Gentle Routine", "Choose 4 to 5 stretches, hold each for 5 to 8 breaths, and move slowly. Over a few weeks, you will notice more ease in your practice and in daily movements."],
                ],
            },
        ],
        []
    );

    const post = posts.find((item) => item.slug === slug);

    if (!post) {
        return (
            <Styled.Wrapper>
                <h2>Blog</h2>
                <Styled.NotFoundBox>
                    <p>We could not find this article.</p>
                    <NavLink to="/blog" className="backLink">
                        <TbArrowLeft aria-hidden="true" /> Back to Blog
                    </NavLink>
                </Styled.NotFoundBox>
            </Styled.Wrapper>
        );
    }

    return (
        <Styled.Wrapper>
            <span className="eyebrow">Wellness journal</span>
            <h2>{post.title}</h2>

            <Styled.MetaRow>
                <span>{post.date}</span>
                <span aria-hidden="true">•</span>
                <span>{post.readTime}</span>
            </Styled.MetaRow>

            <Styled.Cover src={assetPath(`images/${post.cover}`)} alt={post.title} loading="eager" />

            <Styled.Article>
                {post.sections.map(([heading, text]) => (
                    <section key={heading}>
                        <h3>{heading}</h3>
                        <p>{text}</p>
                    </section>
                ))}
            </Styled.Article>

            <Styled.BottomNav>
                <NavLink to="/blog" className="backLink">
                    <TbArrowLeft aria-hidden="true" /> Back to Blog
                </NavLink>
            </Styled.BottomNav>
        </Styled.Wrapper>
    );
}
