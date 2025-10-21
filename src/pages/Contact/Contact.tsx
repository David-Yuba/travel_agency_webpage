import Banner from "../../components/Banner/Banner";

import styles from "./contact.module.css";
import bannerImg from "../../assets/image3.jpg";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function Contact(){

    return (
        <div className={`${styles.contact} contact`}>
          <Banner image={bannerImg}>Kontakt</Banner>
          <main>
            <section>
              <h3>Kontaktirajte nas</h3>
              <p>Ispunite formu i javiti ćemo se uskoro.</p>
            </section>
            <section>
              <ContactForm/>
            </section>
            <section>
              <h4>Podaci</h4>
              <p>Email: info@travel-agency.example</p>
              <p>Telefon: +385 91 000 0000</p>
              <p>Adresa: Ulica Primjera 1, Zagreb</p>
              <p>Radno vrijeme: Pon-Pet 9-17h</p>
            </section>
          </main>
        </div>
    )
}