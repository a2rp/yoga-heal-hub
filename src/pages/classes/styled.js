import styled from "styled-components";

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
        width: min(1180px, 100%);
        margin: 0 auto;
    `,

    Header: styled.header`
        max-width: 760px;
        margin-bottom: 46px;
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

        font-size: clamp(2.3rem, 6vw, 4.6rem);
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

    Feature: styled.section`
        display: grid;
        grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
        gap: 44px;
        align-items: center;

        margin-bottom: 44px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,

    FeatureImage: styled.img`
        width: 100%;
        min-height: 360px;
        max-height: 480px;

        object-fit: cover;

        border: 1px solid #d9e4dd;
        border-radius: 22px;
    `,

    FeatureContent: styled.div`
        max-width: 500px;
    `,

    FeatureLabel: styled.p`
        margin: 0 0 8px;

        color: #5f7467;

        font-size: 0.76rem;
        font-weight: 700;
    `,

    FeatureTitle: styled.h2`
        margin: 0 0 16px;

        color: #294032;

        font-size: clamp(1.7rem, 4vw, 2.8rem);
        letter-spacing: -0.03em;
        line-height: 1.1;
    `,

    FeatureText: styled.p`
        margin: 0;

        color: #6a786f;

        font-size: 0.92rem;
        line-height: 1.8;
    `,

    Grid: styled.section`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;

        margin-bottom: 30px;

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,

    Card: styled.article`
        padding: 24px;

        border: 1px solid #dbe5de;
        border-radius: 18px;

        box-shadow: 0 6px 20px rgba(32, 71, 49, 0.04);

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #a8c0b0;

            box-shadow: 0 10px 28px rgba(32, 71, 49, 0.08);
        }
    `,

    CardTop: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;

        margin-bottom: 20px;
    `,

    IconBox: styled.div`
        display: grid;
        place-items: center;

        width: 42px;
        height: 42px;

        color: #2d6547;

        border: 1px solid #cfe0d5;
        border-radius: 11px;

        svg {
            width: 19px;
            height: 19px;
        }
    `,

    Level: styled.span`
        color: #64766b;

        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    `,

    CardTitle: styled.h2`
        margin: 0 0 10px;

        color: #294032;

        font-size: 1.25rem;
        line-height: 1.3;
    `,

    CardText: styled.p`
        margin: 0;

        color: #6b7971;

        font-size: 0.84rem;
        line-height: 1.7;
    `,

    Schedule: styled.ul`
        display: grid;
        gap: 9px;

        margin: 22px 0 0;
        padding: 18px 0 0;

        border-top: 1px solid #e1e9e4;

        list-style: none;

        li {
            display: flex;
            align-items: flex-start;
            gap: 9px;

            color: #587063;

            font-size: 0.76rem;
            line-height: 1.5;
        }

        svg {
            flex-shrink: 0;

            width: 15px;
            height: 15px;

            margin-top: 1px;
        }
    `,

    Note: styled.aside`
        display: flex;
        gap: 10px;

        padding: 18px 20px;

        color: #5c6f64;

        border: 1px solid #dce6df;
        border-radius: 14px;

        font-size: 0.82rem;
        line-height: 1.7;

        strong {
            flex-shrink: 0;
            color: #2f4a39;
        }

        @media (max-width: 600px) {
            flex-direction: column;
        }
    `,
};
