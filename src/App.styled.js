import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        min-height: 100vh;

        color: #263a2e;
        background: #ffffff;
    `,

    Main: styled.div`
        width: 100%;
        min-height: calc(100vh - 76px);

        padding-top: 76px;

        @media (max-width: 600px) {
            min-height: calc(100vh - 70px);

            padding-top: 70px;
        }
    `,

    RouteLoader: styled.div`
        display: grid;
        place-items: center;

        min-height: calc(100vh - 76px);

        padding: 40px 20px;

        color: #607168;

        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.04em;

        @media (max-width: 600px) {
            min-height: calc(100vh - 70px);
        }
    `,
};
