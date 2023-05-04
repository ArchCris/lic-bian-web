import React from 'react'
import styles from '../styles/Podcast.module.css'
import { motion as m } from "framer-motion"
import Head from 'next/head'
import Image from 'next/image'
import spotify from '../public/spotify.png'
import DisplayEpisodes from '@/components/DisplayEpisodes'

const Podcast = () => {
  return (
    <>
      <Head>
          <title>Podcast</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.2"/>
          <link rel="icon" href="/bianIcon.png" />
        </Head>
      <m.div
      initial={{y:'100%',opacity:0}}
      animate={{y:'0%',opacity:1}}
      transition={{duration:0.75,ease:"easeOut"}}
      exit={{opacity:0}}
      className={styles.podcast__conteiner}>
        <div className={styles.podcast__sectionA}>
          <div className={styles.podcast__sectionA__conteiner} >
            <Image alt='woman siluette' src={spotify} className={styles.podcast__sectionA__img} fill></Image>
          </div>
        </div>
         <div className={styles.podcast__sectionB}>
          <DisplayEpisodes/>
         </div>
      </m.div>
    </>
  )
}

export default Podcast