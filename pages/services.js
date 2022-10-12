/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios'
import { useEffect, useState } from 'react'; 
import styles from '../styles/Home.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

function Services() {
  const [usersData, setUsersData] = useState()
  

  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/post", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "app-id": "63350ae2b3ea36a85acba45f",
        },
        // responseType: "json",
      })
      .then((response) => {
      setUsersData(response.data.data)

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
              <div key={index}>
                <Card sx={{ maxWidth: 345, borderRadius:'15px' }}>
                  <CardMedia
                    component="img"
                    height="160"
                    image={el.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {el.tags[2]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{fontWeight:'300'}}>
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions sx={{gap:'10px', marginTop:'20px'}}>
                    <Avatar sx={{ width: 35, height: 35 }} src={el.owner.picture}/>
                    <Typography sx={{fontSize:'12px', color:'gray', fontWeight:'300'}}>{el.owner.firstName} {el.owner.lastName} </Typography>
                    <Typography sx={{fontSize:'12px', color:'gray', fontWeight:'300'}}>{el.publishDate}</Typography>
                  </CardActions>
                </Card>
              </div>
              
          
          ))}
    </div>
    </>
  );
}

export default Services;