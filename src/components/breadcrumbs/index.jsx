import { FaChevronRight, FaHouse } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

const Breadcrumbs = ({ items = [] }) => {
    return (
        <Styled.Wrapper aria-label="Breadcrumb">
            <Styled.List>
                <Styled.Item>
                    <Styled.HomeLink to="/" aria-label="Home" title="Home">
                        <FaHouse aria-hidden="true" />
                    </Styled.HomeLink>
                </Styled.Item>

                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <Styled.Group key={`${item.label}-${index}`}>
                            <Styled.Separator aria-hidden="true">
                                <FaChevronRight />
                            </Styled.Separator>

                            <Styled.Item>
                                {item.to && !isLast ? (
                                    <Styled.Link to={item.to}>
                                        {item.label}
                                    </Styled.Link>
                                ) : (
                                    <Styled.Current
                                        aria-current={
                                            isLast ? "page" : undefined
                                        }
                                    >
                                        {item.label}
                                    </Styled.Current>
                                )}
                            </Styled.Item>
                        </Styled.Group>
                    );
                })}
            </Styled.List>
        </Styled.Wrapper>
    );
};

export default Breadcrumbs;
