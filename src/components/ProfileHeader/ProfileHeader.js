import ProfileInfo from "../ProfileInfo/ProfileInfo"
import ProfileHighlights from "../ProfileHighlights/ProfileHighlights"
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar"

export default function ProfileHeader(){
    return (
            <>
            <ProfileInfo/>
            <ProfileAvatar/>
            <ProfileHighlights/>
            </>
        )
}