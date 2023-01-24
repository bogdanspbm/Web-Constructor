import styles from './DatabaseTools.module.css';
import {Button, Input} from 'antd';
import Title from "antd/lib/typography/Title";
import {getDatabaseConfig} from "../../../structures/database/Database";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";


export function DatabaseTools() {

    const dispatch = useAppDispatch();
    const connection = useAppSelector(getDatabaseConfig);

    async function createDatabaseConnection() {
        const body = JSON.stringify(connection)
        console.log(body)

        const response = await fetch('http://localhost:8080/tables', {
            method: 'POST', body: body
        });

        const text = await response.text();
        console.log(text);
    }


    return (
        <div className={styles.panel}>
            <Title level={5} style={{height: 16, marginLeft: 2}}>Connection</Title>
            <Input size={"large"} placeholder={"IP"} defaultValue={"localhost"} onChange={(e) => {
                connection.ip = e.target.value;
            }}></Input>
            <Input size={"large"} placeholder={"Port"} defaultValue={"55000"} onChange={(e) => {
                connection.port = e.target.value;
            }}></Input>
            <Input size={"large"} placeholder={"User"} defaultValue={"postgres"} onChange={(e) => {
                connection.user = e.target.value;
            }}></Input>
            <Input size={"large"} placeholder={"Password"} defaultValue={"postgrespw"} onChange={(e) => {
                connection.password = e.target.value;
            }}></Input>
            <Button size={"large"} style={{width: "100%"}} onClick={createDatabaseConnection}>Connect</Button>
        </div>)
}