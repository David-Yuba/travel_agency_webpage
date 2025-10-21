import { Link } from "react-router-dom";
import type { TourData } from "../../data/tours";
import styles from "./categorycard.module.css";

export default function CategoryCard({cardData}: {cardData: string | TourData}){
    
    return (
        <div className={`${styles.categorycard} card`}>
            <header>
                <img src={`https://placehold.co/300x200?text=${cardData}`} alt= {`Slika koja prikazuje ${cardData}`}/>
            </header>
            <main>
                <h5>{cardData as string}</h5>
                <p>Pogledajte izlete kategorije {cardData as string}</p>
            </main>
            <footer>
                <Link to={`/tours?category=${cardData}`}><button>Otvori</button></Link>
            </footer>
        </div>
    )
}