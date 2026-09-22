import { TbActivity, TbClock, TbLeaf, TbStretching } from "react-icons/tb";
import Breadcrumbs from "../../components/breadcrumbs";
import { assetPath } from "../../utils/assets";
import { Styled } from "./styled";

const classes = [
    {
        icon: <TbLeaf aria-hidden="true" />,
        title: "Beginner Yoga",
        level: "Beginner",
        description:
            "A gentle introduction to foundational poses, breathing, balance, and comfortable movement.",
        schedule: [
            "Mon, Wed, Fri: 8:00 AM - 9:00 AM",
            "Tue, Thu, Sat: 10:00 AM - 11:00 AM",
        ],
    },
    {
        icon: <TbStretching aria-hidden="true" />,
        title: "Flexibility Flow",
        level: "Intermediate",
        description:
            "A balanced session focused on mobility, controlled stretching, posture, and steady movement.",
        schedule: [
            "Mon, Wed, Fri: 10:00 AM - 11:00 AM",
            "Tue, Thu, Sat: 1:00 PM - 2:00 PM",
        ],
    },
    {
        icon: <TbActivity aria-hidden="true" />,
        title: "Strength and Balance",
        level: "Advanced",
        description:
            "A more demanding practice combining longer holds, balance work, strength, and focused transitions.",
        schedule: [
            "Mon, Wed, Fri: 1:00 PM - 2:00 PM",
            "Tue, Thu, Sat: 8:00 AM - 9:00 AM",
        ],
    },
];

const Classes = () => {
    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Breadcrumbs items={[{ label: "Classes" }]} />

                <Styled.Header>
                    <Styled.Label>Find Your Pace</Styled.Label>

                    <Styled.Title>
                        Yoga classes for different stages
                    </Styled.Title>

                    <Styled.Intro>
                        Choose a session that feels comfortable for your current
                        level. Each class includes clear guidance and enough
                        room to progress gradually.
                    </Styled.Intro>
                </Styled.Header>

                <Styled.Feature>
                    <Styled.FeatureImage
                        src={assetPath("images/yoga-class.jpg")}
                        alt="Yoga practitioner performing a controlled outdoor pose"
                        loading="eager"
                    />

                    <Styled.FeatureContent>
                        <Styled.FeatureLabel>
                            Start where you are
                        </Styled.FeatureLabel>

                        <Styled.FeatureTitle>
                            Consistency matters more than intensity
                        </Styled.FeatureTitle>

                        <Styled.FeatureText>
                            A regular practice can improve mobility, strength,
                            balance, body awareness, and relaxation. Choose a
                            class that allows you to move confidently without
                            forcing your body.
                        </Styled.FeatureText>
                    </Styled.FeatureContent>
                </Styled.Feature>

                <Styled.Grid>
                    {classes.map(
                        ({ icon, title, level, description, schedule }) => (
                            <Styled.Card key={title}>
                                <Styled.CardTop>
                                    <Styled.IconBox>{icon}</Styled.IconBox>

                                    <Styled.Level>{level}</Styled.Level>
                                </Styled.CardTop>

                                <Styled.CardTitle>{title}</Styled.CardTitle>

                                <Styled.CardText>{description}</Styled.CardText>

                                <Styled.Schedule>
                                    {schedule.map((time) => (
                                        <li key={time}>
                                            <TbClock aria-hidden="true" />
                                            <span>{time}</span>
                                        </li>
                                    ))}
                                </Styled.Schedule>
                            </Styled.Card>
                        ),
                    )}
                </Styled.Grid>

                <Styled.Note>
                    <strong>New to yoga?</strong>
                    <span>
                        Beginner sessions are the easiest place to start. Arrive
                        a few minutes early and let the instructor know about
                        any movement limitations before class.
                    </span>
                </Styled.Note>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default Classes;
