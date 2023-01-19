import React,{useState,useEffect} from "react";
import { Card, Container } from "react-bootstrap";
import Menu from "./menu";
import axios from "axios";
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container fluid>
      <Menu />
      <div className="d-flex flex-wrap mt-5 gap-5">
        {posts.map((post) => (
          <Card style={{ width: "18rem" }} key={post.id}>
            <Card.Body>
              <Card.Title>{post.id}</Card.Title>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Home;
