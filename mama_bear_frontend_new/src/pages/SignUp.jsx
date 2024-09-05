import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { signUp } from "../utilities";
import "../App.css";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const user = await signUp(email, password);
    if (user) {
      setUser(user);
      navigate('/');
    } else {
      alert('Sign-up failed! Please try again.');
    }
  };

  return (
    <>
    <section className="hero">
      <div className="content">
        <h1>Welcome to Mama Bear</h1>
        <p>Enhancing the bond between parents and caregivers with seamless communication and magical coordination</p>
        <p>Join us today!</p>
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
      </div>
    </section>
    </>  
  );
};

export default SignUp;
