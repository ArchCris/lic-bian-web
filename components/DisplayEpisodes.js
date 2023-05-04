import React from 'react'
import styles from '../styles/DisplayEpisodes.module.css'
import Episode from './Episode'


const DisplayEpisodes = () => {
    const episodes = [{
        title:"La inmigracion",
        description:"En este episodio vamos a hablar sobre la inmigracion todo lo que ganamos y perdemos durante este proceso"
        },{
        title:"La inmigracion",
        description:"En este episodio vamos a hablar sobre la inmigracion todo lo que ganamos y perdemos durante este proceso"
        },{
        title:"La inmigracion",
        description:"En este episodio vamos a hablar sobre la inmigracion todo lo que ganamos y perdemos durante este proceso"
        },{
        title:"La inmigracion",
        description:"En este episodio vamos a hablar sobre la inmigracion todo lo que ganamos y perdemos durante este proceso"
    }]
  return (
    <div className={styles.display__conteiner}>
        {episodes.map((episode,key)=>{
            return(
                <Episode key={key} title={episode.title} description={episode.description}/>
            )
        })}
    </div>
  )
}

export default DisplayEpisodes