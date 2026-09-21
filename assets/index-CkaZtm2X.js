import{g as o,G as i,a as s,r as c,j as e}from"./index-B-2_bBs_.js";const l=o.main`
    min-height: calc(100vh - 60px);
    padding: 32px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-bg);
    color: var(--color-text);
`,d=o.section`
    width: 100%;
    max-width: 720px;
    padding: 32px 24px;
    border-radius: 16px;
    border: 1px solid var(--color-border, #333);
    background: var(--color-card, rgba(255, 255, 255, 0.02));
    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.45);
    text-align: center;
`,p=o.div`
    width: 56px;
    height: 56px;
    margin: 0 auto 16px auto;
    border-radius: 50%;
    border: 1px solid var(--color-border, #333);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    color: var(--color-heading, #ffffff);
    background: radial-gradient(
        circle at 30% 0%,
        rgba(255, 255, 255, 0.24),
        transparent 60%
    );
`,x=o.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 4px 10px;
    margin-bottom: 12px;
    border-radius: 999px;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.06);
    color: var(--color-text, #aaaaaa);
    border: 1px solid rgba(255, 255, 255, 0.08);
`,g=o.h1`
    margin: 0 0 8px 0;
    font-size: clamp(24px, 3vw, 30px);
    color: var(--color-heading, #ffffff);
`,h=o.p`
    margin: 0 0 18px 0;
    font-size: 14px;
    line-height: 1.6;
    color: var(--color-text, #aaaaaa);
`,f=o.p`
    margin: 0 0 10px 0;
    font-size: 13px;
    color: var(--color-text, #aaaaaa);

    code {
        font-family: "Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco,
            Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 12px;
        padding: 2px 6px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        color: var(--color-heading, #ffffff);
    }
`,u=o.p`
    margin: 0;
    font-size: 12px;
    line-height: 1.6;
    color: var(--color-text, #9a9a9a);
`,a={PageWrapper:l,InnerCard:d,IconBadge:p,StatusBadge:x,MainTitle:g,SubTitle:h,RouteInfo:f,HelperText:u};function m(t){return i({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M347.94 129.86L203.6 195.83a31.938 31.938 0 0 0-15.77 15.77l-65.97 144.34c-7.61 16.65 9.54 33.81 26.2 26.2l144.34-65.97a31.938 31.938 0 0 0 15.77-15.77l65.97-144.34c7.61-16.66-9.54-33.81-26.2-26.2zm-77.36 148.72c-12.47 12.47-32.69 12.47-45.16 0-12.47-12.47-12.47-32.69 0-45.16 12.47-12.47 32.69-12.47 45.16 0 12.47 12.47 12.47 32.69 0 45.16zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56s200 89.72 200 200-89.72 200-200 200z"},child:[]}]})(t)}const r={"/home":"Home","/about":"About","/classes":"Classes","/instructors":"Instructors","/blog":"Blog","/contact":"Contact"},v=()=>{const t=s(),n=c.useMemo(()=>r[t.pathname]?r[t.pathname]:t.pathname.startsWith("/blog/")?"Blog Post":"Page",[t.pathname]);return e.jsx(a.PageWrapper,{children:e.jsxs(a.InnerCard,{children:[e.jsx(a.IconBadge,{children:e.jsx(m,{})}),e.jsx(a.StatusBadge,{children:"Work in progress"}),e.jsxs(a.MainTitle,{children:[n," page"]}),e.jsx(a.SubTitle,{children:"This section is not ready yet. The layout and content for this page will be added soon."}),e.jsxs(a.RouteInfo,{children:["Current route: ",e.jsx("code",{children:t.pathname})]}),e.jsx(a.HelperText,{children:"Start with the original yoga template design and gradually replace this placeholder with the real content in React + styled-components."})]})})};export{v as default};
