import{g as i,N as a,j as e}from"./index-NBNCuAmX.js";import{T as o,a as l,b as p,c as x,d as c}from"./index-vk7DLoL0.js";import{a as n}from"./assets-DPt76iWc.js";const t={Wrapper:i.main`
        width: 100%;
    `,Hero:i.section`
        display: grid;
        grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
        gap: 52px;
        align-items: center;

        width: min(1240px, calc(100% - 48px));

        margin: 0 auto;
        padding: 70px 0 76px;

        @media (max-width: 900px) {
            grid-template-columns: 1fr;

            padding-top: 48px;
        }

        @media (max-width: 600px) {
            width: min(100% - 28px, 1240px);
            gap: 34px;

            padding: 34px 0 56px;
        }
    `,HeroContent:i.div`
        max-width: 610px;
    `,Label:i.p`
        margin: 0 0 10px;

        color: #54705f;

        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        line-height: 1.4;
        text-transform: uppercase;
    `,Title:i.h1`
        margin: 0;

        color: #20372a;

        font-size: clamp(2.8rem, 7vw, 5.4rem);
        font-weight: 700;
        letter-spacing: -0.05em;
        line-height: 0.95;
    `,HeroText:i.p`
        max-width: 570px;

        margin: 24px 0 0;

        color: #66776d;

        font-size: 1rem;
        line-height: 1.8;
    `,Actions:i.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        margin-top: 28px;
    `,PrimaryLink:i(a)`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        min-height: 44px;

        padding: 10px 16px;

        color: #24513a;

        border: 1px solid #90af9b;
        border-radius: 10px;

        font-size: 0.8rem;
        font-weight: 700;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #587e66;

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
    `,SecondaryLink:i(a)`
        display: inline-flex;
        align-items: center;
        justify-content: center;

        min-height: 44px;

        padding: 10px 16px;

        color: #5c7063;

        border: 1px solid #d2dfd6;
        border-radius: 10px;

        font-size: 0.8rem;
        font-weight: 700;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #a1bbaa;

            box-shadow: 0 5px 16px rgba(31, 111, 74, 0.07);

            text-shadow: 0 1px 8px rgba(31, 111, 74, 0.12);
        }
    `,HeroImage:i.img`
        width: 100%;
        min-height: 500px;
        max-height: 650px;

        object-fit: cover;

        border: 1px solid #d8e3dc;
        border-radius: 28px;

        @media (max-width: 600px) {
            min-height: 360px;
        }
    `,Container:i.div`
        width: min(1180px, calc(100% - 48px));
        margin: 0 auto;

        @media (max-width: 600px) {
            width: min(100% - 28px, 1180px);
        }
    `,Introduction:i.section`
        display: grid;
        grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
        gap: 50px;

        padding: 64px 0;

        border-top: 1px solid #e0e8e3;

        @media (max-width: 720px) {
            grid-template-columns: 1fr;
            gap: 18px;
        }
    `,IntroTitle:i.h2`
        margin: 0;

        color: #294032;

        font-size: clamp(1.7rem, 4vw, 2.8rem);
        letter-spacing: -0.03em;
        line-height: 1.15;
    `,IntroText:i.p`
        max-width: 620px;

        margin: 0;

        color: #68786f;

        font-size: 0.95rem;
        line-height: 1.85;
    `,Benefits:i.section`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;

        margin-bottom: 76px;

        @media (max-width: 760px) {
            grid-template-columns: 1fr;
        }
    `,BenefitCard:i.article`
        padding: 25px;

        border: 1px solid #dce6df;
        border-radius: 18px;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #a8c0b0;

            box-shadow: 0 10px 28px rgba(33, 70, 50, 0.07);
        }
    `,IconBox:i.div`
        display: grid;
        place-items: center;

        width: 42px;
        height: 42px;

        margin-bottom: 18px;

        color: #2f6548;

        border: 1px solid #cfe0d5;
        border-radius: 11px;

        svg {
            width: 19px;
            height: 19px;
        }
    `,CardTitle:i.h3`
        margin: 0 0 9px;

        color: #294032;

        font-size: 1rem;
    `,CardText:i.p`
        margin: 0;

        color: #6b7971;

        font-size: 0.84rem;
        line-height: 1.7;
    `,ClassesSection:i.section`
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
        gap: 50px;
        align-items: center;

        margin-bottom: 80px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,SectionImage:i.img`
        width: 100%;
        min-height: 420px;
        max-height: 520px;

        object-fit: cover;

        border: 1px solid #d8e3dc;
        border-radius: 22px;
    `,ClassesContent:i.div`
        max-width: 520px;
    `,SectionTitle:i.h2`
        margin: 0;

        color: #294032;

        font-size: clamp(1.8rem, 4vw, 3rem);
        letter-spacing: -0.035em;
        line-height: 1.1;
    `,ClassList:i.ul`
        display: grid;
        gap: 16px;

        margin: 26px 0;
        padding: 0;

        list-style: none;

        li {
            padding-bottom: 16px;

            border-bottom: 1px solid #e0e8e3;
        }

        strong {
            display: block;

            margin-bottom: 5px;

            color: #304a3a;

            font-size: 0.86rem;
        }

        span {
            display: block;

            color: #6f7d74;

            font-size: 0.8rem;
            line-height: 1.65;
        }
    `,TextLink:i(a)`
        display: inline-flex;
        align-items: center;
        gap: 7px;

        padding: 6px 2px;

        color: #315a42;

        border-bottom: 1px solid transparent;

        font-size: 0.78rem;
        font-weight: 700;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #8eaf9b;

            text-shadow: 0 1px 8px rgba(31, 111, 74, 0.16);
        }

        svg {
            width: 15px;
            height: 15px;
        }
    `,Community:i.section`
        display: grid;
        grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
        gap: 48px;
        align-items: center;

        margin-bottom: 80px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,CommunityContent:i.div`
        max-width: 510px;
    `,SectionText:i.p`
        margin: 18px 0 24px;

        color: #697970;

        font-size: 0.9rem;
        line-height: 1.8;
    `,CommunityImage:i.img`
        width: 100%;
        min-height: 410px;
        max-height: 520px;

        object-fit: cover;

        border: 1px solid #d8e3dc;
        border-radius: 22px;
    `,Quote:i.section`
        max-width: 820px;

        margin: 0 auto 80px;
        padding: 38px;

        text-align: center;

        border-top: 1px solid #dce6df;
        border-bottom: 1px solid #dce6df;

        blockquote {
            margin: 0;

            color: #314a3a;

            font-size: clamp(1.25rem, 3vw, 1.8rem);
            line-height: 1.55;
        }

        span {
            display: block;

            margin-top: 16px;

            color: #7a8980;

            font-size: 0.74rem;
            font-weight: 700;
        }
    `,CallToAction:i.section`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;

        padding: 34px;

        border: 1px solid #d9e4dd;
        border-radius: 20px;

        @media (max-width: 700px) {
            flex-direction: column;
            align-items: flex-start;
        }
    `,CallTitle:i.h2`
        margin: 0;

        color: #294032;

        font-size: clamp(1.5rem, 3vw, 2.2rem);
        letter-spacing: -0.025em;
    `,CallText:i.p`
        margin: 9px 0 0;

        color: #6d7b73;

        font-size: 0.84rem;
        line-height: 1.7;
    `},m=[{icon:e.jsx(p,{"aria-hidden":"true"}),title:"Move Better",text:"Build mobility, balance, strength, and confidence through regular guided movement."},{icon:e.jsx(x,{"aria-hidden":"true"}),title:"Breathe Better",text:"Use simple breathing practices to create calmer transitions between busy parts of the day."},{icon:e.jsx(c,{"aria-hidden":"true"}),title:"Feel Better",text:"Create a routine that supports physical comfort, body awareness, and everyday well-being."}],h=[{title:"Beginner Yoga",text:"Learn comfortable foundational poses, breathing, and alignment."},{title:"Flexibility Flow",text:"Improve mobility through patient stretches and controlled movement."},{title:"Strength and Balance",text:"Build stability and body control through more focused practice."}],f=()=>e.jsxs(t.Wrapper,{children:[e.jsxs(t.Hero,{children:[e.jsxs(t.HeroContent,{children:[e.jsx(t.Label,{children:"Move With Intention"}),e.jsx(t.Title,{children:"Yoga for stronger, calmer everyday living"}),e.jsx(t.HeroText,{children:"Practical classes, thoughtful guidance, and a welcoming approach for people who want to move better, improve flexibility, and create a more mindful routine."}),e.jsxs(t.Actions,{children:[e.jsxs(t.PrimaryLink,{to:"/classes",children:["Explore Classes",e.jsx(o,{"aria-hidden":"true"})]}),e.jsx(t.SecondaryLink,{to:"/about",children:"Our Approach"})]})]}),e.jsx(t.HeroImage,{src:n("images/yoga-hero.jpg"),alt:"Person practicing yoga beside calm water",loading:"eager"})]}),e.jsxs(t.Container,{children:[e.jsxs(t.Introduction,{children:[e.jsx(t.IntroTitle,{children:"A practice that can grow with you"}),e.jsx(t.IntroText,{children:"Yoga Heal Hub keeps the practice practical. Start with simple movements, learn at your own pace, and build a routine that feels useful enough to continue."})]}),e.jsx(t.Benefits,{children:m.map(({icon:r,title:s,text:d})=>e.jsxs(t.BenefitCard,{children:[e.jsx(t.IconBox,{children:r}),e.jsx(t.CardTitle,{children:s}),e.jsx(t.CardText,{children:d})]},s))}),e.jsxs(t.ClassesSection,{children:[e.jsx(t.SectionImage,{src:n("images/yoga-class.jpg"),alt:"Yoga practitioner holding a balanced outdoor pose",loading:"lazy"}),e.jsxs(t.ClassesContent,{children:[e.jsx(t.Label,{children:"Find Your Pace"}),e.jsx(t.SectionTitle,{children:"Classes for different experience levels"}),e.jsx(t.ClassList,{children:h.map(r=>e.jsxs("li",{children:[e.jsx("strong",{children:r.title}),e.jsx("span",{children:r.text})]},r.title))}),e.jsxs(t.TextLink,{to:"/classes",children:["View class schedule",e.jsx(o,{"aria-hidden":"true"})]})]})]}),e.jsxs(t.Community,{children:[e.jsxs(t.CommunityContent,{children:[e.jsx(t.IconBox,{children:e.jsx(l,{"aria-hidden":"true"})}),e.jsx(t.Label,{children:"Practice Together"}),e.jsx(t.SectionTitle,{children:"A supportive space for steady progress"}),e.jsx(t.SectionText,{children:"Yoga becomes easier to continue when the environment feels welcoming. Our approach values questions, modifications, rest, and progress that respects the individual."}),e.jsxs(t.TextLink,{to:"/instructors",children:["Meet the instructors",e.jsx(o,{"aria-hidden":"true"})]})]}),e.jsx(t.CommunityImage,{src:n("images/yoga-community.jpg"),alt:"Group practicing yoga together outdoors",loading:"lazy"})]}),e.jsxs(t.Quote,{children:[e.jsx("blockquote",{children:'"The goal is not to perform every pose perfectly. The goal is to build a practice that helps you feel better in your own body."'}),e.jsx("span",{children:"Yoga Heal Hub"})]}),e.jsxs(t.CallToAction,{children:[e.jsxs("div",{children:[e.jsx(t.Label,{children:"Ready To Begin?"}),e.jsx(t.CallTitle,{children:"Start with one comfortable class"}),e.jsx(t.CallText,{children:"Explore the class schedule and choose a level that matches where you are today."})]}),e.jsxs(t.PrimaryLink,{to:"/classes",children:["View Classes",e.jsx(o,{"aria-hidden":"true"})]})]})]})]});export{f as default};
