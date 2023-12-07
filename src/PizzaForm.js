import React, { useState } from "react";
import * as yup from 'yup';

const PizzaForm = () => {
    // form validation using yup
    const formSchema = yup.object().shape({
        customerName: yup
            .string()
            .trim()
            .min(2, 'name must be at least 2 characters'),
        pizzaSize: yup
            .string()
            .oneOf(['small', 'medium', 'large'], 'Select a size'),
        pepperoni: yup
            .boolean(),
        veggies: yup
            .boolean(),
        ricottaCheese: yup
            .boolean(),
        pineapple: yup
            .boolean(),
        specialInstructions: yup
            .string()
            .max(20)
    });

    const [formValues, setFormValues] = useState({
        customerName: '',
        pizzaSize: '',
        pepperoni: false,
        veggies: false,
        ricottaCheese: false,
        pineapple: false,
        specialInstructions: ''
    })

    const [errors, setErrors] = useState({
        customerName: '',
        pizzaSize: '',
        pepperoni: '',
        veggies: '',
        ricottaCheese: '',
        pineapple: '',
        specialInstructions: ''
    })

    const onChange = (evt) => {
        let { name, type, value, checked } = evt.target;

        setFormValues({ ...formValues, 
            [name]: type === 'checkbox' ? checked : value
        });
        
        yup.reach(formSchema, name)
            .validate(value)
            .then(valid => {
                setErrors({
                    ...errors, [name]: ''
                })
            })
            .catch(err => {
                setErrors({
                    ...errors, [name]: err.errors[0]
                })
            })
            console.log(value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('Sending data to server', formValues)
    }

    return (
        <>
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
                    <p>{errors.customerName}</p>
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
                            onChange={onChange}
                        />
                    </label>Veggies
                    <br />
                    <label>
                        <input
                            type='checkbox'
                            name='pepperoni'
                            onChange={onChange}
                        />
                    </label>Pepperoni
                    <br />
                    <label>
                        <input
                            type='checkbox'
                            name='pineapple'
                            onChange={onChange}
                        />
                    </label>Pineapple
                    <br />
                    <label>
                        <input 
                            type='checkbox'
                            name='ricottaCheese'
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