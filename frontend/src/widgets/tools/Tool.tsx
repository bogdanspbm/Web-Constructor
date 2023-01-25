import styles from "./Tool.module.css";
import {Collapse} from "antd";
import {DatabaseTools} from "./database/DatabaseTools";
import {SchemasPanel} from "./schemas/SchemasPanel";
import {useAppSelector} from "../../app/hooks";
import {getDatabaseConfig} from "../../structures/database/Database";

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
                </Panel>
            </Collapse>
        </div>
    );
}

