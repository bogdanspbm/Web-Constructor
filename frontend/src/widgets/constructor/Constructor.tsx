import styles from "./Constructor.module.css"
import {Tool} from "../tools/Tool";
import {Header} from "../header/Header";

export const Constructor = () => {

    return (
        <div className={styles.constructorPage}>
            <Header/>
            <div className={styles.container}>
                <div className={styles.tools}>
                    <Tool/>
                </div>
            </div>
        </div>
    )
}