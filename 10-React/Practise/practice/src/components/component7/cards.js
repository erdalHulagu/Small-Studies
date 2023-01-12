import React from 'react'
import data from "./Students.json"
import { Container,Row,Col } from 'react-bootstrap'
import StudentCard from './studentCard'
const Cards = () => {
  return (
    <Container>
        <Row>
            {
                data.map((student,index)=>(
                <Col md={3} key={index}><StudentCard data={student}/></Col>))
            }
        </Row>
    </Container>
  
  )
}
export default Cards