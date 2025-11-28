import{d as e,r as s,j as t}from"./index-w4rHL2dc.js";const i={Wrapper:e.div`
        max-width: 1200px;
        margin: 0 auto;
        padding: 120px 20px 60px; /* space for fixed header */

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 820px) {
            flex-direction: column;
            gap: 40px;
            text-align: center;
        }
    `,Tagline:e.div`
        max-width: 520px;

        h1 {
            font-family: "Antonio", sans-serif;
            font-size: 84px;
            font-weight: 700;
            color: #222;
            margin: 0;
            line-height: 1;
        }

        p {
            font-family: Verdana, sans-serif;
            font-size: 22px;
            color: #444;
            margin-top: 20px;
            line-height: 1.4;
        }

        @media (max-width: 820px) {
            h1 {
                font-size: 62px;
            }
            p {
                font-size: 20px;
            }
        }
    `,Figure:e.img`
        width: 48%;
        max-width: 520px;
        border-radius: 12px;
        object-fit: cover;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);

        @media (max-width: 820px) {
            width: 90%;
        }
    `};function x(){const o="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=80",a="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1400&q=80",r=s.useCallback(n=>{n.currentTarget.src=a},[a]);return t.jsxs(i.Wrapper,{children:[t.jsxs(i.Tagline,{children:[t.jsx("h1",{children:"Yoga"}),t.jsx("p",{children:"For Better Health & Flexibility"})]}),t.jsx(i.Figure,{src:o,alt:"Person practicing yoga",onError:r,loading:"lazy"})]})}export{x as default};
