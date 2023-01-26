import styles from "./Constructor.module.css";
import { Tool } from "../tools/Tool";
import { Header } from "../header/Header";
import { Canvas } from "../canvas/Canvas";

export const Constructor = () => {
  return (
    <div className={styles.constructorPage}>
      <Header />
      <div className={styles.container}>
        <div className={styles.tools}>
          <Tool />
        </div>
        <div className={styles.canvas}>
          <Canvas />
        </div>
      </div>
    </div>
  );
};
