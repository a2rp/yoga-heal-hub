import React, { useCallback } from "react";
import { Styled } from "./styled";

export default function Instructors() {
    const mainImg =
        "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=1400&q=80";

    const fallbackImg =
        "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1400&q=80";

    const onImgError = useCallback(
        (e) => {
            e.currentTarget.src = fallbackImg;
        },
        [fallbackImg]
    );

    const instructors = [
        {
            name: "Aarav Sharma",
            img: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&w=600&q=80",
        },
        {
            name: "Meera Kapoor",
            img: "https://images.unsplash.com/photo-1544717305-996b815c338c?auto=format&fit=crop&w=600&q=80",
        },
        {
            name: "Rohan Verma",
            img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
        },
        {
            name: "Priya Nair",
            img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
        },
    ];

    return (
        <Styled.Wrapper>
            <h2>Instructors</h2>

            <Styled.Content>
                <div className="grid">
                    {instructors.map((i, n) => (
                        <div className="card" key={n}>
                            <img src={i.img} onError={onImgError} alt={i.name} />
                            <h4>{i.name}</h4>
                        </div>
                    ))}
                </div>

                <img
                    src={mainImg}
                    alt="Yoga"
                    onError={onImgError}
                    className="figure"
                />
            </Styled.Content>
        </Styled.Wrapper>
    );
}
