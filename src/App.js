import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FirstStep from "./components/FirstStep";
import Header from "./components/Header";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import FinalStep from './components/FinalStep';


const App = () => {
  const [user, setUser] = useState({});
  
  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };

  console.log(user)

  console.log(user.sign[0].name);

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
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
