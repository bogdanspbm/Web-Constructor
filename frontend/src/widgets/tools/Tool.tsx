import styles from "./Tool.module.css";
import { Collapse } from "antd";
import { DatabaseTools } from "./database/DatabaseTools";
import { SchemasPanel } from "./schemas/SchemasPanel";

const { Panel } = Collapse;

export function Tool() {
<<<<<<< Updated upstream
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
=======

    const schemas = useAppSelector(getDatabaseSchemas);


    return (
        <div className={styles.panel}>
            <Collapse defaultActiveKey={['1']} bordered={false}>
                <Panel header="Database" key="1">
                    <DatabaseTools/>
                </Panel>
                <Panel header="Schemas" key="2">
                    {!schemas ? <div></div> : schemas.map(schema => {
                        return <Button>{schema}</Button>
                    })}
                </Panel>
                <Panel header={"Tables"} key="3"></Panel>
            </Collapse>
        </div>)
}
>>>>>>> Stashed changes
