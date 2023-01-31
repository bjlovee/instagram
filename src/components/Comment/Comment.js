// import user from '../../../models/user'
import styles from './Comment.module.scss'
import IconButton from '@mui/material/IconButton'
import Edit from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
// import {AiOutlineHeart} from "react-icons/ai"
import { useState } from 'react'
import { StyledList } from '@mui/joy/List/List'


export default function Comment ({
  handle,
  comment,
  avatar,
  poster,
  user,
  id,
  deleteComment,
  updateComment,
  setUpdatedComment,
  updatedComment,
  commentDate
}) {
  const [editComment, showEditComment] = useState(false)

  const handleChange = (e) => {
    setUpdatedComment({
      ...updatedComment, [e.target.name]: e.target.value
    })
  }
  // console.log(Date.now())
  return (
    <div className={styles.commentContainer}>
      <div class={styles.switchContainer}>

        <div className={styles.commentWrapper}>
          <div class={styles.profileImg}>
            <img src={avatar} />
          </div>
          <div class={styles.username}>
            <h6>{handle}</h6>
            {!editComment
              ? <>
                <p>{comment}</p>
              </>
              : <>
                <div
                  className={styles.updateComment} type='submit' onKeyDown={(e) => {
                    if (e.key == 'Enter') {
                      e.preventDefault()
                      updateComment(id)
                      showEditComment(false)
                    } else if (e.key == 'Escape') {
                      showEditComment(false)
                    }
                  }}
                >
                  <input name='comment' value={updateComment.comment} onChange={handleChange} placeholder='edit your comment...(ESC to close)' required />
                  <div className={styles.closeButton} onClick={()=>{
                    showEditComment(false)
                  }}>X</div>
                </div>
              </>}
          </div>
        </div>
        <div class={styles.switchLink}>
          {/* only the owner of the post can edit or delete comment */}
          {user && user._id === poster
            ? <>
              <div className={styles.dateAndTime}>
                <p>{new Date(commentDate).toLocaleDateString()}</p> &nbsp;
                <p>{new Date(commentDate).toLocaleTimeString()}</p>
              </div>
              <div className={styles.buttonWrapper}>
                <div onClick={(e) => {
                  e.preventDefault()
                  deleteComment(id)
                }}
                >
                  <IconButton><DeleteIcon sx={{ fontSize: 14 }} />
                  </IconButton>
                </div>
                <div onClick={() => {
                  console.log('true')
                  showEditComment(true)
                }}
                >
                  <IconButton><Edit sx={{ fontSize: 14 }} />
                  </IconButton>
                </div>
              </div>
              </>
            : ''}
        </div>
      </div>
    </div>
  )
}
