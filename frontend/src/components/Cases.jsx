import React from "react";

export default function Cases(props) {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <>
      <div className="case-container">
        <div>{props.note ? props.note.description : "loading..."}</div>
        <div>{props.note ? props.note.name : "loading..."}</div>
        <div>{props.note ? props.note.lawyer : "loading..."}</div>
        <div>{props.note ? props.note.type : "loading..."}</div>
        <div>{props.note ? props.note.address : "loading..."}</div>
        {  (user.usertype==="1")?<button>Edit</button>:<div></div>  }
      </div>
    </>
  );
}
