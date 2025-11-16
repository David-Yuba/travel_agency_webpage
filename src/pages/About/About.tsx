import Banner from "../../components/Banner/Banner";

import styles from "./About.module.css";
import bannerImg from "../../assets/image2.jpg";

export default function About(){

    return (
        <div className={`${styles.about} about`}>
          <Banner image={bannerImg}>O nama</Banner>
          <main>
            <section>
              <h3>O nama</h3>
              <p>Travel Agencija od 2005. organizira izlete diljem svijeta. Naša misija je pružiti sigurna i nezaboravna putovanja prilagođena svakom putniku.</p>
              <p>Od planiranja do egzotičnih destinacija, s nama ste u rukama iskusnih vodiča i provjerenih partnera.</p>
            </section>
            <section>
              <h3>Naše vrijednosti</h3>
              <ul>
                <li>Sigurnost i pouzdanost</li>
                <li>Pristupačne cijene</li>
                <li>Manje grupe i autentična iskustva</li>
              </ul>
            </section>
          </main>
        </div>
    )
}