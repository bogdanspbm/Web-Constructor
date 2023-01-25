import { useAppSelector } from "../../../app/hooks";
import { getDatabaseSchemas } from "../../../structures/database/Database";
import { Button } from "antd";
import styles from "./SchemasPanel.module.css";

export function SchemasPanel() {
  const schemas = useAppSelector(getDatabaseSchemas);

  console.log(schemas);

  if (!schemas) {
    return <></>;
  }

  return (
    <>
      {schemas.map((schema) => {
        const name = (schema.charAt(0).toUpperCase() + schema.slice(1)).replace(
          "_",
          " "
        );
        return (
          <Button block={true} className={styles.schema} key={schema}>
            {name}
          </Button>
        );
      })}
    </>
  );
}
