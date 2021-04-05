import React, { useState } from 'react'
import FormSignIn from './signin'

import FormSuccess from './FormSuccess'
import './Form.css'
import Navbar from './components/Navbar';



const Form = () => {
    const [isSubmitted, setIsSubmitted ] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }
    return (
        <>
                    <Navbar />

       <div className="form-container">
           <span className="close-btn"></span>
           <div className= "form-content-left">
               <img src="img/img-2.svg" alt="spaceship" className="form-img" />
           </div>
      
           { !isSubmitted ? 
           <FormSignIn submitForm ={ submitForm} /> :
            <FormSuccess /> }
          
            
         </div>
        </>
    )
}

export default Form
