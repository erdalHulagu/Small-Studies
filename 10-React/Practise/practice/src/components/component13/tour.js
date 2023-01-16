import React,{useState} from 'react'
import { Card } from 'react-bootstrap';

const Tour = ({id,name,image,price,info,removeTour}) => {
    const [readMore, setReadMore] = useState(false);
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{price}</Card.Title>
        <Card.Text>
            {readMore ? info : `${info.substring(0,150)}...`}
        </Card.Text>
        <button style={{border:"none",color:"blue",textDecoration:"underline",marginRight:"1rem"}} 
        onClick={()=>setReadMore(prev=>!prev)}>{readMore ? "Show Less" : "Read More"}</button>
        <button onClick={()=>removeTour(id)}>Not Interested</button>
      </Card.Body>
    </Card>
  )
}

export default Tour