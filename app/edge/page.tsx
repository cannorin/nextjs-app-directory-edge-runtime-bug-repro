import styles from '../page.module.css'

export const runtime = 'edge';

export default function Home() {
  return (
    <main className={styles.main}>
      <p>
        This page runs on the Edge runtime. Try reloading it!
      </p>
    </main>
  )
}
