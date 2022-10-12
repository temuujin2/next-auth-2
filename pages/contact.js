import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Contact() {
  return (
    <div style={{ maxWidth: '420px', margin: '96px auto' }}>
      <h2>Contact</h2>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '400px' },
          }}
          noValidate
          autoComplete="off"
          >
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Phone" variant="outlined" />
        </Box>
      <div className={styles.contact_wrapp}></div>
    </div>
  )
}

