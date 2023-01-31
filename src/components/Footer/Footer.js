import styles from './Footer.module.scss'
export default function Footer () {
  return (
    <>
      <footer>
        <ul class={styles.navigtaionList} id='footer-list'>
          <li><a href='https://about.meta.com'>Meta</a></li>
          <li><a href='https://about.instagram.com'>About</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Jobs</a></li>
          <li><a href='#'>Help</a></li>
          <li><a href='#'>API</a></li>
          <li><a href='#'>Privacy</a></li>
          <li><a href='#'>Terms</a></li>
        </ul>
        <p>	&#169; 2023 Instafake</p>
      </footer>
    </>
  )
}
