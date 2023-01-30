import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileSection from "../../components/ProfileSection/ProfileSection";
import Footer from "../../components/Footer/Footer";
import styles from './ProfilePage.module.scss'

export default function ProfilePage(){
    return(
        <div className={styles.profilePage}>
          <ProfileHeader/>
          <ProfileSection/>
          <Footer/>
        </div>
    )
}