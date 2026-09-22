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
        width: min(1080px, 100%);
        margin: 0 auto;
    `,

    Header: styled.header`
        max-width: 700px;
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
        max-width: 650px;
        margin: 20px 0 0;

        color: #66766d;

        font-size: 0.98rem;
        line-height: 1.8;
    `,

    Layout: styled.section`
        display: grid;
        grid-template-columns: minmax(240px, 0.7fr) minmax(0, 1.3fr);
        gap: 26px;
        align-items: start;

        @media (max-width: 760px) {
            grid-template-columns: 1fr;
        }
    `,

    Info: styled.div`
        display: grid;
        gap: 12px;
    `,

    InfoCard: styled.article`
        display: flex;
        gap: 14px;

        padding: 20px;

        border: 1px solid #dce6df;
        border-radius: 16px;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #a8c0b0;

            box-shadow: 0 8px 22px rgba(32, 71, 49, 0.07);
        }

        h2 {
            margin: 0 0 6px;

            color: #2b4435;

            font-size: 0.9rem;
        }

        p,
        a {
            margin: 0;

            color: #687970;

            font-size: 0.78rem;
            line-height: 1.6;
        }

        a {
            border-bottom: 1px solid transparent;

            text-decoration: none;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease,
                text-shadow 180ms ease;
        }

        a:hover {
            border-color: #9ab5a4;

            text-shadow: 0 1px 8px rgba(31, 111, 74, 0.14);
        }
    `,

    IconBox: styled.div`
        display: grid;
        place-items: center;

        flex-shrink: 0;

        width: 38px;
        height: 38px;

        color: #2f6548;

        border: 1px solid #cfdfd5;
        border-radius: 10px;

        svg {
            width: 17px;
            height: 17px;
        }
    `,

    Form: styled.form`
        padding: 28px;

        border: 1px solid #dbe5de;
        border-radius: 20px;

        box-shadow: 0 8px 26px rgba(33, 69, 49, 0.04);

        @media (max-width: 480px) {
            padding: 20px;
        }
    `,

    FormTitle: styled.h2`
        margin: 0;

        color: #294032;

        font-size: 1.4rem;
    `,

    FormText: styled.p`
        margin: 9px 0 24px;

        color: #75837a;

        font-size: 0.8rem;
        line-height: 1.6;
    `,

    Field: styled.div`
        margin-bottom: 16px;
    `,

    FieldLabel: styled.label`
        display: block;

        margin-bottom: 7px;

        color: #53695c;

        font-size: 0.74rem;
        font-weight: 700;
    `,

    Input: styled.input`
        width: 100%;
        min-height: 44px;

        padding: 10px 12px;

        color: #2a3e32;
        background: #ffffff;

        border: 1px solid #d3dfd7;
        border-radius: 10px;

        font: inherit;
        font-size: 0.82rem;

        outline: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease;

        &::placeholder {
            color: #9aa59e;
        }

        &:focus {
            border-color: #74a087;

            box-shadow: 0 0 0 3px rgba(44, 112, 74, 0.1);
        }
    `,

    TextArea: styled.textarea`
        width: 100%;
        min-height: 140px;

        padding: 11px 12px;

        color: #2a3e32;
        background: #ffffff;

        border: 1px solid #d3dfd7;
        border-radius: 10px;

        font: inherit;
        font-size: 0.82rem;
        line-height: 1.6;

        resize: vertical;
        outline: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease;

        &::placeholder {
            color: #9aa59e;
        }

        &:focus {
            border-color: #74a087;

            box-shadow: 0 0 0 3px rgba(44, 112, 74, 0.1);
        }
    `,

    SubmitButton: styled.button`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        min-height: 44px;

        padding: 10px 16px;

        color: #275239;
        background: transparent;

        border: 1px solid #9db9a7;
        border-radius: 10px;

        font: inherit;
        font-size: 0.8rem;
        font-weight: 700;

        cursor: pointer;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #608a6e;

            box-shadow: 0 5px 16px rgba(31, 111, 74, 0.1);

            text-shadow: 0 1px 8px rgba(31, 111, 74, 0.16);
        }

        &:focus-visible {
            outline: 3px solid rgba(31, 111, 74, 0.18);
            outline-offset: 2px;
        }

        svg {
            width: 16px;
            height: 16px;
        }
    `,

    Status: styled.p`
        margin: 16px 0 0;

        color: #54705f;

        font-size: 0.76rem;
        line-height: 1.6;
    `,
};
