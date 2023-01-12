import React from 'react'
import Kisi from './kisi'
import students from "./Students.json"
import "./style.scss"
const Kisiler = () => {
  return (
    <div className="st-container">
         {
            students.map((student,index)=>(<Kisi key={index} student={student}/> ))
        }
    </div>
  )
}

export default Kisiler