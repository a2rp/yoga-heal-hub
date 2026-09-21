import React from "react";
import {
    TbBrandCodepen,
    TbBrandFacebook,
    TbBrandGithub,
    TbBrandLinkedin,
    TbBrandPatreon,
    TbBrandYoutube,
    TbCoffee,
    TbHeartHandshake,
    TbMail,
    TbWorld,
} from "react-icons/tb";
import { Styled } from "./styled";

const socialLinks = [
    ["Portfolio", "https://www.ashishranjan.net/", TbWorld],
    ["GitHub", "https://github.com/a2rp", TbBrandGithub],
    ["CodePen", "https://codepen.io/ash1198", TbBrandCodepen],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", TbBrandLinkedin],
    ["Facebook", "https://www.facebook.com/theash.ashish/", TbBrandFacebook],
    ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", TbBrandYoutube],
    ["Support", "https://a2rp-donation-page.netlify.app/", TbHeartHandshake],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", TbCoffee],
    ["Patreon", "https://www.patreon.com/a2rp", TbBrandPatreon],
    ["Email", "mailto:ash.ranjan09@gmail.com", TbMail],
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <Styled.Footer>
            <Styled.Inner>
                <div className="info">
                    <span className="address">Holistic yoga and wellness in Jamshedpur</span>
                    <p>
                        Copyright © {year}{" "}
                        <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                            Ashish Ranjan
                        </a>
                    </p>
                </div>

                <nav className="social" aria-label="Social and support links">
                    {socialLinks.map(([label, href, Icon]) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            title={label}
                            target={href.startsWith("mailto:") ? undefined : "_blank"}
                            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                        >
                            {React.createElement(Icon, { size: 18, "aria-hidden": true })}
                        </a>
                    ))}
                </nav>
            </Styled.Inner>
        </Styled.Footer>
    );
}
