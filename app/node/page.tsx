import type { Metadata } from "next";
import { Suspense } from "react";
import styles from '../page.module.css'
import type { ReqresResponse, User } from '../reqres';

export const runtime = 'nodejs';

export const metadata: Metadata = {
  title: 'Node.js',
  alternates: {
    canonical: "/node",
  },
};

async function UserData() {
  const result: ReqresResponse<User> = await fetch(
    'https://reqres.in/api/users/2', 
    { next: { revalidate: 10 } }
  ).then((resp) => resp.json());

  return (
    <p>
      Hello, {result.data.first_name} {result.data.last_name}! &nbsp;
      (<a href='https://reqres.in/api/users/2' target='_blank'>https://reqres.in/api/users/2</a>)
    </p>
  );
}

export default async function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<p>Loading...</p>}>
        <UserData />
      </Suspense>
      <p>
        This page runs on Node.js. Try reloading it!
      </p>
    </main>
  )
}
