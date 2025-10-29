import { useRef, useState } from "react";
import type { ReactNode, MouseEvent } from "react";

import styles from "./gitnodecont.module.css"

export default function GitNodeCont({children}: {children: ReactNode}){
    const ref = useRef(null) ;
    const [drag, setDrag] = useState(0);
    const x = useRef(0);

    function handleMouseDown(e: MouseEvent<HTMLDivElement>){
        x.current = e.clientX;
        window.addEventListener("mousemove", handleDrag);
        window.addEventListener("mouseup",handleMouseUp);
    }
    function handleMouseUp(){
        x.current = 0;
        window.removeEventListener("mousemove",handleDrag)
        window.removeEventListener("mouseup",handleMouseUp);
    }
    function handleDrag(e: globalThis.MouseEvent){
        setDrag(function(prev){
            const newValue = prev + (x.current-e.clientX)/500;
            if(newValue >= 150) return 150;
            if(newValue <= 0) return 0;
            return prev + (x.current-e.clientX)/250
        })
    }

    return (
        <div ref={ref}style={{transform:`translatex(${-drag}%)`}} className={styles.gitnodecont} onMouseDown={handleMouseDown}>
                {children}
        </div>
    )
}