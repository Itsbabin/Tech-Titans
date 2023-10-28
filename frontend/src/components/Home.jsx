import React, { useEffect, useState } from 'react'
import Cases from './Cases'
import { Link } from "react-router-dom";

export default function Home() {
  const [note, setNote] = useState([])
  const token = localStorage.getItem('token');

  const getCases1 = async ()=>{
    const response = await fetch('http://localhost:3000/api/data/getuserdata/client',{
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
            },
    })
    const json = await response.json();
    setNote(json)
  }
  const getCases2 = async ()=>{
    const response = await fetch('http://localhost:3000/api/data/getuserdata/lawyer',{
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
            },
    })
    const json = await response.json();
    setNote(json)
  }
  
  const user = JSON.parse(localStorage.getItem('user'))
  
  useEffect(() => {
  if(token){
    (user.usertype==="0")?getCases1():getCases2()
  }
  },[])
  
 
  return (
    <>
    {!token?<div className='home'>This is home</div>:
     <div>
       <Link className="link" to="/creat">
       <h2 style={{'color':'black'}} className="file-case">File a case</h2>
       </Link>
    {note.map((e)=>{
      return <Cases key={e._id} note={e}/>
    })}
    </div>
}
    </>
  )
}
