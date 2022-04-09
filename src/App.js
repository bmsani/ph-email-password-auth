import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import './App.css';
import app from './firebase.init';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [registered, setRegistered] = useState(false)

  const handleEmailChange = event => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  }

  const  handleRegisteredChange = event => {
    setRegistered(event.target.checked);
  }
  
  const handleFormSubmit = event => {
    event.preventDefault()
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return
    }
    if(!/(?=.*[a-zA-Z >>!#$%&? "<<])[a-zA-Z0-9 >>!#$%&?<< ]/.test(password)){
      setError('password should contain 1 speacial carecter ')
      return;
    }
    setValidated(true);
    setError('');

    if(registered){
      signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log(error);
        setError(error.massage)
      })
    }
    else{
      createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log(result.user);
      setEmail('');
      setPassword('');
      verifyEmail();
    })
    .catch(error => {
      console.log(error);
      setError(error.massage)
    })
    }
    event.preventDefault();
    console.log("form submitted", email, password);

  }
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then(() => {
      console.log('confirm your email');
    })
  }

  const handleForgetPassword = () => {
    sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log('password reset email sent');
    })
  }

  return (
    <div>
      <div className="registration w-25 mx-auto">
      <h2 className='text-primary'>Please {registered ? 'Login' : 'Register'}</h2>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required/>
            <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required/>
            <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
          </Form.Group>
          <p className="text-danger">{error}</p>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          
            <Form.Check onChange={handleRegisteredChange} type="checkbox" label="Already Registered?" />
          </Form.Group>
          {registered ? <Button onClick={handleForgetPassword} variant='link' className=''>Forget password</Button> :''}
          <br />
          <Button variant="primary" type="submit">
          {registered ? 'Login' : 'Register'}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
