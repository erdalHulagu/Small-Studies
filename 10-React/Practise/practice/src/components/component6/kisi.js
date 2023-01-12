import React from 'react'

const Kisi = ({student}) => {
    const {isim,yas,kurs,img} = student;
  return (
    <div>
       <h3>{isim}</h3>
       <img src={img} alt="" width="150" height="150"/>
       <h4>{yas}</h4>
       <h4>{kurs}</h4>
    </div>
  )
}

export default Kisi