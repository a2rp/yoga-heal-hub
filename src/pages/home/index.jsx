import { NavLink } from "react-router-dom";
import {
    TbArrowRight,
    TbHeart,
    TbLeaf,
    TbStretching,
    TbUsers,
} from "react-icons/tb";
import { assetPath } from "../../utils/assets";
import { Styled } from "./styled";

const benefits = [
    {
        icon: <TbStretching aria-hidden="true" />,
        title: "Move Better",
        text: "Build mobility, balance, strength, and confidence through regular guided movement.",
    },
    {
        icon: <TbLeaf aria-hidden="true" />,
        title: "Breathe Better",
        text: "Use simple breathing practices to create calmer transitions between busy parts of the day.",
    },
    {
        icon: <TbHeart aria-hidden="true" />,
        title: "Feel Better",
        text: "Create a routine that supports physical comfort, body awareness, and everyday well-being.",
    },
];

const featuredClasses = [
    {
        title: "Beginner Yoga",
        text: "Learn comfortable foundational poses, breathing, and alignment.",
    },
    {
        title: "Flexibility Flow",
        text: "Improve mobility through patient stretches and controlled movement.",
    },
    {
        title: "Strength and Balance",
        text: "Build stability and body control through more focused practice.",
    },
];

const Home = () => {
    return (
        <Styled.Wrapper>
            <Styled.Hero>
                <Styled.HeroContent>
                    <Styled.Label>Move With Intention</Styled.Label>

                    <Styled.Title>
                        Yoga for stronger, calmer everyday living
                    </Styled.Title>

                    <Styled.HeroText>
                        Practical classes, thoughtful guidance, and a welcoming
                        approach for people who want to move better, improve
                        flexibility, and create a more mindful routine.
                    </Styled.HeroText>

                    <Styled.Actions>
                        <Styled.PrimaryLink to="/classes">
                            Explore Classes
                            <TbArrowRight aria-hidden="true" />
                        </Styled.PrimaryLink>

                        <Styled.SecondaryLink to="/about">
                            Our Approach
                        </Styled.SecondaryLink>
                    </Styled.Actions>
                </Styled.HeroContent>

                <Styled.HeroImage
                    src={assetPath("images/yoga-hero.jpg")}
                    alt="Person practicing yoga beside calm water"
                    loading="eager"
                />
            </Styled.Hero>

            <Styled.Container>
                <Styled.Introduction>
                    <Styled.IntroTitle>
                        A practice that can grow with you
                    </Styled.IntroTitle>

                    <Styled.IntroText>
                        Yoga Heal Hub keeps the practice practical. Start with
                        simple movements, learn at your own pace, and build a
                        routine that feels useful enough to continue.
                    </Styled.IntroText>
                </Styled.Introduction>

                <Styled.Benefits>
                    {benefits.map(({ icon, title, text }) => (
                        <Styled.BenefitCard key={title}>
                            <Styled.IconBox>{icon}</Styled.IconBox>

                            <Styled.CardTitle>{title}</Styled.CardTitle>

                            <Styled.CardText>{text}</Styled.CardText>
                        </Styled.BenefitCard>
                    ))}
                </Styled.Benefits>

                <Styled.ClassesSection>
                    <Styled.SectionImage
                        src={assetPath("images/yoga-class.jpg")}
                        alt="Yoga practitioner holding a balanced outdoor pose"
                        loading="lazy"
                    />

                    <Styled.ClassesContent>
                        <Styled.Label>Find Your Pace</Styled.Label>

                        <Styled.SectionTitle>
                            Classes for different experience levels
                        </Styled.SectionTitle>

                        <Styled.ClassList>
                            {featuredClasses.map((item) => (
                                <li key={item.title}>
                                    <strong>{item.title}</strong>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </Styled.ClassList>

                        <Styled.TextLink to="/classes">
                            View class schedule
                            <TbArrowRight aria-hidden="true" />
                        </Styled.TextLink>
                    </Styled.ClassesContent>
                </Styled.ClassesSection>

                <Styled.Community>
                    <Styled.CommunityContent>
                        <Styled.IconBox>
                            <TbUsers aria-hidden="true" />
                        </Styled.IconBox>

                        <Styled.Label>Practice Together</Styled.Label>

                        <Styled.SectionTitle>
                            A supportive space for steady progress
                        </Styled.SectionTitle>

                        <Styled.SectionText>
                            Yoga becomes easier to continue when the environment
                            feels welcoming. Our approach values questions,
                            modifications, rest, and progress that respects the
                            individual.
                        </Styled.SectionText>

                        <Styled.TextLink to="/instructors">
                            Meet the instructors
                            <TbArrowRight aria-hidden="true" />
                        </Styled.TextLink>
                    </Styled.CommunityContent>

                    <Styled.CommunityImage
                        src={assetPath("images/yoga-community.jpg")}
                        alt="Group practicing yoga together outdoors"
                        loading="lazy"
                    />
                </Styled.Community>

                <Styled.Quote>
                    <blockquote>
                        "The goal is not to perform every pose perfectly. The
                        goal is to build a practice that helps you feel better
                        in your own body."
                    </blockquote>

                    <span>Yoga Heal Hub</span>
                </Styled.Quote>

                <Styled.CallToAction>
                    <div>
                        <Styled.Label>Ready To Begin?</Styled.Label>

                        <Styled.CallTitle>
                            Start with one comfortable class
                        </Styled.CallTitle>

                        <Styled.CallText>
                            Explore the class schedule and choose a level that
                            matches where you are today.
                        </Styled.CallText>
                    </div>

                    <Styled.PrimaryLink to="/classes">
                        View Classes
                        <TbArrowRight aria-hidden="true" />
                    </Styled.PrimaryLink>
                </Styled.CallToAction>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default Home;
