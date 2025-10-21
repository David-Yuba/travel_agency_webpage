import Banner from "../../components/Banner/Banner";

import styles from "./faq.module.css";
import bannerImg from "../../assets/image1.jpg";
import Accordion from "../../components/Accordion/Accordion";

export default function Faq(){

    return (
        <div className={`${styles.faq} faq`}>
          <Banner image={bannerImg}>F.A.Q</Banner>
          <main>
            <section>
              <h3>Često postavljena pitanja</h3>
              <Accordion question="Kako rezervirati izlet?">Izlet možete rezervirati preko kontakt forme ili pozivom.</Accordion>
              <Accordion question="Koje su opcije plaćanja?">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sit architecto sint, soluta voluptates expedita accusantium autem pariatur praesentium iure minima nisi, perferendis, aspernatur veniam nulla obcaecati nemo quibusdam. Quisquam!</Accordion>
              <Accordion question="Jesu li izleti sigurni?">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, dolore fugit asperiores totam rem quo est eos? Commodi est, earum quam mollitia illum iusto! Sit debitis iure explicabo doloremque ipsa?</Accordion>
              <Accordion question="Mogu li dobiti račun?">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat laboriosam dolores quam, doloremque iste amet, excepturi harum ipsa magnam nisi nemo illo possimus consequuntur, dolor magni mollitia placeat consectetur molestias?</Accordion>
              <Accordion question="Što ako se izlet otkaže?">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus iure inventore, velit excepturi sunt esse. Nihil, sapiente exercitationem voluptates architecto laboriosam nemo dicta rem earum id possimus nobis voluptas maxime.</Accordion>
            </section>
          </main>
        </div>
    )
}