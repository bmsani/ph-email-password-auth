import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import './App.css';
import app from './firebase.init';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = event => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  }

  const handleFormSubmit = event => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error);
    })
    console.log("form submitted", email, password);
    event.preventDefault()
  }

  return (
    <div>
      <div className="registration w-25 mx-auto">
      <h2 className='text-primary'>Please register!!</h2>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
