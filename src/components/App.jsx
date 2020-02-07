import React from "react";
import LogIn from "./LogIn";


var isLoggedIn = true;

//following statement is too long turn this into expression and put it into App()
// function renderConditionally(){
//  if(isLoggedIn === true){
//   return <h1>Hello</h1>;
//  }else{
//    return <LogIn />;
//  }
// }


function App() {
  return (
    <div className="container">
      {/* {renderConditionally()} */} 

      {/* Ternary Operator - turn if statment into an expression */}
      {isLoggedIn ? <h1>Hello </h1> : <LogIn />};

    </div>
  );
}

export default App;
