import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Styled = {
    Wrapper: styled.nav`
        width: 100%;

        margin-bottom: 24px;
    `,

    List: styled.ol`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;

        margin: 0;
        padding: 0;

        list-style: none;
    `,

    Group: styled.div`
        display: flex;
        align-items: center;
        gap: 8px;
    `,

    Item: styled.li`
        display: flex;
        align-items: center;

        color: #5d6b63;

        font-size: 0.82rem;
        line-height: 1.5;
    `,

    HomeLink: styled(NavLink)`
        display: grid;
        place-items: center;

        width: 34px;
        height: 34px;

        color: #1f6f4a;

        border: 1px solid #d7e2db;
        border-radius: 9px;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        svg {
            width: 13px;
            height: 13px;
        }

        &:hover {
            border-color: #8eb29e;

            box-shadow: 0 5px 16px rgba(31, 111, 74, 0.1);

            text-shadow: 0 1px 8px rgba(31, 111, 74, 0.18);
        }

        &:focus-visible {
            outline: 3px solid rgba(31, 111, 74, 0.18);
            outline-offset: 2px;
        }
    `,

    Link: styled(NavLink)`
        padding: 6px 2px;

        color: #456052;

        border-bottom: 1px solid transparent;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #8eb29e;

            text-shadow: 0 1px 8px rgba(31, 111, 74, 0.16);
        }

        &:focus-visible {
            outline: 3px solid rgba(31, 111, 74, 0.18);
            outline-offset: 2px;
        }
    `,

    Current: styled.span`
        padding: 6px 2px;

        color: #263b2f;

        font-weight: 600;
    `,

    Separator: styled.span`
        display: grid;
        place-items: center;

        color: #9caaa2;

        svg {
            width: 9px;
            height: 9px;
        }
    `,
};
