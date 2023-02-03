import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import styles from "./ProfileHeader.module.scss";
import { useState, useEffect } from 'react'

export default function ProfileHeader({
    profileUser, 
    user, 
    // getFollowing, 
    // followingObjects, 
    getFollowers, 
    followerObjects, 
    setFollowersPresent, 
    followersPresent,
    followingPresent, 
    getUser,
    setFollowingPresent,
    numberOfPosts
}) {
    return (
        <div className={styles.profileHeader}>
            <div className={styles.profile}>
                <div className={styles.profileHeader}>
                    <div className={styles.profileHeaderTop}>
                        <ProfileAvatar 
                            profileUser={profileUser}
                        />
                        <ProfileInfo
                            profileUser={profileUser}
                            user={user}
                            getUser={getUser}
                            // getFollowing={getFollowing}
                            // followingObjects={followingObjects}
                            getFollowers={getFollowers}
                            followerObjects={followerObjects}
                            followersPresent={followersPresent}
                            followingPresent={followingPresent}
                            setFollowersPresent={setFollowersPresent}
                            setFollowingPresent={setFollowingPresent}
                            numberOfPosts={numberOfPosts}
                        />
                    </div>
                
                </div>
            </div>
        </div>
    );
}