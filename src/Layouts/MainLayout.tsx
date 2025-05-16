import {Header} from "../components/Header.tsx";
import {Outlet} from "react-router-dom";
import {Footer} from "../components/Footer.tsx";

export const MainLayout = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};