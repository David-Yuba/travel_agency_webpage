import { Link } from "react-router-dom";

import type { TourData } from "../../data/tours";

import styles from "./tourcard.module.css";

export default function TourCard({cardData}: {cardData: TourData | string}){

    return (
        <div className={`${styles.tourcard} card`}>
            <header>
                <div className="image-div" style={{backgroundImage:`url(${(cardData as TourData).image})`}}>
                    <img src={(cardData as TourData).image} alt= {`Slika koja prikazuje ${(cardData as TourData).title}`}/>
                </div>
            </header>
            <main>
                <h5>{(cardData as TourData).title}</h5>
                <div className="pills">
                    <span className="pill">{(cardData as TourData).destination}</span>
                    <span className="pill">{(cardData as TourData).duration}</span>
                </div>
                <p>{(cardData as TourData).description}</p>
            </main>
            <footer>
                <span className="price">{(cardData as TourData).price}€</span>
                <Link to={`/tours/:${(cardData as TourData).id}`}><button>Detalji</button></Link>
            </footer>
        </div>
    )
}