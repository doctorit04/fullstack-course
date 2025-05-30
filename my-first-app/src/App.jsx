
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import AllUser from './pages/AllUser';
import MainLayout from './components/MainLayout';
import AddUser from './pages/AddUser';
import Separated from './pages/Separated';
import Something from './pages/Something';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/alluser" element={<MainLayout><AllUser /></MainLayout>} />
        <Route path="/adduser" element={<MainLayout><AddUser /></MainLayout>} />
        <Route path="/separated" element={<MainLayout><Separated /></MainLayout>} />
        <Route path="/something" element={<MainLayout><Something /></MainLayout>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
