import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import styles from "./ProfileHeader.module.scss";

export default function ProfileHeader() {
    return (
        <div className={styles.profileHeader}>
            <div className={styles.profile}>
                <div className={styles.profileHeader}>
                    <div className={styles.profileHeaderTop}>
                        <ProfileAvatar />
                        <ProfileInfo />
                    </div>
                    <div className={styles.profileHighlights}></div>
                </div>
            </div>
        </div>
    );
}