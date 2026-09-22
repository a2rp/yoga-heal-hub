import{g as a,j as e}from"./index-NBNCuAmX.js";import{g as n,h as o}from"./index-vk7DLoL0.js";import{B as s}from"./index-BS0shJYh.js";import{a as t}from"./assets-DPt76iWc.js";const i={Wrapper:a.main`
        width: 100%;
        padding: 46px 24px 0;

        @media (max-width: 768px) {
            padding: 34px 18px 0;
        }

        @media (max-width: 480px) {
            padding-inline: 14px;
        }
    `,Container:a.div`
        width: min(1180px, 100%);
        margin: 0 auto;
    `,Header:a.header`
        max-width: 760px;
        margin-bottom: 46px;
    `,Label:a.p`
        margin: 0 0 10px;

        color: #54705f;

        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
    `,Title:a.h1`
        margin: 0;

        color: #21372b;

        font-size: clamp(2.3rem, 6vw, 4.6rem);
        letter-spacing: -0.04em;
        line-height: 1;
    `,Intro:a.p`
        max-width: 700px;
        margin: 20px 0 0;

        color: #66766d;

        font-size: 0.98rem;
        line-height: 1.8;
    `,Grid:a.section`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        margin-bottom: 70px;

        @media (max-width: 700px) {
            grid-template-columns: 1fr;
        }
    `,Card:a.article`
        display: grid;
        grid-template-columns: 190px minmax(0, 1fr);

        overflow: hidden;

        border: 1px solid #dbe5de;
        border-radius: 20px;

        box-shadow: 0 6px 22px rgba(33, 68, 48, 0.04);

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #a7bdaf;

            box-shadow: 0 10px 28px rgba(33, 68, 48, 0.08);
        }

        @media (max-width: 1050px) {
            grid-template-columns: 150px minmax(0, 1fr);
        }

        @media (max-width: 430px) {
            grid-template-columns: 1fr;
        }
    `,Photo:a.img`
        width: 100%;
        height: 100%;
        min-height: 250px;

        object-fit: cover;

        @media (max-width: 430px) {
            height: 280px;
        }
    `,CardContent:a.div`
        padding: 24px;
    `,Role:a.p`
        margin: 0 0 7px;

        color: #62766a;

        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    `,Name:a.h2`
        margin: 0;

        color: #294032;

        font-size: 1.25rem;
        line-height: 1.3;
    `,Experience:a.div`
        display: flex;
        align-items: center;
        gap: 7px;

        margin-top: 12px;

        color: #607168;

        font-size: 0.75rem;

        svg {
            width: 15px;
            height: 15px;
        }
    `,Description:a.p`
        margin: 16px 0 0;

        color: #6d7b73;

        font-size: 0.82rem;
        line-height: 1.7;
    `,Guidance:a.section`
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
        gap: 46px;
        align-items: center;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,GuidanceImage:a.img`
        width: 100%;
        min-height: 380px;
        max-height: 500px;

        object-fit: cover;

        border: 1px solid #d9e4dd;
        border-radius: 22px;
    `,GuidanceContent:a.div`
        max-width: 500px;
    `,GuidanceIcon:a.div`
        display: grid;
        place-items: center;

        width: 44px;
        height: 44px;

        margin-bottom: 18px;

        color: #2d6547;

        border: 1px solid #cfe0d5;
        border-radius: 12px;

        svg {
            width: 20px;
            height: 20px;
        }
    `,GuidanceTitle:a.h2`
        margin: 0 0 16px;

        color: #294032;

        font-size: clamp(1.7rem, 4vw, 2.8rem);
        letter-spacing: -0.03em;
        line-height: 1.1;
    `,GuidanceText:a.p`
        margin: 0;

        color: #697970;

        font-size: 0.92rem;
        line-height: 1.8;
    `},d=[{name:"Aarav Sharma",role:"Hatha and Mobility",experience:"8 years of teaching experience",image:"instructor-aarav.jpg",description:"Aarav focuses on foundational movement, posture, breathing, and steady progression for students at different levels."},{name:"Meera Kapoor",role:"Gentle Flow and Breathwork",experience:"6 years of teaching experience",image:"instructor-meera.jpg",description:"Meera combines slow movement with practical breathing exercises to create calm, approachable sessions."},{name:"Rohan Verma",role:"Strength and Balance",experience:"7 years of teaching experience",image:"instructor-rohan.jpg",description:"Rohan works with strength, stability, balance, and controlled movement for students looking to progress further."},{name:"Priya Nair",role:"Flexibility and Recovery",experience:"9 years of teaching experience",image:"instructor-priya.jpg",description:"Priya teaches mobility-focused sessions designed to improve comfort, flexibility, recovery, and body awareness."}],h=()=>e.jsx(i.Wrapper,{children:e.jsxs(i.Container,{children:[e.jsx(s,{items:[{label:"Instructors"}]}),e.jsxs(i.Header,{children:[e.jsx(i.Label,{children:"Meet The Team"}),e.jsx(i.Title,{children:"Guidance that feels personal"}),e.jsx(i.Intro,{children:"Our instructors bring different strengths to the practice while sharing the same goal: helping students move safely, understand their bodies, and build a routine they can continue."})]}),e.jsx(i.Grid,{children:d.map(r=>e.jsxs(i.Card,{children:[e.jsx(i.Photo,{src:t(`images/${r.image}`),alt:`${r.name}, yoga instructor`,loading:"lazy"}),e.jsxs(i.CardContent,{children:[e.jsx(i.Role,{children:r.role}),e.jsx(i.Name,{children:r.name}),e.jsxs(i.Experience,{children:[e.jsx(n,{"aria-hidden":"true"}),r.experience]}),e.jsx(i.Description,{children:r.description})]})]},r.name))}),e.jsxs(i.Guidance,{children:[e.jsx(i.GuidanceImage,{src:t("images/yoga-feature.jpg"),alt:"Yoga instructor demonstrating a seated yoga posture",loading:"lazy"}),e.jsxs(i.GuidanceContent,{children:[e.jsx(i.GuidanceIcon,{children:e.jsx(o,{"aria-hidden":"true"})}),e.jsx(i.Label,{children:"Supportive Guidance"}),e.jsx(i.GuidanceTitle,{children:"Ask questions and practice at your own pace"}),e.jsx(i.GuidanceText,{children:"A good class should make you feel comfortable enough to ask questions. Our instructors encourage students to adjust poses, take breaks, and choose movements that suit their current ability."})]})]})]})});export{h as default};
