import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        max-width: 1200px;
        margin: 0 auto;
        padding: 110px 20px 70px;

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
        max-width: 560px;

        .eyebrow {
            display: inline-block;
            margin-bottom: 14px;
            color: #0d7b56;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.16em;
            text-transform: uppercase;
        }

        h1 {
            font-family: "Antonio", sans-serif;
            font-size: clamp(64px, 9vw, 104px);
            font-weight: 700;
            color: #173328;
            margin: 0;
            line-height: 1;
        }

        p {
            font-family: Verdana, sans-serif;
            font-size: clamp(20px, 2.2vw, 28px);
            color: #3c5143;
            margin: 18px 0 12px;
            line-height: 1.4;
        }

        .intro {
            display: block;
            max-width: 470px;
            color: #69766d;
            font-size: 15px;
        }

        @media (max-width: 820px) {
            h1 {
                font-size: 62px;
            }
        }
    `,

    Figure: styled.img`
        width: 48%;
        max-width: 520px;
        border-radius: 12px;
        object-fit: cover;
        border: 1px solid #d9e4da;
        box-shadow: 0 16px 36px rgba(25, 56, 34, 0.14);

        @media (max-width: 820px) {
            width: 90%;
        }
    `,
};
