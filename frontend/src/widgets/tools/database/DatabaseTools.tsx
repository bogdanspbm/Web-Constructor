import styles from './DatabaseTools.module.css';
import {Button, Input} from 'antd';
import Title from "antd/lib/typography/Title";
import {database} from "../../../database/database";

export function DatabaseTools() {

    function createDatabaseConnection() {
        database.makeConnection("jdbc:postgresql://localhost:49153/postgres")
    }


    return (
        <div className={styles.panel}>
            <Title level={5} style={{height: 16, marginLeft: 2}}>Connection</Title>
            <Input size={"large"} placeholder={"IP"}></Input>
            <Input size={"large"} placeholder={"Port"}></Input>
            <Input size={"large"} placeholder={"User"}></Input>
            <Input size={"large"} placeholder={"Password"}></Input>
            <Button size={"large"} style={{width: "100%"}} onClick={createDatabaseConnection}>Connect</Button>
        </div>)
}