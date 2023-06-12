import type { Metadata } from "next";
import styles from '../page.module.css'
import type { ReqresResponse, User } from '../reqres';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'The Edge Runtime',
  alternates: {
    canonical: "/edge",
  },
};

export default async function Home() {
  const result: ReqresResponse<User> = await fetch(
    'https://reqres.in/api/users/2', 
    { next: { revalidate: 10 } }
  ).then((resp) => resp.json());

  return (
    <main className={styles.main}>
      <p>
        Hello, {result.data.first_name} {result.data.last_name}! &nbsp;
        (<a href='https://reqres.in/api/users/2' target='_blank'>https://reqres.in/api/users/2</a>)
      </p>
      <p>
        This page runs on Node.js. Try reloading it!
      </p>
    </main>
  )
}
