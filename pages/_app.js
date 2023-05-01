import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {

  const router = useRouter()

  return (
    <div className='conteiner'>
      <AnimatePresence initial={false}>
        <Navbar {...pageProps}/>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
    )
}
