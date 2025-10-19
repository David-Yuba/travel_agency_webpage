import { NavLink } from "react-router-dom";
import styles from "./navlinks.module.css";

export default function NavLinks({mini = false, open = false}){

    return (
    <>
        {mini ? 
        <nav className = {`${styles.navLinks}`}>
            <NavLink to="/" className={({isActive}) => isActive ? styles.active : ""}>Naslovnica</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? styles.active : ""}>O nama</NavLink>
            <NavLink to="/faq" className={({isActive}) => isActive ? styles.active : ""}>F.A.Q.</NavLink>
        </nav>:
        <nav className={`${styles.navLinks} ${open ? styles.openMenu : ""}`}>
            <NavLink to="/" className={({isActive}) => isActive ? styles.active : ""}>Naslovnica</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? styles.active : ""}>O nama</NavLink>
            <NavLink to="/category" className={({isActive}) => isActive ? styles.active : ""}>Kategorije</NavLink>
            <NavLink to="/trips" className={({isActive}) => isActive ? styles.active : ""}>Izleti</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? styles.active : ""}>Kontakt</NavLink>
            <NavLink to="/faq" className={({isActive}) => isActive ? styles.active : ""}>F.A.Q.</NavLink>
        </nav>
        }
    </>
    )
}