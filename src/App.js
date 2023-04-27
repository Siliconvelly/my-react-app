import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  function saveUser() {
    console.log(name, email, mobile);
  }
  return (
    <div className="App">
      <h1>User form</h1>
      <input type="text" name="name" value={name} onChange={(e)=> {setName(e.target.value)}}/><br />
      <input type="text" name="email" value={email} onChange={(e)=> {setEmail(e.target.value)}} /><br />
      <input type="text" name="mobile" value={mobile} onChange={(e)=> {setMobile(e.target.value)}}/><br />
      <button type="button" onClick={saveUser}>Save User</button>
    </div>
  );
}

export default App;
