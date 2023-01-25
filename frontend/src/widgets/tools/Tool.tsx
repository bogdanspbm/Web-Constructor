import styles from "./Tool.module.css";
import {Collapse} from "antd";
import {DatabaseTools} from "./database/DatabaseTools";
import {SchemasPanel} from "./schemas/SchemasPanel";
import {useAppSelector} from "../../app/hooks";
import {getDatabaseConfig} from "../../structures/database/Database";
import {TablesPanel} from "./tables/TablesPanel";

const {Panel} = Collapse;

export const Tool = (props: any) => {

    const connection = useAppSelector(getDatabaseConfig)

    return (
        <div className={styles.panel}>
            <Collapse defaultActiveKey={["1"]} bordered={false}>
                <Panel header="Database" key="1">
                    <DatabaseTools connection={connection}/>
                </Panel>
                <Panel header="Schemas" key="2">
                    <div className={styles.schemasPanel}>
                        <SchemasPanel connection={connection}/>
                    </div>
                </Panel>
                <Panel header="Tables" key="3">
                    <div className={styles.tablesPanel}>
                        <TablesPanel connection={connection}/>
                    </div>
                </Panel>
            </Collapse>
        </div>
    );
}

