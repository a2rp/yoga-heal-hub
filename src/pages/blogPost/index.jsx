import { NavLink, useParams } from "react-router-dom";
import { TbArrowLeft, TbCalendar, TbClock } from "react-icons/tb";
import Breadcrumbs from "../../components/breadcrumbs";
import { assetPath } from "../../utils/assets";
import { Styled } from "./styled";

const posts = [
    {
        slug: "morning-yoga-for-energy",
        title: "Morning Yoga for Energy",
        date: "Jan 12, 2025",
        cover: "yoga-morning.jpg",
        readTime: "5 min read",
        intro: "A short morning practice can help the body feel less stiff and give the mind a calmer start before the day becomes busy.",
        sections: [
            {
                title: "Why mornings can feel different",
                text: "After several hours of sleep, the body often feels less mobile. Gentle movement helps warm the joints, improve circulation, and gradually wake up the muscles without demanding too much too early.",
            },
            {
                title: "A simple morning sequence",
                text: "Begin with five slow breaths while sitting comfortably. Continue with gentle neck and shoulder movement, a few rounds of Cat-Cow, a relaxed forward fold, and two or three easy Sun Salutations. Finish with a quiet minute of breathing.",
            },
            {
                title: "Keep the routine realistic",
                text: "You do not need a long session every morning. Ten consistent minutes can be more useful than planning a difficult routine that is rarely completed. Keep your mat easy to reach and choose movements you already know.",
            },
        ],
    },
    {
        slug: "inner-calm-through-breath",
        title: "Inner Calm Through Breath",
        date: "Jan 10, 2025",
        cover: "yoga-hero.jpg",
        readTime: "4 min read",
        intro: "Breathing slowly and deliberately can create a useful pause when the body feels tense or the mind feels too busy.",
        sections: [
            {
                title: "Use the breath as a signal",
                text: "Fast, shallow breathing often appears during stress. Slowing the breath gives the body a chance to settle. The goal is not to force relaxation but to create conditions where it can happen naturally.",
            },
            {
                title: "Try a comfortable pattern",
                text: "Sit upright without becoming rigid. Inhale through the nose for four comfortable counts, pause briefly, and exhale for six counts. Repeat the cycle several times without straining or holding the breath for too long.",
            },
            {
                title: "Use it during normal days",
                text: "Breathing exercises can be useful before work, during travel, between tasks, or before sleep. Short sessions are easier to repeat and can become a practical part of an everyday routine.",
            },
        ],
    },
    {
        slug: "flexibility-made-easy",
        title: "Flexibility Made Easy",
        date: "Jan 7, 2025",
        cover: "yoga-flexibility.jpg",
        readTime: "6 min read",
        intro: "Improving flexibility is usually a gradual process. Comfortable repetition and patience are more useful than forcing the body into deeper positions.",
        sections: [
            {
                title: "Avoid chasing the deepest stretch",
                text: "A strong stretching sensation is not automatically better. Stay in a range where breathing remains steady and the muscles can relax. Sharp pain, pinching, or numbness are signs to reduce the range or stop.",
            },
            {
                title: "Focus on common tight areas",
                text: "The hips, hamstrings, calves, chest, and shoulders often respond well to regular mobility work. A few simple movements practiced consistently can make everyday activities and yoga poses feel easier.",
            },
            {
                title: "Build a small routine",
                text: "Choose four or five movements and spend a few calm breaths in each position. Repeat the routine several times each week and pay attention to comfort and control instead of comparing range with someone else.",
            },
        ],
    },
];

const BlogPost = () => {
    const { slug } = useParams();

    const post = posts.find((item) => item.slug === slug);

    if (!post) {
        return (
            <Styled.Wrapper>
                <Styled.Container>
                    <Breadcrumbs
                        items={[
                            {
                                label: "Blog",
                                to: "/blog",
                            },
                            {
                                label: "Article not found",
                            },
                        ]}
                    />

                    <Styled.NotFound>
                        <Styled.NotFoundTitle>
                            Article not found
                        </Styled.NotFoundTitle>

                        <Styled.NotFoundText>
                            The article may have been moved or the address may
                            be incorrect.
                        </Styled.NotFoundText>

                        <Styled.BackLink to="/blog">
                            <TbArrowLeft aria-hidden="true" />
                            Back to Blog
                        </Styled.BackLink>
                    </Styled.NotFound>
                </Styled.Container>
            </Styled.Wrapper>
        );
    }

    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Breadcrumbs
                    items={[
                        {
                            label: "Blog",
                            to: "/blog",
                        },
                        {
                            label: post.title,
                        },
                    ]}
                />

                <Styled.Header>
                    <Styled.Label>Wellness Journal</Styled.Label>

                    <Styled.Title>{post.title}</Styled.Title>

                    <Styled.Meta>
                        <span>
                            <TbCalendar aria-hidden="true" />
                            {post.date}
                        </span>

                        <span>
                            <TbClock aria-hidden="true" />
                            {post.readTime}
                        </span>
                    </Styled.Meta>

                    <Styled.Intro>{post.intro}</Styled.Intro>
                </Styled.Header>

                <Styled.Cover
                    src={assetPath(`images/${post.cover}`)}
                    alt={post.title}
                    loading="eager"
                />

                <Styled.Article>
                    {post.sections.map((section) => (
                        <section key={section.title}>
                            <h2>{section.title}</h2>
                            <p>{section.text}</p>
                        </section>
                    ))}
                </Styled.Article>

                <Styled.Bottom>
                    <Styled.BackLink to="/blog">
                        <TbArrowLeft aria-hidden="true" />
                        Back to Blog
                    </Styled.BackLink>
                </Styled.Bottom>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default BlogPost;
