import { Button } from "antd";
import styles from "./ToolsPanel.module.css";

export const ToolsPanel = () => {
  return (
    <>
      <Button block={true} className={styles.tool}>
        Button
      </Button>
      <Button block={true} className={styles.tool}>
        Input
      </Button>
    </>
  );
};
