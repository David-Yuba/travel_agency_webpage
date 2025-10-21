import { useEffect, useState } from "react";
import MobileNavigation from "../MobileNavigation/MobileNavigation";

import styles from "./Header.module.css";

import NavLinks from "../NavLinks/NavLinks";

export default function Header(){
    const [isMobile, setIsMobile] = useState(true);

    useEffect(function(){
        onResize();
        window.addEventListener("resize", onResize);

        return function(){
            window.removeEventListener("resize", onResize)
        }
    })

    function onResize(){
        if(window.innerWidth >= 768) setIsMobile(false);
        else setIsMobile(true);
    }

    return (
        <div className={styles.header}>
            <header>
                <div>
                    <h4>Travel agency</h4>
                </div>
                {isMobile ? <MobileNavigation/> : <NavLinks/>}
            </header>
        </div>
    )
}