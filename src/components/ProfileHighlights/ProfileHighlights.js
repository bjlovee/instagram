import React from 'react'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import styles from './ProfileHighlights.module.scss'

export default function ProfileHighlights () {
  return (
    <div className={styles.profileHighlights}>
      <div className={styles.highlight}>
        <RadioButtonUncheckedIcon />
        <h3>trips</h3>
      </div>
      <div className={styles.highlight}>
        <RadioButtonUncheckedIcon />
        <h3>family</h3>
      </div>
      <div className={styles.highlight}>
        <RadioButtonUncheckedIcon />
        <h3>ootd</h3>
      </div>
      <div className={styles.highlight}>
        <RadioButtonUncheckedIcon />
        <h3>gym</h3>
      </div>
    </div>
  )
}
