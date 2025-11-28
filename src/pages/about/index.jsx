import React, { useCallback } from "react";
import { Styled } from "./styled";

export default function About() {
    const mainImg =
        "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=1400&q=80";

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
            <h2>About Us</h2>

            <Styled.Content>
                <div className="textBlock">
                    <h3>Yoga-Heal-Hub: Wellness for Everyone</h3>
                    <p>
                        Yoga-Heal-Hub brings a modern, accessible approach to wellness, inspired by
                        traditional Indian yoga and mindful movement. Our space in Jamshedpur is
                        designed to help you move, breathe, and heal with intention.
                    </p>

                    <h3>Our Philosophy</h3>
                    <p>
                        We believe yoga is not just an exercise — it's a lifestyle that helps build
                        flexibility, strength, balance, and inner calm. Our instructors blend
                        classical postures with modern therapeutic techniques suitable for all ages.
                    </p>

                    <h3>Why Choose Us?</h3>
                    <p>
                        Whether you're a beginner or an experienced practitioner, our classes are
                        structured to meet your level. We aim to create a warm, supportive
                        environment where you feel safe, inspired, and empowered.
                    </p>
                </div>

                <img src={mainImg} alt="Yoga" onError={onImgError} className="figure" />
            </Styled.Content>
        </Styled.Wrapper>
    );
}
