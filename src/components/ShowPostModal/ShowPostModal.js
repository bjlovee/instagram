import styles from './ShowPostModal.module.scss'
import { useState, useEffect } from 'react'
import SwitchProfile from '../SwitchProfile/SwitchProfile'
import { Switch } from '@mui/material'
import Comment from '../Comment/Comment'
// import { create } from '../../../models/comments'

export default function ShowPostModal({
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
    deletePost
}){
    
  const [newComment, setNewComment] = useState({
    comment:''
  })

  const [comment, setComment] = useState({})
  const [commentsByPost, setCommentsByPost] = useState([])


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
            poster: user._id

          })
        })
        const data = await response.json()
        setComment(data)
        setNewComment({
          comment:''
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
}

useEffect(()=>{
    getPosterInfo(post.poster)
},[])

    return(
        <>
        {postModal
            ?
            <>
              <button className={styles.closeButton} 
                  onClick={()=>{
                      setPostModal(false)
                  }}
              >&#x2715;</button>
              <div className={styles.modal}>
                <div className={styles.postCreation}>

                  <div className={styles.modalContainer}>
                  <div className={styles.formContainer}>
                      <img src={post.image}/>
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
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                  </div>
                  <div className={styles.addComment} type='submit' onKeyDown={(e) => {
                    if(e.key == 'Enter'){
                      handleSubmit(e)
                    }
                  }}>
                    <input name='comment' value={newComment.comment} onChange={handleChange} placeholder='add a comment..' required />
                  </div>
                </div>
                </div>
                </div>
              </div>
            </>
            :
            ''
        }
    </>
    )

}


                    {/* <input type='submit' value={newComment.comment} onKeyDown={(e) =>{
                      if(e.key == 'Enter'){
                        // handleSubmit(e)
                        setNewComment({ ...newComment, comment: e.target.value})
                        console.log(newComment)
                      }
                    }}placeholder='add a comment..' /> */}