import styles from "./InfoTab.module.css";

interface InfoTabProps {
    social: SocialInfo;
}

export default function InfoTab(props: InfoTabProps) {
    return (
        <a href={props.social.link} className={styles.container}>
            <div className={styles.circle}>
                <img
                    className={styles.logo}
                    src={`./images/socials/${props.social.type.toLowerCase()}.svg`}
                    alt={`${props.social.type.toLowerCase()} logo`}
                ></img>
            </div>
            <div className={styles.textContainer}>
                <h3 className={styles.titleText}>{props.social.title}</h3>
                <p className={styles.subText}>{props.social.desc}</p>
            </div>
        </a>
    );
}
