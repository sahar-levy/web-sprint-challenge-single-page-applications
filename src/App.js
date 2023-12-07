import React from "react";
import { Routes, Route } from "react-router-dom";
import PizzaForm from './PizzaForm'
import Home from './Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pizza" element={<PizzaForm />} />
      </Routes>
    </>
  );
};
export default App;
