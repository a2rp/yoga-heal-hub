import React from "react";
import { assetPath } from "../../utils/assets";
import { Styled } from "./styled";

export default function About() {
    return (
        <Styled.Wrapper>
            <span className="eyebrow">Our approach</span>
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
                        We believe yoga is more than exercise. It is a practical lifestyle that helps
                        build flexibility, strength, balance, and inner calm. Our instructors blend
                        classical postures with modern techniques suitable for all ages.
                    </p>

                    <h3>Why Choose Us?</h3>
                    <p>
                        Whether you are a beginner or an experienced practitioner, our classes are
                        structured to meet your level. We aim to create a warm, supportive
                        environment where you feel safe, inspired, and empowered.
                    </p>
                </div>

                <img
                    src={assetPath("images/yoga-community.jpg")}
                    alt="A group practicing yoga together"
                    className="figure"
                    loading="lazy"
                />
            </Styled.Content>
        </Styled.Wrapper>
    );
}
