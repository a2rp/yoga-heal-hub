import React from "react";
import { assetPath } from "../../utils/assets";
import { Styled } from "./styled";

export default function Home() {
    return (
        <Styled.Wrapper>
            <Styled.Tagline>
                <span className="eyebrow">Move with intention</span>
                <h1>Yoga</h1>
                <p>For better health and flexibility</p>
                <span className="intro">
                    Practical classes, calm guidance, and a welcoming space for every level.
                </span>
            </Styled.Tagline>

            <Styled.Figure
                src={assetPath("images/yoga-hero.jpg")}
                alt="Person practicing yoga beside the water"
                loading="eager"
            />
        </Styled.Wrapper>
    );
}
