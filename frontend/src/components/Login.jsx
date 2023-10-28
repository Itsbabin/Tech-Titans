import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [credential, setCredential] = useState({email : "",password: ""});
    const navigateTo = useNavigate();
    
    const onchange = (e)=>{
      setCredential({...credential,[e.target.name]: e.target.value})
    }
    
    const getdata = async (e)=>{
      e.preventDefault();
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/user/login',
            data: {
                email: credential.email,
                password: credential.password
              },
          })
            .then(function (response) {
              localStorage.setItem('token',response.data.token)
              alert("login success fully")
            })
            .catch((err)=>{
                console.log(err.response.data);
            })
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/user/',
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
                  },
          })
            .then(function (response) {
              localStorage.setItem('user',JSON.stringify(response.data.user))
              navigateTo('/')
            })
            .catch((err)=>{
                console.log(err.response.data);
            })
    }
  return (
    <>
    <div className="container">
        <h2>Login</h2>
        <form onSubmit={getdata}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={onchange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={onchange} required/>
            </div>
            <div className="form-group">
                <input type="submit" value="Login"/>
            </div>
        </form>
    </div>
    </>
  )
}
