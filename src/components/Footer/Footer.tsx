import NavLinks from "../NavLinks/NavLinks";
import styles from "./Footer.module.css";

export default function Footer(){

    return (
        <div className={styles.footer}>
            <footer>
                    <span>&#169; {new Date().getFullYear()} Travel Agency. Sva prava pridržana</span>
                    <NavLinks mini = {true}/>
            </footer>
        </div>
    )
}