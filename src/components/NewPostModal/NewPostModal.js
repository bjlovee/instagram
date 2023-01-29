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
    getPosterInfo,
    updateForm,
    setUpdateForm
}){

const [newPost, setNewPost] = useState({
  image: '',
  location: '',
  caption: '',
  music: '',
})
const [updatedPost, setUpdatedPost] = useState({})


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

//CREATE POST
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

useEffect(()=>{
  getPosterInfo(post.poster)
}, [])
// console.log(user)



//UPDATE POST
const updatePost = async () => {
  try {
    const response = await fetch(`/api/posts/${post._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPost)
    })
    const data = await response.json()
    setPost(data)

    // getPost(post._id)
  } catch (e) {
    console.error(e)
  }
}

const handleSubmitUpdate = (e) => {
  e.preventDefault()
  updatePost()
  showModal(false)         
  setPostModal(true)

}
console.log(post)
console.log(updatedPost)

// const handleUpdateChange = (e) => {
//   setUpdatedPost({ ...updatedPost, [e.target.name]: e.target.value })
// }
// console.log(post)
    return(
    <>
        {showModal 
            ?
            <>
            <button className={styles.closeButton} 
                onClick={()=>{
                    setShowModal(false)
                    setUpdateForm(false)
                }}
            >&#x2715;</button>
            <div className={styles.modal}>
              <div className={styles.postCreation}>
                <div className={styles.modalContainer}>
                  {!updateForm
                    ?
                      <>
                      <h5>Create A New Post</h5>
                      </>
                  
                    :

                      <>
                        <h5>Update Post</h5>
                      </>
                  }
                </div>
                {!updateForm 
                  ?
                  <>
                    <div className={styles.formContainer}>
                      <form autoComplete='off'onSubmit={handleSubmit}>
                        <input type='text' key={post._id + '1'} name='image' value={post.image} onChange={handleChange} placeholder='image' />
                        <input type='text' key={post._id + '2'} name='location' value={post.location} onChange={handleChange} placeholder='location' required />
                        <input type='text' key={post._id + '3'} name='music' value={post.music} onChange={handleChange} placeholder='music' required />
                        <textarea className={styles.textArea} key={post._id} type='text' name='caption' value={post.caption} onChange={handleChange} placeholder='add your caption here...' required />
                        <div className={styles.buttonContainer}>
                          <button type='submit'>Submit</button>
                        </div>
                      </form>
                    </div>
                  </> 
                  : updateForm && post 
                    ?
                    <>
                      <div className={styles.formContainer}>
                      <form autoComplete='off' onSubmit={(e) => {handleSubmitUpdate(e)}}>
                        <input type='text' value={updatedPost.image} placeholder='image' onChange={(e) => {setUpdatedPost({ ...updatedPost, image: e.target.value})}}/>
                        <input type='text' value={updatedPost.location} placeholder='location' onChange={(e) => {setUpdatedPost({ ...updatedPost, location: e.target.value})}}/>
                        <input type='text' value={updatedPost.music} placeholder='music' onChange={(e) => {setUpdatedPost({ ...updatedPost, music: e.target.value})}}/>
                        <textarea className={styles.textArea}type='text' name='caption' value={updatedPost.caption} placeholder='caption' onChange={(e) => {setUpdatedPost({ ...updatedPost, caption: e.target.value})}}/>
                        <div className={styles.buttonContainer}>
                          <button 
                            onClick={()=>{
                              updateForm(false)
                              showModal(false)   
                            }}
                          
                          type='submit'>Submit</button>
                        </div>
                      </form>
                      </div>
                    </>
                    :
                    ''
                }
              </div>
            </div>
            </>
            :
            ''
        }
    </>
    )
}



