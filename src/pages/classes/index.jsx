import React, { useCallback } from "react";
import { Styled } from "./styled";

export default function Classes() {
    const mainImg =
        "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1400&q=80";

    const fallbackImg =
        "https://images.unsplash.com/photo-1554311883-83339d3da1c6?auto=format&fit=crop&w=1400&q=80";

    const onImgError = useCallback(
        (e) => {
            e.currentTarget.src = fallbackImg;
        },
        [fallbackImg]
    );

    const classData = [
        {
            title: "Beginners",
            desc: "Perfect for newcomers. Learn breathing, alignment basics and gentle stretches.",
            slot1: "Mon • Wed • Fri : 8 AM – 9 AM",
            slot2: "Tue • Thu • Sat : 10 AM – 11 AM",
        },
        {
            title: "Intermediate",
            desc: "Increase strength, flexibility and balance with guided postures.",
            slot1: "Mon • Wed • Fri : 10 AM – 11 AM",
            slot2: "Tue • Thu • Sat : 1 PM – 2 PM",
        },
        {
            title: "Advanced",
            desc: "Challenging flows, deeper asanas and strength training for experienced yogis.",
            slot1: "Mon • Wed • Fri : 1 PM – 2 PM",
            slot2: "Tue • Thu • Sat : 8 AM – 9 AM",
        },
    ];

    return (
        <Styled.Wrapper>
            <h2>Classes</h2>

            <Styled.Content>
                <div className="left">
                    {classData.map((c, i) => (
                        <div className="section" key={i}>
                            <h3>{c.title}</h3>
                            <p>{c.desc}</p>
                            <span>{c.slot1}</span>
                            <span>{c.slot2}</span>
                        </div>
                    ))}
                </div>

                <img
                    src={mainImg}
                    alt="Yoga class"
                    onError={onImgError}
                    className="figure"
                />
            </Styled.Content>
        </Styled.Wrapper>
    );
}
