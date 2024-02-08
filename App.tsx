import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Purchase from "./Purchase/Purchase";
import Register from "./Main/Register";
import Login from "./Main/Login";
import Mypage from "./Main/Main";
import "./Main/Main.css"

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path={`/purchase/`} element={<Purchase />} />          
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/`} element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
