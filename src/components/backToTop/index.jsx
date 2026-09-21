import React, { useEffect, useState } from "react";
import { TbArrowUp } from "react-icons/tb";
import { Styled } from "./styled";

export default function BackToTop({ targetRef, threshold = 240 }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const el = targetRef?.current;
        if (!el) return;

        const onScroll = () => {
            setShow(el.scrollTop > threshold);
        };
        // initial check
        onScroll();

        el.addEventListener("scroll", onScroll, { passive: true });
        return () => el.removeEventListener("scroll", onScroll);
    }, [targetRef, threshold]);

    const handleClick = () => {
        const el = targetRef?.current;
        if (el?.scrollTo) el.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Styled.Fab
            type="button"
            $show={show}
            onClick={handleClick}
            aria-label="Back to top"
            title="Back to top"
        >
            <TbArrowUp size={19} aria-hidden="true" />
        </Styled.Fab>
    );
}
