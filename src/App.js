import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import FinalStep from './components/FinalStep';
import Welcome from './components/Welcome';
import Login from './components/Login';

const App = () => {
  const [user, setUser] = useState({});

  
  
  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };
  
    return (
    <BrowserRouter>
      <div className="container">
        <Routes>
        <Route
            path="/"
            element={<Welcome/>}
          />
          <Route
            path="/login"
            element={<Login/>}
          />
          <Route
            path="/first"
            element={<FirstStep user={user} updateUser={updateUser} />}
          />
          <Route
            path="/second"
            element={<SecondStep user={user} updateUser={updateUser} />}
          />
          <Route
            path="/third"
            element={<ThirdStep user={user} updateUser={updateUser} />}
          />
          <Route
            path="/final"
            element={<FinalStep user={user} updateUser={updateUser} />}
          />
          <Route render={() => <Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
