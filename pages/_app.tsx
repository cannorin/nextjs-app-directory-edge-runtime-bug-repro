import '../app/globals.css'
import type { AppProps } from "next/app";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily}, sans serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}