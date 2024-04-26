import React, { useEffect, useState } from 'react'

const App = () => {

  const [backend , setbackend] = useState([])

  const getData = () => {
    fetch('/api/user')
    .then(res => res.json())
    .then(json => setbackend(json))
  }
  useEffect(() => {
    getData();
  },[])


  return (
    <div>
      {backend.map((user , i) => (
        <div key={i}  style={{width : "50%", margin :'auto',marginBottom:'40px', fontSize:'10px', border:'3px solid green', borderRadius:'30px',textAlign:'center', backgroundColor:'lightblue'}}>
          <h1 > user Name ::</h1>
          <h1 > user Name : {user.name}</h1>
          <h1 >user Email : {user.email}</h1>
          <h1 >user phone : {user.phone}</h1>
          <h1 >user username : {user.username}</h1>
          
        <div>
          <h1 >Address ::</h1>
          <h1 >Address street : {user.address.street}</h1>
          <h1 >Address suite : {user.address.suite}</h1>
          <h1 >Address city : {user.address.city}</h1>
          <h1 >Address zipcode : {user.address.zipcode}</h1>
    </div>
          
        </div>
      ))}
    </div>
  )
}

export default App
