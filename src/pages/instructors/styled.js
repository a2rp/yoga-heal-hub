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

        .grid {
            width: 55%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;

            @media (max-width: 820px) {
                width: 100%;
            }
        }

        .card {
            text-align: center;

            img {
                width: 100%;
                height: 200px;
                object-fit: cover;
                border-radius: 12px;
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
            }

            h4 {
                font-family: "Antonio", sans-serif;
                font-size: 18px;
                margin-top: 12px;
                color: #222;
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
