import{g as o,r as h,j as e}from"./index-NBNCuAmX.js";import{l as g,m as b,n as u}from"./index-vk7DLoL0.js";import{B as f}from"./index-BS0shJYh.js";const r={Wrapper:o.main`
        width: 100%;
        padding: 46px 24px 0;

        @media (max-width: 768px) {
            padding: 34px 18px 0;
        }

        @media (max-width: 480px) {
            padding-inline: 14px;
        }
    `,Container:o.div`
        width: min(1080px, 100%);
        margin: 0 auto;
    `,Header:o.header`
        max-width: 700px;
        margin-bottom: 44px;
    `,Label:o.p`
        margin: 0 0 10px;

        color: #54705f;

        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
    `,Title:o.h1`
        margin: 0;

        color: #21372b;

        font-size: clamp(2.3rem, 6vw, 4.5rem);
        letter-spacing: -0.04em;
        line-height: 1;
    `,Intro:o.p`
        max-width: 650px;
        margin: 20px 0 0;

        color: #66766d;

        font-size: 0.98rem;
        line-height: 1.8;
    `,Layout:o.section`
        display: grid;
        grid-template-columns: minmax(240px, 0.7fr) minmax(0, 1.3fr);
        gap: 26px;
        align-items: start;

        @media (max-width: 760px) {
            grid-template-columns: 1fr;
        }
    `,Info:o.div`
        display: grid;
        gap: 12px;
    `,InfoCard:o.article`
        display: flex;
        gap: 14px;

        padding: 20px;

        border: 1px solid #dce6df;
        border-radius: 16px;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #a8c0b0;

            box-shadow: 0 8px 22px rgba(32, 71, 49, 0.07);
        }

        h2 {
            margin: 0 0 6px;

            color: #2b4435;

            font-size: 0.9rem;
        }

        p,
        a {
            margin: 0;

            color: #687970;

            font-size: 0.78rem;
            line-height: 1.6;
        }

        a {
            border-bottom: 1px solid transparent;

            text-decoration: none;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease,
                text-shadow 180ms ease;
        }

        a:hover {
            border-color: #9ab5a4;

            text-shadow: 0 1px 8px rgba(31, 111, 74, 0.14);
        }
    `,IconBox:o.div`
        display: grid;
        place-items: center;

        flex-shrink: 0;

        width: 38px;
        height: 38px;

        color: #2f6548;

        border: 1px solid #cfdfd5;
        border-radius: 10px;

        svg {
            width: 17px;
            height: 17px;
        }
    `,Form:o.form`
        padding: 28px;

        border: 1px solid #dbe5de;
        border-radius: 20px;

        box-shadow: 0 8px 26px rgba(33, 69, 49, 0.04);

        @media (max-width: 480px) {
            padding: 20px;
        }
    `,FormTitle:o.h2`
        margin: 0;

        color: #294032;

        font-size: 1.4rem;
    `,FormText:o.p`
        margin: 9px 0 24px;

        color: #75837a;

        font-size: 0.8rem;
        line-height: 1.6;
    `,Field:o.div`
        margin-bottom: 16px;
    `,FieldLabel:o.label`
        display: block;

        margin-bottom: 7px;

        color: #53695c;

        font-size: 0.74rem;
        font-weight: 700;
    `,Input:o.input`
        width: 100%;
        min-height: 44px;

        padding: 10px 12px;

        color: #2a3e32;
        background: #ffffff;

        border: 1px solid #d3dfd7;
        border-radius: 10px;

        font: inherit;
        font-size: 0.82rem;

        outline: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease;

        &::placeholder {
            color: #9aa59e;
        }

        &:focus {
            border-color: #74a087;

            box-shadow: 0 0 0 3px rgba(44, 112, 74, 0.1);
        }
    `,TextArea:o.textarea`
        width: 100%;
        min-height: 140px;

        padding: 11px 12px;

        color: #2a3e32;
        background: #ffffff;

        border: 1px solid #d3dfd7;
        border-radius: 10px;

        font: inherit;
        font-size: 0.82rem;
        line-height: 1.6;

        resize: vertical;
        outline: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease;

        &::placeholder {
            color: #9aa59e;
        }

        &:focus {
            border-color: #74a087;

            box-shadow: 0 0 0 3px rgba(44, 112, 74, 0.1);
        }
    `,SubmitButton:o.button`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        min-height: 44px;

        padding: 10px 16px;

        color: #275239;
        background: transparent;

        border: 1px solid #9db9a7;
        border-radius: 10px;

        font: inherit;
        font-size: 0.8rem;
        font-weight: 700;

        cursor: pointer;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #608a6e;

            box-shadow: 0 5px 16px rgba(31, 111, 74, 0.1);

            text-shadow: 0 1px 8px rgba(31, 111, 74, 0.16);
        }

        &:focus-visible {
            outline: 3px solid rgba(31, 111, 74, 0.18);
            outline-offset: 2px;
        }

        svg {
            width: 16px;
            height: 16px;
        }
    `,Status:o.p`
        margin: 16px 0 0;

        color: #54705f;

        font-size: 0.76rem;
        line-height: 1.6;
    `},F=()=>{const[t,n]=h.useState(""),s=i=>{i.preventDefault();const a=new FormData(i.currentTarget),d=String(a.get("name")||"").trim(),l=String(a.get("email")||"").trim(),m=String(a.get("subject")||"").trim(),x=String(a.get("message")||"").trim(),c=encodeURIComponent(`[Yoga Heal Hub] ${m}`),p=encodeURIComponent(`Name: ${d}
Email: ${l}

${x}`);window.location.href=`mailto:ash.ranjan09@gmail.com?subject=${c}&body=${p}`,n("Your email application should open with the message ready to send.")};return e.jsx(r.Wrapper,{children:e.jsxs(r.Container,{children:[e.jsx(f,{items:[{label:"Contact"}]}),e.jsxs(r.Header,{children:[e.jsx(r.Label,{children:"Get In Touch"}),e.jsx(r.Title,{children:"Start a conversation"}),e.jsx(r.Intro,{children:"Have a question about classes, levels, schedules, or getting started? Send a message and continue the conversation through your email application."})]}),e.jsxs(r.Layout,{children:[e.jsxs(r.Info,{children:[e.jsxs(r.InfoCard,{children:[e.jsx(r.IconBox,{children:e.jsx(g,{"aria-hidden":"true"})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Email"}),e.jsx("a",{href:"mailto:ash.ranjan09@gmail.com",children:"ash.ranjan09@gmail.com"})]})]}),e.jsxs(r.InfoCard,{children:[e.jsx(r.IconBox,{children:e.jsx(b,{"aria-hidden":"true"})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Practice"}),e.jsx("p",{children:"Yoga sessions designed for different experience levels and everyday routines."})]})]})]}),e.jsxs(r.Form,{onSubmit:s,children:[e.jsx(r.FormTitle,{children:"Send an inquiry"}),e.jsx(r.FormText,{children:"Fill in the details below. Your default email application will open with the message prepared."}),e.jsxs(r.Field,{children:[e.jsx(r.FieldLabel,{htmlFor:"contact-name",children:"Name"}),e.jsx(r.Input,{id:"contact-name",name:"name",type:"text",placeholder:"Your full name",autoComplete:"name",required:!0})]}),e.jsxs(r.Field,{children:[e.jsx(r.FieldLabel,{htmlFor:"contact-email",children:"Email"}),e.jsx(r.Input,{id:"contact-email",name:"email",type:"email",placeholder:"you@example.com",autoComplete:"email",required:!0})]}),e.jsxs(r.Field,{children:[e.jsx(r.FieldLabel,{htmlFor:"contact-subject",children:"Subject"}),e.jsx(r.Input,{id:"contact-subject",name:"subject",type:"text",placeholder:"What would you like to ask?",required:!0})]}),e.jsxs(r.Field,{children:[e.jsx(r.FieldLabel,{htmlFor:"contact-message",children:"Message"}),e.jsx(r.TextArea,{id:"contact-message",name:"message",placeholder:"Write your message here",required:!0})]}),e.jsxs(r.SubmitButton,{type:"submit",children:[e.jsx(u,{"aria-hidden":"true"}),"Prepare Email"]}),t&&e.jsx(r.Status,{role:"status",children:t})]})]})]})})};export{F as default};
