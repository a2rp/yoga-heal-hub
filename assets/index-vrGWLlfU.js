import{G as n,g as t,N as l,j as e}from"./index-DG-v9sn7.js";function d(a){return n({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"},child:[]}]})(a)}function c(a){return n({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"},child:[]}]})(a)}const r={Wrapper:t.nav`
        width: 100%;

        margin-bottom: 24px;
    `,List:t.ol`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;

        margin: 0;
        padding: 0;

        list-style: none;
    `,Group:t.div`
        display: flex;
        align-items: center;
        gap: 8px;
    `,Item:t.li`
        display: flex;
        align-items: center;

        color: #5d6b63;

        font-size: 0.82rem;
        line-height: 1.5;
    `,HomeLink:t(l)`
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
    `,Link:t(l)`
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
    `,Current:t.span`
        padding: 6px 2px;

        color: #263b2f;

        font-weight: 600;
    `,Separator:t.span`
        display: grid;
        place-items: center;

        color: #9caaa2;

        svg {
            width: 9px;
            height: 9px;
        }
    `},x=({items:a=[]})=>e.jsx(r.Wrapper,{"aria-label":"Breadcrumb",children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.HomeLink,{to:"/","aria-label":"Home",title:"Home",children:e.jsx(d,{"aria-hidden":"true"})})}),a.map((o,i)=>{const s=i===a.length-1;return e.jsxs(r.Group,{children:[e.jsx(r.Separator,{"aria-hidden":"true",children:e.jsx(c,{})}),e.jsx(r.Item,{children:o.to&&!s?e.jsx(r.Link,{to:o.to,children:o.label}):e.jsx(r.Current,{"aria-current":s?"page":void 0,children:o.label})})]},`${o.label}-${i}`)})]})});export{x as B};
