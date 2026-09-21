import{g as i,j as e,N as r,a as o}from"./index-qnHB0BdE.js";import{a as n}from"./assets-CTgU6s4x.js";const t={Wrapper:i.div`
        max-width: 1100px;
        margin: 0 auto;
        padding: 120px 20px 60px;

        h2 {
            font-family: "Antonio", sans-serif;
            font-size: 42px;
            margin-bottom: 30px;
            color: #222;
        }
    `,List:i.ul`
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
            padding: 14px;
            border: 1px solid transparent;
            border-radius: 14px;
            text-decoration: none;
            color: inherit;

            transition: border-color 0.18s ease-out, box-shadow 0.18s ease-out,
                text-shadow 0.18s ease-out;

            @media (max-width: 720px) {
                flex-direction: column;
            }
        }

        .cardLink:hover {
            border-color: #9cc4a3;
            box-shadow: 0 12px 26px rgba(25, 56, 34, 0.1);
            text-shadow: 0 1px 8px rgba(13, 123, 86, 0.16);
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

        strong {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            margin-top: 12px;
            color: #0d7b56;
            font-size: 13px;
        }
    `},s=[{title:"Morning Yoga for Energy",date:"Jan 12, 2025",image:"yoga-morning.jpg",excerpt:"Start your day with sun salutations and grounding breathwork to boost clarity and energy.",slug:"morning-yoga-for-energy"},{title:"Inner Calm Through Breath",date:"Jan 10, 2025",image:"yoga-hero.jpg",excerpt:"A simple guided breathing pattern to help release stress and reconnect with your body.",slug:"inner-calm-through-breath"},{title:"Flexibility Made Easy",date:"Jan 7, 2025",image:"yoga-flexibility.jpg",excerpt:"Gentle asanas that improve mobility and reduce stiffness, perfect for beginners.",slug:"flexibility-made-easy"}];function x(){return e.jsxs(t.Wrapper,{children:[e.jsx("span",{className:"eyebrow",children:"Practical wellness notes"}),e.jsx("h2",{children:"Blog"}),e.jsx(t.List,{children:s.map(a=>e.jsx("li",{className:"item",children:e.jsxs(r,{to:`/blog/${a.slug}`,className:"cardLink",children:[e.jsx("img",{src:n(`images/${a.image}`),alt:a.title,loading:"lazy"}),e.jsxs("div",{className:"textBlock",children:[e.jsx("h3",{children:a.title}),e.jsx("span",{children:a.date}),e.jsx("p",{children:a.excerpt}),e.jsxs("strong",{children:["Read article ",e.jsx(o,{"aria-hidden":"true"})]})]})]})},a.slug))})]})}export{x as default};
