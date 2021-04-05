 const express = require('express')
const SignUpModels = require('../models/SignUpModels')
 const router = express.Router()
 const signUpTemplateCopy = require('../models/SignUpModels')

 //password handler
 //const bcrypt = require('bcrypt');
 
//signup
 router.post('/signup', (request, response) => {
     signUpTemplateCopy.countDocuments({ email: request.body.email }, (err, cnt) => {        
    if (err) {
        console.log(err);
    }
    else {
        if (cnt) {                        
            response.json({ "StatusMessage": "Email Already Exist." });
        }
        else {
        const signedUpUser = new signUpTemplateCopy({
        username:request.body.username,
        email:request.body.email,
        password:request.body.password,
        password2:request.body.password2
    })
    console.log("signedUpUser")
    signedUpUser.save()
    .then(data =>{
        response.json({"StatusMessage": "Signed Up Successfully" , flag:true})
        
    })
    .catch(error =>{
        response.json(error)
    })
            
        }
    }
})
 })

 //signin
  /* router.post('/login', (request, response) => {
    signUpTemplateCopy.countDocuments({ email: request.body.email }, (err, cnt) => 
    {        
        if (err) {
            console.log(err);
                 }
        else {
                SignUpModels.find({request.body.email})
                .then(data => {
                        if(data) {
                                const hashedPassword = data[0].password
                                bcrypt.compare(password, hashedPassword).then(result => 
                                    {
                                    if (result)
                                    {
                                        response.json({
                                            status: "SUCCESS",
                                            message: "Sign in sucessfull1",
                                            data: data
                                                    })
                                    } 
                                    else
                                    {
                                        response.json({
                                            status: "FAILED",
                                            message: "Data doesn't exist!",
                                                    })
                                    }

                                    })
                                .catch(error =>{
                                    response.json(error) })
                                }
                            })
             }

    })
})    */

router.post('/signin', (req, res, next) => {
    
    console.log("/signin : "+req.body.email +" " +req.body.password)
    
  // console.log(req.body.admin_users.email + " "+req.body.admin_users.password)
    //{  $and: [{ email: { $eq: req.body.admin_users.email } }, { password: { $eq: req.body.admin_users.password } }] }
    var query = signUpTemplateCopy.find({  $and: [{ email:  req.body.email  }, { password:  req.body.password }] } );

    query.exec((err, someValue) => {    
        console.log(someValue);
        if (err) {
            next(err);
        }
        else {
            if (someValue.length) {
                console.log(someValue.length)
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({ "StatusMessage": "Login Successful"});
               // ses=req.body.admin_users.status;
            }
            else {
                console.log("else "+someValue.length)
                res.status(401).send({ error: 'Incorrect Credentials' });
            }
        }
    })
});


 module.exports = router 