import React, { useState,useEffect } from 'react'
import Switch from "react-switch";


const Themetoggle = () => {

   const[checked,setChecked]=useState(true)

    const toggleTheme = () =>{
      
        let currentTheme = localStorage.getItem("theme");

        if(currentTheme === 'original' || currentTheme === null){
            document.documentElement.setAttribute("data-theme", "secondary")
            localStorage.setItem("theme", "secondary");
            localStorage.setItem("check", false);
            setChecked(true)
        }else{
            document.documentElement.setAttribute("data-theme", "original")
            localStorage.setItem("theme", "original");
            localStorage.setItem("check", true);
            setChecked(false)
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            const currentTheme = localStorage.getItem("theme")
            localStorage.setItem('theme','original')
            if(currentTheme===null || currentTheme==='original'){
                localStorage.setItem('theme','original')
                document.documentElement.setAttribute("data-theme", "original")
                localStorage.setItem("check", false)
                setChecked(false)
            }else{
                localStorage.setItem('theme','secondary')
                document.documentElement.setAttribute("data-theme", "secondary")
                localStorage.setItem("check", true)
                setChecked(true)
            }
        }
    }, []);

    
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