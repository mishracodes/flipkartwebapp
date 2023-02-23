import React from 'react'
import classes from './NoImageDiv.module.css'

const NoImageDiv = (props) => {
  return (
    <div className={`${classes.noImageDiv}`} style={{height:props.height,width:props.width}}></div>
  )
}

export default NoImageDiv