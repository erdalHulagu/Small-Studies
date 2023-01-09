import React from 'react'
import students from "./Students.json"
const Practice3 = () => {
  return (
    <div>
        <ul>
            {
               students.filter((student)=>student.yas<25).map((student,index)=>(<li key={index}>{student.isim}</li>))
            }
        </ul>
        <select name="" id="">
            {
                students.reduce((values,student)=>{
                if(!values.includes(student.kurs))
                values.push(student.kurs);
                return values;
                },[]).map((item,index)=>(<option key={index}>{item}</option>))
            }
        </select>
    </div>
  )
}

export default Practice3