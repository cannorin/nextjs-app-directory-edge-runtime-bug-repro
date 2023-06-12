import styles from '../page.module.css'

export const runtime = 'nodejs';

export default function Home() {
  return (
    <main className={styles.main}>
      <p>
        This page runs on Node.js. Try reloading it!
      </p>
    </main>
  )
}
