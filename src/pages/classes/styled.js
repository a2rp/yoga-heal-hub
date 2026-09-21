import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        max-width: 1200px;
        margin: 0 auto;
        padding: 120px 20px 60px;

        h2 {
            font-family: "Antonio", sans-serif;
            font-size: 42px;
            margin-bottom: 30px;
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

        .left {
            width: 55%;

            @media (max-width: 820px) {
                width: 100%;
            }
        }

        .section {
            margin-bottom: 40px;

            h3 {
                font-family: "Antonio", sans-serif;
                font-size: 24px;
                color: #222;
                margin-bottom: 8px;
            }

            p {
                font-family: Verdana, sans-serif;
                font-size: 15px;
                line-height: 1.6;
                color: #444;
                margin-bottom: 12px;
            }

            span {
                display: flex;
                align-items: center;
                gap: 7px;
                font-family: Verdana, sans-serif;
                font-size: 14px;
                color: #666;
                margin-bottom: 6px;

                svg {
                    color: #0d7b56;
                    flex: 0 0 auto;
                }
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
