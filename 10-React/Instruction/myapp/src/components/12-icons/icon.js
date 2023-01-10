import React from 'react'
import {FcHome} from "react-icons/fc";
import {BiAlbum, BiHomeSmile} from "react-icons/bi";
import {FiMic, FiCheck, FiAlertCircle } from "react-icons/fi";

const Icon = () => {
  return (
    <div>
        <FcHome style={{fontSize: "3rem", color:"red"}}/>
        <BiHomeSmile style={{fontSize: "3rem", color:"red"}}/>
        <FiMic/>
        <FiCheck/>
        <FiAlertCircle/>
       
    </div>
  )
}

export default Icon