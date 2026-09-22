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
        max-width: 700px;
        margin: 20px 0 0;

        color: #66766d;

        font-size: 0.98rem;
        line-height: 1.8;
    `,

    Grid: styled.section`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        margin-bottom: 70px;

        @media (max-width: 700px) {
            grid-template-columns: 1fr;
        }
    `,

    Card: styled.article`
        display: grid;
        grid-template-columns: 190px minmax(0, 1fr);

        overflow: hidden;

        border: 1px solid #dbe5de;
        border-radius: 20px;

        box-shadow: 0 6px 22px rgba(33, 68, 48, 0.04);

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #a7bdaf;

            box-shadow: 0 10px 28px rgba(33, 68, 48, 0.08);
        }

        @media (max-width: 1050px) {
            grid-template-columns: 150px minmax(0, 1fr);
        }

        @media (max-width: 430px) {
            grid-template-columns: 1fr;
        }
    `,

    Photo: styled.img`
        width: 100%;
        height: 100%;
        min-height: 250px;

        object-fit: cover;

        @media (max-width: 430px) {
            height: 280px;
        }
    `,

    CardContent: styled.div`
        padding: 24px;
    `,

    Role: styled.p`
        margin: 0 0 7px;

        color: #62766a;

        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    `,

    Name: styled.h2`
        margin: 0;

        color: #294032;

        font-size: 1.25rem;
        line-height: 1.3;
    `,

    Experience: styled.div`
        display: flex;
        align-items: center;
        gap: 7px;

        margin-top: 12px;

        color: #607168;

        font-size: 0.75rem;

        svg {
            width: 15px;
            height: 15px;
        }
    `,

    Description: styled.p`
        margin: 16px 0 0;

        color: #6d7b73;

        font-size: 0.82rem;
        line-height: 1.7;
    `,

    Guidance: styled.section`
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
        gap: 46px;
        align-items: center;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,

    GuidanceImage: styled.img`
        width: 100%;
        min-height: 380px;
        max-height: 500px;

        object-fit: cover;

        border: 1px solid #d9e4dd;
        border-radius: 22px;
    `,

    GuidanceContent: styled.div`
        max-width: 500px;
    `,

    GuidanceIcon: styled.div`
        display: grid;
        place-items: center;

        width: 44px;
        height: 44px;

        margin-bottom: 18px;

        color: #2d6547;

        border: 1px solid #cfe0d5;
        border-radius: 12px;

        svg {
            width: 20px;
            height: 20px;
        }
    `,

    GuidanceTitle: styled.h2`
        margin: 0 0 16px;

        color: #294032;

        font-size: clamp(1.7rem, 4vw, 2.8rem);
        letter-spacing: -0.03em;
        line-height: 1.1;
    `,

    GuidanceText: styled.p`
        margin: 0;

        color: #697970;

        font-size: 0.92rem;
        line-height: 1.8;
    `,
};
