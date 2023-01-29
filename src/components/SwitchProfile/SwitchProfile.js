import styles from './SwitchProfile.module.scss'

export default function SwitchProfile(){
    return (
        <div className={styles.switchProfile}>
          <div class={styles.switchContainer}>
              <div class={styles.profileImg}>
                <img src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2585&q=80' />
              </div>
            <div class={styles.username}><h5>User</h5></div>
            <div class={styles.switchLink}><h5>Switch</h5></div>
          </div>
        </div>
    )
}