import styled from "styled-components";

export const Styled = {
    Button: styled.button`
        position: fixed;
        right: 24px;
        bottom: 24px;
        z-index: 900;

        display: grid;
        place-items: center;

        width: 46px;
        height: 46px;

        padding: 0;

        color: #ffffff;
        background: #1f6f4a;

        border: 1px solid #1f6f4a;
        border-radius: 50%;

        box-shadow: 0 8px 24px rgba(20, 74, 50, 0.18);

        opacity: ${({ $visible }) => ($visible ? 1 : 0)};
        visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
        pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};

        cursor: pointer;

        transition:
            opacity 180ms ease,
            visibility 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;

        svg {
            width: 15px;
            height: 15px;
        }

        &:hover {
            border-color: #0f4f32;

            box-shadow:
                0 8px 24px rgba(20, 74, 50, 0.24),
                0 0 0 3px rgba(31, 111, 74, 0.1);
        }

        &:focus-visible {
            outline: 3px solid rgba(31, 111, 74, 0.28);
            outline-offset: 3px;
        }

        @media (max-width: 600px) {
            right: 16px;
            bottom: 16px;

            width: 44px;
            height: 44px;
        }

        @media (prefers-reduced-motion: reduce) {
            scroll-behavior: auto;

            transition: none;
        }
    `,
};
