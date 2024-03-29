import styles from './SwitchProfile.module.scss'
import IconButton from '@mui/material/IconButton'
import Edit from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useNavigate } from 'react-router-dom'

export default function SwitchProfile ({
  image,
  handle,
  user,
  post,
  location,
  setUpdateForm,
  setShowModal,
  setPostModal,
  deletePost,
  posterInfo,
  setProfileUser
}) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => {
        if (!post) {
          setProfileUser(user)
          navigate('/profile')
        }
      }} class={styles.switchContainer}
    >
      <div class={styles.profileImg}>
        <img src={image} />
        <div class={styles.username}>
          <div>
            <h5>{handle}</h5>
            {/* the post header component info will have location */}
            {post && location
              ? <p>{location}</p>
              : ''}

          </div>
        </div>
      </div>
      <div class={styles.switchLink}>
        {/* only the owner of the post can edit/delete */}
        {user && post && user._id === post.poster
          ? <>
            <div onClick={() => {
              deletePost(post._id)
              setPostModal(false)
            }}
            >
              <IconButton><DeleteIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </div>
            <div onClick={() => {
              setUpdateForm(true)
              setShowModal(true)
              //'click')
            }}
            >
              <IconButton><Edit sx={{ fontSize: 18 }} />
              </IconButton>
            </div>
            </>
          : posterInfo
            ? ''
            : <h5>Profile</h5>}
      </div>
    </div>
  )
}
