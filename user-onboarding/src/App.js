import logo from './logo.svg';
import './App.css';
import Form from './Form'
import React, { useState } from 'react';
import schema from './formSchema';
import * as yup from 'yup'
import axios from 'axios'

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}

export default function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [users, setUsers] = useState([])
  const [formErrors, setFormErrors ] = useState({
    username: '',
    password: '',
    email: '',
    tos: '',
  })

  const handleSubmit = () => {
axios.post('https://reqres.in/api/users', formValues)
.then(res => {
setUsers([res.data, ...users])
})
.catch(err => {

})
    .finally(() => setFormValues(initialFormValues))
  }
  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const handleChange = (name, value) => {
    validate(name,value)
    setFormValues({ ...formValues, [name]: value })

  }


  return (
    <div className="App">
      <Form
      values={formValues}
      change={handleChange}
      submit={handleSubmit}
      errors={formErrors}
      />
    </div>
  );
}


