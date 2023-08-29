import styles from './ShowPostModal.module.scss'
import { useState, useEffect } from 'react'
import SwitchProfile from '../SwitchProfile/SwitchProfile'
import Comment from '../Comment/Comment'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteIcon from '@mui/icons-material/Favorite'

export default function ShowPostModal ({
  post,
  user,
  getUser,
  postModal,
  setPostModal,
  posterInfo,
  getPosterInfo,
  setUpdateForm,
  showModal,
  setShowModal,
  deletePost,
  commentsByPost,
  getComments,
  getLikesByPost,
  setLikesByPost,
  likesByPost,
  setLike,
  like,
  getAllPosts,
  setProfileUser
}) {
  const [newComment, setNewComment] = useState({
    comment: ''
  })

  const [comment, setComment] = useState({})

  const [updatedComment, setUpdatedComment] = useState({})

  // Create Comment
  const createComment = async () => {
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // nesting the user id on creation
          ...newComment,
          post: post._id,
          poster: user._id,
          handle: user.handle,
          posterImage: user.profilePic
        })
      })
      const data = await response.json()
      setComment(data)
      getComments(post._id)
      setNewComment({
        comment: ''
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (evt) => {
    setNewComment({ ...newComment, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createComment()
    getAllPosts()
  }

  // Delete Comment
  const deleteComment = async (id) => {
    try {
      await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      getComments(post._id)
    } catch (error) {
      console.error(error)
    }
  }

  // Update comment
  const updateComment = async (id) => {
    try {
      const response = await fetch(`/api/comments/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedComment)
      })
      const data = await response.json()
      setComment(data)
      getComments(post._id)
    } catch (e) {
      console.error(e)
    }
  }

  // Create Like
  const createLike = async () => {
    try {
      const response = await fetch('/api/likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        // nesting the user id on creation
          liker: user._id,
          post: post._id
        })
      })
      const data = await response.json()
      setLike(data)
      getLikesByPost(post._id)
    } catch (error) {
      console.error(error)
    }
  }

  // Delete Like
  const deleteLike = async () => {
    try {
      await fetch(`/api/likes/${like._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setLike({})
      getLikesByPost(post._id)
    } catch (e) {
      console.error({ msg: e.message })
    }
  }

  const handleFilterLike = () => {
    if (post) {
      likesByPost.filter(like => like.liker === user._id).map((like) => {
        return setLike(like)
      })
    }
  }
  // Side effects
  useEffect(() => {
    getPosterInfo(post.poster)
    handleFilterLike()
  }, [likesByPost])

  return (
    <>
      {postModal
        ? <>
          <button
            className={styles.closeButton}
            onClick={() => {
              setPostModal(false)
              setLike({})
              setLikesByPost([])
              getAllPosts()
            }}
          >&#x2715;
          </button>
          <div className={styles.modal}>
            <div className={styles.postCreation}>
              <div className={styles.modalContainer}>
                <div className={styles.formContainer}>
                  <img src={post.image} />
                </div>
                <div className={styles.commentsContainer}>
                  <div className={styles.profileInfo}>
                    <SwitchProfile
                      image={post.posterPic}
                      handle={post.posterName}
                      location={post.location}
                      getUser={getUser}
                      user={user}
                      post={post}
                      caption={null}
                      setUpdateForm={setUpdateForm}
                      showModal={showModal}
                      setShowModal={setShowModal}

                      setPostModal={setPostModal}
                      deletePost={deletePost}
                      setProfileUser={setProfileUser}
                    />
                  </div>
                  <div className={styles.caption}>
                    <SwitchProfile
                      image={post.posterPic}
                      handle={post.posterName}
                      caption={post.caption}
                      user={user}
                      post={post}

                      setUpdateForm={setUpdateForm}
                      showModal={showModal}
                      setShowModal={setShowModal}

                      setPostModal={setPostModal}
                      deletePost={deletePost}
                      posterInfo={posterInfo}
                    />
                    <div className={styles.captionContainer}>
                      <p>{post.caption}</p>
                    </div>
                  </div>
                  <div className={styles.commentsIndex}>
                    {commentsByPost
                      ? <>
                        {commentsByPost.map((comment) => {
                          return (
                            <>
                              <Comment
                                handle={comment.handle}
                                comment={comment.comment}
                                avatar={comment.posterImage}
                                user={user}
                                poster={comment.poster}
                                id={comment._id}
                                commentDate={comment.updatedAt}
                                deleteComment={deleteComment}

                                updateComment={updateComment}
                                setUpdatedComment={setUpdatedComment}

                                updatedComment={updatedComment}
                              />
                            </>
                          )
                        })}
                      </>
                      : ''}
                  </div>
                  <div className={styles.commentWrapper}>
                    <div
                      className={styles.addComment} type='submit' onKeyDown={(e) => {
                        if (e.key == 'Enter') {
                          handleSubmit(e)
                        }
                      }}
                    >
                      <input name='comment' value={newComment.comment} onChange={handleChange} placeholder='add a comment...' required />
                    </div>
                    <div className={styles.likeButton}>
                      {like && like.liker === user._id
                        ? <div onClick={(e) => {
                          e.preventDefault()
                          deleteLike()
                          getAllPosts()
                        }}
                          >
                          <FavoriteIcon style={{ width: '1.5rem', height: '1.5rem', color: 'red' }} />
                        </div>
                        : <div onClick={(e) => {
                          e.preventDefault()
                          createLike()
                          getAllPosts()
                        }}
                          >
                          <FavoriteBorderOutlinedIcon style={{ width: '1.5rem', height: '1.5rem', color: 'red' }} />
                        </div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        : ''}
    </>
  )
}
