import { Link } from "react-router-dom";

import type { TourData } from "../../data/tours";

import styles from "./tourcard.module.css";

export default function TourCard({cardData}: {cardData: TourData}){

    return (
        <div className={`${styles.tourcard} card`}>
            <header>
                <div className="image-div" style={{backgroundImage:`url(${cardData.image})`}}>
                    <img src={cardData.image} alt= {`Slika koja prikazuje ${cardData.title}`}/>
                </div>
            </header>
            <main>
                <h5>{cardData.title}</h5>
                <div className="pills">
                    <span className="pill">{cardData.destination}</span>
                    <span className="pill">{cardData.duration}</span>
                </div>
                <p>{cardData.description}</p>
            </main>
            <footer>
                <span className="price">{cardData.price}€</span>
                <Link to={`/tours/:${cardData.id}`}><button>Detalji</button></Link>
            </footer>
        </div>
    )
}