import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        max-width: 1100px;
        margin: 0 auto;
        padding: 120px 20px 60px;

        h2 {
            font-family: "Antonio", sans-serif;
            font-size: 42px;
            margin-bottom: 30px;
            color: #222;
        }
    `,

    List: styled.ul`
        list-style: none;
        margin: 0;
        padding: 0;

        .item {
            padding: 35px 0;
            border-bottom: 1px solid #ddd;
        }

        .cardLink {
            display: flex;
            align-items: flex-start;
            gap: 25px;
            text-decoration: none;
            color: inherit;

            transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;

            @media (max-width: 720px) {
                flex-direction: column;
            }
        }

        .cardLink:hover {
            transform: translateY(-2px);
        }

        img {
            width: 260px;
            height: 160px;
            object-fit: cover;
            border-radius: 10px;
            flex-shrink: 0;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);

            @media (max-width: 720px) {
                width: 100%;
                height: 200px;
            }
        }

        .textBlock {
            max-width: 600px;
        }

        h3 {
            font-family: "Antonio", sans-serif;
            font-size: 22px;
            margin: 0 0 6px;
            color: #111;
        }

        span {
            display: block;
            font-size: 14px;
            margin-bottom: 10px;
            color: #666;
        }

        p {
            margin: 0;
            line-height: 1.6;
            color: #444;
        }
    `,
};
