import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { signUp } from "../utilities";



const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useOutletContext();

  const handleSubmit = async(e) => {
    e.preventDefault();
    setUser(await signUp(email, password));
  };

  return (
    <>
      <h1>Welcome to Mama Bear</h1>
      <div>
        <h4>Please Sign Up</h4>
      </div>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <input 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email" 
          required
        />
        <input 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          type="password" 
          placeholder="enter password" 
          required
        />
        <input type="submit" value="sign up"/>
      </form>
    </>  
  );
};

export default SignUp;