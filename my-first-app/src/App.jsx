//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'

//import { Form, Button, Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Navigation from './components/Nav';
import AllButton from './components/AllButton';
import Login from './components/Login';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hello, First React App</h1>
     <Menu />
     <hr />
     <AllButton />
     <hr />
     <Login />
    </>
  )
}

export default App
