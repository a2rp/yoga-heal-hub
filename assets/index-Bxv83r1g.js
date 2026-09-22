import{g as o,N as t,j as e}from"./index-DG-v9sn7.js";import{o as r,k as n}from"./index-BKD0I_yx.js";const i={Wrapper:o.main`
        display: grid;
        place-items: center;

        min-height: calc(100vh - 76px);

        padding: 50px 24px;
    `,Content:o.section`
        width: min(620px, 100%);

        text-align: center;
    `,Code:o.div`
        color: #d1ddd5;

        font-size: clamp(5rem, 18vw, 10rem);
        font-weight: 800;
        letter-spacing: -0.06em;
        line-height: 0.9;
    `,Label:o.p`
        margin: 24px 0 8px;

        color: #54705f;

        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
    `,Title:o.h1`
        margin: 0;

        color: #294032;

        font-size: clamp(1.9rem, 5vw, 3rem);
        letter-spacing: -0.03em;
        line-height: 1.15;
    `,Text:o.p`
        max-width: 520px;

        margin: 18px auto 0;

        color: #6b7a71;

        font-size: 0.9rem;
        line-height: 1.75;
    `,Actions:o.div`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;

        margin-top: 28px;
    `,PrimaryLink:o(t)`
        display: inline-flex;
        align-items: center;
        gap: 8px;

        min-height: 44px;

        padding: 10px 15px;

        color: #28523a;

        border: 1px solid #91af9b;
        border-radius: 10px;

        font-size: 0.8rem;
        font-weight: 700;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #5d836a;

            box-shadow: 0 5px 16px rgba(31, 111, 74, 0.1);

            text-shadow: 0 1px 8px rgba(31, 111, 74, 0.16);
        }

        &:focus-visible {
            outline: 3px solid rgba(31, 111, 74, 0.18);
            outline-offset: 2px;
        }

        svg {
            width: 15px;
            height: 15px;
        }
    `,SecondaryLink:o(t)`
        display: inline-flex;
        align-items: center;
        gap: 8px;

        min-height: 44px;

        padding: 10px 15px;

        color: #617269;

        border: 1px solid #d4dfd8;
        border-radius: 10px;

        font-size: 0.8rem;
        font-weight: 700;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #a4baac;

            box-shadow: 0 5px 16px rgba(31, 111, 74, 0.07);

            text-shadow: 0 1px 8px rgba(31, 111, 74, 0.12);
        }

        &:focus-visible {
            outline: 3px solid rgba(31, 111, 74, 0.18);
            outline-offset: 2px;
        }

        svg {
            width: 15px;
            height: 15px;
        }
    `},d=()=>e.jsx(i.Wrapper,{children:e.jsxs(i.Content,{children:[e.jsx(i.Code,{children:"404"}),e.jsx(i.Label,{children:"Page Not Found"}),e.jsx(i.Title,{children:"This page could not be found"}),e.jsx(i.Text,{children:"The address may be incorrect, or the page may have been moved. Use one of the links below to continue browsing."}),e.jsxs(i.Actions,{children:[e.jsxs(i.PrimaryLink,{to:"/home",children:[e.jsx(r,{"aria-hidden":"true"}),"Go to Home"]}),e.jsxs(i.SecondaryLink,{to:"/blog",children:[e.jsx(n,{"aria-hidden":"true"}),"Visit Blog"]})]})]})});export{d as default};
