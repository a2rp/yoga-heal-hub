import React from "react";
import { Styled } from "./styled";

export default function Contact() {
    return (
        <Styled.Wrapper>
            <h2>Contact</h2>

            <Styled.Form>
                <h3>Inquiries</h3>

                <label>
                    <span>Name</span>
                    <input type="text" placeholder="Enter your full name" />
                </label>

                <label>
                    <span>Email</span>
                    <input type="email" placeholder="Enter your email address" />
                </label>

                <label>
                    <span>Subject</span>
                    <input type="text" placeholder="What is this about?" />
                </label>

                <label>
                    <span>Message</span>
                    <textarea placeholder="Write your message..."></textarea>
                </label>

                <button type="submit">Send</button>
            </Styled.Form>
        </Styled.Wrapper>
    );
}
