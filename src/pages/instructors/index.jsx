import { TbCertificate, TbHeartHandshake } from "react-icons/tb";
import Breadcrumbs from "../../components/breadcrumbs";
import { assetPath } from "../../utils/assets";
import { Styled } from "./styled";

const instructors = [
    {
        name: "Aarav Sharma",
        role: "Hatha and Mobility",
        experience: "8 years of teaching experience",
        image: "instructor-aarav.jpg",
        description:
            "Aarav focuses on foundational movement, posture, breathing, and steady progression for students at different levels.",
    },
    {
        name: "Meera Kapoor",
        role: "Gentle Flow and Breathwork",
        experience: "6 years of teaching experience",
        image: "instructor-meera.jpg",
        description:
            "Meera combines slow movement with practical breathing exercises to create calm, approachable sessions.",
    },
    {
        name: "Rohan Verma",
        role: "Strength and Balance",
        experience: "7 years of teaching experience",
        image: "instructor-rohan.jpg",
        description:
            "Rohan works with strength, stability, balance, and controlled movement for students looking to progress further.",
    },
    {
        name: "Priya Nair",
        role: "Flexibility and Recovery",
        experience: "9 years of teaching experience",
        image: "instructor-priya.jpg",
        description:
            "Priya teaches mobility-focused sessions designed to improve comfort, flexibility, recovery, and body awareness.",
    },
];

const Instructors = () => {
    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Breadcrumbs items={[{ label: "Instructors" }]} />

                <Styled.Header>
                    <Styled.Label>Meet The Team</Styled.Label>

                    <Styled.Title>Guidance that feels personal</Styled.Title>

                    <Styled.Intro>
                        Our instructors bring different strengths to the
                        practice while sharing the same goal: helping students
                        move safely, understand their bodies, and build a
                        routine they can continue.
                    </Styled.Intro>
                </Styled.Header>

                <Styled.Grid>
                    {instructors.map((instructor) => (
                        <Styled.Card key={instructor.name}>
                            <Styled.Photo
                                src={assetPath(`images/${instructor.image}`)}
                                alt={`${instructor.name}, yoga instructor`}
                                loading="lazy"
                            />

                            <Styled.CardContent>
                                <Styled.Role>{instructor.role}</Styled.Role>

                                <Styled.Name>{instructor.name}</Styled.Name>

                                <Styled.Experience>
                                    <TbCertificate aria-hidden="true" />
                                    {instructor.experience}
                                </Styled.Experience>

                                <Styled.Description>
                                    {instructor.description}
                                </Styled.Description>
                            </Styled.CardContent>
                        </Styled.Card>
                    ))}
                </Styled.Grid>

                <Styled.Guidance>
                    <Styled.GuidanceImage
                        src={assetPath("images/yoga-feature.jpg")}
                        alt="Yoga instructor demonstrating a seated yoga posture"
                        loading="lazy"
                    />

                    <Styled.GuidanceContent>
                        <Styled.GuidanceIcon>
                            <TbHeartHandshake aria-hidden="true" />
                        </Styled.GuidanceIcon>

                        <Styled.Label>Supportive Guidance</Styled.Label>

                        <Styled.GuidanceTitle>
                            Ask questions and practice at your own pace
                        </Styled.GuidanceTitle>

                        <Styled.GuidanceText>
                            A good class should make you feel comfortable enough
                            to ask questions. Our instructors encourage students
                            to adjust poses, take breaks, and choose movements
                            that suit their current ability.
                        </Styled.GuidanceText>
                    </Styled.GuidanceContent>
                </Styled.Guidance>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default Instructors;
