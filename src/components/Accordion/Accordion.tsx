import styles from "./accordion.module.css";

export default function Accordion({children, question, open, setOpen, index}:{children:string, question: string, open: boolean, setOpen: React.Dispatch<React.SetStateAction<Array<boolean>>>, index: number}){

    return (
        <div className={`${styles.accordion} accordion`} onClick={() => setOpen(v => v.map((v, i) => i === index ? !v : false))}>
            <div>
                <p>{question}</p>
                {open ? <p>-</p> : <p>+</p>}
            </div>
            <p className={open ? styles.active : ""}>{children}</p>
        </div>
    )
}