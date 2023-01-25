import styles from "./Tool.module.css";
import { Collapse } from "antd";
import { DatabaseTools } from "./database/DatabaseTools";
import { SchemasPanel } from "./schemas/SchemasPanel";

const { Panel } = Collapse;

export function Tool() {
  return (
    <div className={styles.panel}>
      <Collapse defaultActiveKey={["1"]} bordered={false}>
        <Panel header="Database" key="1">
          <DatabaseTools />
        </Panel>
        <Panel header="Panels" key="2">
          <div className={styles.schemasPanel}>
            <SchemasPanel />
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}
