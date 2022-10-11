/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from '../styles/Home.module.css'


const defaultEndpoint = `https://rickandmortyapi.com/api/character/`;

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

export default function Products({data}) {
  const { info, results: defaultResults = [] } = data;
  const [results, updateResults] = useState(defaultResults);
  const [page, updatePage] = useState({
    ...info,
    current: defaultEndpoint
  });
  const { current } = page;

  useEffect(() => {
    if ( current === defaultEndpoint ) return;
  
    async function request() {
      const res = await fetch(current)
      const nextData = await res.json();
  
      updatePage({
        current,
        ...nextData.info
      });
  
      if ( !nextData.info?.prev ) {
        updateResults(nextData.results);
        return;
      }
  
      updateResults(prev => {
        return [
          ...prev,
          ...nextData.results
        ]
      });
    }
  
    request();
  }, [current]);

  function handleLoadMore() {
    updatePage(prev => {
      return {
        ...prev,
        current: page?.next
      }
    });
  }

  function handleOnSubmitSearch(e) {
    e.preventDefault();
  
    const { currentTarget = {} } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find(field => field.name === 'query');
  
    const value = fieldQuery.value || '';
    const endpoint = `https://rickandmortyapi.com/api/character/?name=${value}`;
  
    updatePage({
      current: endpoint
    });
  }

  return (
    <div className={styles.post_wrapp} >
      <div className={styles.post_header}>
        <div>
          <h2>Services</h2>
          <p>Our latest updates and blogs about managing your team</p>
        </div>
        <form className={styles.search_product} onSubmit={handleOnSubmitSearch}>
          <input name="query" type="search" />
          <button>Search</button>
        </form>
      </div>
      <div className={styles.grid_post}>
          {results.map(result => {
            const { id, name, image, created, gender } = result;
            return (
            <li key={id} className={styles.post_card}>
              <Link href="/character/[id]" as={`/character/${id}`}>
                <a>
                  <div className={styles.img_wrapp}>
                    <img className={styles.post_img} src={image} alt={`${name} Thumbnail`} />
                  </div>
                  <div className={styles.post_text_wrapp}>
                    <h3>{ name }</h3>
                    <p>There are times when our work impacts us 
                      deeply — sometimes in ways we neither 
                      acknowledge nor understand</p>
                  </div>
                  <div className={styles.post_bottom}>
                    <img className={styles.post_small_img} src={image} alt={`${name} Thumbnail`} />
                    <p>{gender}</p>
                    <p>|</p>
                    <p>{created}</p>
                  </div>
                </a>
              </Link>
            </li>
             )
          })}
      </div>
      <p>
        <button style={{padding:'10px 50px', marginTop:'30px'}} onClick={handleLoadMore}>Next &nbsp;❯</button>
      </p>

    </div>
  )
}