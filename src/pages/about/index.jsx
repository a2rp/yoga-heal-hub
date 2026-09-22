import { TbHeart, TbLeaf, TbUsers } from "react-icons/tb";
import Breadcrumbs from "../../components/breadcrumbs";
import { assetPath } from "../../utils/assets";
import { Styled } from "./styled";

const values = [
    {
        icon: <TbHeart aria-hidden="true" />,
        title: "Personal Care",
        text: "Every person moves differently. Our approach respects your pace, comfort, experience, and individual goals.",
    },
    {
        icon: <TbLeaf aria-hidden="true" />,
        title: "Mindful Practice",
        text: "We combine movement, breathing, balance, and quiet moments to make each session feel purposeful and grounded.",
    },
    {
        icon: <TbUsers aria-hidden="true" />,
        title: "Welcoming Community",
        text: "Beginners and experienced practitioners can learn together in a supportive and encouraging environment.",
    },
];

const About = () => {
    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Breadcrumbs items={[{ label: "About" }]} />

                <Styled.Header>
                    <Styled.Label>Our Approach</Styled.Label>

                    <Styled.Title>
                        Wellness that fits into real life
                    </Styled.Title>

                    <Styled.Intro>
                        Yoga Heal Hub is built around practical movement,
                        thoughtful guidance, and a calm environment where people
                        can improve strength, flexibility, balance, and everyday
                        well-being.
                    </Styled.Intro>
                </Styled.Header>

                <Styled.Story>
                    <Styled.StoryImage
                        src={assetPath("images/yoga-community.jpg")}
                        alt="Yoga group practicing together in a calm outdoor setting"
                        loading="eager"
                    />

                    <Styled.StoryContent>
                        <Styled.SmallTitle>Yoga Heal Hub</Styled.SmallTitle>

                        <Styled.StoryTitle>
                            A practical path to better movement
                        </Styled.StoryTitle>

                        <Styled.Text>
                            Our approach is inspired by traditional yoga while
                            remaining accessible for modern routines. Sessions
                            focus on useful movements, steady breathing, body
                            awareness, and consistency.
                        </Styled.Text>

                        <Styled.Text>
                            You do not need to be flexible before starting yoga.
                            You simply need a willingness to begin. Each class
                            is designed to help you understand your body better
                            and progress without unnecessary pressure.
                        </Styled.Text>
                    </Styled.StoryContent>
                </Styled.Story>

                <Styled.Values>
                    {values.map(({ icon, title, text }) => (
                        <Styled.ValueCard key={title}>
                            <Styled.IconBox>{icon}</Styled.IconBox>

                            <Styled.ValueTitle>{title}</Styled.ValueTitle>

                            <Styled.ValueText>{text}</Styled.ValueText>
                        </Styled.ValueCard>
                    ))}
                </Styled.Values>

                <Styled.Philosophy>
                    <Styled.PhilosophyContent>
                        <Styled.Label>Our Philosophy</Styled.Label>

                        <Styled.SectionTitle>
                            Progress without pressure
                        </Styled.SectionTitle>

                        <Styled.Text>
                            Yoga should support your life, not become another
                            source of stress. We encourage regular practice,
                            realistic goals, safe movement, and patience with
                            the body.
                        </Styled.Text>

                        <Styled.Text>
                            Strength and flexibility develop over time. The most
                            useful practice is one that feels sustainable enough
                            to continue.
                        </Styled.Text>
                    </Styled.PhilosophyContent>

                    <Styled.PhilosophyImage
                        src={assetPath("images/yoga-feature.jpg")}
                        alt="Yoga practitioner holding a balanced seated pose"
                        loading="lazy"
                    />
                </Styled.Philosophy>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default About;
