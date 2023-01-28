import { Button } from "antd";
import styles from "./ToolsPanel.module.css";
import { useAppDispatch } from "../../../app/hooks";
import { ComponentBuilder } from "../../../structures/component/ComponentBuilder";
import { addComponent } from "../../../structures/component/Component";

export const ToolsPanel = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Button
        block={true}
        className={styles.tool}
        onClick={() => {
          const builder = new ComponentBuilder();
          const component = builder.setType("button").build();
          dispatch(addComponent({ component }));
        }}
      >
        Button
      </Button>
      <Button block={true} className={styles.tool}>
        Input
      </Button>
    </>
  );
};
