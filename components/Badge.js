import React from 'react'
import styles from '../styles/Badge.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Badge = (props) => {
  return (
    <div className={styles.badge__conteiner}>
        <div className={styles.badge__logoCircle}>
            <FontAwesomeIcon icon={props.icon} size="2xl" />
        </div>
        <p className={styles.badge__title}>{props.title}</p>
        <p className={styles.badge__description}>{props.description}</p>
    </div>
  )
}

export default Badge