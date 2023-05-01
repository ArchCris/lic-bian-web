import React from 'react'
import styles from '../styles/Podcast.module.css'
import { motion as m } from "framer-motion"

const Podcast = () => {
  return (
    <m.div
    initial={{y:'100%'}}
    animate={{y:'0%'}}
    transition={{duration:0.75,ease:"easeOut"}}
    exit={{opacity:0}}
    className={styles.podcast__conteiner}>
        Podcast
    </m.div>
  )
}

export default Podcast