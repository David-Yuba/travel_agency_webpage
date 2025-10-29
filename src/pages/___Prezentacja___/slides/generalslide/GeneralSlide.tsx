import type { ReactNode } from "react";

import styles from "./generalslide.module.css"

const baseGrid = {
    display: "grid",
    width: "100%",
    height: "100%",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: "repeat(12, 1fr)",
    alignItems: "center",
    justifyContent: "center"
}

export default function GeneralSlide({children, currentSlide, slideNum}: {children: ReactNode, currentSlide: number, slideNum: number}){

    return (
        <div className={currentSlide === slideNum ? `slide active ${styles.generalslide}` : currentSlide > slideNum ? `slide inactive-l ${styles.generalslide}` : `slide inactive-r ${styles.generalslide}`}>
            <div className="slide-content" style = {{...baseGrid}}>
                {children}
            </div>
        </div>
    )
}