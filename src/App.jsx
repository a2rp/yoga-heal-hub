import { BrowserRouter } from "react-router-dom";

import BackToTop from "./components/backToTop";
import Footer from "./components/footer";
import Header from "./components/header";
import AppRoutes from "./AppRoutes";
import { Styled } from "./App.styled";

const routerBase = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

const App = () => {
    return (
        <BrowserRouter basename={routerBase}>
            <Styled.Wrapper>
                <Header />

                <Styled.Main>
                    <AppRoutes />
                </Styled.Main>

                <Footer />

                <BackToTop />
            </Styled.Wrapper>
        </BrowserRouter>
    );
};

export default App;
