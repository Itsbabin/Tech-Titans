import React, { useState } from 'react'
import axios from 'axios';


export default function Singin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    const getdata = async ()=>{
          console.log(password)
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/user/login',
            data: {
                email: 'abcd@gmail.com',
                password: 'Babin@2004'
              },
          })
            .then(function (response) {
              console.log(response.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }
  return (
    <>
    <div className="container">
        <h2>Login</h2>
        <form action="process_signin.php" method="post">
            <div className="form-group">
                <label htmlFor="username">Email</label>
                <input type="email" id="username" name="username" required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} name="password" onChange={(e)=>{setPassword(e)}} required/>
            </div>
            <div className="form-group">
                <input type="submit" value="Login" onClick={getdata}/>
            </div>
        </form>
    </div>
    </>
  )
}
