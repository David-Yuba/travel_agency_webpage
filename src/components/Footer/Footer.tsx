import NavLinks from "../NavLinks/NavLinks";
import styles from "./footer.module.css";

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