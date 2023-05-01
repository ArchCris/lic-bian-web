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
    console.log(clicked)
  }


  return (
    <div className={styles.navbar__conteiner}>
      <div className={clicked ? `${styles.navbar__body} ${styles.active}` : `${styles.navbar__body}`}>
        <Link onClick={()=>{setClicked(false)}} href={"/"}>Home</Link>
        <Link onClick={()=>{setClicked(false)}} href={"/About"}>About me</Link>
        <Link onClick={()=>{setClicked(false)}} href={"/Podcast"}>Podcast</Link>
        <Link onClick={()=>{setClicked(false)}} href={"/Contact"}>Contact</Link>
      </div>
      <div onClick={()=>{toggleMenu()}} className={styles.navbar__button}>ACA</div>
    </div>
  )
}

export default Navbar