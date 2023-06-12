import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <p>
        This is a minimal reproduction of a Next.js bug that
        any page with
        </p>
        <code className={[styles.code, styles.center].join(' ')}>export const runtime = 'edge';</code>
        <p>
        will return 404 if one reloads it or access it directly by URL.
        </p>
        <p>
        Note that this issue will not happen when in development
        and will happen once it is deployed to Vercel.
        </p>
      </div>

      <div className={styles.grid}>
        <Link href='/node' className={styles.card}>
          <h2>
            Node.js <span>-&gt;</span>
          </h2>
          <p>This page is rendered by Node.js.</p>
        </Link>

        <Link href='/edge' className={styles.card}>
          <h2>
            The Edge Runtime <span>-&gt;</span>
          </h2>
          <p>This page is rendered by the Edge runtime.</p>
        </Link>
      </div>
    </main>
  )
}
