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
        margin-bottom: 48px;
    `,

    Label: styled.p`
        margin: 0 0 10px;

        color: #54705f;

        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        line-height: 1.4;
        text-transform: uppercase;
    `,

    Title: styled.h1`
        margin: 0;

        color: #21372b;

        font-size: clamp(2.3rem, 6vw, 4.6rem);
        font-weight: 700;
        letter-spacing: -0.04em;
        line-height: 1;
    `,

    Intro: styled.p`
        max-width: 700px;
        margin: 20px 0 0;

        color: #66766d;

        font-size: 1rem;
        line-height: 1.8;
    `,

    Story: styled.section`
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 52px;
        align-items: center;

        margin-bottom: 70px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
            gap: 34px;
        }
    `,

    StoryImage: styled.img`
        width: 100%;
        min-height: 420px;
        max-height: 540px;

        object-fit: cover;

        border: 1px solid #d9e4dd;
        border-radius: 24px;

        @media (max-width: 600px) {
            min-height: 320px;
        }
    `,

    StoryContent: styled.div`
        max-width: 520px;
    `,

    SmallTitle: styled.p`
        margin: 0 0 8px;

        color: #6d7c73;

        font-size: 0.8rem;
        font-weight: 700;
    `,

    StoryTitle: styled.h2`
        margin: 0 0 20px;

        color: #263d30;

        font-size: clamp(1.8rem, 4vw, 3rem);
        letter-spacing: -0.035em;
        line-height: 1.1;
    `,

    Text: styled.p`
        margin: 0 0 16px;

        color: #66756c;

        font-size: 0.94rem;
        line-height: 1.8;

        &:last-child {
            margin-bottom: 0;
        }
    `,

    Values: styled.section`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;

        margin-bottom: 70px;

        @media (max-width: 760px) {
            grid-template-columns: 1fr;
        }
    `,

    ValueCard: styled.article`
        padding: 26px;

        border: 1px solid #dce6df;
        border-radius: 18px;

        box-shadow: 0 6px 22px rgba(38, 70, 51, 0.04);

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #a8c0b0;

            box-shadow: 0 10px 28px rgba(38, 70, 51, 0.08);
        }
    `,

    IconBox: styled.div`
        display: grid;
        place-items: center;

        width: 42px;
        height: 42px;

        margin-bottom: 18px;

        color: #2d6547;

        border: 1px solid #cfe0d5;
        border-radius: 11px;

        svg {
            width: 19px;
            height: 19px;
        }
    `,

    ValueTitle: styled.h3`
        margin: 0 0 9px;

        color: #294032;

        font-size: 1rem;
        line-height: 1.3;
    `,

    ValueText: styled.p`
        margin: 0;

        color: #6c7a72;

        font-size: 0.84rem;
        line-height: 1.7;
    `,

    Philosophy: styled.section`
        display: grid;
        grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
        gap: 48px;
        align-items: center;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,

    PhilosophyContent: styled.div`
        max-width: 520px;
    `,

    SectionTitle: styled.h2`
        margin: 0 0 18px;

        color: #263d30;

        font-size: clamp(1.7rem, 4vw, 2.8rem);
        letter-spacing: -0.03em;
        line-height: 1.1;
    `,

    PhilosophyImage: styled.img`
        width: 100%;
        min-height: 380px;
        max-height: 500px;

        object-fit: cover;

        border: 1px solid #d9e4dd;
        border-radius: 24px;
    `,
};
