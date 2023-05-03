import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { motion as m } from "framer-motion"
import Image from 'next/image'
import heroImg from '../public/brainPng.png'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bianIcon.png" />
      </Head>
      <m.main
        initial={{y:'100%'}}
        animate={{y:'0%'}}
        transition={{duration:0.75,ease:"easeOut"}}
        exit={{opacity:0}}
        className={styles.home__conteiner}
      >
        <div className={styles.home__sectionTop}>
          <div className={styles.home__sectionTop_A}>
          section bLeft
          </div>
          <div className={styles.home__sectionTop_B}>
          section bRigth
          </div>
        </div>
        <div className={styles.home__sectionBottom}>
          section bottom
        </div>
      </m.main>    
    </>
  )
}
/*
<div className={styles.home__sectionA}>
          <div className={styles.home__imageConteiner}>
          <Image alt='brain logo with words' className={styles.home__image} src={heroImg} fill  />
          </div>
        </div>
        <div className={styles.home__sectionB}>
          <h3 className={styles.home__phrase}>&quot;Cuando haces lo que mas temes, puedes hacer cualquier cosa&quot;</h3>
          <p className={styles.home__phrase_author}>Stephen Richards.</p>
        </div>





*/