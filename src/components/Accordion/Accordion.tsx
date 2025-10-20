import { useState } from "react";

import styles from "./accordion.module.css";

export default function Accordion({children, question}:{children:string, question: string}){

    const [ isActive, setIsActive] = useState(false);

    return (
        <div className={`${styles.accordion} accordion`} onClick={() => setIsActive(v => !v)}>
            <div>
                <p>{question}</p>
                {isActive ? <p>-</p> : <p>+</p>}
            </div>
            <p className={isActive ? styles.active : ""}>{children}</p>
        </div>
    )
}