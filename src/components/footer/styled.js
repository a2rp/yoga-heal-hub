import styled from "styled-components";

export const Styled = {
    Footer: styled.footer`
        width: 100%;
        border-top: 1px solid #e1e1e1;
        background: #fafafa;
        margin-top: 40px;
    `,

    Inner: styled.div`
        max-width: 1200px;
        margin: 0 auto;
        padding: 18px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        font-size: 13px;
        color: #555;

        @media (max-width: 720px) {
            flex-direction: column;
            text-align: center;
        }

        .info {
            .address {
                display: block;
                font-weight: 500;
                margin-bottom: 4px;
                color: #333;
            }

            p {
                margin: 0;
            }
        }

        .social {
            display: flex;
            align-items: center;
            gap: 12px;

            a {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                border: 1px solid #ddd;
                color: #555;
                text-decoration: none;
                transition: background 0.18s ease, color 0.18s ease,
                    border-color 0.18s ease;
            }

            a:hover {
                background: #077054;
                border-color: #077054;
                color: #ffffff;
            }
        }
    `,
};
