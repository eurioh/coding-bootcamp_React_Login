import React from "react";
// import LogIn from "./LogIn";


var isLoggedIn = true;

const currentTime = new Date(2019, 11, 1, 9).getHours();

console.log(currentTime);


function App() {
  return (
    <div className="container">
      {/* {isLoggedIn ? <h1>Hello </h1> : <LogIn />}; */}
      
      {/* Ternary Operator practice */}
      {/* {currentTime > 12 ? <h1> Why are you still working? </h1> : null} */}
      
      {/* Much shorter ways for Ternary Operator expression - AND Operator*/}
      {currentTime > 12 && <h1> Why are you still working? </h1>}
      {/* in &&, if left hand is false, the result is anyway false. So the next expression never render */}
    </div>);
  
}

export default App;
