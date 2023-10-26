import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Singin() {
    const [credential, setCredential] = useState({name : "",usertype : "",email : "",password: ""});
    const onchange = (e)=>{
        setCredential({...credential,[e.target.name]: e.target.value})
      }
      const submit = async (e)=>{
        e.preventDefault();
      await axios({
              method: 'post',
              url: 'http://localhost:3000/api/user/singin',
              data: {
                  email: credential.email,
                  password: credential.password,
                  usertype: credential.usertype,
                  name: credential.name
                },
            })
              .then(function (response) {
                localStorage.setItem('token',response.data.token)
                navigateTo('/')
              })
              .catch((err)=>{
                console.log(err.response.data);
            })
      }
  return (
    <div className="container">
    <h2>Singin</h2>
    <form onSubmit={submit}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" minLength={3}  onChange={onchange} required/>
        </div>
        <div className="form-group">
            <label htmlFor="usertype">User type</label>
            <input type="radio" id="Lawyer" name="usertype" value="1" onChange={onchange}/>
             <label htmlFor="Lawyer">Lawyer</label><br/>
            <input type="radio" id="Client" name="usertype" value="0" onChange={onchange}/>
             <label htmlFor="Client">Client</label><br/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email"  onChange={onchange} required/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" minLength={5}  onChange={onchange} required/>
        </div>
        <div className="form-group">
            <input type="submit" value="Login"/>
        </div>
    </form>
</div>
  )
}
