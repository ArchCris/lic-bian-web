import React from 'react'
import styles from '../styles/Contact.module.css'
import { motion as m } from "framer-motion"

const Contact = () => {
  return (
    <m.div
    initial={{y:'100%'}}
    animate={{y:'0%'}}
    transition={{duration:0.75,ease:"easeOut"}}
    exit={{opacity:0}}
    className={styles.contact__conteiner}>
      <div className={styles.contact__sectionA}>
      ContactA
      </div>
      <div className={styles.contact__sectionB}>
      ContactB
      </div>
    </m.div>
  )
}

export default Contact