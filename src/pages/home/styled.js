import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        max-width: 1200px;
        margin: 0 auto;
        padding: 120px 20px 60px; /* space for fixed header */

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 820px) {
            flex-direction: column;
            gap: 40px;
            text-align: center;
        }
    `,

    Tagline: styled.div`
        max-width: 520px;

        h1 {
            font-family: "Antonio", sans-serif;
            font-size: 84px;
            font-weight: 700;
            color: #222;
            margin: 0;
            line-height: 1;
        }

        p {
            font-family: Verdana, sans-serif;
            font-size: 22px;
            color: #444;
            margin-top: 20px;
            line-height: 1.4;
        }

        @media (max-width: 820px) {
            h1 {
                font-size: 62px;
            }
            p {
                font-size: 20px;
            }
        }
    `,

    Figure: styled.img`
        width: 48%;
        max-width: 520px;
        border-radius: 12px;
        object-fit: cover;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);

        @media (max-width: 820px) {
            width: 90%;
        }
    `,
};
