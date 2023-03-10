import React, { useState, useEffect } from "react";
import "./bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Header, Cards } from "./components";
import { HomePage, Cart, BookDetails, LogIn, SignUp } from "./Pages";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./lib/firebase";
import { data } from "./data";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      const productsData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(productsData);
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <Header />
      {/* <Cards /> */}
      <Routes>
        <Route path="/" element={<HomePage products={data} />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/product/:id" element={<BookDetails />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
