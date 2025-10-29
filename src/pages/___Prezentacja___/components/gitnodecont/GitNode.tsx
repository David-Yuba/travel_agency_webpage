import type { ReactNode } from "react";

import styles from "./gitnode.module.css"

export default function GitNode({children, nodeIndex, dotColor ="green"}: {children: ReactNode, nodeIndex: number, dotColor?: string}){
    
    return (
        <div className={`${styles.gitnode} node node${nodeIndex}`} style={{left: `calc(${nodeIndex} * (var(--node-gap)))`}}>
                <div className={styles.dot} style= {{backgroundColor: dotColor}}></div>
                <h6>{children}</h6>
        </div>
    )
}