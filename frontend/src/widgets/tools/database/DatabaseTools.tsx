import styles from './DatabaseTools.module.css';
import {Button, Input} from 'antd';
import Title from "antd/lib/typography/Title";

export function DatabaseTools() {
    return (
        <div className={styles.panel}>
            <Title level={5} style={{height: 16, marginLeft: 2}}>Connection</Title>
            <Input size={"large"}></Input>
            <Button size={"large"} style={{width: "100%"}}>Connect</Button>
        </div>)
}