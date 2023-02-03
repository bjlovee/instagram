import styles from '../NewPostModal/NewPostModal.module.scss'
import NavBarBottom from '../NavBarBottom/NavBarBottom'
import { useEffect, useState } from 'react'
// import { getUser } from '../../utilities/users-service'

export default function NewPostModal ({
  showModal,
  setShowModal,
  post,
  setPost,
  getPosts,
  user,
  setUser,
  getUser,
  setPostModal,
  getPosterInfo,
  updateForm,
  setUpdateForm,
  addImageForm,
  setAddImageForm,
  setProfileUser,
  profileUser

}) {
  const [newPost, setNewPost] = useState({
    image: '',
    location: '',
    caption: '',
    music: ''
  })
  const [updatedPost, setUpdatedPost] = useState({})

  const [updatedProfile, setUpdatedProfile] = useState({})


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

  // CREATE POST
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
          posterName: user.handle
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
        music: ''
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
  // getPosterInfo(newPost.poster)
  }

  const handleChange = (evt) => {
    setPost({ ...post, [evt.target.name]: evt.target.value })
  }


  // UPDATE POST
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
      console.log(data)
      getPosts(user._id)
      setPost(data)

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

  // console.log(user.profilePic)

  //UPDATE PROFILE
  const updateProfile = async () => {
    try {
      const response = await fetch(`/api/users/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...updatedProfile})
      })
      const data = await response.json()
     setProfileUser(data)
      setUser(data)
       getUser(user._id)
      // setUpdatedProfile(null)
    } catch (e) {
      console.error(e)
    }
  }

  const handleSubmitProfile = (e) => {
    e.preventDefault()
    updateProfile()
    setUpdateForm(false)
    // updateForm(false)
    setShowModal(false)
    setAddImageForm(false)
  }

  const handleChangeProfile = (e) => {
    setUpdatedProfile({ ...updatedProfile, [e.target.name]: e.target.value })
  }

  // console.log(updatedProfile)

useEffect(()=>{
  getUser(user._id)
},[])

  return (
    <>
      {showModal
        ? <>
          <button
            className={styles.closeButton}
            onClick={() => {
              setShowModal(false)
              setUpdateForm(false)
              setAddImageForm(false)
            }}
          >&#x2715;
          </button>
          <div className={styles.modal}>
            <div className={styles.postCreation}>
              <div className={styles.modalContainer}>
                {!updateForm && !addImageForm
                  ? 
                    <>
                      <h5>Create A New Post</h5>
                    </>
                  : updateForm && !addImageForm 
                    ?
                      <>
                        <h5>Update Post</h5>
                      </>
                    : !updateForm && addImageForm
                      ?
                        <>
                          <h5>Add Profile Image</h5>
                        </>
                      :
                        ''
                  }
              </div>
              {!updateForm && !addImageForm
                ? <>
                  <div className={styles.formContainer}>
                    <form autoComplete='new-password' onSubmit={handleSubmit}>
                        <input type='text' key={post._id + '1'} name='image' value={post.image} onChange={handleChange} placeholder='image' autocomplete='new-password' />
                        <input type='text' key={post._id + '2'} name='location' value={post.location} onChange={handleChange} placeholder='location' autoComplete='off' />
                        <input type='text' key={post._id + '3'} name='music' value={post.music} onChange={handleChange} placeholder='music' autoComplete='off' />
                        <textarea className={styles.textArea} key={post._id} type='text' name='caption' value={post.caption} onChange={handleChange} placeholder='add your caption here...' required autoComplete='off' />
                        <div className={styles.buttonContainer}>
                          <button type='submit'>Submit</button>
                        </div>
                      </form>
                  </div>
                  </>
                : updateForm && post && !addImageForm
                  ? <>
                    <div className={styles.formContainer}>
                      <form autocomplete='off' onSubmit={(e) => { 
                          //   e.preventDefault()
                          // updateForm(false)
                           handleSubmitUpdate(e)
                         }}>
                          <input type='text' name='image' value={updatedPost.image} placeholder='image' onChange={(e) => { setUpdatedPost({ ...updatedPost, image: e.target.value }) }} />
                          <input type='text' name='location' value={updatedPost.location} placeholder='location' onChange={(e) => { setUpdatedPost({ ...updatedPost, location: e.target.value }) }} />
                          <input type='text' name='music' value={updatedPost.music} placeholder='music' onChange={(e) => { setUpdatedPost({ ...updatedPost, music: e.target.value }) }} />
                          <textarea className={styles.textArea} type='text' name='caption' value={updatedPost.caption} placeholder='caption' onChange={(e) => { setUpdatedPost({ ...updatedPost, caption: e.target.value }) }} />
                          <div className={styles.buttonContainer}>
                            <button
                                  onClick={() => {
                                  updateForm(false)
                                  showModal(false)
                                }}
                                  type='submit'
                                >Submit
                                </button>
                          </div>
                        </form>
                    </div>
                    </>
                  : !updateForm && addImageForm 
                    ?
                      <>
                        <div className={styles.formContainer}>
                          <form autoComplete='off' onSubmit={(e) => { handleSubmitProfile(e) }}>
                              <input type='text' name='profilePic' value={updatedProfile.profilePic} placeholder='profile image' onChange={handleChangeProfile} />
                              <input type='text' name='handle' value={updatedProfile.handle} placeholder='handle' onChange={handleChangeProfile} />
                              <div className={styles.buttonContainer}>
                                <button
                                      onClick={() => {
                                      updateForm(false)
                                      setShowModal(false)
                                    }}

                                      type='submit'
                                    >Submit
                                    </button>
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
        : ''}
    </>
  )
}
