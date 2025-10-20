import styles from "./banner.module.css";

export default function Banner({children}: {children: string}){

    return (
        <div className={`${styles.banner} banner`}>
            <div>
                <h1>{children}</h1>
            </div>
        </div>
    )
}