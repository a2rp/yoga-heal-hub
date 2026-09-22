import { NavLink } from "react-router-dom";
import { TbArrowUpRight, TbCalendar } from "react-icons/tb";
import Breadcrumbs from "../../components/breadcrumbs";
import { assetPath } from "../../utils/assets";
import { Styled } from "./styled";

const posts = [
    {
        title: "Morning Yoga for Energy",
        date: "Jan 12, 2025",
        image: "yoga-morning.jpg",
        excerpt:
            "A simple morning sequence to wake up the body, improve circulation, and begin the day with a clearer mind.",
        slug: "morning-yoga-for-energy",
        category: "Daily Practice",
    },
    {
        title: "Inner Calm Through Breath",
        date: "Jan 10, 2025",
        image: "yoga-hero.jpg",
        excerpt:
            "Use slow breathing to reduce tension, settle a busy mind, and create small moments of calm during the day.",
        slug: "inner-calm-through-breath",
        category: "Breathwork",
    },
    {
        title: "Flexibility Made Easy",
        date: "Jan 7, 2025",
        image: "yoga-flexibility.jpg",
        excerpt:
            "A practical approach to improving mobility without forcing stretches or rushing your body's natural progress.",
        slug: "flexibility-made-easy",
        category: "Mobility",
    },
];

const Blog = () => {
    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Breadcrumbs items={[{ label: "Blog" }]} />

                <Styled.Header>
                    <Styled.Label>Wellness Journal</Styled.Label>

                    <Styled.Title>
                        Practical ideas for everyday well-being
                    </Styled.Title>

                    <Styled.Intro>
                        Short, useful articles about movement, breathing,
                        flexibility, consistency, and making yoga easier to
                        include in everyday life.
                    </Styled.Intro>
                </Styled.Header>

                <Styled.List>
                    {posts.map((post, index) => (
                        <Styled.Item key={post.slug}>
                            <Styled.CardLink to={`/blog/${post.slug}`}>
                                <Styled.Image
                                    src={assetPath(`images/${post.image}`)}
                                    alt={post.title}
                                    loading={index === 0 ? "eager" : "lazy"}
                                />

                                <Styled.Content>
                                    <Styled.Category>
                                        {post.category}
                                    </Styled.Category>

                                    <Styled.PostTitle>
                                        {post.title}
                                    </Styled.PostTitle>

                                    <Styled.Date>
                                        <TbCalendar aria-hidden="true" />
                                        {post.date}
                                    </Styled.Date>

                                    <Styled.Excerpt>
                                        {post.excerpt}
                                    </Styled.Excerpt>

                                    <Styled.ReadMore>
                                        Read article
                                        <TbArrowUpRight aria-hidden="true" />
                                    </Styled.ReadMore>
                                </Styled.Content>
                            </Styled.CardLink>
                        </Styled.Item>
                    ))}
                </Styled.List>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default Blog;
