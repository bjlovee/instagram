import styles from './SwitchProfile.module.scss'
import IconButton from '@mui/material/IconButton'
import Edit from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

export default function SwitchProfile({
  image, 
  handle,
  user,
  post,
  location,
  setUpdateForm,
  showModal,
  setShowModal,
  setPostModal,
  deletePost
}){



  // --- EVENT HANDLERS ---//



    return (
        <div className={styles.switchProfile}>
          <div class={styles.switchContainer}>
              <div class={styles.profileImg}>
                <img src={image} />
                <div class={styles.username}>
                  <div>
                    <h5>{handle}</h5>
                  <p>{location}</p>
                  </div>
                </div>
                
              </div>
            <div class={styles.switchLink}>
              {user && post
                ?
                <>
                  <div onClick={()=>{
                    deletePost(post._id)
                    setPostModal(false)
                    }}>
                    <IconButton><DeleteIcon sx={{ fontSize: 18 }}/>
                    </IconButton>
                  </div>
                  <div onClick={()=>{
                    setUpdateForm(true)
                    setShowModal(true)
                    console.log('click')
                      }}>
                    <IconButton><Edit sx={{ fontSize: 18 }}/>
                    </IconButton>
                  </div>
                </>
                :
                <h5>Edit</h5>
              }
            </div>
          </div>
        </div>
    )
}