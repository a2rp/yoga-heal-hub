import React, { useMemo } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Styled } from "./styled";

export default function BlogPost() {
    const { slug } = useParams();

    const fallbackImg =
        "https://images.unsplash.com/photo-1554306274-f23873d9a26f?auto=format&fit=crop&w=1400&q=80";

    // Same slugs as Blog page
    const posts = useMemo(
        () => [
            {
                slug: "morning-yoga-for-energy",
                title: "Morning Yoga for Energy",
                date: "Jan 12, 2025",
                cover:
                    "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=1400&q=80",
                readTime: "5 min read",
                sections: [
                    {
                        heading: "Why Mornings Matter",
                        text: "Practicing yoga in the morning helps reset your breath, posture, and focus before the day becomes busy. A gentle sequence of sun salutations, forward folds, and twists can wake up your spine and improve circulation.",
                    },
                    {
                        heading: "Simple Morning Flow",
                        text: "Start with 5 slow breaths in a comfortable seated position. Move into a few rounds of Cat–Cow, followed by Sun Salutation A at your own pace. Finish with a short seated twist and a minute of stillness.",
                    },
                    {
                        heading: "Tips to Stay Consistent",
                        text: "Keep your mat visible, sleep a little earlier, and treat your practice like a meeting with yourself. Even 10 minutes daily is more powerful than one long session in a week.",
                    },
                ],
            },
            {
                slug: "inner-calm-through-breath",
                title: "Inner Calm Through Breath",
                date: "Jan 10, 2025",
                cover:
                    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=80",
                readTime: "4 min read",
                sections: [
                    {
                        heading: "Breath as a Reset Button",
                        text: "The way we breathe directly affects our nervous system. Slow, deep breathing signals the body that it is safe, helping to reduce stress, anxiety, and restlessness.",
                    },
                    {
                        heading: "Try This Simple Pattern",
                        text: "Inhale through the nose for 4 counts, hold for 2 counts, and exhale gently through the nose for 6 counts. Repeat this cycle 8–10 times while sitting upright and relaxed.",
                    },
                    {
                        heading: "Bringing Calm into Daily Life",
                        text: "Use this breath pattern before meetings, while travelling, or whenever the mind feels scattered. Over time, the body learns to return to calm more easily.",
                    },
                ],
            },
            {
                slug: "flexibility-made-easy",
                title: "Flexibility Made Easy",
                date: "Jan 7, 2025",
                cover:
                    "https://images.unsplash.com/photo-1599058917212-d750089bc07f?auto=format&fit=crop&w=1400&q=80",
                readTime: "6 min read",
                sections: [
                    {
                        heading: "Stretching Without Forcing",
                        text: "Flexibility improves when we move with patience instead of forcing the body. Staying in a posture with steady breath allows muscles and fascia to gradually release tension.",
                    },
                    {
                        heading: "Areas to Focus On",
                        text: "Hamstrings, hips, and shoulders usually hold a lot of stiffness. Simple forward folds, low lunges, and shoulder openers can create a big difference when practiced regularly.",
                    },
                    {
                        heading: "Create a Gentle Routine",
                        text: "Choose 4–5 stretches, hold each for 5–8 breaths, and move slowly. Over a few weeks, you will notice more ease not just in your practice, but in daily movements too.",
                    },
                ],
            },
        ],
        []
    );

    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <Styled.Wrapper>
                <h2>Blog</h2>
                <Styled.NotFoundBox>
                    <p>We couldn’t find this article.</p>
                    <NavLink to="/blog" className="backLink">
                        ← Back to Blog
                    </NavLink>
                </Styled.NotFoundBox>
            </Styled.Wrapper>
        );
    }

    // ✅ Always have a valid image (no onError, no flicker)
    const coverSrc = post.cover || fallbackImg;

    return (
        <Styled.Wrapper>
            <h2>{post.title}</h2>

            <Styled.MetaRow>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
            </Styled.MetaRow>

            <Styled.Cover src={coverSrc} alt={post.title} loading="lazy" />

            <Styled.Article>
                {post.sections.map((sec, i) => (
                    <section key={i}>
                        <h3>{sec.heading}</h3>
                        <p>{sec.text}</p>
                    </section>
                ))}
            </Styled.Article>

            <Styled.BottomNav>
                <NavLink to="/blog" className="backLink">
                    ← Back to Blog
                </NavLink>
            </Styled.BottomNav>
        </Styled.Wrapper>
    );
}
