import{d as a,r as d,j as t}from"./index-w4rHL2dc.js";const i={Wrapper:a.div`
        max-width: 1200px;
        margin: 0 auto;
        padding: 120px 20px 60px;

        h2 {
            font-family: "Antonio", sans-serif;
            font-size: 42px;
            margin-bottom: 30px;
            color: #222;
        }
    `,Content:a.div`
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
                display: block;
                font-family: Verdana, sans-serif;
                font-size: 14px;
                color: #666;
                margin-bottom: 6px;
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
    `};function p(){const n="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1400&q=80",s="https://images.unsplash.com/photo-1554311883-83339d3da1c6?auto=format&fit=crop&w=1400&q=80",o=d.useCallback(e=>{e.currentTarget.src=s},[s]),r=[{title:"Beginners",desc:"Perfect for newcomers. Learn breathing, alignment basics and gentle stretches.",slot1:"Mon • Wed • Fri : 8 AM – 9 AM",slot2:"Tue • Thu • Sat : 10 AM – 11 AM"},{title:"Intermediate",desc:"Increase strength, flexibility and balance with guided postures.",slot1:"Mon • Wed • Fri : 10 AM – 11 AM",slot2:"Tue • Thu • Sat : 1 PM – 2 PM"},{title:"Advanced",desc:"Challenging flows, deeper asanas and strength training for experienced yogis.",slot1:"Mon • Wed • Fri : 1 PM – 2 PM",slot2:"Tue • Thu • Sat : 8 AM – 9 AM"}];return t.jsxs(i.Wrapper,{children:[t.jsx("h2",{children:"Classes"}),t.jsxs(i.Content,{children:[t.jsx("div",{className:"left",children:r.map((e,l)=>t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:e.title}),t.jsx("p",{children:e.desc}),t.jsx("span",{children:e.slot1}),t.jsx("span",{children:e.slot2})]},l))}),t.jsx("img",{src:n,alt:"Yoga class",onError:o,className:"figure"})]})]})}export{p as default};
