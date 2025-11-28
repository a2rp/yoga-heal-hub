import React from "react";
import { Styled } from "./styled";
import {
    TbBrandFacebook,
    TbBrandTwitter,
    TbBrandInstagram,
    TbBrandYoutube,
} from "react-icons/tb";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <Styled.Footer>
            <Styled.Inner>
                <div className="info">
                    <span className="address">
                        Near Hill View Trail, outskirts of Jamshedpur, Jharkhand
                    </span>
                    <p>© {year} Yoga-Heal-Hub. All rights reserved.</p>
                </div>

                <div className="social">
                    <a href="#" aria-label="Facebook">
                        <TbBrandFacebook size={20} />
                    </a>
                    <a href="#" aria-label="Twitter">
                        <TbBrandTwitter size={20} />
                    </a>
                    <a href="#" aria-label="Instagram">
                        <TbBrandInstagram size={20} />
                    </a>
                    <a href="#" aria-label="YouTube">
                        <TbBrandYoutube size={20} />
                    </a>
                </div>
            </Styled.Inner>
        </Styled.Footer>
    );
}
