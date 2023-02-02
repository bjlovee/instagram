import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import styles from "./ProfileHeader.module.scss";
import { useState, useEffect } from 'react'

export default function ProfileHeader({profileUser, user, getFollowing, followingObjects, getFollowers, followerObjects, followersPresent,
    followingPresent, setFollowersPresent, setFollowingPresent}) {
    return (
        <div className={styles.profileHeader}>
            <div className={styles.profile}>
                <div className={styles.profileHeader}>
                    <div className={styles.profileHeaderTop}>
                        <ProfileAvatar />
                        <ProfileInfo
                            profileUser={profileUser}
                            user={user}
                            getFollowing={getFollowing}
                            followingObjects={followingObjects}
                            getFollowers={getFollowers}
                            followerObjects={followerObjects}
                            followersPresent={followersPresent}
                            followingPresent={followingPresent}
                            setFollowersPresent={setFollowersPresent}
                            setFollowingPresent={setFollowingPresent}
                        />
                    </div>
                    <div className={styles.profileHighlights}></div>
                </div>
            </div>
        </div>
    );
}