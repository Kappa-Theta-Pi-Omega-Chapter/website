import styles from "./KeyValueDisplay.module.css";

interface KeyValueDisplayProps {
    title: string;
    value: string | React.JSX.Element;
}

function KeyValueDisplay({title, value}: KeyValueDisplayProps) {
    return (
        <div className={styles.display}>
            <h4>{title}</h4>
            {typeof value === "string" ? <p>{value}</p> : value}
        </div>
    );
}

export default KeyValueDisplay;
