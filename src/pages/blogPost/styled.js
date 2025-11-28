import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        max-width: 900px;
        margin: 0 auto;
        padding: 120px 20px 60px;

        h2 {
            font-family: "Antonio", sans-serif;
            font-size: 36px;
            color: #222;
            margin-bottom: 12px;
        }
    `,

    MetaRow: styled.div`
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: #666;
        margin-bottom: 20px;
    `,

    Cover: styled.img`
        width: 100%;
        max-height: 360px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 8px 22px rgba(0, 0, 0, 0.15);
        margin-bottom: 26px;
    `,

    Article: styled.div`
        section {
            margin-bottom: 28px;
        }

        h3 {
            font-family: "Antonio", sans-serif;
            font-size: 22px;
            margin: 0 0 8px;
            color: #222;
        }

        p {
            margin: 0;
            line-height: 1.7;
            font-size: 15px;
            color: #444;
        }
    `,

    BottomNav: styled.div`
        margin-top: 32px;

        .backLink {
            font-size: 14px;
            text-decoration: none;
            color: #0066cc;
        }

        .backLink:hover {
            text-decoration: underline;
            color: #004a99;
        }
    `,

    NotFoundBox: styled.div`
        padding: 40px 0 10px;

        p {
            margin: 0 0 16px;
            color: #444;
        }

        .backLink {
            font-size: 14px;
            text-decoration: none;
            color: #0066cc;
        }

        .backLink:hover {
            text-decoration: underline;
            color: #004a99;
        }
    `,
};
