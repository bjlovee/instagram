import ProfilePostsIndex from "../ProfilePostsIndex/ProfilePostsIndex"
import styles from './ProfileSection.module.scss'
// import tempStyles from '../ProfilePostsIndex/ProfilePostsIndex.module.scss'

export default function ProfileSection({
  userPosts,
  setPostModal,
  setPost,
  getComments
}){

  const handleSelectPost = (post) => {
    setPost(post)
    setPostModal(true)
    getComments(post._id)
  }
  
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
                <div onClick={(e)=>{
                  e.preventDefault()
                  handleSelectPost(post)
                }}className={styles.profilePostIndex}>
                  <img src={post.image} />
                </div>
              )
            })

            :
            <h4>'No posts yet!'</h4>
        }

      </div>
      </>
    )
}
