import{g as a,u as d,r as c,j as e,N as s,b as i}from"./index-qnHB0BdE.js";import{a as h}from"./assets-CTgU6s4x.js";const t={Wrapper:a.div`
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
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 11px;
            border: 1px solid var(--color-border);
            border-radius: 8px;
            font-size: 14px;
            text-decoration: none;
            color: #0066cc;
            transition: border-color 0.18s ease, box-shadow 0.18s ease,
                text-shadow 0.18s ease;
        }

        .backLink:hover {
            border-color: var(--color-border-strong);
            box-shadow: var(--shadow-subtle);
            text-shadow: 0 1px 8px rgba(13, 123, 86, 0.16);
        }
    `,NotFoundBox:a.div`
        padding: 40px 0 10px;

        p {
            margin: 0 0 16px;
            color: #444;
        }

        .backLink {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 11px;
            border: 1px solid var(--color-border);
            border-radius: 8px;
            font-size: 14px;
            text-decoration: none;
            color: #0066cc;
            transition: border-color 0.18s ease, box-shadow 0.18s ease,
                text-shadow 0.18s ease;
        }

        .backLink:hover {
            border-color: var(--color-border-strong);
            box-shadow: var(--shadow-subtle);
            text-shadow: 0 1px 8px rgba(13, 123, 86, 0.16);
        }
    `};function m(){const{slug:n}=d(),o=c.useMemo(()=>[{slug:"morning-yoga-for-energy",title:"Morning Yoga for Energy",date:"Jan 12, 2025",cover:"yoga-morning.jpg",readTime:"5 min read",sections:[["Why Mornings Matter","Practicing yoga in the morning helps reset your breath, posture, and focus before the day becomes busy. A gentle sequence of sun salutations, forward folds, and twists can wake up your spine and improve circulation."],["Simple Morning Flow","Start with 5 slow breaths in a comfortable seated position. Move into a few rounds of Cat-Cow, followed by Sun Salutation A at your own pace. Finish with a short seated twist and a minute of stillness."],["Tips to Stay Consistent","Keep your mat visible, sleep a little earlier, and treat your practice like a meeting with yourself. Even 10 minutes daily is more powerful than one long session in a week."]]},{slug:"inner-calm-through-breath",title:"Inner Calm Through Breath",date:"Jan 10, 2025",cover:"yoga-hero.jpg",readTime:"4 min read",sections:[["Breath as a Reset Button","The way we breathe directly affects our nervous system. Slow, deep breathing signals the body that it is safe, helping to reduce stress, anxiety, and restlessness."],["Try This Simple Pattern","Inhale through the nose for 4 counts, hold for 2 counts, and exhale gently through the nose for 6 counts. Repeat this cycle 8 to 10 times while sitting upright and relaxed."],["Bringing Calm into Daily Life","Use this breath pattern before meetings, while travelling, or whenever the mind feels scattered. Over time, the body learns to return to calm more easily."]]},{slug:"flexibility-made-easy",title:"Flexibility Made Easy",date:"Jan 7, 2025",cover:"yoga-flexibility.jpg",readTime:"6 min read",sections:[["Stretching Without Forcing","Flexibility improves when we move with patience instead of forcing the body. Staying in a posture with steady breath allows muscles and fascia to gradually release tension."],["Areas to Focus On","Hamstrings, hips, and shoulders usually hold a lot of stiffness. Simple forward folds, low lunges, and shoulder openers can create a big difference when practiced regularly."],["Create a Gentle Routine","Choose 4 to 5 stretches, hold each for 5 to 8 breaths, and move slowly. Over a few weeks, you will notice more ease in your practice and in daily movements."]]}],[]).find(r=>r.slug===n);return o?e.jsxs(t.Wrapper,{children:[e.jsx("span",{className:"eyebrow",children:"Wellness journal"}),e.jsx("h2",{children:o.title}),e.jsxs(t.MetaRow,{children:[e.jsx("span",{children:o.date}),e.jsx("span",{"aria-hidden":"true",children:"•"}),e.jsx("span",{children:o.readTime})]}),e.jsx(t.Cover,{src:h(`images/${o.cover}`),alt:o.title,loading:"eager"}),e.jsx(t.Article,{children:o.sections.map(([r,l])=>e.jsxs("section",{children:[e.jsx("h3",{children:r}),e.jsx("p",{children:l})]},r))}),e.jsx(t.BottomNav,{children:e.jsxs(s,{to:"/blog",className:"backLink",children:[e.jsx(i,{"aria-hidden":"true"})," Back to Blog"]})})]}):e.jsxs(t.Wrapper,{children:[e.jsx("h2",{children:"Blog"}),e.jsxs(t.NotFoundBox,{children:[e.jsx("p",{children:"We could not find this article."}),e.jsxs(s,{to:"/blog",className:"backLink",children:[e.jsx(i,{"aria-hidden":"true"})," Back to Blog"]})]})]})}export{m as default};
