import{d as a,r as n,j as e}from"./index-w4rHL2dc.js";const i={Wrapper:a.div`
        max-width: 1200px;
        margin: 0 auto;
        padding: 120px 20px 60px; /* space for fixed header */

        h2 {
            font-family: "Antonio", sans-serif;
            font-size: 42px;
            margin: 0 0 30px;
            color: #222;
        }
    `,Content:a.div`
        display: flex;
        justify-content: space-between;
        gap: 40px;

        @media (max-width: 820px) {
            flex-direction: column;
        }

        .textBlock {
            width: 55%;

            @media (max-width: 820px) {
                width: 100%;
            }

            h3 {
                font-family: "Antonio", sans-serif;
                font-size: 22px;
                margin: 30px 0 10px;
                color: #222;
            }

            p {
                font-family: Verdana, sans-serif;
                font-size: 15px;
                color: #444;
                line-height: 1.6;
                margin-bottom: 12px;
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
    `};function p(){const r="https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=1400&q=80",t="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1400&q=80",o=n.useCallback(s=>{s.currentTarget.src=t},[t]);return e.jsxs(i.Wrapper,{children:[e.jsx("h2",{children:"About Us"}),e.jsxs(i.Content,{children:[e.jsxs("div",{className:"textBlock",children:[e.jsx("h3",{children:"Yoga-Heal-Hub: Wellness for Everyone"}),e.jsx("p",{children:"Yoga-Heal-Hub brings a modern, accessible approach to wellness, inspired by traditional Indian yoga and mindful movement. Our space in Jamshedpur is designed to help you move, breathe, and heal with intention."}),e.jsx("h3",{children:"Our Philosophy"}),e.jsx("p",{children:"We believe yoga is not just an exercise — it's a lifestyle that helps build flexibility, strength, balance, and inner calm. Our instructors blend classical postures with modern therapeutic techniques suitable for all ages."}),e.jsx("h3",{children:"Why Choose Us?"}),e.jsx("p",{children:"Whether you're a beginner or an experienced practitioner, our classes are structured to meet your level. We aim to create a warm, supportive environment where you feel safe, inspired, and empowered."})]}),e.jsx("img",{src:r,alt:"Yoga",onError:o,className:"figure"})]})]})}export{p as default};
