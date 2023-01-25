import styles from './DatabaseTools.module.css';
import {Button, Input} from 'antd';
import Title from "antd/lib/typography/Title";
import {
    getDatabaseConfig,
    getDatabaseStatus,
    setIP,
    setPassword,
    setPort,
    setSchemas,
    setStatus,
    setUser
} from "../../../structures/database/Database";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";


export function DatabaseTools() {

    const dispatch = useAppDispatch();
    const connection = useAppSelector(getDatabaseConfig);
    const status = useAppSelector(getDatabaseStatus);

    async function createDatabaseConnection() {
        const body = JSON.stringify(connection)
        console.log(body)

        const response = await fetch('http://localhost:8080/schemas', {
            method: 'POST', body: body
        });

        const json = await response.json();
        dispatch(setStatus({status: json.status}))
        dispatch(setSchemas({schemas: json.schemas}))
    }


    return (
        <div className={styles.panel}>
            <Title level={5} style={{height: 16, marginLeft: 2}}>Connection</Title>
            <Input size={"large"} placeholder={"IP"} defaultValue={connection.ip} onChange={(e) => {
                dispatch(setIP({ip: e.target.value}))
            }}></Input>
            <Input size={"large"} placeholder={"Port"} defaultValue={connection.port} onChange={(e) => {
                dispatch(setPort({port: e.target.value}))
            }}></Input>
            <Input size={"large"} placeholder={"User"} defaultValue={connection.user} onChange={(e) => {
                dispatch(setUser({user: e.target.value}))
            }}></Input>
            <Input size={"large"} placeholder={"Password"} defaultValue={connection.password} onChange={(e) => {
                dispatch(setPassword({password: e.target.value}))
            }}></Input>

            {status === "success" ? <Title level={5} type={"success"}> Connected </Title> : <></>}
            {status !== "success" && status !== "empty" ? <Title level={5} type={"danger"}> Failed </Title> : <></>}
            <Button size={"large"} style={{width: "100%"}} onClick={createDatabaseConnection}>Connect</Button>
        </div>)
}