import React from 'react'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import styles from './ProfileHighlights.module.scss'

export default function ProfileHighlights(){
    return (
        <div className={styles.profileHighlights}>
            <RadioButtonUncheckedIcon />
            <RadioButtonUncheckedIcon />
            <RadioButtonUncheckedIcon />
            <RadioButtonUncheckedIcon />
        </div>
    )
}