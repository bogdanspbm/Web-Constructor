import styles from "./Tool.module.css";
import { Collapse } from "antd";
import { DatabaseTools } from "./database/DatabaseTools";
import { useAppSelector } from "../../app/hooks";
import { getDatabaseConfig } from "../../structures/database/Database";
import { ToolsPanel } from "./tools/ToolsPanel";

const { Panel } = Collapse;

export const Tool = (props: any) => {
  const connection = useAppSelector(getDatabaseConfig);

  return (
    <div className={styles.panel}>
      <Collapse defaultActiveKey={["2"]} bordered={false}>
        <Panel header="Database" key="1">
          <DatabaseTools connection={connection} />
        </Panel>

        <Panel header="Panels" key="2">
          <div className={styles.schemasPanel}>
            <ToolsPanel />
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};
