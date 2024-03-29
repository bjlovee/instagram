import styles from './ProfileSection.module.scss'

export default function ProfileSection ({
  userPosts,
  setPostModal,
  setPost,
  getComments,
  getLikesByPost,
  setLike,
  like

}) {
  const handleSelectPost = (post) => {
    setPost(post)
    setPostModal(true)
    getComments(post._id)
    getLikesByPost(post._id)
  }

  return (
    <>
      <div className={styles.sectionTitle}>
        <h4>POSTS</h4>
      </div>
      <div className={styles.profileSection}>
        {
          userPosts
            ? userPosts.map((post) => {
              return (
                <div
                  onClick={(e) => {
                    e.preventDefault()
                    handleSelectPost(post)
                  }} className={styles.profilePostIndex}
                >
                  <img src={post.image} />
                </div>
              )
            })

            : <h4>'No posts yet!'</h4>
        }
      </div>
    </>
  )
}
