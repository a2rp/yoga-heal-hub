import React, { useCallback } from "react";
import { Styled } from "./styled";

export default function Home() {
    // Main hero image – clear yoga posture
    const mainImg =
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=80";

    // Fallback yoga image – still on-yoga-topic
    const fallbackImg =
        "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1400&q=80";

    const onImgError = useCallback(
        (e) => {
            e.currentTarget.src = fallbackImg;
        },
        [fallbackImg]
    );

    return (
        <Styled.Wrapper>
            <Styled.Tagline>
                <h1>Yoga</h1>
                <p>For Better Health &amp; Flexibility</p>
            </Styled.Tagline>

            <Styled.Figure
                src={mainImg}
                alt="Person practicing yoga"
                onError={onImgError}
                loading="lazy"
            />
        </Styled.Wrapper>
    );
}
