import React from "react";
import Input from "./Input";

function LogIn(){
    return (
        <div>
         <h1>Hello, please login</h1>
           <form className="form">
             <Input type="text" placeholder="Username"/>
             <Input type="password" placeholder="Password" />
             <button type="submit">Login</button>
           </form>
       </div>
    );
}



export default LogIn;