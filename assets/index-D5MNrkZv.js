import{d as s,r as n,j as t}from"./index-w4rHL2dc.js";const i={Wrapper:s.div`
        max-width: 1200px;
        margin: 0 auto;
        padding: 120px 20px 60px;

        h2 {
            font-family: "Antonio", sans-serif;
            font-size: 42px;
            margin-bottom: 30px;
            color: #222;
        }
    `,Content:s.div`
        display: flex;
        justify-content: space-between;
        gap: 40px;

        @media (max-width: 820px) {
            flex-direction: column;
        }

        .grid {
            width: 55%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;

            @media (max-width: 820px) {
                width: 100%;
            }
        }

        .card {
            text-align: center;

            img {
                width: 100%;
                height: 200px;
                object-fit: cover;
                border-radius: 12px;
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
            }

            h4 {
                font-family: "Antonio", sans-serif;
                font-size: 18px;
                margin-top: 12px;
                color: #222;
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
    `};function d(){const e="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=1400&q=80",o="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1400&q=80",r=n.useCallback(a=>{a.currentTarget.src=o},[o]),p=[{name:"Aarav Sharma",img:"https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&w=600&q=80"},{name:"Meera Kapoor",img:"https://images.unsplash.com/photo-1544717305-996b815c338c?auto=format&fit=crop&w=600&q=80"},{name:"Rohan Verma",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80"},{name:"Priya Nair",img:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80"}];return t.jsxs(i.Wrapper,{children:[t.jsx("h2",{children:"Instructors"}),t.jsxs(i.Content,{children:[t.jsx("div",{className:"grid",children:p.map((a,m)=>t.jsxs("div",{className:"card",children:[t.jsx("img",{src:a.img,onError:r,alt:a.name}),t.jsx("h4",{children:a.name})]},m))}),t.jsx("img",{src:e,alt:"Yoga",onError:r,className:"figure"})]})]})}export{d as default};
