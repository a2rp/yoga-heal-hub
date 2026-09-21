import React from "react";
import { TbClock } from "react-icons/tb";
import { assetPath } from "../../utils/assets";
import { Styled } from "./styled";

const classData = [
    {
        title: "Beginners",
        desc: "Perfect for newcomers. Learn breathing, alignment basics, and gentle stretches.",
        slots: ["Mon, Wed, Fri: 8 AM - 9 AM", "Tue, Thu, Sat: 10 AM - 11 AM"],
    },
    {
        title: "Intermediate",
        desc: "Increase strength, flexibility, and balance with guided postures.",
        slots: ["Mon, Wed, Fri: 10 AM - 11 AM", "Tue, Thu, Sat: 1 PM - 2 PM"],
    },
    {
        title: "Advanced",
        desc: "Challenging flows, deeper asanas, and strength training for experienced yogis.",
        slots: ["Mon, Wed, Fri: 1 PM - 2 PM", "Tue, Thu, Sat: 8 AM - 9 AM"],
    },
];

export default function Classes() {
    return (
        <Styled.Wrapper>
            <span className="eyebrow">Find your pace</span>
            <h2>Classes</h2>

            <Styled.Content>
                <div className="left">
                    {classData.map((item) => (
                        <article className="section" key={item.title}>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            {item.slots.map((slot) => (
                                <span key={slot}>
                                    <TbClock aria-hidden="true" />
                                    {slot}
                                </span>
                            ))}
                        </article>
                    ))}
                </div>

                <img
                    src={assetPath("images/yoga-class.jpg")}
                    alt="Person practicing yoga outdoors"
                    className="figure"
                    loading="lazy"
                />
            </Styled.Content>
        </Styled.Wrapper>
    );
}
