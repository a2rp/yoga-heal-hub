import{d as o,r as l,j as t,N as d}from"./index-w4rHL2dc.js";const i={Wrapper:o.div`
        max-width: 1100px;
        margin: 0 auto;
        padding: 120px 20px 60px;

        h2 {
            font-family: "Antonio", sans-serif;
            font-size: 42px;
            margin-bottom: 30px;
            color: #222;
        }
    `,List:o.ul`
        list-style: none;
        margin: 0;
        padding: 0;

        .item {
            padding: 35px 0;
            border-bottom: 1px solid #ddd;
        }

        .cardLink {
            display: flex;
            align-items: flex-start;
            gap: 25px;
            text-decoration: none;
            color: inherit;

            transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;

            @media (max-width: 720px) {
                flex-direction: column;
            }
        }

        .cardLink:hover {
            transform: translateY(-2px);
        }

        img {
            width: 260px;
            height: 160px;
            object-fit: cover;
            border-radius: 10px;
            flex-shrink: 0;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);

            @media (max-width: 720px) {
                width: 100%;
                height: 200px;
            }
        }

        .textBlock {
            max-width: 600px;
        }

        h3 {
            font-family: "Antonio", sans-serif;
            font-size: 22px;
            margin: 0 0 6px;
            color: #111;
        }

        span {
            display: block;
            font-size: 14px;
            margin-bottom: 10px;
            color: #666;
        }

        p {
            margin: 0;
            line-height: 1.6;
            color: #444;
        }
    `};function c(){const a="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1400&q=80",r=l.useCallback(e=>{e.currentTarget.src=a},[a]),s=[{title:"Morning Yoga for Energy",date:"Jan 12, 2025",img:"https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=1200&q=80",excerpt:"Start your day with sun salutations and grounding breathwork to boost clarity and energy.",slug:"morning-yoga-for-energy"},{title:"Inner Calm Through Breath",date:"Jan 10, 2025",img:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",excerpt:"A simple guided breathing pattern to help release stress and reconnect with your body.",slug:"inner-calm-through-breath"},{title:"Flexibility Made Easy",date:"Jan 7, 2025",img:"https://images.unsplash.com/photo-1599058917212-d750089bc07f?auto=format&fit=crop&w=1200&q=80",excerpt:"Gentle asanas that improve mobility and reduce stiffness — perfect for beginners.",slug:"flexibility-made-easy"}];return t.jsxs(i.Wrapper,{children:[t.jsx("h2",{children:"Blog"}),t.jsx(i.List,{children:s.map((e,n)=>t.jsx("li",{className:"item",children:t.jsxs(d,{to:`/blog/${e.slug}`,className:"cardLink",children:[t.jsx("img",{src:e.img,onError:r,alt:e.title}),t.jsxs("div",{className:"textBlock",children:[t.jsx("h3",{children:e.title}),t.jsx("span",{children:e.date}),t.jsx("p",{children:e.excerpt})]})]})},n))})]})}export{c as default};
