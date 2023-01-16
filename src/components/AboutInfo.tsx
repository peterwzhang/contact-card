import styles from "./AboutInfo.module.css";

interface AboutInfoProps {
    desc: string;
}

export default function AboutInfo(props: AboutInfoProps) {
    return (
        <div className={styles.container}>
            <h2 className={styles.aboutText}>About</h2>
            <p className={styles.descText}>{props.desc}</p>
        </div>
    );
}
