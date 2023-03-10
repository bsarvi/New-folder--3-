import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Header, Cards } from "./components";
import { HomePage, Cart, BookDetails, LogIn, SignUp } from "./Pages";

const App = () => {
  return (
    <>
      <Header />
      {/* <Cards /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/bookdetails" element={<BookDetails />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
