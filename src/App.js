import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import './App.css';
import app from './firebase.init';
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

function App() {

  const handleEmailChange = event => {
    console.log(event.target.value);
  }

  const handlePasswordChange = event => {
    console.log(event.target.value);
  }

  const handleFormSubmit = event => {
    console.log("form submitted");
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
