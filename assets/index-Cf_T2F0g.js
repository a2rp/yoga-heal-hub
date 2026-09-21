import{g as t,j as e,T as n}from"./index-qnHB0BdE.js";import{a as o}from"./assets-CTgU6s4x.js";const i={Wrapper:t.div`
        max-width: 1200px;
        margin: 0 auto;
        padding: 120px 20px 60px;

        h2 {
            font-family: "Antonio", sans-serif;
            font-size: 42px;
            margin-bottom: 30px;
            color: #222;
        }
    `,Content:t.div`
        display: flex;
        justify-content: space-between;
        gap: 40px;

        @media (max-width: 820px) {
            flex-direction: column;
        }

        .left {
            width: 55%;

            @media (max-width: 820px) {
                width: 100%;
            }
        }

        .section {
            margin-bottom: 40px;

            h3 {
                font-family: "Antonio", sans-serif;
                font-size: 24px;
                color: #222;
                margin-bottom: 8px;
            }

            p {
                font-family: Verdana, sans-serif;
                font-size: 15px;
                line-height: 1.6;
                color: #444;
                margin-bottom: 12px;
            }

            span {
                display: flex;
                align-items: center;
                gap: 7px;
                font-family: Verdana, sans-serif;
                font-size: 14px;
                color: #666;
                margin-bottom: 6px;

                svg {
                    color: #0d7b56;
                    flex: 0 0 auto;
                }
            }
        }

        .figure {
            width: 40%;
            max-width: 460px;
            border-radius: 12px;
            object-fit: cover;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);

            @media (max-width: 820px) {
                width: 90%;
                margin: 0 auto;
            }
        }
    `},r=[{title:"Beginners",desc:"Perfect for newcomers. Learn breathing, alignment basics, and gentle stretches.",slots:["Mon, Wed, Fri: 8 AM - 9 AM","Tue, Thu, Sat: 10 AM - 11 AM"]},{title:"Intermediate",desc:"Increase strength, flexibility, and balance with guided postures.",slots:["Mon, Wed, Fri: 10 AM - 11 AM","Tue, Thu, Sat: 1 PM - 2 PM"]},{title:"Advanced",desc:"Challenging flows, deeper asanas, and strength training for experienced yogis.",slots:["Mon, Wed, Fri: 1 PM - 2 PM","Tue, Thu, Sat: 8 AM - 9 AM"]}];function c(){return e.jsxs(i.Wrapper,{children:[e.jsx("span",{className:"eyebrow",children:"Find your pace"}),e.jsx("h2",{children:"Classes"}),e.jsxs(i.Content,{children:[e.jsx("div",{className:"left",children:r.map(s=>e.jsxs("article",{className:"section",children:[e.jsx("h3",{children:s.title}),e.jsx("p",{children:s.desc}),s.slots.map(a=>e.jsxs("span",{children:[e.jsx(n,{"aria-hidden":"true"}),a]},a))]},s.title))}),e.jsx("img",{src:o("images/yoga-class.jpg"),alt:"Person practicing yoga outdoors",className:"figure",loading:"lazy"})]})]})}export{c as default};
