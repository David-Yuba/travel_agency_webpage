import { Link } from "react-router-dom";

import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import TourCard from "../../components/TourCard/TourCard";

import { tours } from "../../data/tours";

import bannerImg from "../../assets/image1.jpg";
import styles from "./home.module.css";

export default function Home(){
    const toursArray = tours.slice(0,3); 
    return (
        <div className={`${styles.home} home`}>
          <Banner image={bannerImg}>Naslovnica</Banner>
          <main>
            <section>
              <h3>Dobrodošli u Travel Agency</h3>
              <p>Najbolja ponuda izleta i avantura</p>
              <div className={styles.buttonsDiv}>
                <Link to="/tours"><button>Pogledaj izlete</button></Link>
                <Link to="/contact"><button className={styles.actionButton}>Kontaktiraj nas</button></Link>
              </div>
            </section>
            <section>
              <Cards cardDataArray={toursArray} CardType={TourCard}/>
            </section>
          </main>
        </div>
    )
}