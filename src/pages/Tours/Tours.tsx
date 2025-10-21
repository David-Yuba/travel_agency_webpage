import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { tours, type TourData } from "../../data/tours";

import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import TourCard from "../../components/TourCard/TourCard";

import styles from "./tours.module.css";
import bannerImg from "../../assets/image5.jpg";

export default function Tours(){
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState(params.get("search") ? params.get("search") : "");
  const [filters, setFilters] = useState({
      category: params.get("category") ? decodeURI(params.get("category") as string) : "",
      ordering: params.get("ordering") ? params.get("ordering") : 2
  })

  const categories = [...new Set(tours.map((t) => t.category))];
    
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
      setParams((searchParams) => {
        searchParams.set("search", e.target.value)
        return searchParams;
      });
      setSearch(e.target.value);
  }
  function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>){
      setParams((searchParams) => {
        searchParams.set("category", e.target.value)
        return searchParams;
      });
      setFilters((v) => ({...v, ["category"]:e.target.value}));        
  }
  function handleOrderChange(e: React.ChangeEvent<HTMLSelectElement>){
      setParams((searchParams) => {
        searchParams.set("ordering", encodeURIComponent(e.target.value))
        return searchParams;
      });
      setFilters((v) => ({...v, ["ordering"]:Number(e.target.value)}));
  }


  function filterTours(c: Array<TourData>){
    let filteredTours = c;

    if (filters.category != "")
        filteredTours = filteredTours.filter((t:TourData) => t.category.toLocaleLowerCase() === filters.category.toLocaleLowerCase())
    switch(filters.ordering){
        case 0:
            filteredTours = filteredTours.sort((a:TourData,b:TourData) => a.price > b.price ? 1 : a.price == b.price ? 0 : -1);
            break;
        case 1:
            filteredTours = filteredTours.sort((a:TourData,b:TourData) => a.price < b.price ? 1 : a.price == b.price ? 0 : -1);
            break;
        case 2:
            filteredTours = filteredTours.sort((a:TourData,b:TourData) => a.title > b.title ? 1 : a.title == b.title ? 0 : -1);
            break;
    }

    return filteredTours;
  }
  
  function searchTours(value: string){
    return  tours.filter((t) => t.title.toLowerCase().includes(value.toLowerCase()))
  }
  return (
    <div className={`${styles.tours} tours`}>
      <Banner image={bannerImg}>Izleti</Banner>
      <main>
        <section className={styles.querySection}>
          <h3>Izleti</h3>
          <div>
            <input value={search as string} onChange={handleInputChange}/>
          </div>
          <div className="drop-downs-cont">
            <select value={filters.category as string} onChange={handleCategoryChange}>
              <option value={""}>Category</option>
              {categories.map((c)=>
                <option key={c} value={c}>{c}</option>
              )}
            </select>
            <select value={filters.ordering as number} onChange={handleOrderChange}>
              <option value={2}>A-Z</option>
              <option value={1}>Price desc</option>
              <option value={0}>Price asc</option>
            </select>
          </div>
        </section>
        <section>
          <Cards CardType={TourCard} cardDataArray={filterTours(searchTours(search as string))}/>
        </section>
      </main>
    </div>
  )
}