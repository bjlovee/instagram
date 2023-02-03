import Avatar from "@mui/material/Avatar";
import styles from "./ProfileAvatar.module.scss";
export default function ProfileAvatar( profileUser ) {
    console.log(profileUser)
    return (
        
        <div className={styles.profileAvatar}>
            {profileUser.profileUser.profilePic ? <img src={profileUser.profileUser.profilePic}></img> : <Avatar position="absolute" />}
        </div>
    );
}