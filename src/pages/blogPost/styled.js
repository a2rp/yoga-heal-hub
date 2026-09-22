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
        width: min(900px, 100%);
        margin: 0 auto;
    `,

    Header: styled.header`
        max-width: 780px;
        margin-bottom: 34px;
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

        font-size: clamp(2.2rem, 6vw, 4.4rem);
        letter-spacing: -0.04em;
        line-height: 1;
    `,

    Meta: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 16px;

        margin-top: 18px;

        span {
            display: inline-flex;
            align-items: center;
            gap: 7px;

            color: #7a8980;

            font-size: 0.76rem;
        }

        svg {
            width: 14px;
            height: 14px;
        }
    `,

    Intro: styled.p`
        margin: 22px 0 0;

        color: #627269;

        font-size: 1rem;
        line-height: 1.8;
    `,

    Cover: styled.img`
        width: 100%;
        max-height: 560px;

        object-fit: cover;

        border: 1px solid #d9e4dd;
        border-radius: 22px;
    `,

    Article: styled.article`
        max-width: 720px;

        margin: 46px auto 0;

        section {
            margin-bottom: 34px;
        }

        section:last-child {
            margin-bottom: 0;
        }

        h2 {
            margin: 0 0 12px;

            color: #2b4435;

            font-size: clamp(1.35rem, 3vw, 1.75rem);
            letter-spacing: -0.02em;
            line-height: 1.3;
        }

        p {
            margin: 0;

            color: #67776e;

            font-size: 0.94rem;
            line-height: 1.9;
        }
    `,

    Bottom: styled.div`
        max-width: 720px;

        margin: 40px auto 0;
        padding-top: 24px;

        border-top: 1px solid #dfe7e2;
    `,

    BackLink: styled(NavLink)`
        display: inline-flex;
        align-items: center;
        gap: 8px;

        min-height: 42px;

        padding: 9px 13px;

        color: #315b43;

        border: 1px solid #ceddd3;
        border-radius: 10px;

        font-size: 0.8rem;
        font-weight: 700;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #8eaf9b;

            box-shadow: 0 5px 16px rgba(31, 111, 74, 0.09);

            text-shadow: 0 1px 8px rgba(31, 111, 74, 0.16);
        }

        &:focus-visible {
            outline: 3px solid rgba(31, 111, 74, 0.18);
            outline-offset: 2px;
        }

        svg {
            width: 15px;
            height: 15px;
        }
    `,

    NotFound: styled.section`
        max-width: 620px;

        padding: 34px;

        border: 1px solid #dbe5de;
        border-radius: 18px;
    `,

    NotFoundTitle: styled.h1`
        margin: 0;

        color: #294032;

        font-size: 2rem;
    `,

    NotFoundText: styled.p`
        margin: 12px 0 24px;

        color: #6b7971;

        font-size: 0.9rem;
        line-height: 1.7;
    `,
};
