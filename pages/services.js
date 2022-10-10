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
          "app-id": "63104c3120f6e665ecf628ba",
        },
        responseType: "json",
      })
      .then((response) => {
      setUsersData(response.data.data)
        console.log("eee",response)
      });
  }, [])
  return (
    <div className={styles.blog_post}>
         {usersData?.map((el, index) => (
              <div className={styles.card_blog} key={index}>{el.id}
                <div className={styles.avatar_blog}>
                  <Image width={40} height={40} src={el.picture}/>
                </div>
              </div>
              
          
          ))}
    </div>
  );
}

export default Services;