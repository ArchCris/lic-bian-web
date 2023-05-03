import React from 'react'
import styles from '../styles/About.module.css'
import { motion as m } from "framer-motion"
import Head from 'next/head'
import Image from 'next/image'
import facePlaceholder from '../public/facePlaceholder.png'

const About = () => {
  return (
    <>
      <Head>
        <title>Sobre mi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.2"/>
        <link rel="icon" href="/bianIcon.png" />
      </Head>
      <m.div
      initial={{y:'100%'}}
      animate={{y:'0%'}}
      transition={{duration:0.75,ease:"easeOut"}}
      exit={{opacity:0}}
      className={styles.about__conteiner}>
        <div className={styles.about__sectionA}>
          <div className={styles.about__sectionA__conteiner}>
            <Image priority alt='woman placeholder' fill src={facePlaceholder} className={styles.about__sectionA__img}></Image>
          </div>
        </div>
        <div className={styles.about__sectionB}>
          <p className={styles.about__sectionB_text}>
            What is Lorem Ipsum?<br/><br/>
            &nbsp;&nbsp;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </m.div>
    </>
  )
}

export default About