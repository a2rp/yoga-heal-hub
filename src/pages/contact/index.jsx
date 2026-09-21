import React, { useState } from "react";
import { TbCheck } from "react-icons/tb";
import { Styled } from "./styled";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        event.currentTarget.reset();
    };

    return (
        <Styled.Wrapper>
            <span className="eyebrow">Start a conversation</span>
            <h2>Contact</h2>

            <Styled.Form onSubmit={handleSubmit}>
                <h3>Inquiries</h3>

                <label>
                    <span>Name</span>
                    <input name="name" type="text" placeholder="Enter your full name" required />
                </label>

                <label>
                    <span>Email</span>
                    <input name="email" type="email" placeholder="Enter your email address" required />
                </label>

                <label>
                    <span>Subject</span>
                    <input name="subject" type="text" placeholder="What is this about?" required />
                </label>

                <label>
                    <span>Message</span>
                    <textarea name="message" placeholder="Write your message..." required />
                </label>

                <button type="submit">Send message</button>
                {submitted && (
                    <p className="success" role="status">
                        <TbCheck aria-hidden="true" /> Thanks, your message is ready to be reviewed.
                    </p>
                )}
            </Styled.Form>
        </Styled.Wrapper>
    );
}
