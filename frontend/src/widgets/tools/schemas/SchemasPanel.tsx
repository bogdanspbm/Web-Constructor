import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {getDatabaseSchemas, setSchemas, setStatus} from "../../../structures/database/Database";
import {Button} from "antd";
import styles from "./SchemasPanel.module.css";

export const SchemasPanel = (props: any) => {

    const {connection} = props;
    const dispatch = useAppDispatch()
    const schemas = useAppSelector(getDatabaseSchemas);

    console.log(schemas);

    if (!schemas) {
        return <></>;
    }

    async function loadTables(schema: string) {
        const body = JSON.stringify(connection);

        const response = await fetch("http://localhost:8080/schemas", {
            method: "POST",
            body: body,
        });

        const json = await response.json();
        dispatch(setStatus({status: json.status}));
        dispatch(setSchemas({schemas: json.schemas}));
    }

    return (
        <>
            {schemas.map((schema) => {
                const name = (schema.charAt(0).toUpperCase() + schema.slice(1)).replace(
                    "_",
                    " "
                );
                return (
                    <Button block={true} className={styles.schema} key={schema} onClick={() => {
                        loadTables(schema)
                    }}>
                        {name}
                    </Button>
                );
            })}
        </>
    );
}
