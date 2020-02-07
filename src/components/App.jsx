import React from "react";
import LogIn from "./LogIn";


var isLoggedIn = false;

function renderConditionally(){
 if(isLoggedIn === true){
  return <h1>Hello</h1>;
 }else{
   return <LogIn />;
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
