import styled from "styled-components";

export const Styled = {
    Footer: styled.footer`
        width: 100%;
        margin-top: 24px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface);
    `,

    Inner: styled.div`
        width: min(1200px, 100%);
        margin: 0 auto;
        padding: 22px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        font-size: 13px;
        color: var(--color-text-muted);

        .info {
            min-width: 0;
        }

        .address {
            display: block;
            margin-bottom: 4px;
            color: var(--color-heading);
            font-weight: 600;
        }

        p {
            margin: 0;
        }

        .social {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            gap: 8px;
        }

        .social a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border: 1px solid var(--color-border);
            border-radius: 9px;
            color: var(--color-text);
            transition: border-color 0.18s ease, box-shadow 0.18s ease,
                text-shadow 0.18s ease;
        }

        .social a:hover {
            border-color: var(--color-border-strong);
            box-shadow: var(--shadow-subtle);
            text-shadow: 0 1px 8px rgba(13, 123, 86, 0.2);
        }

        @media (max-width: 760px) {
            flex-direction: column;
            align-items: stretch;
            text-align: center;

            .social {
                justify-content: center;
            }
        }
    `,
};
