import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()

    const pizzaForm = () => {
        navigate('/pizza')
    }
    return (
      <>
        <h1>Lambda Eats</h1>
        <h2>Your Favorite Food, Delivered While Coding</h2>
        <button onClick={pizzaForm} id='order-pizza'>Build Your 'Za</button>
      </>
    );
  };
  export default Home;