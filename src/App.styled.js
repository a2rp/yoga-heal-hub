import styled from "styled-components";

const scrollbar = `
    scrollbar-width: thin;
    scrollbar-color: var(--accent-border) transparent;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--accent-border);
        border-radius: 999px;
        border: 3px solid transparent;
        background-clip: content-box;
    }
`;

export const Styled = {
    Wrapper: styled.div`
        height: 100vh;
        overflow: hidden;
        overflow-y: auto;
        scrollbar-gutter: stable;
        background: var(--color-bg);
        color: var(--color-text);
        ${scrollbar}
    `,

    Main: styled.main`
        width: 100%;
        background: var(--color-bg);
    `,

    RoutesWrapper: styled.div`
        width: 100%;
        min-height: calc(100vh - 84px);
        padding: 84px 0 12px;
    `,
};
