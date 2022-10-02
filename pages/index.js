import styles from '../styles/Home.module.css'
import Hero from '../images/brooke-cagle.jpg'
import Image from 'next/image'
import Meetings from '../images/ootoMeetings1.png'
import icon from '../images/icon.png'


export default function Home() {
  return (
    <div>
    <div className={styles.bgWrap}>
      <Image
        src={Hero}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <div className={styles.main_content_wrapp}>
      <div className={styles.left_side_content}>
        <p style={{fontSize:'48px', fontWeight:'600'}}>Your Hub for </p>
        <p style={{fontSize:'48px', fontWeight:'600', marginTop:'-15px'}}>teamwork</p>
        <p style={{fontSize:'18px'}}>Give everyone you work with—inside and 
          outside your company—a more productive 
          way to stay in sync. Respond faster with 
          emoji, keep conversations focused in channels, 
          and simplify all your communication into one place.</p>
      </div>
      <div className={styles.right_side_content}>
        <Image 
          style={{position:'relative'}}
          src={Meetings}
         />

      </div>
      
    </div>
  </div>
  )
}
