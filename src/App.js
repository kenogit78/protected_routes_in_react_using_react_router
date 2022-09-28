import * as React from "react";
import { Link, Routes, Route } from "react-router-dom";
import './App.css'
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import SignIn from "./components/Signin";

const Home = () => <h1>Home Page (Public)</h1>;
const About = () => <h1>About Page (Public)</h1>;


function Nav() {
  return (
    <nav>
      <ul style={{display: 'flex', alignItems:'center', justifyContent: "center"}}>
        <li style={{listStyle: 'none', margin: '15px'}}>
          <Link to="/">Home</Link>
        </li>
        <li style={{listStyle: 'none', margin: '15px'}}>
          <Link to="/about">About</Link>
        </li>
        <li style={{listStyle: 'none', margin: '15px'}}>
          <Link to="/signin">Sign In</Link>
        </li>
        <li style={{listStyle: 'none', margin: '15px'}}>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li style={{listStyle: 'none', margin: '15px'}}>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default function App() {
  return (
    <div className="App">
      <Nav />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        
        <Route path="/signin" element={<SignIn />} />
        
      </Routes>
    </div>
  );
}
