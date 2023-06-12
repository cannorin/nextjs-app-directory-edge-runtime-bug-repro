import type { Metadata } from "next";
import { Suspense } from "react";
import styles from '../page.module.css'
import type { ReqresResponse, User } from '../reqres';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'The Edge Runtime',
  alternates: {
    canonical: "/edge",
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
        This page runs on the Edge runtime. Try reloading it!
      </p>
    </main>
  )
}

