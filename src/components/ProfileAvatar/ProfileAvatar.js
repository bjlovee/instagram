import Avatar from "@mui/material/Avatar";
import styles from "./ProfileAvatar.module.scss";
export default function ProfileAvatar() {
    return (
        <div className={styles.profileAvatar}>
            <Avatar position="absolute" />
        </div>
    );
}