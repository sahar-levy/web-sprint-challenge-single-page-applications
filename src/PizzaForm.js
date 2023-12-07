import React, { useState } from "react";

const PizzaForm = () => {
    const [formValues, setFormValues] = useState({
        customerName: '',
        pizzaSize: '',
        pepperoni: false,
        veggies: false,
        ricottaCheese: false,
        pineapple: false,
        specialInstructions: ''
    })

    const onChange = (evt) => {
        let { name, type, value, checked } = evt.target;

        setFormValues({ ...formValues, 
            [name]: type === 'checkbox' ? checked : value
        });
        
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('Sending data to server', formValues)
    }

    return (
        <>
            <img src="./Assets/Pizza.jpg" alt="pizza" />
            <h2>Build Your 'Za</h2>

            <form id='pizza-form' onSubmit={handleSubmit}>
                <h3>Your Info:</h3>

                <label>Name:
                    <input 
                        id='name-input' 
                        type='text' 
                        name='customerName'
                        placeholder='your name here'
                        onChange={onChange}
                    />
                </label> 
                <br />
                <label>'Za Size
                    <select 
                        id="size-dropdown"
                        name='pizzaSize'
                        value={formValues.pizzaSize}
                        onChange={onChange}
                    >
                        <option value=''>Select Size</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                <br />
                <div className="pizza-toppings">
                    <h3>'Za Toppings</h3>
                    <label>
                        <input 
                            type='checkbox'
                            name='veggies'
                            // checked={}
                            onChange={onChange}
                        />
                    </label>Veggies
                    <br />
                    <label>
                        <input
                            type='checkbox'
                            name='pepperoni'
                            // checked={}
                            onChange={onChange}
                        />
                    </label>Pepperoni
                    <br />
                    <label>
                        <input
                            type='checkbox'
                            name='pineapple'
                            // checked={}
                            onChange={onChange}
                        />
                    </label>Pineapple
                    <br />
                    <label>
                        <input 
                            type='checkbox'
                            name='ricotta-cheese'
                            // checked={}
                            onChange={onChange}
                        />
                    </label>Ricotta Cheese
                </div>
                <br />
                <label>Special 'Za Instructions:
                    <input 
                        id="special-text"
                        type='text'
                        name='specialInstructions'
                        placeholder="help us help you ;)"
                        onChange={onChange}
                    />
                </label>
                <button id="order-button">Order the 'Za!!</button>
            </form>
        
        </>
    )
}

export default PizzaForm;