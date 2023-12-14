import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { config } from '@fortawesome/fontawesome-svg-core'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin']})

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </main>
  )
}
