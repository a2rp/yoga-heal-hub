import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        width: 100%;

        margin-top: 80px;
        padding: 56px 24px 24px;

        color: #25382e;
        background: #f4f8f5;

        border-top: 1px solid #dbe5de;

        @media (max-width: 768px) {
            margin-top: 60px;
            padding: 44px 18px 22px;
        }

        @media (max-width: 480px) {
            padding-inline: 14px;
        }
    `,

    Container: styled.div`
        width: min(1180px, 100%);

        margin: 0 auto;
    `,

    Top: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 48px;

        padding-bottom: 38px;

        @media (max-width: 820px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
        }
    `,

    BrandSection: styled.div`
        display: flex;
        align-items: center;
        gap: 18px;

        max-width: 520px;
    `,

    Logo: styled.img`
        flex-shrink: 0;

        width: 64px;
        height: 64px;

        padding: 5px;

        object-fit: contain;

        background: #ffffff;

        border: 1px solid #d6e1da;
        border-radius: 16px;
    `,

    BrandContent: styled.div`
        min-width: 0;
    `,

    Title: styled.h2`
        margin: 0;

        color: #20352a;

        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1.25;
    `,

    Text: styled.p`
        max-width: 440px;

        margin: 7px 0 0;

        color: #68776e;

        font-size: 0.86rem;
        line-height: 1.7;
    `,

    Socials: styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 8px;

        @media (max-width: 820px) {
            justify-content: flex-start;
        }
    `,

    IconLink: styled.a`
        display: grid;
        place-items: center;

        width: 40px;
        height: 40px;

        color: #315842;

        border: 1px solid #d4dfd8;
        border-radius: 10px;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        svg {
            width: 15px;
            height: 15px;
        }

        &:hover {
            border-color: #8eaf9b;

            box-shadow:
                0 5px 16px rgba(32, 83, 58, 0.1),
                0 0 0 2px rgba(31, 111, 74, 0.04);

            text-shadow: 0 1px 8px rgba(31, 111, 74, 0.16);
        }

        &:focus-visible {
            outline: 3px solid rgba(31, 111, 74, 0.18);
            outline-offset: 2px;
        }
    `,

    Bottom: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;

        padding-top: 22px;

        border-top: 1px solid #dbe5de;

        @media (max-width: 650px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
        }
    `,

    Copyright: styled.p`
        margin: 0;

        color: #6c7a71;

        font-size: 0.76rem;
        line-height: 1.6;

        a {
            color: #315842;

            border-bottom: 1px solid transparent;

            text-decoration: none;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease,
                text-shadow 180ms ease;
        }

        a:hover {
            border-color: #8eaf9b;

            text-shadow: 0 1px 8px rgba(31, 111, 74, 0.16);
        }

        a:focus-visible {
            outline: 3px solid rgba(31, 111, 74, 0.18);
            outline-offset: 2px;
        }
    `,

    Note: styled.p`
        margin: 0;

        color: #86938b;

        font-size: 0.74rem;
        line-height: 1.5;
    `,
};
