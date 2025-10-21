import styles from "./banner.module.css";

export default function Banner({children, image}: {children: string, image: string}){

    return (
        <div className={`${styles.banner} banner`} style={{background:`url(${image})  center/cover no-repeat scroll`}}>
            <div>
                <h1>{children}</h1>
            </div>
        </div>
    )
}