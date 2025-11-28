import{d as r,j as e}from"./index-w4rHL2dc.js";const o={Wrapper:r.div`
        max-width: 1100px;
        margin: 0 auto;
        padding: 120px 20px 60px;

        h2 {
            font-family: "Antonio", sans-serif;
            font-size: 40px;
            color: #222;
            margin-bottom: 30px;
        }
    `,Form:r.form`
        width: 100%;
        max-width: 520px;
        padding: 30px 0;

        h3 {
            font-family: "Antonio", sans-serif;
            font-size: 24px;
            color: #111;
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 22px;
        }

        span {
            display: block;
            font-size: 14px;
            color: #555;
            margin-bottom: 6px;
        }

        input,
        textarea {
            width: 100%;
            font-size: 14px;
            padding: 12px 14px;
            border: 1px solid #ccc;
            border-radius: 6px;
            background: #f5f5f5;
            color: #333;
            font-family: Verdana, sans-serif;
            transition: 0.2s ease;
        }

        input:focus,
        textarea:focus {
            outline: none;
            border-color: #3b6ef3;
            background: #ffffff;
            box-shadow: 0 0 0 2px rgba(59, 110, 243, 0.15);
        }

        textarea {
            height: 160px;
            resize: none;
        }

        button {
            background: #077054;
            color: #fff;
            border: none;
            border-radius: 6px;
            font-size: 14px;
            padding: 12px 22px;
            cursor: pointer;
            transition: 0.25s ease;
            float: right;
        }

        button:hover {
            background: #055c42;
        }
    `};function n(){return e.jsxs(o.Wrapper,{children:[e.jsx("h2",{children:"Contact"}),e.jsxs(o.Form,{children:[e.jsx("h3",{children:"Inquiries"}),e.jsxs("label",{children:[e.jsx("span",{children:"Name"}),e.jsx("input",{type:"text",placeholder:"Enter your full name"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Email"}),e.jsx("input",{type:"email",placeholder:"Enter your email address"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Subject"}),e.jsx("input",{type:"text",placeholder:"What is this about?"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Message"}),e.jsx("textarea",{placeholder:"Write your message..."})]}),e.jsx("button",{type:"submit",children:"Send"})]})]})}export{n as default};
