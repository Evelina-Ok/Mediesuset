import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Newsletter } from "../components/Newsletter/Newsletter";
import { UserContextProvider } from "../context/userContext";

export function MainLayout () {
    return (
        <>
        <UserContextProvider>
        <Header />
        <Outlet />
        <Newsletter />
        <Footer />
        </UserContextProvider>
        </>
    )
}