import React from 'react'
import { useState } from 'react'
import classes from './Modalbox.module.css'
const Modalbox = ({message}) => {
  const [toggle,setToggle]=useState(true)
  const buttonHandler=()=>{
    setToggle(false)
  }
  
  return (
    <div className={`${classes.main} ${toggle?'':classes.mainHidden}`}>
        <div className={classes.box}>
            <p>{message}</p>
            <button className={classes.button} onClick={buttonHandler}>Got it!</button>
        </div>
    </div>
  )
}

export default Modalbox