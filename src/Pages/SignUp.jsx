import { Form, Row, Col, Container,Button } from "react-bootstrap/";
import React,{ useState } from "react";
import {auth} from '../lib/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../context/AuthContext";



const SignUp = () => {
  const { signup } = useAuth();
  const [email,setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await signup(email, password);
      navigate('/')
    } catch (error) {
      setError("Failed to create an account: " + error.message);
    }
  }

  return (
    <Container style={{ width: "25rem", marginTop: "5rem" }}>
      <h1>Register</h1><br />
      <Form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Test@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="********" value={password}  onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" size="lg" active type="submit">
        Submit
      </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
