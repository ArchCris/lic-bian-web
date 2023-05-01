import React from 'react'
import styles from '../styles/About.module.css'
import { motion as m } from "framer-motion"

const About = () => {
  return (
    <m.div
    initial={{y:'100%'}}
    animate={{y:'0%'}}
    transition={{duration:0.75,ease:"easeOut"}}
    exit={{opacity:0}}
    className={styles.about__conteiner}>
        About
    </m.div>
  )
}

export default About