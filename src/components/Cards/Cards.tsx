import type { JSX } from "react";
import type { Tours, TourData } from "../../data/tours";
import styles from "./Cards.module.css";

export default function Cards({CardType, cardDataArray}: {CardType: ({cardData}:{cardData: TourData | string}) => JSX.Element, cardDataArray: Tours | Array<string> }){
    const cards = cardDataArray;

    return (
        <div className={`${styles.cards} cards`}>
            {cards.map((data,index) => 
                <CardType cardData={data} key={index}></CardType>
            )}
        </div>
    )
}