import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

const Comments = () => {
    const [comments, setComments] = useState([]);

    const loadData = async () => { 
        try{
            const resp = await axios.get("https://jsonplaceholder.typicode.com/comments");
            setComments(resp.data);
        }
        catch(e){
            console.log(e);
        }
     }

     useEffect(() => {
        loadData();
     }, [])
     


  return (
    <Container className="mt-5">
        <Row className="g-5">
        {comments.map(item=> <Col md={4} lg={3} key={item.id}>
            <Card className="h-100" data-testid={`comment-card-${item.id}`}>
                <CardBody data-testid={`comment-body-${item.id}`}>
                    {item.body}
                </CardBody>
            </Card>
        </Col>)}

        </Row>
    </Container>
  )
}

export default Comments