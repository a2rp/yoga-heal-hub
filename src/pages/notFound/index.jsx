import { NavLink } from "react-router-dom";
import { TbArrowLeft, TbHome } from "react-icons/tb";
import { Styled } from "./styled";

const NotFound = () => {
    return (
        <Styled.Wrapper>
            <Styled.Content>
                <Styled.Code>404</Styled.Code>

                <Styled.Label>Page Not Found</Styled.Label>

                <Styled.Title>This page could not be found</Styled.Title>

                <Styled.Text>
                    The address may be incorrect, or the page may have been
                    moved. Use one of the links below to continue browsing.
                </Styled.Text>

                <Styled.Actions>
                    <Styled.PrimaryLink to="/home">
                        <TbHome aria-hidden="true" />
                        Go to Home
                    </Styled.PrimaryLink>

                    <Styled.SecondaryLink to="/blog">
                        <TbArrowLeft aria-hidden="true" />
                        Visit Blog
                    </Styled.SecondaryLink>
                </Styled.Actions>
            </Styled.Content>
        </Styled.Wrapper>
    );
};

export default NotFound;
