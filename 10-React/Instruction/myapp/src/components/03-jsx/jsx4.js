import React from 'react'

const Jsx4 = () => {

    const age = 35;


  return (
    <div>
        { age>=18 && <h1>Ehliyet alabilir</h1> }
        { age>=18 || <h1>Ehliyet alamaz</h1> }

    </div>
  )
}

export default Jsx4