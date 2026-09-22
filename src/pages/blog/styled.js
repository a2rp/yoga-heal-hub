import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Styled = {
    Wrapper: styled.main`
        width: 100%;
        padding: 46px 24px 0;

        @media (max-width: 768px) {
            padding: 34px 18px 0;
        }

        @media (max-width: 480px) {
            padding-inline: 14px;
        }
    `,

    Container: styled.div`
        width: min(1080px, 100%);
        margin: 0 auto;
    `,

    Header: styled.header`
        max-width: 740px;
        margin-bottom: 44px;
    `,

    Label: styled.p`
        margin: 0 0 10px;

        color: #54705f;

        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
    `,

    Title: styled.h1`
        margin: 0;

        color: #21372b;

        font-size: clamp(2.3rem, 6vw, 4.5rem);
        letter-spacing: -0.04em;
        line-height: 1;
    `,

    Intro: styled.p`
        max-width: 680px;
        margin: 20px 0 0;

        color: #66766d;

        font-size: 0.98rem;
        line-height: 1.8;
    `,

    List: styled.ul`
        display: grid;
        gap: 18px;

        margin: 0;
        padding: 0;

        list-style: none;
    `,

    Item: styled.li`
        margin: 0;
        padding: 0;
    `,

    CardLink: styled(NavLink)`
        display: grid;
        grid-template-columns: 300px minmax(0, 1fr);

        overflow: hidden;

        color: inherit;

        border: 1px solid #dbe5de;
        border-radius: 20px;

        text-decoration: none;

        box-shadow: 0 6px 20px rgba(33, 69, 49, 0.04);

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #a6bdad;

            box-shadow: 0 10px 28px rgba(33, 69, 49, 0.08);

            text-shadow: 0 1px 8px rgba(38, 82, 56, 0.08);
        }

        &:focus-visible {
            outline: 3px solid rgba(31, 111, 74, 0.18);
            outline-offset: 3px;
        }

        @media (max-width: 700px) {
            grid-template-columns: 1fr;
        }
    `,

    Image: styled.img`
        width: 100%;
        height: 100%;
        min-height: 260px;

        object-fit: cover;
    `,

    Content: styled.div`
        padding: 28px;
    `,

    Category: styled.p`
        margin: 0 0 8px;

        color: #597363;

        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    `,

    PostTitle: styled.h2`
        margin: 0;

        color: #294032;

        font-size: clamp(1.45rem, 3vw, 2rem);
        letter-spacing: -0.025em;
        line-height: 1.2;
    `,

    Date: styled.div`
        display: flex;
        align-items: center;
        gap: 7px;

        margin-top: 12px;

        color: #829087;

        font-size: 0.74rem;

        svg {
            width: 14px;
            height: 14px;
        }
    `,

    Excerpt: styled.p`
        margin: 18px 0 0;

        color: #6c7971;

        font-size: 0.86rem;
        line-height: 1.75;
    `,

    ReadMore: styled.span`
        display: inline-flex;
        align-items: center;
        gap: 7px;

        margin-top: 22px;

        color: #315a42;

        font-size: 0.78rem;
        font-weight: 700;

        svg {
            width: 15px;
            height: 15px;
        }
    `,
};
