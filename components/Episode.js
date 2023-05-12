import React from 'react'
import styles from '../styles/Episode.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

const Episode = (props) => {
  return (
    <div className={styles.conteiner__episode}>
        <FontAwesomeIcon icon={faMicrophone} size="l" />
        <p className={styles.conteiner__title}>{props.title}</p>
        <p className={styles.conteiner__text}>{props.description}</p>
    </div>
  )
}

export default Episode