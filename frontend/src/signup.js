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
                        username: values.username,
                        email: values.email,                   
                        password: values.password, 
                        password2: values.password2 ,
                    
                    }
                    
                //  alert(registered.username)
                    axios.post('http://localhost:4000/app/signup', registered)
                    .then(response =>  {alert(response.data.StatusMessage)
                    
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
          Get started with us today! Create your account by filling out the
          information below.
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
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
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
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
      { /* eslint-disable-next-line */ }
          Already have an account? Login <a href="/login">here</a>  
        </span>
      </form>
    </div>
  );
};

export default FormSignup;