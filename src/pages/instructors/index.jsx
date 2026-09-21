import React from "react";
import { assetPath } from "../../utils/assets";
import { Styled } from "./styled";

const instructors = [
    { name: "Aarav Sharma", image: "instructor-aarav.jpg" },
    { name: "Meera Kapoor", image: "instructor-meera.jpg" },
    { name: "Rohan Verma", image: "instructor-rohan.jpg" },
    { name: "Priya Nair", image: "instructor-priya.jpg" },
];

export default function Instructors() {
    return (
        <Styled.Wrapper>
            <span className="eyebrow">Guidance for every level</span>
            <h2>Instructors</h2>

            <Styled.Content>
                <div className="grid">
                    {instructors.map((instructor) => (
                        <article className="card" key={instructor.name}>
                            <img
                                src={assetPath(`images/${instructor.image}`)}
                                alt={instructor.name}
                                loading="lazy"
                            />
                            <h4>{instructor.name}</h4>
                        </article>
                    ))}
                </div>

                <img
                    src={assetPath("images/yoga-feature.jpg")}
                    alt="Yoga instructor guiding a seated pose"
                    className="figure"
                    loading="lazy"
                />
            </Styled.Content>
        </Styled.Wrapper>
    );
}
