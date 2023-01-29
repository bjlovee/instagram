import styles from '../NewPostModal/NewPostModal.module.scss'
import NavBarBottom from '../NavBarBottom/NavBarBottom'
import { useEffect, useState } from 'react'

export default function NewPostModal({
    showModal,
    setShowModal,
    post,
    setPost,
    user,
    setPostModal,
    getPosterInfo
}){

const [newPost, setNewPost] = useState({
  image: '',
  location: '',
  caption: '',
  music: '',
})



  // Get post
  const getPost = async () => {
    try {
      const response = await fetch(`api/posts/poster/${user._id}`)
      const data = await response.json()
      console.log(data)
      setPost(data)
    } catch (err) {
      console.log(err)
    }
  }


const createPost = async () => {
  try {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // nesting the user id on creation
        ...post,
        poster: user._id,
        posterPic: user.profilePic,
        posterName: user.handle,
      })
    })
    const data = await response.json()
    console.log(data)
    // setNewPost(data)
    setPost(data)
    // getPost(user._id)

    // getPost()

    setNewPost({
      // poster: user._id,
      // posterName: user.handle,
      // posterPic: user.profilePic,
      image: '',
      location: '',
      caption: '',
      music: '',
    })
  } catch (error) {
    console.error(error)
  }
}


const handleSubmit = (e) => {
  e.preventDefault()
  createPost()
  setShowModal(false)
  // navigate('/post')
  console.log(post.poster)
  setPostModal(true)
  getPosterInfo(newPost.poster)
}


const handleChange = (evt) => {
  setPost({ ...post, [evt.target.name]: evt.target.value })
}


    return(
    <>
        {showModal 
            ?
            <>
            <button className={styles.closeButton} 
                onClick={()=>{
                    setShowModal(false)
                }}
            
            >&#x2715;</button>
            <div className={styles.modal}>

              <div className={styles.postCreation}>


                <div className={styles.modalContainer}>
                    <h5>Create A New Post</h5>
                </div>

                <div className={styles.formContainer}>
                  {/* <button>Add Images</button> */}
                  <form autoComplete='off'onSubmit={handleSubmit}>
                  <input type='text' name='image' value={post.image} onChange={handleChange} placeholder='image' />
                  <input type='text' name='location' value={post.location} onChange={handleChange} placeholder='location' required />
                  <input type='text' name='music' value={post.music} onChange={handleChange} placeholder='music' required />
                  <textarea className={styles.textArea} type='text' name='caption' value={post.caption} onChange={handleChange} placeholder='add your caption here...' required />
                    {/* <button type='submit'>Submit</button> */}
                    <div className={styles.buttonContainer}>
                  <button type='submit'>Submit</button>
                </div>
                  </form>
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



