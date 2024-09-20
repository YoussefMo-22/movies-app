import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')
    const [errorsMessage, setErrorsMessage] = useState([])
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
        rePassword: "",
    });
    function getData(e){
        let data = {...formData};
        data[e.target.name] = e.target.value;
        setFormData(data);
    }
    function handleSubmit(e){
        e.preventDefault();
        let validate = validation();
        if(validate?.error){
            setErrorsMessage(validate?.error?.details);
            console.log(validate?.error?.details);
        }else{
            axios.post('http://hawas.runasp.net/api/v1/Register',formData)
        .then((response)=>{
            console.log(response);
            navigate('/login');
        }).catch((err)=>{
            console.log(err.response.data);
            setErrorMessage(err.response.data)
        });
        }
    }
    function validation(){
        let schema = Joi.object({
            userName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
        email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        rePassword: Joi.ref('password'),
        });
        return schema.validate(formData,{abortEarly:false});

    }
    return ( 
    <div className="w-75 mx-auto my-5">
        <h1 className="text-center">Register</h1>
        {errorMessage.length ? <h1 className="alert alert-danger h6">{errorMessage}</h1>:<></>}
        {errorsMessage.length>0 ?
            errorsMessage.map((error,i)=>(
                <h1 key={i} className="alert alert-danger h6">{error.message}</h1>
            )):<></>
        }
        <form onSubmit={handleSubmit}>
            <label className="form-label" htmlFor="username">Username:</label>
            <input type="text" className="form-control mb-3" onChange={getData} name="userName"/>
            <label className="form-label" htmlFor="email">Email:</label>
            <input type="email" className="form-control mb-3" onChange={getData} name="email"/>
            <label className="form-label" htmlFor="password">Password:</label>
            <input type="password" className="form-control mb-3" onChange={getData} name="password"/>
            <label className="form-label" htmlFor="password">Confirm Password:</label>
            <input type="password" className="form-control mb-3" onChange={getData} name="rePassword"/>
            <button type="submit" className="btn btn-outline-info">Register</button>
        </form>
    </div> );
}