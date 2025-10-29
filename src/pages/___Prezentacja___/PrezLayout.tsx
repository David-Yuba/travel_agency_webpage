import { Outlet } from "react-router-dom";

import styles from "./Prezentacija.module.css";

export default function PrezLayout(){

    return (
        <main className={styles.prez}>
            <Outlet/>
        </main>
    )
}