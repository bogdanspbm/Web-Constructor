import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {getDatabaseTables} from "../../../structures/database/Database";
import {Button} from "antd";
import styles from "./TablesPanel.module.css";

export const TablesPanel = (props: any) => {

    const {connection} = props;
    const dispatch = useAppDispatch()
    const tables = useAppSelector(getDatabaseTables);


    if (!tables) {
        return <></>;
    }


    return (
        <>
            {tables.map((table) => {
                const name = (table.charAt(0).toUpperCase() + table.slice(1)).replace(
                    "_",
                    " "
                );
                return (
                    <Button block={true} className={styles.schema} key={table} onClick={() => {
                    }}>
                        {name}
                    </Button>
                );
            })}
        </>
    );
}
