import { tours } from "../../data/tours";

import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

import styles from "./categories.module.css";
import bannerImg from "../../assets/image4.jpg";

export default function Categories(){
    const cat = new Set(tours.map(t => t.category));

    return (
        <div className={`${styles.categories} categories`}>
          <Banner image={bannerImg}>Kategorije</Banner>
          <main>
            <section>
              <h3>Kategorije izleta</h3>
              <Cards CardType={CategoryCard} cardDataArray={[...cat]}/>
            </section>
          </main>
        </div>
    )
}