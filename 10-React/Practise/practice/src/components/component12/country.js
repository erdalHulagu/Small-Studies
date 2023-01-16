import React from 'react'
import {Button} from "react-bootstrap"
const Country = ({flags,name,population,capital,ccn3,index,removeById}) => {
  return (
    <tr>
        <td>{index+1}</td>
        <td><img src={flags.png} className="img-fluid" width="100" /></td>
        <td>{name.common}</td>
        <td>{population}</td>
        <td>{capital}</td>
        <td><Button variant="danger" onClick={()=>removeById(ccn3)}>Sil</Button></td>
    </tr>
  )
}

export default Country