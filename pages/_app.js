import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }) {

  const router = useRouter()

  return (
    <div className='conteiner'>
      <AnimatePresence initial={false}>
        <Navbar/>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
    )
}
