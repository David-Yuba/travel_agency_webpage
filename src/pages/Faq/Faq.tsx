import { useState } from "react";

import Banner from "../../components/Banner/Banner";

import styles from "./Faq.module.css";
import bannerImg from "../../assets/image6.jpg";
import Accordion from "../../components/Accordion/Accordion";

export default function Faq(){
  const [ open, setOpen] = useState([false, false, false, false, false]);

  return (
    <div className={`${styles.faq} faq`}>
      <Banner image={bannerImg}>F.A.Q</Banner>
      <main>
        <section>
          <h3>Često postavljena pitanja</h3>
          <Accordion index={0} open={open[0]} setOpen={setOpen} question="Kako rezervirati izlet?">Izlet možete rezervirati preko kontakt forme ili pozivom.</Accordion>
          <Accordion index={1} open={open[1]} setOpen={setOpen} question="Koje su opcije plaćanja?">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sit architecto sint, soluta voluptates expedita accusantium autem pariatur praesentium iure minima nisi, perferendis, aspernatur veniam nulla obcaecati nemo quibusdam. Quisquam!</Accordion>
          <Accordion index={2} open={open[2]} setOpen={setOpen} question="Jesu li izleti sigurni?">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, dolore fugit asperiores totam rem quo est eos? Commodi est, earum quam mollitia illum iusto! Sit debitis iure explicabo doloremque ipsa?</Accordion>
          <Accordion index={3} open={open[3]} setOpen={setOpen} question="Mogu li dobiti račun?">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat laboriosam dolores quam, doloremque iste amet, excepturi harum ipsa magnam nisi nemo illo possimus consequuntur, dolor magni mollitia placeat consectetur molestias?</Accordion>
          <Accordion index={4} open={open[4]} setOpen={setOpen} question="Što ako se izlet otkaže?">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus iure inventore, velit excepturi sunt esse. Nihil, sapiente exercitationem voluptates architecto laboriosam nemo dicta rem earum id possimus nobis voluptas maxime.</Accordion>
        </section>
      </main>
    </div>
  )
}