import Banner from "../../components/Banner/Banner";
import styles from "./test.module.css";

import Cards from "../../components/Cards/Cards";
import TourCard from "../../components/TourCard/TourCard";
import Accordion from "../../components/Accordion/Accordion";

import { tours } from "../../data/tours";
import ContactForm from "../../components/ContactForm/ContactForm";


export default function Test(){

    return (
        <div>
            <Banner>Test</Banner>
            <main className={`${styles.test} test`}>
                <h1>Test</h1>
                <Cards CardType={TourCard} cardDataArray={tours}></Cards>
                <Accordion question="This is a question?">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Accordion>
                <ContactForm/>
            </main>
        </div>
    )
}