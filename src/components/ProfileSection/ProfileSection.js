import ProfilePostsIndex from "../ProfilePostsIndex/ProfilePostsIndex"
import styles from './ProfileSection.module.scss'
// import tempStyles from '../ProfilePostsIndex/ProfilePostsIndex.module.scss'

export default function ProfileSection({
  userPosts
}){


    return(
      <>
      <div className={styles.sectionTitle}>
        <h4>POSTS</h4>
      </div>
      <div className={styles.profileSection}>

        {
          userPosts
            ?
            userPosts.map((post) => {
              return(
                <div className={styles.profilePostIndex}>
                  <img src={post.image} />
                </div>
              )
            })

            :
            'No posts yet!'
        }

      </div>
      </>
    )
}
