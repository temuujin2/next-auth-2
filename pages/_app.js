import '../styles/globals.css'
import { useState, useEffect } from 'react'
import { supabase } from '../client'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import Footer from './Footer'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [authenticatedState, setAuthenticatedState] = useState('not-authenticated')
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      handleAuthChange(event, session)
      if (event === 'SIGNED_IN') {
        setAuthenticatedState('authenticated')
        // router.push('/profile')
      }
      if (event === 'SIGNED_OUT') {
        setAuthenticatedState('not-authenticated')
      }
    })
    checkUser()
    return () => {
      authListener.unsubscribe()
    }
  }, [])
  async function checkUser() {
    const user = await supabase.auth.user()
    if (user) {
      setAuthenticatedState('authenticated')
    }
  }
  async function handleAuthChange(event, session) {
    await fetch('/api/auth', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session }),
    })
  }
  return (
    <div className={styles.main_wrapp}>
      <nav className={styles.nav}>
        <div className={styles.nav_wrapp}>
          <b className={styles.logo}
            onClick={() => router.push("/")}>
            team<div></div>
          </b>
          <div className={styles.menu} style={{cursor:'pointer'}}>
              <span onClick={() => router.push("/")}>
                Home
              </span>
              <span onClick={() => router.push("/products")}>
                Products
              </span>
              <span onClick={() => router.push("/services")}>
                Blog
              </span>
              <span onClick={() => router.push("/contact")}>
                Contact
              </span>
            {
              authenticatedState === 'not-authenticated' && (
                <span onClick={() => router.push("/sign-in")}>
                Sign in
              </span>
              )
            }
              <span onClick={() => router.push("/profile")}>
                Profile
              </span>
            </div>
          </div>
      </nav>
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
