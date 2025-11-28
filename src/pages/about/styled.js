import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        max-width: 1200px;
        margin: 0 auto;
        padding: 120px 20px 60px; /* space for fixed header */

        h2 {
            font-family: "Antonio", sans-serif;
            font-size: 42px;
            margin: 0 0 30px;
            color: #222;
        }
    `,

    Content: styled.div`
        display: flex;
        justify-content: space-between;
        gap: 40px;

        @media (max-width: 820px) {
            flex-direction: column;
        }

        .textBlock {
            width: 55%;

            @media (max-width: 820px) {
                width: 100%;
            }

            h3 {
                font-family: "Antonio", sans-serif;
                font-size: 22px;
                margin: 30px 0 10px;
                color: #222;
            }

            p {
                font-family: Verdana, sans-serif;
                font-size: 15px;
                color: #444;
                line-height: 1.6;
                margin-bottom: 12px;
            }
        }

        .figure {
            width: 40%;
            max-width: 460px;
            border-radius: 12px;
            object-fit: cover;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);

            @media (max-width: 820px) {
                width: 90%;
                margin: 0 auto;
            }
        }
    `,
};
