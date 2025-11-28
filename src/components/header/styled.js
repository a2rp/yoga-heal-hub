import styled from "styled-components";

export const Styled = {
    HeaderBar: styled.header`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        background: #ffffff;
        border-bottom: 1px solid #e4e4e4;
    `,

    Inner: styled.div`
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    `,

    Brand: styled.div`
        .brandLink {
            text-decoration: none;
            color: inherit;
        }

        .title {
            display: block;
            font-family: "Antonio", sans-serif;
            font-size: 26px;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: #222;
        }

        .tagline {
            display: block;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.18em;
            margin-top: 2px;
            color: #777;
        }
    `,

    Nav: styled.nav`
        @media (max-width: 840px) {
            display: none;
        }

        ul {
            display: flex;
            align-items: center;
            gap: 26px;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .link {
            font-size: 14px;
            text-decoration: none;
            color: #444;
            position: relative;
        }

        .link.active {
            color: #077054;
            font-weight: 600;
        }

        .hasSub {
            position: relative;
        }

        .parentBtn {
            background: transparent;
            border: none;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            cursor: pointer;
            font-size: 14px;
            color: #444;
            padding: 0;
        }

        .dropdown {
            position: absolute;
            top: 150%;
            left: 50%;
            transform: translateX(-50%);
            background: #ffffff;
            border-radius: 6px;
            border: 1px solid #e4e4e4;
            padding: 8px 0;
            min-width: 160px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.15s ease-out, transform 0.15s ease-out;
        }

        .hasSub:hover .dropdown {
            opacity: 1;
            pointer-events: auto;
            transform: translate(-50%, 0);
        }

        .dropdown .link {
            display: block;
            padding: 7px 14px;
            font-size: 13px;
            color: #444;
        }

        .dropdown .link.active {
            color: #077054;
            font-weight: 600;
        }

        .dropdown .link:hover {
            background: #f5f5f5;
        }
    `,

    MobileToggle: styled.div`
        display: none;

        @media (max-width: 840px) {
            display: block;
        }

        button {
            border: none;
            background: transparent;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
    `,

    MobileMenu: styled.div`
        position: fixed;
        inset: 0;
        z-index: 999;
        background: #ffffff;
        padding: 70px 24px 24px;
        display: flex;
        flex-direction: column;
        align-items: stretch;

        @media (min-width: 841px) {
            display: none;
        }

        .topRow {
            position: absolute;
            top: 10px;
            left: 0;
            right: 0;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .mobileTitle {
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: #777;
        }

        .topRow button {
            border: none;
            background: transparent;
            cursor: pointer;
        }

        .navList {
            list-style: none;
            margin: 40px 0 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 18px;
            align-items: center; /* ✅ center everything */
            text-align: center; /* ✅ center text */
        }

        .mobileLink {
            font-size: 18px;
            text-decoration: none;
            color: #222;
        }

        .mobileLink.active {
            color: #077054;
            font-weight: 600;
        }

        /* Classes item in mobile */

        .mobileHasSub {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center; /* ✅ center the Classes label */
        }

        .mobileParent {
            border: none;
            background: transparent;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 18px;
            color: #222;
        }

        .chevron {
            transition: transform 0.18s ease-out;
        }
        .chevron.open {
            transform: rotate(180deg);
        }

        .mobileSubList {
            list-style: none;
            padding: 8px 0 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: center; /* ✅ keep subs visually under Classes */
        }

        .subLink {
            font-size: 15px;
            text-decoration: none;
            color: #555;
            padding-left: 12px;
        }

        .subLink.active {
            color: #077054;
            font-weight: 600;
        }
    `,
};
