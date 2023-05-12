import React from 'react'
import styles from '../styles/DisplayEpisodes.module.css'
import Episode from './Episode'


const DisplayEpisodes = () => {
    const episodes = [{
        title:"¿Por qué viajar?",
        description:"Les comparto mi historia desde la primera vez que pensé en la posibilidad de viajar, como fue migrar en pandemia y lo que aprendí en este año y medio de viaje."
        },{
        title:"Duelo migratorio",
        description:"En este episodio vamos a des- romantizar el proceso migratorio y vamos a poner sobre la mesa los procesos emocionales y psicológicos a los cuales nos podemos enfrentar. "
        },{
        title:"Irse, llegar y reencuentro",
        description:"Son muchos los cambios y las expectativas a las que nos enfrentamos cuando migramos (y volvemos). ¿Podemos hablar de un Jay lag psicológico? "
        },{
        title:"Personas",
        description:"Episodio dedicado a nuestras personas fundamentales, a esas conexiones que nos ayudan a la distancia o en persona a enfrentar nuestros problemas y disfrutar de los buenos momentos. ¿Qué haríamos sin ellos?"
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