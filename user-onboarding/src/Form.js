import React from "react";
import './App.css';



export default function Form(props) {
    const { username, tos, email, password } = props.values
    const { change, submit, errors } = props

    const onChange = (e) => {
        const { name, value, checked, type } = e.target
        const newVal = type === 'checked' ? checked : value
        change(name, newVal)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }



    return (
        <div className='App-header'>
            <h1>Form</h1>
            <p>{errors.username}</p>
            <p>{errors.email}</p>
            <p>{errors.password}</p>
            <p>{errors.tos}</p>


            <form onSubmit={onSubmit}>
                <label>
                    First Name
                    <input
                        type='text'
                        name='username'
                        value={username}
                        onChange={onChange}
                    />
                </label><br />
                <label>
                    Email
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={onChange}
                    />
                </label><br />
                <label>
                    Password
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                    />
                </label><br />
                <label>
                    Terms of Service
                    <input
                        type='checkbox'
                        name='tos'
                        checked={tos}
                        onChange={onChange}
                    />
                </label><br />
                <button
                    type='submit'
                    value='create a friend'
                >Submit</button>
            </form>
        </div>
    )
}





// 1)
// name( first and last)
// Email
// password
// ToS (checkbox)
// Submit Button

// //2 ) 
// Using Yup, set up at least two different validations along with custom error messages that will display on screen when validation fails.

// 3) Craft a POST request using axios that sends your form data to the following endpoint: https://reqres.in/api/users