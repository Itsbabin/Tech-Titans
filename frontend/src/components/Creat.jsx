import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Creat() {
    const [credential, setCredential] = useState({name : "",lawyer : "",type: "",address: "",description: ""});
    const navigateTo = useNavigate();
    const onchange = (e)=>{
        setCredential({...credential,[e.target.name]: e.target.value})
      }
      const token = localStorage.getItem('token');
      const submit = async (e)=>{
        e.preventDefault();
      await axios({
              method: 'post',
              url: 'http://localhost:3000/api/data/creatuserdata',
              headers: {
                'Content-Type': 'application/json',
                'auth-token': token
                    },
              data: {
                  type: credential.type,
                  lawyer: credential.lawyer,
                  address: credential.address,
                  name: credential.name,
                  description: credential.description
                },
            })
              .then(function (response) {
                alert(response)
                navigateTo('/')
              })
              .catch((err)=>{
                console.log(err.response.data);
            })
      }
    return (
    <>
       <h2>File a case</h2>
    <form onSubmit={submit}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" minLength={3}  onChange={onchange} required/>
        </div>
        <div className="form-group">
            <label htmlFor="usertype">Case type</label>
            <input type="radio" id="Lawyer" name="type" value="civil" onChange={onchange}/>
             <label htmlFor="Lawyer">Civil</label><br/>
            <input type="radio" id="Client" name="type" value="criminal" onChange={onchange}/>
             <label htmlFor="Client">Criminal</label><br/>
        </div>
        <div className="form-group">
            <label htmlFor="lawyer">Lawyer</label>
            <input type="email" id="name" name="lawyer" minLength={3}  onChange={onchange} required/>
        </div>
        <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address"  onChange={onchange} required/>
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="textbox" id="description" name="description" minLength={5}  onChange={onchange} required/>
        </div>
        <div className="form-group">
            <input type="submit" value="Submit Case to lawyer"/>
        </div>
    </form>
    </>
  )
}
