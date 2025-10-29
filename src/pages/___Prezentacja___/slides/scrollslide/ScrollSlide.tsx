import {useState, type ReactNode, type WheelEvent } from "react";

import styles from "./scrollslide.module.css"

export default function ScrollSlide({children, currentSlide, slideNum}: {children: ReactNode, currentSlide: number, slideNum: number}){
    const [scroll, setScroll] = useState(0);

    function handleScroll(e: WheelEvent<HTMLDivElement>){

        setScroll(prev => (prev*100 + e.deltaY)/100 > 500 ? 500 :
            (prev*100 + e.deltaY)/100 < 0 ? 0 : 
            (prev*100 + e.deltaY)/100 );
    }
    return (
        <div onWheel={handleScroll}  className={currentSlide === slideNum ? `slide active ${styles.scrollslide}` : currentSlide > slideNum ? `slide inactive-l ${styles.scrollslide}` : `slide inactive-r ${styles.scrollslide}`}>
            <div style={{transform:`translatey(${-scroll}%)`}} className="slide-content">
                {children}
            </div>
        </div>
    )
}