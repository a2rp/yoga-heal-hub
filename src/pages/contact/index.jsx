import { useState } from "react";
import { TbMail, TbMapPin, TbSend } from "react-icons/tb";
import Breadcrumbs from "../../components/breadcrumbs";
import { Styled } from "./styled";

const Contact = () => {
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = new FormData(event.currentTarget);

        const name = String(form.get("name") || "").trim();
        const email = String(form.get("email") || "").trim();
        const subject = String(form.get("subject") || "").trim();
        const body = String(form.get("message") || "").trim();

        const emailSubject = encodeURIComponent(`[Yoga Heal Hub] ${subject}`);

        const emailBody = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\n${body}`,
        );

        window.location.href = `mailto:ash.ranjan09@gmail.com?subject=${emailSubject}&body=${emailBody}`;

        setMessage(
            "Your email application should open with the message ready to send.",
        );
    };

    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Breadcrumbs items={[{ label: "Contact" }]} />

                <Styled.Header>
                    <Styled.Label>Get In Touch</Styled.Label>

                    <Styled.Title>Start a conversation</Styled.Title>

                    <Styled.Intro>
                        Have a question about classes, levels, schedules, or
                        getting started? Send a message and continue the
                        conversation through your email application.
                    </Styled.Intro>
                </Styled.Header>

                <Styled.Layout>
                    <Styled.Info>
                        <Styled.InfoCard>
                            <Styled.IconBox>
                                <TbMail aria-hidden="true" />
                            </Styled.IconBox>

                            <div>
                                <h2>Email</h2>

                                <a href="mailto:ash.ranjan09@gmail.com">
                                    ash.ranjan09@gmail.com
                                </a>
                            </div>
                        </Styled.InfoCard>

                        <Styled.InfoCard>
                            <Styled.IconBox>
                                <TbMapPin aria-hidden="true" />
                            </Styled.IconBox>

                            <div>
                                <h2>Practice</h2>

                                <p>
                                    Yoga sessions designed for different
                                    experience levels and everyday routines.
                                </p>
                            </div>
                        </Styled.InfoCard>
                    </Styled.Info>

                    <Styled.Form onSubmit={handleSubmit}>
                        <Styled.FormTitle>Send an inquiry</Styled.FormTitle>

                        <Styled.FormText>
                            Fill in the details below. Your default email
                            application will open with the message prepared.
                        </Styled.FormText>

                        <Styled.Field>
                            <Styled.FieldLabel htmlFor="contact-name">
                                Name
                            </Styled.FieldLabel>

                            <Styled.Input
                                id="contact-name"
                                name="name"
                                type="text"
                                placeholder="Your full name"
                                autoComplete="name"
                                required
                            />
                        </Styled.Field>

                        <Styled.Field>
                            <Styled.FieldLabel htmlFor="contact-email">
                                Email
                            </Styled.FieldLabel>

                            <Styled.Input
                                id="contact-email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                                required
                            />
                        </Styled.Field>

                        <Styled.Field>
                            <Styled.FieldLabel htmlFor="contact-subject">
                                Subject
                            </Styled.FieldLabel>

                            <Styled.Input
                                id="contact-subject"
                                name="subject"
                                type="text"
                                placeholder="What would you like to ask?"
                                required
                            />
                        </Styled.Field>

                        <Styled.Field>
                            <Styled.FieldLabel htmlFor="contact-message">
                                Message
                            </Styled.FieldLabel>

                            <Styled.TextArea
                                id="contact-message"
                                name="message"
                                placeholder="Write your message here"
                                required
                            />
                        </Styled.Field>

                        <Styled.SubmitButton type="submit">
                            <TbSend aria-hidden="true" />
                            Prepare Email
                        </Styled.SubmitButton>

                        {message && (
                            <Styled.Status role="status">
                                {message}
                            </Styled.Status>
                        )}
                    </Styled.Form>
                </Styled.Layout>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default Contact;
