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
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <m.div
    initial={{y:'100%'}}
    animate={{y:'0%'}}
    transition={{duration:0.75,ease:"easeOut"}}
    exit={{opacity:0}}
    className={styles.contact__conteiner}>
      <div className={styles.contact__sectionA}>
          <div className={styles.contact__imageConteiner}>
            <Image alt='brain logo with words' className={styles.contact__image} src={papperPlane} fill  />
          </div>
      </div>
      <div className={styles.contact__sectionB}>
        <ContactForm/>
      </div>
    </m.div>
    </>
  )
}

export default Contact