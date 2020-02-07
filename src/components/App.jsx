import React from "react";

var isLoggedIn = false;

function renderConditionally(){
 if(isLoggedIn === true){
  return <h1>Hello</h1>
 }else{
   return (
     <div>
      <h1>Hello, please login</h1>
        <form className="form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
    </div>
   );
 }
}


function App() {
  return (
    <div className="container">
      {renderConditionally()}
    </div>
  );
}

export default App;
