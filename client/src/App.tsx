import './App.css'
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Pages/Home/Home.tsx';
import Login from './Pages/Login/Login.tsx';
import Register from './Pages/Register/Register.tsx';
import Dashboard from './Pages/Dashboard/Dashboard.tsx';

function App() {
  return (
    <Router> 
      <Routes> 
        <Route path = "/" element={<Home/>} />
        <Route path = "/dashboard" element={<Dashboard/>} />
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/register" element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App
