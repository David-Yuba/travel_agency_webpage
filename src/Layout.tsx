import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./styles/layout/mobileLayout.css"
import "./styles/layout/desktopLayout.css"

export default function Layout(){

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}