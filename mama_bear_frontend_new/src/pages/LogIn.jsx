import { useState } from "react";
import { signIn } from "../utilities";
import { useOutletContext, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signIn(email, password);
    if (user) {
      setUser(user);
      navigate('/');
    } else {
      alert("Login failed. Please check your credentials");
    }

  };

  return (
    <div id="HomePage">
      <h1>Welcome Back!</h1>
      <div>
        <h4>Enter your log in credentials</h4>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
          required />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="enter password"
          required />
        <input type="submit" value="log in" className="custom-button"  />
      </form>
    </div>
  );
}

export default LoginPage;
