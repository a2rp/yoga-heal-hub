import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        max-width: 1100px;
        margin: 0 auto;
        padding: 120px 20px 60px;

        h2 {
            font-family: "Antonio", sans-serif;
            font-size: 40px;
            color: #222;
            margin-bottom: 30px;
        }
    `,

    Content: styled.div`
        display: flex;
        gap: 40px;

        @media (max-width: 820px) {
            flex-direction: column;
        }

        /* LEFT ARTICLE */
        .article {
            flex: 1;
        }

        .article h3 {
            font-family: "Antonio", sans-serif;
            font-size: 28px;
            margin: 0 0 6px;
            color: #111;
        }

        .article span {
            display: block;
            font-size: 14px;
            color: #666;
            margin-bottom: 18px;
        }

        .article img {
            width: 100%;
            max-height: 350px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 18px;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
        }

        .article p {
            line-height: 1.7;
            margin: 0 0 22px;
            color: #444;
        }

        /* RIGHT SIDEBAR */
        .sidebar {
            width: 260px;

            @media (max-width: 820px) {
                width: 100%;
            }
        }

        .sidebar h3 {
            font-family: "Antonio", sans-serif;
            font-size: 22px;
            margin-bottom: 18px;
            color: #111;
        }

        .sidebar ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .sidebar li {
            padding: 18px 0;
            border-bottom: 1px solid #ddd;
        }

        .sidebar h4 {
            font-size: 16px;
            margin: 0 0 4px;
            color: #222;
        }

        .sidebar span {
            font-size: 14px;
            color: #666;
        }
    `,
};
