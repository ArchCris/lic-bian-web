import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useState } from 'react'



const Navbar = () => {

  const[clicked,setClicked]=useState(false)

  const toggleMenu = () =>{
    if(clicked===true){
      setClicked(false)
    }else{
      setClicked(true)
    }
  }


  return (
    <div className={styles.navbar__conteiner}>
      <div className={clicked ? `${styles.navbar__body} ${styles.active}` : `${styles.navbar__body}`}>
        <Link onClick={()=>{setClicked(false)}} href={"/"}>Home</Link>
        <Link onClick={()=>{setClicked(false)}} href={"/About"}>Sobre mi</Link>
        <Link onClick={()=>{setClicked(false)}} href={"/Podcast"}>Podcast</Link>
        <Link onClick={()=>{setClicked(false)}} href={"/Contact"}>Contacto</Link>
      </div>
      <div onClick={()=>{toggleMenu()}} className={styles.navbar__button}>
        <div className={styles.navbar__button_cont}>
          <div className={clicked ? `${styles.navbar__bar1} ${styles.trans1}` : `${styles.navbar__bar1}`} ></div>
          <div className={clicked ? `${styles.navbar__bar2} ${styles.trans2}` : `${styles.navbar__bar2}`} ></div>
          <div className={clicked ? `${styles.navbar__bar3} ${styles.trans3}` : `${styles.navbar__bar3}`} ></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar