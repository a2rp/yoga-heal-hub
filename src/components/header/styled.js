import styled from "styled-components";

export const Styled = {
    HeaderBar: styled.header`
        position: fixed;
        inset: 0 0 auto;
        z-index: 1000;
        background: rgba(255, 255, 255, 0.96);
        border-bottom: 1px solid var(--color-border);
        box-shadow: 0 4px 16px rgba(25, 56, 34, 0.06);
        backdrop-filter: blur(12px);
    `,

    Inner: styled.div`
        width: min(1200px, 100%);
        min-height: 78px;
        margin: 0 auto;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
    `,

    Brand: styled.div`
        min-width: 0;

        .brandLink {
            display: inline-flex;
            align-items: center;
            gap: 11px;
            color: inherit;
            text-decoration: none;
        }

        img {
            width: 42px;
            height: 42px;
            border: 1px solid var(--color-border);
            border-radius: 11px;
            object-fit: contain;
            background: var(--color-surface);
        }

        .title,
        .tagline {
            display: block;
        }

        .title {
            color: var(--color-heading);
            font-family: "Antonio", sans-serif;
            font-size: 25px;
            letter-spacing: 0.04em;
            line-height: 1.05;
        }

        .tagline {
            color: var(--color-text-muted);
            font-size: 10px;
            letter-spacing: 0.12em;
            line-height: 1.3;
            margin-top: 3px;
            text-transform: uppercase;
        }
    `,

    Nav: styled.nav`
        @media (max-width: 840px) {
            display: none;
        }

        ul {
            display: flex;
            align-items: center;
            gap: 8px;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        li {
            position: relative;
        }

        .link,
        .parentBtn {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            min-height: 38px;
            padding: 7px 11px;
            border: 1px solid transparent;
            border-radius: 9px;
            color: var(--color-text);
            cursor: pointer;
            font-size: 14px;
            text-decoration: none;
            transition: border-color 0.18s ease, box-shadow 0.18s ease,
                text-shadow 0.18s ease;
        }

        .parentBtn {
            background: transparent;
        }

        .link:hover,
        .parentBtn:hover,
        .link.active {
            border-color: var(--color-border-strong);
            box-shadow: var(--shadow-subtle);
            text-shadow: 0 1px 8px rgba(13, 123, 86, 0.18);
        }

        .link.active {
            color: var(--accent);
            font-weight: 700;
        }

        .dropdown {
            position: absolute;
            top: calc(100% + 8px);
            left: 50%;
            min-width: 180px;
            padding: 7px;
            border: 1px solid var(--color-border);
            border-radius: 12px;
            background: var(--color-surface);
            box-shadow: var(--shadow-md);
            opacity: 0;
            pointer-events: none;
            transform: translateX(-50%);
            visibility: hidden;
        }

        .dropdown[data-open="true"] {
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
        }

        .dropdown .link {
            display: flex;
            width: 100%;
        }
    `,

    MobileToggle: styled.div`
        display: none;

        @media (max-width: 840px) {
            display: block;
        }

        button,
        button:hover {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 42px;
            height: 42px;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: transparent;
            color: var(--color-heading);
            cursor: pointer;
            transition: border-color 0.18s ease, box-shadow 0.18s ease;
        }

        button:hover {
            border-color: var(--color-border-strong);
            box-shadow: var(--shadow-subtle);
        }
    `,

    MobileMenu: styled.div`
        position: fixed;
        inset: 78px 0 0;
        z-index: 999;
        overflow-y: auto;
        padding: 22px 24px 36px;
        background: rgba(255, 255, 255, 0.98);
        border-top: 1px solid var(--color-border);

        @media (min-width: 841px) {
            display: none;
        }

        .topRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 22px;
        }

        .mobileTitle {
            color: var(--color-text-muted);
            font-size: 12px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
        }

        .topRow button,
        .mobileParent {
            border: 1px solid var(--color-border);
            border-radius: 9px;
            background: transparent;
            color: var(--color-heading);
            cursor: pointer;
        }

        .topRow button {
            display: inline-flex;
            padding: 8px;
        }

        .navList,
        .mobileSubList {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .navList {
            display: grid;
            gap: 8px;
        }

        .mobileLink,
        .mobileParent {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 12px 14px;
            font-size: 17px;
            text-decoration: none;
        }

        .mobileLink {
            border: 1px solid var(--color-border);
            border-radius: 9px;
            color: var(--color-text);
        }

        .mobileLink.active,
        .mobileLink:hover,
        .mobileParent:hover {
            border-color: var(--color-border-strong);
            box-shadow: var(--shadow-subtle);
            text-shadow: 0 1px 8px rgba(13, 123, 86, 0.18);
        }

        .mobileLink.active {
            color: var(--accent);
            font-weight: 700;
        }

        .mobileSubList {
            display: grid;
            gap: 6px;
            margin: 6px 0 2px 16px;
        }

        .mobileSubList .link {
            display: block;
            padding: 8px 12px;
            border-left: 2px solid var(--accent-border);
            color: var(--color-text-muted);
        }
    `,
};
