import React, { useEffect, useState } from 'react'
import Cases from './Cases'

export default function Home() {
   const [note, setNote] = useState([])
  const token = localStorage.getItem('token');

  const getCases = async ()=>{
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
  
  useEffect(() => {
    if(token){
      getCases();
    }
  },[])
  
 
  return (
    <>
    {!token?<div className='home'>This is home</div>:note.map((e)=>{
       return <Cases key={e._id} note={e}/>
    })}
    
    </>
  )
}
