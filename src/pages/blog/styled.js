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
            padding: 14px;
            border: 1px solid transparent;
            border-radius: 14px;
            text-decoration: none;
            color: inherit;

            transition: border-color 0.18s ease-out, box-shadow 0.18s ease-out,
                text-shadow 0.18s ease-out;

            @media (max-width: 720px) {
                flex-direction: column;
            }
        }

        .cardLink:hover {
            border-color: #9cc4a3;
            box-shadow: 0 12px 26px rgba(25, 56, 34, 0.1);
            text-shadow: 0 1px 8px rgba(13, 123, 86, 0.16);
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

        strong {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            margin-top: 12px;
            color: #0d7b56;
            font-size: 13px;
        }
    `,
};
