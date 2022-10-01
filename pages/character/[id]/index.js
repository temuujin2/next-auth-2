import Link from 'next/link';
import styles from '../../../styles/Home.module.css'
import Comments from '../../../components/Comment';



const defaultEndpoint = `https://rickandmortyapi.com/api/character/`;

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`${defaultEndpoint}/${id}`);
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

export default function Character({data}) {
  const { name, image, gender, location, origin, species, status } = data;
  return (
    <div style={{ maxWidth: '100%', display:'flex', alignItems:'center', flexDirection:'column' }}>
        <title>{ name }</title>
      <div className={styles.post_in_title}> 
        <h1 >{ name }</h1>
        <p >
          <Link href="/products">
            <a>
              <button>Back</button>
            </a>
          </Link>
        </p>
      </div>
      
      <div className={styles.profile_post}>
          <div className={styles.profile_image}>
            <img src={image} alt={name} />
          </div>
          <div className={styles.profile_detail}>
            <h2>Character Details</h2>
            <ul>
              <li>
                <strong>Name:</strong> { name }
              </li>
              <li>
                <strong>Status:</strong> { status }
              </li>
              <li>
                <strong>Gender:</strong> { gender }
              </li>
              <li>
                <strong>Species:</strong> { species }
              </li>
              <li>
                <strong>Location:</strong> { location?.name }
              </li>
              <li>
                <strong>Originally From:</strong> { origin?.name }
              </li>
            </ul>
          </div>
        </div>
        <Comments/>
    </div>
  )
}