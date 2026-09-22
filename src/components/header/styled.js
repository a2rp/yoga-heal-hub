import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;

        width: 100%;

        background: rgba(255, 255, 255, 0.96);

        border-bottom: 1px solid #e0e8e3;

        box-shadow: 0 3px 18px rgba(36, 72, 53, 0.05);

        transform: ${({ $hidden }) =>
            $hidden ? "translateY(-100%)" : "translateY(0)"};

        transition:
            transform 220ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;

        @media (prefers-reduced-motion: reduce) {
            transition: none;
        }
    `,

    Container: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;

        width: min(1180px, calc(100% - 40px));
        min-height: 76px;

        margin: 0 auto;

        @media (max-width: 600px) {
            width: min(100% - 28px, 1180px);
            min-height: 70px;
        }
    `,

    Brand: styled(NavLink)`
        display: flex;
        align-items: center;
        gap: 11px;

        flex-shrink: 0;

        color: #20352a;

        border: 1px solid transparent;
        border-radius: 12px;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #d3e0d8;

            box-shadow: 0 5px 18px rgba(31, 111, 74, 0.07);

            text-shadow: 0 1px 8px rgba(31, 111, 74, 0.12);
        }

        &:focus-visible {
            outline: 3px solid rgba(31, 111, 74, 0.18);
            outline-offset: 3px;
        }
    `,

    Logo: styled.img`
        display: block;

        width: 48px;
        height: 48px;

        padding: 3px;

        object-fit: contain;

        background: #ffffff;

        border: 1px solid #dbe5de;
        border-radius: 12px;
    `,

    BrandText: styled.div`
        min-width: 0;
    `,

    BrandName: styled.div`
        color: #20352a;

        font-size: 1rem;
        font-weight: 700;
        letter-spacing: -0.015em;
        line-height: 1.2;
    `,

    BrandLabel: styled.div`
        margin-top: 3px;

        color: #77847c;

        font-size: 0.68rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        line-height: 1.2;
        text-transform: uppercase;
    `,

    Navigation: styled.nav`
        display: flex;
        align-items: center;
        gap: 6px;

        @media (max-width: 820px) {
            display: none;
        }
    `,

    NavItem: styled(NavLink)`
        padding: 9px 10px;

        color: #465a4e;

        border: 1px solid transparent;
        border-radius: 9px;

        font-size: 0.82rem;
        font-weight: 600;
        line-height: 1.3;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &.active {
            border-color: #bdd1c4;

            box-shadow: 0 3px 12px rgba(31, 111, 74, 0.06);

            text-shadow: 0 1px 6px rgba(31, 111, 74, 0.13);
        }

        &:hover {
            border-color: #cadbd0;

            box-shadow: 0 4px 14px rgba(31, 111, 74, 0.07);

            text-shadow: 0 1px 7px rgba(31, 111, 74, 0.14);
        }

        &:focus-visible {
            outline: 3px solid rgba(31, 111, 74, 0.18);
            outline-offset: 2px;
        }
    `,

    MenuButton: styled.button`
        display: none;
        place-items: center;

        width: 44px;
        height: 44px;

        padding: 0;

        color: #294b38;
        background: transparent;

        border: 1px solid #d5e1da;
        border-radius: 10px;

        cursor: pointer;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        svg {
            width: 17px;
            height: 17px;
        }

        &:hover {
            border-color: #8eaf9b;

            box-shadow: 0 5px 16px rgba(31, 111, 74, 0.09);

            text-shadow: 0 1px 8px rgba(31, 111, 74, 0.16);
        }

        &:focus-visible {
            outline: 3px solid rgba(31, 111, 74, 0.18);
            outline-offset: 2px;
        }

        @media (max-width: 820px) {
            display: grid;
        }
    `,

    MobileNavigation: styled.nav`
        display: none;

        width: 100%;

        background: #ffffff;

        border-top: 1px solid #e2eae5;

        @media (max-width: 820px) {
            display: block;
        }
    `,

    MobileInner: styled.div`
        display: grid;
        gap: 5px;

        width: min(1180px, calc(100% - 40px));

        margin: 0 auto;
        padding: 12px 0 16px;

        @media (max-width: 600px) {
            width: min(100% - 28px, 1180px);
        }
    `,

    MobileNavItem: styled(NavLink)`
        display: flex;
        align-items: center;

        min-height: 44px;

        padding: 10px 12px;

        color: #405448;

        border: 1px solid transparent;
        border-radius: 9px;

        font-size: 0.86rem;
        font-weight: 600;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &.active {
            border-color: #bdd1c4;

            box-shadow: 0 3px 12px rgba(31, 111, 74, 0.06);

            text-shadow: 0 1px 7px rgba(31, 111, 74, 0.13);
        }

        &:hover {
            border-color: #cadbd0;

            box-shadow: 0 4px 14px rgba(31, 111, 74, 0.07);

            text-shadow: 0 1px 7px rgba(31, 111, 74, 0.14);
        }

        &:focus-visible {
            outline: 3px solid rgba(31, 111, 74, 0.18);
            outline-offset: 2px;
        }
    `,
};
