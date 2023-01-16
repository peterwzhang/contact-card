import styles from "./ProfilePicture.module.css";

interface ProfilePictureProps {
    imgPath: string;
}

export default function ProfilePicture(props: ProfilePictureProps) {
    return (
        <div className={styles.container}>
            {/* <img className={styles.banner}></img> */}
            <img
                className={styles.profilePic}
                src={props.imgPath}
                alt="Profile Picture"
            ></img>
        </div>
    );
}
