import {useState, type ReactNode, type WheelEvent } from "react";

import styles from "./scrollslide.module.css"

export default function ScrollSlide({children, currentSlide, slideNum}: {children: ReactNode, currentSlide: number, slideNum: number}){
    const [scroll, setScroll] = useState(0);

    function handleScroll(e: WheelEvent<HTMLDivElement>){
        const scrollValue = e.deltaY*10/100;
        setScroll(prev => prev + scrollValue > 500 ? 500 :
            prev + scrollValue < 0 ? 0 : 
            prev + scrollValue );
    }
    return (
        <div onWheel={handleScroll}  className={currentSlide === slideNum ? `slide active ${styles.scrollslide}` : currentSlide > slideNum ? `slide inactive-l ${styles.scrollslide}` : `slide inactive-r ${styles.scrollslide}`}>
            <div style={{transform:`translatey(${-scroll}%)`}} className="slide-content">
                {children}
            </div>
        </div>
    )
}