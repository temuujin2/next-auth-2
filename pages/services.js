/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios'
import { useEffect, useState } from 'react'; 
import styles from '../styles/Home.module.css'
import Image from 'next/image';

function Services() {
  const [usersData, setUsersData] = useState()

  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/user", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "app-id": "63350ae2b3ea36a85acba45f",
        },
        responseType: "json",
      })
      .then((response) => {
      setUsersData(response.data.data)
      console.log(response)
      });
  }, [])
  return (
    <>
    <div className={styles.top_blog}>
      <div className={styles.text_top_blog}>
        <h1>Blog posts</h1>
        <p>Our latest updates and blogs about managing your  team</p>
      </div>
    </div>
    <div className={styles.blog_post}>
      
         {usersData?.map((el, index) => (
              <div className={styles.card_blog} key={index}>{el.title}
                <div className={styles.blog_bottom_card}>
                  <div className={styles.avatar_blog}>
                    <Image width={40} height={40} src={el.picture}/>
                  </div>
                  <div>
                   <p>{el.firstName} {el.lastName}</p>
                  </div>
                  <div>
                   <p>|</p>
                  </div>
                  <div>
                   <p>2nd january, 2022</p>
                  </div>
                </div>
              </div>
              
          
          ))}
    </div>
    </>
  );
}

export default Services;