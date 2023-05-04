import React from 'react'
import styles from '../styles/Episode.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

const Episode = (props) => {
  return (
    <div className={styles.conteiner__episode}>
        <FontAwesomeIcon icon={faMicrophone} size="xl" />
        <h3 className={styles.conteiner__title}>{props.title}</h3>
        <p className={styles.conteiner__text}>{props.description}</p>
    </div>
  )
}

export default Episode