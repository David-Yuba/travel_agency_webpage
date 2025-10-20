import type { JSX } from "react";
import type { Tours, TourData } from "../../data/tours";
import styles from "./cards.module.css";

export default function Cards({CardType, cardDataArray}: {CardType: ({cardData}:{cardData: TourData}) => JSX.Element, cardDataArray: Tours }){
    const cards = cardDataArray;

    return (
        <div className={`${styles.cards} cards`}>
            {cards.map((data) => 
                <CardType cardData={data} key={data.id}></CardType>
            )}
        </div>
    )
}