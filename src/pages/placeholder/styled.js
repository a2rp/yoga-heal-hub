import styled from "styled-components";

const PageWrapper = styled.main`
    min-height: calc(100vh - 60px);
    padding: 32px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-bg);
    color: var(--color-text);
`;

const InnerCard = styled.section`
    width: 100%;
    max-width: 720px;
    padding: 32px 24px;
    border-radius: 16px;
    border: 1px solid var(--color-border, #333);
    background: var(--color-card, rgba(255, 255, 255, 0.02));
    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.45);
    text-align: center;
`;

const IconBadge = styled.div`
    width: 56px;
    height: 56px;
    margin: 0 auto 16px auto;
    border-radius: 50%;
    border: 1px solid var(--color-border, #333);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    color: var(--color-heading, #ffffff);
    background: radial-gradient(
        circle at 30% 0%,
        rgba(255, 255, 255, 0.24),
        transparent 60%
    );
`;

const StatusBadge = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 4px 10px;
    margin-bottom: 12px;
    border-radius: 999px;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.06);
    color: var(--color-text, #aaaaaa);
    border: 1px solid rgba(255, 255, 255, 0.08);
`;

const MainTitle = styled.h1`
    margin: 0 0 8px 0;
    font-size: clamp(24px, 3vw, 30px);
    color: var(--color-heading, #ffffff);
`;

const SubTitle = styled.p`
    margin: 0 0 18px 0;
    font-size: 14px;
    line-height: 1.6;
    color: var(--color-text, #aaaaaa);
`;

const RouteInfo = styled.p`
    margin: 0 0 10px 0;
    font-size: 13px;
    color: var(--color-text, #aaaaaa);

    code {
        font-family: "Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco,
            Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 12px;
        padding: 2px 6px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        color: var(--color-heading, #ffffff);
    }
`;

const HelperText = styled.p`
    margin: 0;
    font-size: 12px;
    line-height: 1.6;
    color: var(--color-text, #9a9a9a);
`;

export const Styled = {
    PageWrapper,
    InnerCard,
    IconBadge,
    StatusBadge,
    MainTitle,
    SubTitle,
    RouteInfo,
    HelperText,
};
