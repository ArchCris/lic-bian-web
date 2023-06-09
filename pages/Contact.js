import React from 'react'
import styles from '../styles/Contact.module.css'
import { motion as m } from "framer-motion"
import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import papperPlane from '../public/papperPlane.png'
import Head from 'next/head'

const Contact = () => {
  return (
    <>
    <Head>
      <title>Contacto</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.2"/>
      <link rel="icon" href="/bianIcon.png" />
    </Head>
    <m.div
    initial={{y:'100%',opacity:0}}
    animate={{y:'0%',opacity:1}}
    transition={{duration:0.75,ease:"easeOut"}}
    exit={{opacity:0}}
    className={styles.contact__conteiner}>
      <div className={styles.contact__sectionA}>
          <m.div
          initial={{x:'-150%',opacity:0}}
          animate={{x:'0%',opacity:1}}
          transition={{duration:0.75,ease:"easeOut",delay:0.75}}
          className={styles.contact__imageConteiner}>
            <Image priority alt='brain logo with words' className={styles.contact__image} src={papperPlane} fill  />
          </m.div>
      </div>
      <div className={styles.contact__sectionB}>
        <ContactForm/>
        <p className={styles.contact__developer}>Developed by CrissMDev Ⓡ</p>
      </div>
    </m.div>
    </>
  )
}

export default Contact