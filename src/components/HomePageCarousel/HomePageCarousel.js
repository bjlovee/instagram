import styles from './HomePageCarousel.module.scss'

import ProfileIcon from '../ProfileIcon/ProfileIcon'

export default function HomePageCarousel () {
  return (
    <div className={styles.homePageCarousel}>
      <ProfileIcon />
      <ProfileIcon />
      <ProfileIcon />
      <ProfileIcon />
    </div>
  )
}
