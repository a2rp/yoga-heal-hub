import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        max-width: 1100px;
        margin: 0 auto;
        padding: 120px 20px 60px;

        h2 {
            font-family: "Antonio", sans-serif;
            font-size: 40px;
            color: #222;
            margin-bottom: 30px;
        }
    `,

    Form: styled.form`
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
            transition: border-color 0.18s ease, box-shadow 0.18s ease;
        }

        input:focus,
        textarea:focus {
            outline: none;
            border-color: #3b6ef3;
            box-shadow: 0 0 0 2px rgba(59, 110, 243, 0.15);
        }

        textarea {
            height: 160px;
            resize: none;
        }

        button {
            background: #077054;
            color: #fff;
            border: 1px solid #077054;
            border-radius: 6px;
            font-size: 14px;
            padding: 12px 22px;
            cursor: pointer;
            transition: border-color 0.18s ease, box-shadow 0.18s ease,
                text-shadow 0.18s ease;
            float: right;
        }

        button:hover {
            border-color: #055c42;
            box-shadow: 0 8px 18px rgba(7, 112, 84, 0.2);
            text-shadow: 0 1px 8px rgba(255, 255, 255, 0.35);
        }

        .success {
            display: flex;
            align-items: center;
            gap: 6px;
            clear: both;
            padding-top: 18px;
            color: #0d7b56;
        }
    `,
};
