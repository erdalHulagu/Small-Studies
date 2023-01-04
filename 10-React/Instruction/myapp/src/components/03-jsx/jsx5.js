import React from 'react'

const Jsx5 = () => {
    const names = ["Ali", "Veli", "Ayşe", "Fatma"];

  return (
    <div>
        <ul>
            { names.map( (x,i) => <li key={i}>{x}</li> ) }
            
        </ul>


    </div>
  )
}

export default Jsx5