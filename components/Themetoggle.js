import React, { useState } from 'react'
import Switch from "react-switch";


const Themetoggle = () => {

    const[checked,setChecked]=useState(false)

    const toggleTheme = () =>{
        var currentTheme = document.documentElement.getAttribute("data-theme")
        if(currentTheme === null || currentTheme === "original"){
            document.documentElement.setAttribute("data-theme", "secondary")
            setChecked(true)
        }else{
            document.documentElement.setAttribute("data-theme", "original")
            setChecked(false)
        }
    }

  return (
    <Switch onChange={()=>{toggleTheme()}}
            checked={checked} 
            checkedIcon={false}
            uncheckedIcon={false}
            offColor={'#000'} 
            onColor={'#000'}/>
  )
}

export default Themetoggle