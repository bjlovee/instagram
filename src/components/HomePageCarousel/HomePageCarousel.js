import styles from './HomePageCarousel.module.scss'

export default function homePageCarousel () {
  let currentScrollPosition = 0
  const scrollAmount = 320

  const sCont = document.querySelector('.storysContainer')
  const hScroll = document.querySelector('.horizontalScroll')
  const maxScroll = -sCont + hScroll

  const scrollHorizontally = (val) => {
    currentScrollPosition += (val * scrollAmount)
    if (currentScrollPosition >= 0) {
      currentScrollPosition = 0
    } else {

    }

    if (currentScrollPosition <= maxScroll) {
      currentScrollPosition = maxScroll
    } else {
    }
  }
  return (
    <div className={styles.homePageCarousel}>

      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' />
      <link href='https://fonts.googleapis.com/css2?family=Roboto&display=swap' rel='stylesheet' />

      <div className={styles.container}>
        <div className={styles.horizontalScroll}>
          <button
            className={styles.btnScroll} id={styles.btnScrollLeft}
            onClick={() => {
              scrollHorizontally(1)
            }}
          ><i className='fas fa-chevron-left' />
          </button>
          <button
            className={styles.btnScroll} id={styles.btnScrollRight}
            onClick={() => {
              scrollHorizontally(-1)
            }}
          ><i className='fas fa-chevron-right' />
          </button>

          <div className={styles.storysContainer}>
            <a href='https://github.com/bjlovee'>
              <div className={styles.storyCircle}>
                <img src='https://ca.slack-edge.com/T0351JZQ0-U03NNP7N0BH-7ea71a38068a-512' alt='' />
              </div>
              <h1>bjlovee</h1>
            </a>
            <a href='https://github.com/petermc87'>
              <div className={styles.storyCircle}>
                <img src='https://ca.slack-edge.com/T0351JZQ0-U03NNP90555-4c8358ef127b-512' alt='' />
              </div>
              <h1>petermc87</h1>
            </a>
            <a href='https://github.com/daryacoding'>
              <div className={styles.storyCircle}>
                <img src='https://ca.slack-edge.com/T0351JZQ0-U03QD3791L4-2c8916f07eb0-512' alt='' />
              </div>
              <h1>daryacoding</h1>
            </a>
            <a href='https://github.com/KyraCChurch'>
              <div className={styles.storyCircle}>
                <img src='https://ca.slack-edge.com/T0351JZQ0-U03QD37C1RS-a4cd73c30e25-192' alt='' />
              </div>
              <h1>kyracchurch</h1>
            </a>
            <a href='https://github.com/sompagnimdi'>
              <div className={styles.storyCircle}>
                <img src='https://ca.slack-edge.com/T0351JZQ0-U03NWNXG7P0-669ff0a72dc4-512' alt='' />
              </div>
              <h1>sompagnimdi</h1>
            </a>
            <a href='https://github.com/Llovedy24'>
              <div className={styles.storyCircle}>
                <img src='https://ca.slack-edge.com/T0351JZQ0-U03P5PHDYKW-9c35ed0257e2-192' alt='' />
              </div>
              <h1>llovedy_24</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
