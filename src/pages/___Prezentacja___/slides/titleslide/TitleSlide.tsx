import type { ReactNode } from "react";

const baseGrid = {
    display: "grid",
    width: "100%",
    height: "100%",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: "repeat(12, 1fr)",
    alignItems: "center",
    justifyContent: "center"
}

export default function TitleSlide({children, currentSlide, slideNum}: {children: ReactNode, currentSlide: number, slideNum: number}){


    return (
        <div className={currentSlide === slideNum ? "slide active" : currentSlide > slideNum ? "slide inactive-l" : "slide inactive-r"}>
            <div className="slide-content" style={{...baseGrid}}>
                    {children}
            </div>
        </div>
    )
}