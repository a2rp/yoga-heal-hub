import{g as i,N as n,j as e}from"./index-DG-v9sn7.js";import{i as o,j as l}from"./index-BKD0I_yx.js";import{B as s}from"./index-vrGWLlfU.js";import{a as d}from"./assets-DPt76iWc.js";const r={Wrapper:i.main`
        width: 100%;
        padding: 46px 24px 0;

        @media (max-width: 768px) {
            padding: 34px 18px 0;
        }

        @media (max-width: 480px) {
            padding-inline: 14px;
        }
    `,Container:i.div`
        width: min(1080px, 100%);
        margin: 0 auto;
    `,Header:i.header`
        max-width: 740px;
        margin-bottom: 44px;
    `,Label:i.p`
        margin: 0 0 10px;

        color: #54705f;

        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
    `,Title:i.h1`
        margin: 0;

        color: #21372b;

        font-size: clamp(2.3rem, 6vw, 4.5rem);
        letter-spacing: -0.04em;
        line-height: 1;
    `,Intro:i.p`
        max-width: 680px;
        margin: 20px 0 0;

        color: #66766d;

        font-size: 0.98rem;
        line-height: 1.8;
    `,List:i.ul`
        display: grid;
        gap: 18px;

        margin: 0;
        padding: 0;

        list-style: none;
    `,Item:i.li`
        margin: 0;
        padding: 0;
    `,CardLink:i(n)`
        display: grid;
        grid-template-columns: 300px minmax(0, 1fr);

        overflow: hidden;

        color: inherit;

        border: 1px solid #dbe5de;
        border-radius: 20px;

        text-decoration: none;

        box-shadow: 0 6px 20px rgba(33, 69, 49, 0.04);

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #a6bdad;

            box-shadow: 0 10px 28px rgba(33, 69, 49, 0.08);

            text-shadow: 0 1px 8px rgba(38, 82, 56, 0.08);
        }

        &:focus-visible {
            outline: 3px solid rgba(31, 111, 74, 0.18);
            outline-offset: 3px;
        }

        @media (max-width: 700px) {
            grid-template-columns: 1fr;
        }
    `,Image:i.img`
        width: 100%;
        height: 100%;
        min-height: 260px;

        object-fit: cover;
    `,Content:i.div`
        padding: 28px;
    `,Category:i.p`
        margin: 0 0 8px;

        color: #597363;

        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    `,PostTitle:i.h2`
        margin: 0;

        color: #294032;

        font-size: clamp(1.45rem, 3vw, 2rem);
        letter-spacing: -0.025em;
        line-height: 1.2;
    `,Date:i.div`
        display: flex;
        align-items: center;
        gap: 7px;

        margin-top: 12px;

        color: #829087;

        font-size: 0.74rem;

        svg {
            width: 14px;
            height: 14px;
        }
    `,Excerpt:i.p`
        margin: 18px 0 0;

        color: #6c7971;

        font-size: 0.86rem;
        line-height: 1.75;
    `,ReadMore:i.span`
        display: inline-flex;
        align-items: center;
        gap: 7px;

        margin-top: 22px;

        color: #315a42;

        font-size: 0.78rem;
        font-weight: 700;

        svg {
            width: 15px;
            height: 15px;
        }
    `},g=[{title:"Morning Yoga for Energy",date:"Jan 12, 2025",image:"yoga-morning.jpg",excerpt:"A simple morning sequence to wake up the body, improve circulation, and begin the day with a clearer mind.",slug:"morning-yoga-for-energy",category:"Daily Practice"},{title:"Inner Calm Through Breath",date:"Jan 10, 2025",image:"yoga-hero.jpg",excerpt:"Use slow breathing to reduce tension, settle a busy mind, and create small moments of calm during the day.",slug:"inner-calm-through-breath",category:"Breathwork"},{title:"Flexibility Made Easy",date:"Jan 7, 2025",image:"yoga-flexibility.jpg",excerpt:"A practical approach to improving mobility without forcing stretches or rushing your body's natural progress.",slug:"flexibility-made-easy",category:"Mobility"}],h=()=>e.jsx(r.Wrapper,{children:e.jsxs(r.Container,{children:[e.jsx(s,{items:[{label:"Blog"}]}),e.jsxs(r.Header,{children:[e.jsx(r.Label,{children:"Wellness Journal"}),e.jsx(r.Title,{children:"Practical ideas for everyday well-being"}),e.jsx(r.Intro,{children:"Short, useful articles about movement, breathing, flexibility, consistency, and making yoga easier to include in everyday life."})]}),e.jsx(r.List,{children:g.map((a,t)=>e.jsx(r.Item,{children:e.jsxs(r.CardLink,{to:`/blog/${a.slug}`,children:[e.jsx(r.Image,{src:d(`images/${a.image}`),alt:a.title,loading:t===0?"eager":"lazy"}),e.jsxs(r.Content,{children:[e.jsx(r.Category,{children:a.category}),e.jsx(r.PostTitle,{children:a.title}),e.jsxs(r.Date,{children:[e.jsx(o,{"aria-hidden":"true"}),a.date]}),e.jsx(r.Excerpt,{children:a.excerpt}),e.jsxs(r.ReadMore,{children:["Read article",e.jsx(l,{"aria-hidden":"true"})]})]})]})},a.slug))})]})});export{h as default};
