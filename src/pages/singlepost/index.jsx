import React, { useCallback } from "react";
import { Styled } from "./styled";

export default function SinglePost() {
    const fallbackImg =
        "https://images.unsplash.com/photo-1554306274-f23873d9a26f?auto=format&fit=crop&w=1400&q=80";

    const onImgError = useCallback(
        (e) => {
            e.currentTarget.src = fallbackImg;
        },
        [fallbackImg]
    );

    return (
        <Styled.Wrapper>
            <h2>Single Post</h2>

            <Styled.Content>
                {/* ===== LEFT ARTICLE ===== */}
                <div className="article">
                    <h3>Finding Strength & Flexibility</h3>
                    <span>Jan 5, 2025</span>

                    <img
                        src="https://images.unsplash.com/photo-1599447421416-341f1d148d14?auto=format&fit=crop&w=1200&q=80"
                        onError={onImgError}
                        alt="yoga pose"
                    />

                    <p>
                        A balanced yoga practice brings strength, stability, and grace.
                        With consistent movement and mindful breathing, the body learns to
                        release tension and rediscover its natural rhythm.
                    </p>

                    <p>
                        Over time, flexibility improves—not only in muscles and joints,
                        but also in the way we respond to challenges. Each posture becomes
                        an opportunity to pause, connect, and grow.
                    </p>
                </div>

                {/* ===== RIGHT SIDEBAR ===== */}
                <div className="sidebar">
                    <h3>Recent Posts</h3>

                    <ul>
                        <li>
                            <h4>Morning Yoga Flow</h4>
                            <span>Jan 12, 2025</span>
                        </li>
                        <li>
                            <h4>Breathwork for Calm</h4>
                            <span>Jan 10, 2025</span>
                        </li>
                        <li>
                            <h4>Understanding Body Balance</h4>
                            <span>Jan 8, 2025</span>
                        </li>
                    </ul>
                </div>
            </Styled.Content>
        </Styled.Wrapper>
    );
}
