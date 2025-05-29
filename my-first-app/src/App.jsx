//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'

//import { Form, Button, Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Nav';
import AllButton from './components/AllButton';
import Login from './components/Login';

import Dashboard from './pages/Dashboard';
import AllUser from './components/AllUser';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>


     <h1>Hello, First React App</h1>
     <Menu />
     <hr />
     <AllButton />
     <hr />
     <Login />

      <hr />
      <AllUser />

      
    </>
  )
}

export default App
