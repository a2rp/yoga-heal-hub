import React from "react";
import { assetPath } from "../../utils/assets";
import { Styled } from "./styled";

export default function SinglePost() {
    return (
        <Styled.Wrapper>
            <h2>Single Post</h2>

            <Styled.Content>
                <div className="article">
                    <h3>Finding Strength and Flexibility</h3>
                    <span>Jan 5, 2025</span>

                    <img
                        src={assetPath("images/yoga-feature.jpg")}
                        alt="Person practicing a yoga pose indoors"
                        loading="lazy"
                    />

                    <p>
                        A balanced yoga practice brings strength, stability, and grace.
                        With consistent movement and mindful breathing, the body learns to
                        release tension and rediscover its natural rhythm.
                    </p>

                    <p>
                        Over time, flexibility improves, not only in muscles and joints,
                        but also in the way we respond to challenges. Each posture becomes
                        an opportunity to pause, connect, and grow.
                    </p>
                </div>

                <aside className="sidebar">
                    <h3>Recent Posts</h3>
                    <ul>
                        <li><h4>Morning Yoga Flow</h4><span>Jan 12, 2025</span></li>
                        <li><h4>Breathwork for Calm</h4><span>Jan 10, 2025</span></li>
                        <li><h4>Understanding Body Balance</h4><span>Jan 8, 2025</span></li>
                    </ul>
                </aside>
            </Styled.Content>
        </Styled.Wrapper>
    );
}
