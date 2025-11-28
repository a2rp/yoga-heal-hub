import{d as a,u as d,r as h,j as e,N as n}from"./index-w4rHL2dc.js";const o={Wrapper:a.div`
        max-width: 900px;
        margin: 0 auto;
        padding: 120px 20px 60px;

        h2 {
            font-family: "Antonio", sans-serif;
            font-size: 36px;
            color: #222;
            margin-bottom: 12px;
        }
    `,MetaRow:a.div`
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: #666;
        margin-bottom: 20px;
    `,Cover:a.img`
        width: 100%;
        max-height: 360px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 8px 22px rgba(0, 0, 0, 0.15);
        margin-bottom: 26px;
    `,Article:a.div`
        section {
            margin-bottom: 28px;
        }

        h3 {
            font-family: "Antonio", sans-serif;
            font-size: 22px;
            margin: 0 0 8px;
            color: #222;
        }

        p {
            margin: 0;
            line-height: 1.7;
            font-size: 15px;
            color: #444;
        }
    `,BottomNav:a.div`
        margin-top: 32px;

        .backLink {
            font-size: 14px;
            text-decoration: none;
            color: #0066cc;
        }

        .backLink:hover {
            text-decoration: underline;
            color: #004a99;
        }
    `,NotFoundBox:a.div`
        padding: 40px 0 10px;

        p {
            margin: 0 0 16px;
            color: #444;
        }

        .backLink {
            font-size: 14px;
            text-decoration: none;
            color: #0066cc;
        }

        .backLink:hover {
            text-decoration: underline;
            color: #004a99;
        }
    `};function m(){const{slug:s}=d(),r="https://images.unsplash.com/photo-1554306274-f23873d9a26f?auto=format&fit=crop&w=1400&q=80",t=h.useMemo(()=>[{slug:"morning-yoga-for-energy",title:"Morning Yoga for Energy",date:"Jan 12, 2025",cover:"https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=1400&q=80",readTime:"5 min read",sections:[{heading:"Why Mornings Matter",text:"Practicing yoga in the morning helps reset your breath, posture, and focus before the day becomes busy. A gentle sequence of sun salutations, forward folds, and twists can wake up your spine and improve circulation."},{heading:"Simple Morning Flow",text:"Start with 5 slow breaths in a comfortable seated position. Move into a few rounds of Cat–Cow, followed by Sun Salutation A at your own pace. Finish with a short seated twist and a minute of stillness."},{heading:"Tips to Stay Consistent",text:"Keep your mat visible, sleep a little earlier, and treat your practice like a meeting with yourself. Even 10 minutes daily is more powerful than one long session in a week."}]},{slug:"inner-calm-through-breath",title:"Inner Calm Through Breath",date:"Jan 10, 2025",cover:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=80",readTime:"4 min read",sections:[{heading:"Breath as a Reset Button",text:"The way we breathe directly affects our nervous system. Slow, deep breathing signals the body that it is safe, helping to reduce stress, anxiety, and restlessness."},{heading:"Try This Simple Pattern",text:"Inhale through the nose for 4 counts, hold for 2 counts, and exhale gently through the nose for 6 counts. Repeat this cycle 8–10 times while sitting upright and relaxed."},{heading:"Bringing Calm into Daily Life",text:"Use this breath pattern before meetings, while travelling, or whenever the mind feels scattered. Over time, the body learns to return to calm more easily."}]},{slug:"flexibility-made-easy",title:"Flexibility Made Easy",date:"Jan 7, 2025",cover:"https://images.unsplash.com/photo-1599058917212-d750089bc07f?auto=format&fit=crop&w=1400&q=80",readTime:"6 min read",sections:[{heading:"Stretching Without Forcing",text:"Flexibility improves when we move with patience instead of forcing the body. Staying in a posture with steady breath allows muscles and fascia to gradually release tension."},{heading:"Areas to Focus On",text:"Hamstrings, hips, and shoulders usually hold a lot of stiffness. Simple forward folds, low lunges, and shoulder openers can create a big difference when practiced regularly."},{heading:"Create a Gentle Routine",text:"Choose 4–5 stretches, hold each for 5–8 breaths, and move slowly. Over a few weeks, you will notice more ease not just in your practice, but in daily movements too."}]}],[]).find(i=>i.slug===s);if(!t)return e.jsxs(o.Wrapper,{children:[e.jsx("h2",{children:"Blog"}),e.jsxs(o.NotFoundBox,{children:[e.jsx("p",{children:"We couldn’t find this article."}),e.jsx(n,{to:"/blog",className:"backLink",children:"← Back to Blog"})]})]});const l=t.cover||r;return e.jsxs(o.Wrapper,{children:[e.jsx("h2",{children:t.title}),e.jsxs(o.MetaRow,{children:[e.jsx("span",{children:t.date}),e.jsx("span",{children:"•"}),e.jsx("span",{children:t.readTime})]}),e.jsx(o.Cover,{src:l,alt:t.title,loading:"lazy"}),e.jsx(o.Article,{children:t.sections.map((i,c)=>e.jsxs("section",{children:[e.jsx("h3",{children:i.heading}),e.jsx("p",{children:i.text})]},c))}),e.jsx(o.BottomNav,{children:e.jsx(n,{to:"/blog",className:"backLink",children:"← Back to Blog"})})]})}export{m as default};
