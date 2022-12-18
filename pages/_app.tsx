import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Teko } from '@next/font/google'

const teko = Teko({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={teko.className}>
    <Component {...pageProps} />
  </main>
}
