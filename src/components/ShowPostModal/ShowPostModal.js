import styles from './ShowPostModal.module.scss'
import { useState, useEffect } from 'react'
import SwitchProfile from '../SwitchProfile/SwitchProfile'
import { Switch } from '@mui/material'
import Comment from '../Comment/Comment'
// import { create } from '../../../models/comments'
// import {AiOutlineHeart} from 'react-icons/ai'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";


export default function ShowPostModal ({
  post,
  setPost,
  user,
  postModal,
  setPostModal,
  posterInfo,
  getPosterInfo,
  setUpdateForm,
  showModal,
  setShowModal,
  deletePost,
  commentsByPost,
  getComments
}) {
  const [newComment, setNewComment] = useState({
    comment: ''
  })

  const [like, setLike] = useState({})
  const [likesByPost, setLikesByPost] = useState([])

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
  // getComments(post._id)
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


//Get likes by post
  const getLikesByPost = async (id) => {
    try {
    // console.log(id)
      const response = await fetch(`/api/likes/${id}`)
      const data = await response.json()
      // console.log(data)
      setLikesByPost(data)
    } catch (err) {
      console.log(err)
    }
  }


//Create Like
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
        post: post._id,
      })
    })
    const data = await response.json()
    setLike(data)
    getLikesByPost(post._id)
    // setNewComment({
    //   comment: ''
    // })
  } catch (error) {
    console.error(error)
  }
}


  // Side effects
  useEffect(() => {
    getPosterInfo(post.poster)

  }, [])

  // console.log(commentsByPost)
  console.log(post._id)
  console.log(user._id)
console.log(likesByPost)
console.log(posterInfo)
console.log(like)

  return (
    <>
      {postModal
        ? <>
          <button
            className={styles.closeButton}
            onClick={() => {
              setPostModal(false)
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
                        user={user}
                        post={post}
                        caption={null}
                        setUpdateForm={setUpdateForm}
                        showModal={showModal}
                        setShowModal={setShowModal}

                        setPostModal={setPostModal}
                        deletePost={deletePost}
                      />
                  </div>
                  <div className={styles.caption}>
                    <SwitchProfile
                        image={post.posterPic}
                        handle={post.posterName}
                      // location={post.location}
                        caption={post.caption}
                        user={user}
                      // post={post}

                        setUpdateForm={setUpdateForm}
                        showModal={showModal}
                        setShowModal={setShowModal}

                        setPostModal={setPostModal}
                        deletePost={deletePost}
                        posterInfo={posterInfo}
                      />
                    <div className={styles.captionContainer}>
                        {/* <div></div> */}
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
                    <div className={styles.addComment} type='submit' onKeyDown={(e) => {
                          if (e.key == 'Enter') {
                            handleSubmit(e)
                          }
                        }}>
                      <input name='comment' value={newComment.comment} onChange={handleChange} placeholder='add a comment...' required />
                    </div>
                    <div className={styles.likeButton}>
                      {like && like.liker === user._id
                        ?
                          <FavoriteIcon style={{ width: "1.5rem", height: "1.5rem", color:"red" }} />
                        :
                        <div onClick={(e) =>{
                          e.preventDefault()
                          createLike()
                        }}>
                          <FavoriteBorderOutlinedIcon style={{ width: "1.5rem", height: "1.5rem", color:"red" }} />
                        </div>
                      }
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

// {commentsByPost.map((comment)=>{
//   return(
//     <div>
//       <h6>{comment.handle}</h6>
//       <p>{comment.comment}</p>
//     </div>
//   )
// })}

{ /* <input type='submit' value={newComment.comment} onKeyDown={(e) =>{
                      if(e.key == 'Enter'){
                        // handleSubmit(e)
                        setNewComment({ ...newComment, comment: e.target.value})
                        console.log(newComment)
                      }
                    }}placeholder='add a comment..' /> */ }
