import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './Form.css';

const useForm = (callback, validate) => {
                const [values, setValues] = useState({
                username: '',
                email: '',
                password: '',
                password2: ''
                });
                const [errors, setErrors] = useState({});
                const [isSubmitting, setIsSubmitting] = useState(false);
            
                const handleChange = e => {
                const { name, value } = e.target;
                setValues({
                    ...values,
                    [name]: value
                });
    };

    

    const handleSubmit = e => {
                    e.preventDefault();
                
                    // alert("submitting")
                
                    const registered = {
                       
                        email: values.username,                   
                        password: values.password, 
                      
                    
                    }
                    
                //  alert(registered.username)
                    axios.post('http://localhost:4000/app/signin', registered)
                    .then(response =>  {alert(response.data.StatusMessage)
                      window.location.href = "/loginhome"
                    })
                
                    setErrors(validate(values));
                    setIsSubmitting(true);
                    };
                
                    useEffect(
                    () => {
                        if (Object.keys(errors).length === 0 && isSubmitting) {
                        
                        callback();
                        }
                    },
                    [errors]
                    );
                
                   return { handleChange, handleSubmit, values, errors };
  };
  

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validateInfo
  );

  function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }
  

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Login In
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
        <button className='form-input-btn' type='submit'>
            Login
        </button>
        <span className='form-input-login'>
      { /* eslint-disable-next-line */ }
          Don't have an account? SignUp <a href="/signup">here</a>  
        </span>
      </form>
    </div>
  );
};

export default FormSignup;