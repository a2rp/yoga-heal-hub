import{g as r,j as e}from"./index-NBNCuAmX.js";import{e as l,c as p,b as c,f as x}from"./index-vk7DLoL0.js";import{B as m}from"./index-BS0shJYh.js";import{a as h}from"./assets-DPt76iWc.js";const i={Wrapper:r.main`
        width: 100%;
        padding: 46px 24px 0;

        @media (max-width: 768px) {
            padding: 34px 18px 0;
        }

        @media (max-width: 480px) {
            padding-inline: 14px;
        }
    `,Container:r.div`
        width: min(1180px, 100%);
        margin: 0 auto;
    `,Header:r.header`
        max-width: 760px;
        margin-bottom: 46px;
    `,Label:r.p`
        margin: 0 0 10px;

        color: #54705f;

        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
    `,Title:r.h1`
        margin: 0;

        color: #21372b;

        font-size: clamp(2.3rem, 6vw, 4.6rem);
        letter-spacing: -0.04em;
        line-height: 1;
    `,Intro:r.p`
        max-width: 680px;
        margin: 20px 0 0;

        color: #66766d;

        font-size: 0.98rem;
        line-height: 1.8;
    `,Feature:r.section`
        display: grid;
        grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
        gap: 44px;
        align-items: center;

        margin-bottom: 44px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,FeatureImage:r.img`
        width: 100%;
        min-height: 360px;
        max-height: 480px;

        object-fit: cover;

        border: 1px solid #d9e4dd;
        border-radius: 22px;
    `,FeatureContent:r.div`
        max-width: 500px;
    `,FeatureLabel:r.p`
        margin: 0 0 8px;

        color: #5f7467;

        font-size: 0.76rem;
        font-weight: 700;
    `,FeatureTitle:r.h2`
        margin: 0 0 16px;

        color: #294032;

        font-size: clamp(1.7rem, 4vw, 2.8rem);
        letter-spacing: -0.03em;
        line-height: 1.1;
    `,FeatureText:r.p`
        margin: 0;

        color: #6a786f;

        font-size: 0.92rem;
        line-height: 1.8;
    `,Grid:r.section`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;

        margin-bottom: 30px;

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,Card:r.article`
        padding: 24px;

        border: 1px solid #dbe5de;
        border-radius: 18px;

        box-shadow: 0 6px 20px rgba(32, 71, 49, 0.04);

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #a8c0b0;

            box-shadow: 0 10px 28px rgba(32, 71, 49, 0.08);
        }
    `,CardTop:r.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;

        margin-bottom: 20px;
    `,IconBox:r.div`
        display: grid;
        place-items: center;

        width: 42px;
        height: 42px;

        color: #2d6547;

        border: 1px solid #cfe0d5;
        border-radius: 11px;

        svg {
            width: 19px;
            height: 19px;
        }
    `,Level:r.span`
        color: #64766b;

        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    `,CardTitle:r.h2`
        margin: 0 0 10px;

        color: #294032;

        font-size: 1.25rem;
        line-height: 1.3;
    `,CardText:r.p`
        margin: 0;

        color: #6b7971;

        font-size: 0.84rem;
        line-height: 1.7;
    `,Schedule:r.ul`
        display: grid;
        gap: 9px;

        margin: 22px 0 0;
        padding: 18px 0 0;

        border-top: 1px solid #e1e9e4;

        list-style: none;

        li {
            display: flex;
            align-items: flex-start;
            gap: 9px;

            color: #587063;

            font-size: 0.76rem;
            line-height: 1.5;
        }

        svg {
            flex-shrink: 0;

            width: 15px;
            height: 15px;

            margin-top: 1px;
        }
    `,Note:r.aside`
        display: flex;
        gap: 10px;

        padding: 18px 20px;

        color: #5c6f64;

        border: 1px solid #dce6df;
        border-radius: 14px;

        font-size: 0.82rem;
        line-height: 1.7;

        strong {
            flex-shrink: 0;
            color: #2f4a39;
        }

        @media (max-width: 600px) {
            flex-direction: column;
        }
    `},g=[{icon:e.jsx(p,{"aria-hidden":"true"}),title:"Beginner Yoga",level:"Beginner",description:"A gentle introduction to foundational poses, breathing, balance, and comfortable movement.",schedule:["Mon, Wed, Fri: 8:00 AM - 9:00 AM","Tue, Thu, Sat: 10:00 AM - 11:00 AM"]},{icon:e.jsx(c,{"aria-hidden":"true"}),title:"Flexibility Flow",level:"Intermediate",description:"A balanced session focused on mobility, controlled stretching, posture, and steady movement.",schedule:["Mon, Wed, Fri: 10:00 AM - 11:00 AM","Tue, Thu, Sat: 1:00 PM - 2:00 PM"]},{icon:e.jsx(x,{"aria-hidden":"true"}),title:"Strength and Balance",level:"Advanced",description:"A more demanding practice combining longer holds, balance work, strength, and focused transitions.",schedule:["Mon, Wed, Fri: 1:00 PM - 2:00 PM","Tue, Thu, Sat: 8:00 AM - 9:00 AM"]}],w=()=>e.jsx(i.Wrapper,{children:e.jsxs(i.Container,{children:[e.jsx(m,{items:[{label:"Classes"}]}),e.jsxs(i.Header,{children:[e.jsx(i.Label,{children:"Find Your Pace"}),e.jsx(i.Title,{children:"Yoga classes for different stages"}),e.jsx(i.Intro,{children:"Choose a session that feels comfortable for your current level. Each class includes clear guidance and enough room to progress gradually."})]}),e.jsxs(i.Feature,{children:[e.jsx(i.FeatureImage,{src:h("images/yoga-class.jpg"),alt:"Yoga practitioner performing a controlled outdoor pose",loading:"eager"}),e.jsxs(i.FeatureContent,{children:[e.jsx(i.FeatureLabel,{children:"Start where you are"}),e.jsx(i.FeatureTitle,{children:"Consistency matters more than intensity"}),e.jsx(i.FeatureText,{children:"A regular practice can improve mobility, strength, balance, body awareness, and relaxation. Choose a class that allows you to move confidently without forcing your body."})]})]}),e.jsx(i.Grid,{children:g.map(({icon:o,title:t,level:n,description:s,schedule:d})=>e.jsxs(i.Card,{children:[e.jsxs(i.CardTop,{children:[e.jsx(i.IconBox,{children:o}),e.jsx(i.Level,{children:n})]}),e.jsx(i.CardTitle,{children:t}),e.jsx(i.CardText,{children:s}),e.jsx(i.Schedule,{children:d.map(a=>e.jsxs("li",{children:[e.jsx(l,{"aria-hidden":"true"}),e.jsx("span",{children:a})]},a))})]},t))}),e.jsxs(i.Note,{children:[e.jsx("strong",{children:"New to yoga?"}),e.jsx("span",{children:"Beginner sessions are the easiest place to start. Arrive a few minutes early and let the instructor know about any movement limitations before class."})]})]})});export{w as default};
