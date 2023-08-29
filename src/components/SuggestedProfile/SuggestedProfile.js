import styles from './SuggestedProfile.module.scss'
import Avatar from '@mui/material/Avatar'
import { useNavigate } from 'react-router-dom'

export default function SuggestedProfile ({
  allUsers,
  user,
  setProfileUser
}) {
  const navigate = useNavigate()
  return (
    <div className={styles.suggestedProfile}>
      <h4>Suggested Profiles</h4>
      {allUsers.map((currentUser, i) => {
        if (i <= 4 && currentUser._id !== user._id) {
          return (
            <>
              <div
                onClick={() => {
                  setProfileUser(currentUser)
                  navigate('/profile')
                }} class={styles.switchContainer}
              >
                <div class={styles.profileImg}>
                  {currentUser.profilePic
                    ? <img src={currentUser.profilePic} />
                    : <Avatar sx={{ width: '100%', height: '100%' }} />}

                  <div class={styles.username}>
                    <div>
                      {currentUser.handle
                          ? <h5>{currentUser.handle}</h5>
                          : <h5>{currentUser.handle}</h5>}
                    </div>
                  </div>
                </div>
                <div class={styles.switchLink}>
                  <h6>Follow</h6>
                </div>
              </div>
            </>
          )
        }
      })}
    </div>
  )
}
