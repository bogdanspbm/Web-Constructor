import styles from './Tool.module.css';
import {Button, Collapse} from 'antd';
import {DatabaseTools} from "./database/DatabaseTools";
import {useAppSelector} from "../../app/hooks";
import {getDatabaseSchemas} from "../../structures/database/Database";

const {Panel} = Collapse;

export function Tool() {

    const schemas = useAppSelector(getDatabaseSchemas);


    return (
        <div className={styles.panel}>
            <Collapse defaultActiveKey={['1']} bordered={false}>
                <Panel header="Database" key="1">
                    <DatabaseTools/>
                </Panel>
                <Panel header="Panels" key="2">
                    {!schemas ? <div></div> : schemas.map(schema => {
                        return <Button>{schema}</Button>
                    })}
                </Panel>
            </Collapse>
        </div>)
}