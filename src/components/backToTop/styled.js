import styled from "styled-components";

export const Styled = {
    Fab: styled.button`
        position: fixed;
        right: 18px;
        bottom: 18px;
        z-index: 9990;
        display: grid;
        place-items: center;
        width: 44px;
        height: 44px;
        border: 1px solid var(--color-border-strong);
        border-radius: 999px;
        background: var(--color-surface);
        color: var(--accent);
        box-shadow: var(--shadow-md);
        cursor: pointer;
        opacity: ${(p) => (p.$show ? 1 : 0)};
        visibility: ${(p) => (p.$show ? "visible" : "hidden")};
        transition: opacity 0.2s ease, visibility 0.2s ease,
            border-color 0.18s ease, box-shadow 0.18s ease;

        &:hover {
            border-color: var(--accent);
            box-shadow: 0 12px 30px rgba(13, 123, 86, 0.22);
            text-shadow: 0 1px 8px rgba(13, 123, 86, 0.2);
        }

        &:focus-visible {
            outline: none;
            box-shadow: var(--focus-ring);
        }

        @media (max-width: 420px) {
            right: 12px;
            bottom: 12px;
            width: 40px;
            height: 40px;
        }
    `,
};
