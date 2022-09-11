import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/signup" element = {<SignUp />}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path ='/' element = {<Navigate to= "/signup"/>}/>
      </Routes>
      
    </div>
  );
};

export default App;