import { useEffect, useState } from "react";
import MobileNavigation from "../MobileNavigation/MobileNavigation";

import styles from "./header.module.css";

import NavLinks from "../NavLinks/NavLinks";

export default function Header(){
    const [isMobile, setIsMobile] = useState(true);

    useEffect(function(){
        window.addEventListener("resize", onResize);

        return function(){
            window.removeEventListener("resize", onResize)
        }
    })

    function onResize(){
        if(window.innerWidth >= 768) setIsMobile(false);
        else setIsMobile(true);
        console.log(isMobile);
    }

    return (
        <div className={styles.header}>
            <header>
                <div>
                    <h1>Travel agency</h1>
                </div>
                {isMobile ? <MobileNavigation/> : <NavLinks/>}
            </header>
        </div>
    )
}