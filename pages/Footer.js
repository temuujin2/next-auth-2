import styles from '../styles/Home.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return (
      <div className={styles.footer_wrapp}>
        <div className={styles.footer_width}>
            <div><b className={styles.logo_2}
                onClick={() => router.push("/")}>
                    team<div></div>
                </b>
                <div  className={styles.column_text_social}>
                <a><InstagramIcon sx={{margin:'0 6px -6px 0'}}/>Instagram</a>
                <a><FacebookIcon sx={{margin:'0 6px -6px 0'}}/>Facebook</a>
                <a><TwitterIcon sx={{margin:'0 6px -6px 0'}}/>Twitter</a>
                <a><LinkedInIcon sx={{margin:'0 6px -6px 0'}}/>LinkedIn</a>
                <a><GitHubIcon sx={{margin:'0 6px -6px 0'}}/>GitHub</a>
                <a><YouTubeIcon sx={{margin:'0 6px -6px 0'}}/>Youtube</a>
                </div>
            </div>
            
            <div className={styles.column_text}>Use Cases
                <a>UI Design</a>
                <a>UX Design</a>
                <a>Prototyping</a>
                <a>Javascript</a>
                <a>React js</a>
                <a>Next js</a>
            </div>
            <div className={styles.column_text}>Explore
                <a>Figma</a>
                <a>Costumers</a>
                <a>Why i love figma</a>
                <a>Blog</a>
                <a>Services</a>
                <a>Products</a>
            </div>
            <div className={styles.column_text}>Resources
                <a>Community Resources Hub</a>
                <a>Support</a>
                <a>Edducation</a>
                <a>Read Our Blog</a>
                <a>Our Newsletter</a>
                <a>Guides</a>
            </div>
            <div className={styles.column_text}>Subscribe to our newsletter
                <input 
                style={{width:'100%', 
                height:'40px', 
                marginTop:'20px',
                paddingLeft:'10px'}} 
                type="text" 
                placeholder='Email'></input>
            </div>
        </div>
      </div>
    )
  }