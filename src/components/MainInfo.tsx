import styles from './MainInfo.module.css'

interface MainInfoProps {
    name:string
    role:string
}

export default function MainInfo(props:MainInfoProps){
    return (
        <div className={styles.container}>
            <h1 className={styles.nameText}>{props.name}</h1>
            <p className={styles.roleText}>{props.role}</p>
        </div>
    )
}