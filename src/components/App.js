
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [username, setUsername] = useState("");

  return (
    <div id="main">
      <h2>Enter your name:</h2>
      <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/>
      <div>
      {username.length>0 ? `Hello ${username}!` : ""}
      </div>
    </div>
  )
}

export default App
