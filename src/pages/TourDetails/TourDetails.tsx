import { useParams, Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

import { tours, type TourData } from "../../data/tours";

import styles from "./TourDetails.module.css";

export default function TourDetails(){
  const paramId: number = Number(useParams().id?.slice(1));
  const tour: TourData | undefined = tours.find((t) => t.id === paramId);

  return (
    <div className={`${styles.tourdetails} tourdetails`}>
      <Banner image={`https://placehold.co/900x400?text=Detalji+izleta`}>Detalji izleta</Banner>
      <main>
        {tour !== undefined ?
        <>
          <section>
            <Link to="/tours"><button>← Natrag</button></Link>
            <h3>{tour?.title}</h3>
            <img src={tour?.imageLarge} alt="" />
            <div className={`${styles.pills} pills`}>
              <span className="pill">{tour?.category}</span>
              <span className="pill">{tour?.destination}</span>
              <span className="pill">{tour?.duration}</span>
            </div>
            <p><b>Cijena:</b> {tour?.price} €</p>
          </section>
          <section>
            <h4>Što uključujemo</h4>
            <ul>
              <li>Licencirani vodič</li>
              <li>Smještaj i doručak</li>
              <li>Organizirani prijevoz (gdje je navedeno)</li>
            </ul>
          </section>
          <section>
            <h4>Termini</h4>
            <table>
              <thead>
                <tr>
                  <th>Datum početka</th>
                  <th>Cijena</th>
                </tr>
              </thead>
              <tbody>
                {tour?.dates.map((date: string)=>(
                  <tr key={date}>
                    <td>{date}</td>
                    <td>{tour?.price} €</td>
                  </tr>))}
              </tbody>
            </table>
            <button className={styles.stickyCta} onClick={()=> alert("Uspješno ste rezervirali kartu!")}>Rezerviraj</button>
          </section>
        </>
        :<section><h3>Izlet nije pronađen</h3></section>
        }
      </main>
    </div>
  )
}