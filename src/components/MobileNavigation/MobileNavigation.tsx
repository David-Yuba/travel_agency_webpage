import { useState } from "react";

import NavLinks from "../NavLinks/NavLinks";

import styles from "./mobilenavigation.module.css";


export default function MobileNavigation(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={`${styles.icon} ${isOpen ? styles.openIcon : ""}`} onClick={() => setIsOpen(o => !o)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <NavLinks open={isOpen} setIsOpen={setIsOpen}/>
        </>
    )
}