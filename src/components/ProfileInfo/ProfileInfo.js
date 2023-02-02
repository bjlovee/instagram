import styles from "./ProfileInfo.module.scss";
import React from "react"

export default function ProfileInfo({ user }) {
  console.log(user.user.handle)
  return (
    <div className={styles.profileInfo}>
      <div className={styles.profileInfoTop}>
        <div className={styles.username}>{user.user.handle}</div>
        <div className={styles.followingButton}>Following</div>
        <div className={styles.messageButton}>Message</div>
        <div className={styles.suggestion}></div>
      </div>
      <div className={styles.profileStats}>
        <div>942 posts</div>
        <div>846 followers</div>
        <div>752 following</div>
      </div>
      <div className={styles.profileBio}>
        <div className={styles.profileBioHeader}>
          <div className={styles.profileBioHeaderName}>{user.user.name}</div>
          <div className={styles.profileBioHeaderPronouns}>she/her/hers</div>
        </div>
        <p>
          I say stupid things and take random pictures. Messages from randos get
          insta-blocked. Bless your hearts
        </p>
        <div className={styles.profileBioFooter}>
          Followed by coleortizmackes, claireshiell. janicemcintyre + 54 more
        </div>
      </div>
    </div>
  );
}